// tippy_preview.js - Load content previews for reference links

document.addEventListener('DOMContentLoaded', function() {
  // Initialize as soon as the page is interactive
  // Make sure this runs after sphinx_tippy initializes
  setTimeout(function() {
    initCustomTippyPreviews();
  }, 1000);
});

/**
 * Initialize custom tippy tooltips for our reference styles
 */
function initCustomTippyPreviews() {
  if (typeof tippy === 'undefined') {
    console.error('Tippy.js not loaded');
    return;
  }

  // Find all of our custom reference elements
  const referenceLinks = document.querySelectorAll(
    '.page-reference, .section-reference, .subsection-reference, ' +
    '.tab-reference, .table-reference, .column-reference, ' +
    '.item-reference, .action-reference, .code-reference, ' +
    '.item-blue-reference, a.reference.internal'
  );
  
  if (referenceLinks.length === 0) {
    console.log('No custom reference links found');
    return;
  }
  
  console.log(`Found ${referenceLinks.length} custom reference links`);
  
  // Initialize tippy on all custom reference links
  tippy(referenceLinks, {
    content: 'Loading preview...',
    allowHTML: true,
    interactive: true,
    maxWidth: 800, // Increase max width for larger previews
    theme: 'light-border',
    placement: 'top',
    delay: [100, 0],
    appendTo: document.body,
    maxHeight: 600, // Allow larger height for content
    onShow(instance) {
      // Load content when tooltip is shown (lazy loading)
      const reference = instance.reference;
      const href = reference.getAttribute('href');
      
      if (!href) return;
      
      if (href.startsWith('#')) {
        // Same-page reference
        loadSamePageContent(href.substring(1), instance);
      } else {
        // Cross-document reference
        loadCrossDocumentContent(href, instance);
      }
    }
  });
  
  console.log('Custom tooltips initialized');
}

/**
 * Load content from the same page for tooltip
 */
function loadSamePageContent(targetId, tippyInstance) {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) {
    // Try name attribute as fallback
    const namedElements = document.getElementsByName(targetId);
    if (namedElements.length > 0) {
      tippyInstance.setContent(buildFullPreviewContent(namedElements[0]));
    } else {
      tippyInstance.setContent('Content preview not available');
    }
    return;
  }
  
  // Build rich preview content
  tippyInstance.setContent(buildFullPreviewContent(targetElement));
}

/**
 * Load content from another document for tooltip
 */
function loadCrossDocumentContent(href, tippyInstance) {
  // Get the target URL for the HTML file
  let targetUrl = href;
  
  // Handle different URL formats
  if (targetUrl.endsWith('.html')) {
    // Already HTML
  } else if (targetUrl.includes('#')) {
    // Section reference
    targetUrl = targetUrl.split('#')[0] + '.html';
  } else {
    // Add .html extension
    targetUrl = targetUrl + '.html';
  }
  
  // Clean up relative paths
  targetUrl = targetUrl.replace(/\.\.\//g, '');
  
  // Try to fetch content
  fetch(targetUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      // Parse HTML and extract content
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Find main content area
      const mainContent = doc.querySelector('div.body') || 
                          doc.querySelector('main') || 
                          doc.querySelector('div.document') || 
                          doc.body;
      
      if (!mainContent) {
        tippyInstance.setContent('Content preview not available');
        return;
      }
      
      // Get title
      const title = doc.querySelector('h1') || doc.querySelector('title');
      const titleText = title ? title.textContent : 'Preview';
      
      // Build full rich preview with all content
      let previewContent = `<div class="tippy-preview">
        <div class="tippy-preview-heading">${titleText}</div>
        <div class="tippy-preview-full-content">`;
      
      // Add all content from the main content area
      // First get a clone to avoid changing the DOM
      const contentClone = mainContent.cloneNode(true);
      
      // Remove any navigation elements
      const navElements = contentClone.querySelectorAll('.sidebar-toc, .navbar, .navigation, .nav, .breadcrumb, footer');
      navElements.forEach(nav => nav.remove());
      
      // Get content elements (sections, paragraphs, images, tables)
      const contentElements = contentClone.querySelectorAll('section, .section, p, img, table');
      
      if (contentElements.length > 0) {
        // Wrap all content and images
        previewContent += `<div class="tippy-content-wrapper">`;
        
        // Add all the content sections
        contentElements.forEach(element => {
          // Skip empty elements and navigation elements
          if (element.innerHTML.trim() === '' || 
              element.classList.contains('toc') || 
              element.classList.contains('navigation') ||
              element.classList.contains('sidebar')) {
            return;
          }
          
          // For images, make sure we have proper paths
          if (element.tagName.toLowerCase() === 'img') {
            const imgSrc = element.getAttribute('src');
            // Fix relative paths
            if (imgSrc && !imgSrc.startsWith('http')) {
              try {
                // Attempt to convert to absolute path
                const absoluteSrc = new URL(imgSrc, window.location.origin + '/' + targetUrl).href;
                element.setAttribute('src', absoluteSrc);
              } catch (e) {
                console.error('Error fixing image path:', e);
              }
            }
          }
          
          // Add the element content
          previewContent += element.outerHTML;
        });
        
        previewContent += `</div>`;
      } else {
        // Fallback if no content elements found
        previewContent += `<p>No detailed content available for preview.</p>`;
      }
      
      previewContent += `</div></div>`;
      
      tippyInstance.setContent(previewContent);
    })
    .catch(error => {
      console.error('Error loading preview:', error);
      tippyInstance.setContent(`Error loading preview: ${error.message}`);
    });
}

/**
 * Build a full preview of content for the tooltip
 */
function buildFullPreviewContent(element) {
  // Start building preview
  let previewContent = '<div class="tippy-preview">';
  
  // Add heading if available
  const heading = element.querySelector('h1, h2, h3, h4, h5, h6');
  if (heading) {
    previewContent += `<div class="tippy-preview-heading">${heading.textContent}</div>`;
  }
  
  // Wrap the entire content
  previewContent += '<div class="tippy-preview-full-content">';
  
  // Clone the element to avoid modifying original DOM
  const contentClone = element.cloneNode(true);
  
  // Get all content paragraphs, images, and tables
  const contentElements = contentClone.querySelectorAll('p, img, table, ul, ol, pre, blockquote');
  
  if (contentElements.length > 0) {
    // Add all content elements
    contentElements.forEach(el => {
      previewContent += el.outerHTML;
    });
  } else {
    // If no specific content elements, just use the innerHTML
    previewContent += `<div>${contentClone.innerHTML}</div>`;
  }
  
  previewContent += '</div></div>';
  return previewContent;
}

/**
 * Check if an element is inside an admonition or similar container
 */
function isInsideAdmonition(element, rootElement) {
  let parent = element.parentElement;
  while (parent && parent !== rootElement) {
    if (parent.classList.contains('admonition') || 
        parent.classList.contains('sd-card') ||
        parent.classList.contains('sd-tab-content') ||
        parent.tagName.toLowerCase() === 'details') {
      return true;
    }
    parent = parent.parentElement;
  }
  return false;
}
