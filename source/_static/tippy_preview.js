// tippy_preview.js - Load content previews for reference links
// Compatible with Read the Docs and private repositories

document.addEventListener('DOMContentLoaded', function() {
  // Initialize after a short delay to ensure DOM is fully ready
  setTimeout(function() {
    initCustomTippyPreviews();
  }, 1000);
});

/**
 * Initialize custom tippy tooltips for reference links
 */
function initCustomTippyPreviews() {
  // Check if tippy.js is available (dependency check)
  if (typeof tippy === 'undefined') {
    console.error('Tippy.js not loaded - must be included in conf.py');
    return;
  }

  // Find all of our custom reference elements and internal reference links
  const referenceLinks = document.querySelectorAll(
    '.page-reference, .section-reference, .subsection-reference, ' +
    '.tab-reference, .table-reference, .column-reference, ' +
    '.item-reference, .action-reference, .code-reference, ' +
    '.item-blue-reference, a.reference.internal'
  );
  
  if (referenceLinks.length === 0) {
    console.log('No reference links found');
    return;
  }
  
  console.log(`Found ${referenceLinks.length} reference links for tooltips`);
  
  // Initialize tippy on all reference links
  tippy(referenceLinks, {
    content: 'Loading preview...',
    allowHTML: true,
    interactive: true,
    maxWidth: 800,
    theme: 'light-border',
    placement: 'auto',
    delay: [200, 0], // Slight delay to prevent accidental triggers
    appendTo: document.body,
    maxHeight: 600,
    trigger: 'mouseenter focus', // Support keyboard navigation
    onShow(instance) {
      // Get the reference element
      const reference = instance.reference;
      
      // Skip if this is an external link or has specific no-preview class
      if (reference.classList.contains('external') || 
          reference.classList.contains('no-preview')) {
        return false; // Prevents tooltip from showing
      }
      
      // Get the target href
      const href = reference.getAttribute('href');
      if (!href) return false;
      
      // Process the link based on its type
      if (href.startsWith('#')) {
        // Same-page reference
        handleSamePageReference(href.substring(1), instance);
      } else {
        // Cross-document reference
        handleCrossDocReference(href, instance);
      }
    }
  });
  
  console.log('Custom tooltips initialized');
}

/**
 * Handle same-page reference tooltips
 */
function handleSamePageReference(targetId, tippyInstance) {
  // Try finding the element by ID first
  let targetElement = document.getElementById(targetId);
  
  // If not found by ID, try by name attribute as fallback
  if (!targetElement) {
    const namedElements = document.getElementsByName(targetId);
    if (namedElements.length > 0) {
      targetElement = namedElements[0];
    }
  }
  
  // If still not found, try searching for section with matching title
  if (!targetElement) {
    // Search for section headings with matching text
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
      if (heading.id === targetId || 
          heading.textContent.trim().toLowerCase() === targetId.toLowerCase()) {
        targetElement = heading.closest('section') || heading.closest('div.section');
      }
    });
  }
  
  // Set content based on what we found
  if (targetElement) {
    tippyInstance.setContent(buildPreviewContent(targetElement));
  } else {
    tippyInstance.setContent('Content preview not available');
  }
}

/**
 * Handle cross-document reference tooltips
 * Uses a more compatible approach for Read the Docs
 */
