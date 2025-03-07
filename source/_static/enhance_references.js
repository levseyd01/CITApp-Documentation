// enhance_references.js - Add tooltip functionality to reference links
// Coordinated with tippy_preview.js to prevent duplicate tooltips

document.addEventListener('DOMContentLoaded', function() {
  // Check if we should run this script or defer to tippy_preview.js
  // We'll use a global flag that tippy_preview.js can check
  window.ENHANCE_REFERENCES_INITIALIZED = false;
  
  // Process only links that are specifically tippyAnchor but NOT already handled by tippy_preview.js
  // This helps avoid duplicate tooltips
  const refLinks = document.querySelectorAll('a.tippyAnchor:not(.custom-tippy-initialized):not(.page-reference):not(.section-reference):not(.subsection-reference):not(.tab-reference):not(.table-reference):not(.column-reference):not(.item-reference):not(.action-reference):not(.code-reference):not(.tippy-initialized), .standard-link.tippyAnchor:not(.custom-tippy-initialized):not(.tippy-initialized)');
  
  if (refLinks.length === 0) {
    console.log(`No links found for enhance_references.js to process`);
    return;
  }
  
  console.log(`enhance_references.js found ${refLinks.length} links to process`);
  
  // Check if these elements already have tippy instances and destroy them
  refLinks.forEach(link => {
    if (link._tippy) {
      link._tippy.destroy();
    }
  });
  
  // Mark these elements so tippy_preview.js knows to skip them
  refLinks.forEach(link => {
    // Mark as processed by this script
    link.classList.add('enhance-references-initialized');
    
    // Get the target ID from the link href
    const href = link.getAttribute('href');
    if (!href) return;
    
    // For internal page links that start with #
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      
      // Look for content to display in the tooltip
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Get preview content - try to get the content of the section
        let previewContent = '';
        
        // First try to get heading
        const heading = targetElement.querySelector('h1, h2, h3, h4, h5, h6');
        if (heading) {
          previewContent += `<h4>${sanitizeContent(heading.textContent)}</h4>`;
        }
        
        // Try to get paragraph content
        const paragraphs = targetElement.querySelectorAll('p');
        if (paragraphs.length > 0) {
          // Get first paragraph text
          previewContent += `<p>${sanitizeContent(paragraphs[0].textContent)}</p>`;
          
          // If there's more than one paragraph, add a note
          if (paragraphs.length > 1) {
            previewContent += `<small><em>(Click to view more...)</em></small>`;
          }
        }
        
        // If there's an image, include that too
        const image = targetElement.querySelector('img');
        if (image) {
          const imgSrc = image.getAttribute('src');
          // Only include the image if it has a valid src attribute
          if (imgSrc && !isBinaryContent(imgSrc)) {
            previewContent += `<div style="text-align:center;margin-top:8px;"><img src="${imgSrc}" alt="Preview" style="max-width: 250px; margin:auto;"></div>`;
          }
        }
        
        // If no content found, use a default message
        if (!previewContent) {
          previewContent = `<p>Content preview</p><small>Click to navigate to: ${targetId}</small>`;
        }
        
        // Set the preview content as tippy content
        link.setAttribute('data-tippy-content', previewContent);
      }
    }
    // For cross-document links
    else {
      // Set a default message for external links
      const linkText = link.textContent || 'this section';
      link.setAttribute('data-tippy-content', `<p>Link to ${sanitizeContent(linkText)}</p><small>Click to navigate</small>`);
    }
  });
  
  // Initialize or reinitialize tippy for all tooltip links
  if (typeof tippy !== 'undefined') {
    // Check if tippy_preview has already run
    const alreadyInitialized = document.querySelector('.custom-tippy-initialized');
    
    if (alreadyInitialized) {
      console.log('tippy_preview.js already initialized some tooltips, using selective initialization');
      // Only initialize tooltips on elements not already processed by tippy_preview.js
      tippy('a.tippyAnchor.enhance-references-initialized:not(.custom-tippy-initialized):not(.tippy-initialized), .standard-link.tippyAnchor.enhance-references-initialized:not(.custom-tippy-initialized):not(.tippy-initialized)', {
        allowHTML: true,
        interactive: true,
        maxWidth: 350,
        theme: 'light',  // Use a different theme to avoid conflicts
        placement: 'top',
        delay: [200, 0], // 200ms delay before showing, 0ms delay before hiding
        // Add a data attribute we can use for CSS targeting
        onMount(instance) {
          const tooltip = instance.popper;
          tooltip.classList.add('enhance-references-tooltip');
        }
      });
    } else {
      console.log('First tooltip initialization from enhance_references.js');
      // Initialize as normal if tippy_preview.js hasn't run yet
      tippy('a.tippyAnchor.enhance-references-initialized:not(.custom-tippy-initialized):not(.tippy-initialized), .standard-link.tippyAnchor.enhance-references-initialized:not(.custom-tippy-initialized):not(.tippy-initialized)', {
        allowHTML: true,
        interactive: true,
        maxWidth: 350,
        theme: 'light',  // Use a different theme to avoid conflicts
        placement: 'top',
        delay: [200, 0], // 200ms delay before showing, 0ms delay before hiding
        // Add a data attribute we can use for CSS targeting
        onMount(instance) {
          const tooltip = instance.popper;
          tooltip.classList.add('enhance-references-tooltip');
        }
      });
    }
    
    // Set flag to let tippy_preview.js know we've run
    window.ENHANCE_REFERENCES_INITIALIZED = true;
  }
});

/**
 * Helper function to check if content appears to be binary data
 * This helps prevent binary image data from showing up as text in tooltips
 * @param {string} content - The content to check
 * @returns {boolean} - True if the content appears to be binary data
 */
function isBinaryContent(content) {
  if (!content) return false;
  
  // Check for common binary data patterns in PNG/JPG files
  const binaryPatterns = [
    '�PNG', 'PNG', 'IHDR', 'IDAT', 'IEND', // PNG header/chunks
    'JFIF', '�JFIF', '�Exif', // JPEG markers
    'sRGB', 'gAMA', // Color profiles
    'pHYs', 'tEXt', // PNG metadata
    '���', // Common in binary data
    String.fromCharCode(0x89) + 'PNG' // PNG file signature
  ];
  
  // Check if the content contains any of these binary patterns
  return binaryPatterns.some(pattern => content.includes(pattern));
}

/**
 * Sanitize content to remove binary data or invalid characters
 * @param {string} content - The content to sanitize
 * @returns {string} - Sanitized content
 */
function sanitizeContent(content) {
  if (!content) return '';
  
  // If content looks like binary data, return a placeholder
  if (isBinaryContent(content)) {
    return '[Image content]';
  }
  
  // Replace any sequences of non-printable/weird characters with a space
  return content.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F\uFFFD\u{10FFFF}]{4,}/gu, ' ');
}