function handleCrossDocReference(href, tippyInstance) {
  // Create a special tooltip body with a loading message
  tippyInstance.setContent(`
    <div class="tippy-preview">
      <div class="tippy-preview-heading">Loading content...</div>
      <div class="tippy-preview-content">
        <div class="loading-spinner"></div>
        <p>Content preview is loading...</p>
      </div>
    </div>
  `);
  
  // Get the target path
  let targetPath = href;
  
  // Clean up the href to work with both RTD and local builds
  // Remove any URL parameters and fragments
  targetPath = targetPath.split('#')[0].split('?')[0];
  
  // Handle different URL formats, ensuring compatibility with Read the Docs
  if (!targetPath.endsWith('.html')) {
    targetPath = targetPath + '.html';
  }
  
  // Use the relative href directly - works with both local and RTD
  fetch(targetPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load content (${response.status})`);
      }
      return response.text();
    })
    .then(html => {
      // Create a temporary DOM to parse the fetched HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Find main content section - RTD and Sphinx have different content structures
      const mainContent = 
        doc.querySelector('[role="main"]') || // RTD main element
        doc.querySelector('div.body') ||      // Sphinx body 
        doc.querySelector('div.document') ||  // Alternative Sphinx container
        doc.querySelector('main');            // HTML5 main element
        
      if (!mainContent) {
        throw new Error('Could not find content in the target document');
      }
      
      // Extract title from the document
      const title = doc.querySelector('h1') || doc.querySelector('title');
      const titleText = title ? title.textContent.trim() : 'Content Preview';
      
      // Build preview with content sections
      tippyInstance.setContent(buildCrossDocPreview(mainContent, titleText));
    })
    .catch(error => {
      console.error('Error fetching content:', error);
      tippyInstance.setContent(`
        <div class="tippy-preview">
          <div class="tippy-preview-heading">Preview Unavailable</div>
          <div class="tippy-preview-content">
            <p>Could not load content preview.</p>
            <p class="tippy-error-message">${error.message}</p>
          </div>
        </div>
      `);
    });
}

/**
 * Build preview content for cross-document references
 * Makes the content RTD-compatible
 */
function buildCrossDocPreview(contentElement, title) {
  // Create preview container
  let preview = `
    <div class="tippy-preview">
      <div class="tippy-preview-heading">${title}</div>
      <div class="tippy-preview-full-content">
  `;
  
  // Clone the content to avoid modifying the original
  const contentClone = contentElement.cloneNode(true);
  
  // Remove navigation, sidebar, search, breadcrumbs, etc.
  const elementsToRemove = contentClone.querySelectorAll(
    '.navigation, .sidebar, .search, .breadcrumbs, ' +
    '.ethical-rtd, .injected, .rst-versions, ' +
    'nav, .footer, .rst-footer-buttons, ' + 
    '.headerlink, .document-info'
  );
  elementsToRemove.forEach(el => el.remove());
  
  // Get all main content sections
  const mainSections = contentClone.querySelectorAll('section, div.section, .documentwrapper');
  
  if (mainSections.length > 0) {
    // Process each main section
    mainSections.forEach(section => {
      // Skip empty sections and navigation sections
      if (section.innerHTML.trim() === '' || 
          section.classList.contains('toc') ||
          section.id === 'search-results') {
        return;
      }
      
      // Add the section content
      preview += `<div class="tippy-section">${section.innerHTML}</div>`;
    });
  } else {
    // Fallback to direct content if no sections found
    preview += `<div class="tippy-content-wrapper">${contentClone.innerHTML}</div>`;
  }
  
  // Fix image paths to be compatible with RTD and local builds
  preview = fixImagePaths(preview);
  
  // Close containers
  preview += `
      </div>
    </div>
  `;
  
  return preview;
}

/**
 * Build preview content for same-page references
 */
function buildPreviewContent(element) {
  // Start with preview container
  let preview = `
    <div class="tippy-preview">
  `;
  
  // Add heading if present
  const heading = element.querySelector('h1, h2, h3, h4, h5, h6');
  if (heading) {
    preview += `<div class="tippy-preview-heading">${heading.textContent.trim()}</div>`;
  } else if (element.tagName.match(/^H[1-6]$/i)) {
    // Element itself is a heading
    preview += `<div class="tippy-preview-heading">${element.textContent.trim()}</div>`;
  }
  
  // Add full content container
  preview += `<div class="tippy-preview-full-content">`;
  
  // Get a clone of element to avoid modifying DOM
  const contentClone = element.cloneNode(true);
  
  // Remove navigation links, edit buttons, etc.
  const elementsToRemove = contentClone.querySelectorAll(
    '.headerlink, .toctree-wrapper, .edit-this-page, ' +
    '.ethical-rtd, .injected, .rst-versions'
  );
  elementsToRemove.forEach(el => el.remove());
  
  // Make sure section and subsection titles are included
  preview += contentClone.innerHTML;
  
  // Fix image paths to be compatible with RTD
  preview = fixImagePaths(preview);
  
  // Close containers
  preview += `</div></div>`;
  
  return preview;
}

/**
 * Fix image paths to be compatible with Read the Docs and local builds
 */
function fixImagePaths(htmlContent) {
  // Create a temporary div to manipulate the HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  
  // Find all images
  const images = tempDiv.querySelectorAll('img');
  
  // Process each image
  images.forEach(img => {
    const src = img.getAttribute('src');
    if (!src) return;
    
    // Leave absolute URLs and data URLs alone
    if (src.match(/^(https?:\/\/|data:)/) || src.startsWith('/')) {
      return;
    }
    
    // For relative paths, determine the correct path based on document location
    // This works for both Read the Docs and local builds
    let basePath = window.location.pathname.split('/');
    basePath.pop(); // Remove the current document name
    
    // Join the base path with the relative image path
    let correctedPath = [...basePath, src].join('/');
    
    // Clean up path - remove any double slashes
    correctedPath = correctedPath.replace(/\/+/g, '/');
    
    // Set the corrected path
    img.setAttribute('src', correctedPath);
  });
  
  return tempDiv.innerHTML;
}
