// tippy_preview.js - Load content previews for reference links
// Compatible with Read the Docs and private repositories
// Coordinated with enhance_references.js to prevent duplicate tooltips

document.addEventListener('DOMContentLoaded', function() {
  // Check if enhance_references.js is already loaded and initialized
  // If not yet defined, set up a listener to coordinate initialization
  if (typeof window.ENHANCE_REFERENCES_INITIALIZED === 'undefined') {
    window.ENHANCE_REFERENCES_INITIALIZED = false;
  }

  // Check if sphinx_tippy is also loaded
  // We need to ensure we don't create duplicate tooltips
  if (typeof window.SPHINX_TIPPY_CONFIG !== 'undefined') {
    // Override the sphinx_tippy configuration to prevent it from handling our reference links
    // Save the original config first
    const originalSphinxTippyConfig = window.SPHINX_TIPPY_CONFIG;
    
    // Replace it with a modified version that ignores our custom reference links
    window.SPHINX_TIPPY_CONFIG = function(callback) {
      // Get tippy instance from the original config
      originalSphinxTippyConfig(function(tippy) {
        // Only allow the built-in tippy to handle elements with specific tippy-role
        // and exclude our custom references
        const existingSelector = tippy.selector || '';
        tippy.selector = existingSelector.replace('a.reference', 'a.reference.tippy-role');
        
        // Call the original callback with our modified config
        callback(tippy);
      });
    };
  }
  
  // Initialize after a short delay to ensure DOM is fully ready
  // and after sphinx_tippy has been initialized
  setTimeout(function() {
    initCustomTippyPreviews();
    
    // Also ensure we're not duplicating tooltips
    fixDuplicateTooltips();
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
  
  // Remove any existing tippy instances to prevent duplicates
  removeExistingTippyInstances();

  // Find all reference elements to add tooltips to
  // Purposely exclude elements that already have tippy-role class
  // Also exclude elements already handled by enhance_references.js
  // CRITICAL: Don't process elements inside tooltips (.tippy-box, .tippy-content)
  const referenceLinks = document.querySelectorAll(
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.page-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview), ' + 
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.section-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview), ' + 
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.subsection-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview), ' +
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.tab-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview), ' + 
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.table-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview), ' + 
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.column-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview), ' +
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.item-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview), ' + 
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.action-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview), ' + 
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.code-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview), ' +
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.item-blue-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview), ' + 
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    'a.reference.internal:not(.tippy-role):not(.enhance-references-initialized):not(.tippyAnchor):not(.no-preview)'
  );
  
  if (referenceLinks.length === 0) {
    console.log('No reference links found that need custom tooltips');
    return;
  }
  
  console.log(`tippy_preview.js found ${referenceLinks.length} reference links for tooltips`);
  
  // Mark elements to prevent duplicate initialization
  referenceLinks.forEach(el => {
    el.classList.add('custom-tippy-initialized');
  });
  
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
      
      // Skip if this has already been handled by enhance_references.js
      if (reference.classList.contains('enhance-references-initialized')) {
        return false;
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
    },
    onMount(instance) {
      // Add special class to identify our tooltips
      instance.popper.classList.add('tippy-preview-tooltip');
      
      // Disable any reference links inside the tooltip to prevent nested tooltips
      const tippyContent = instance.popper.querySelector('.tippy-content');
      if (tippyContent) {
        // Find all reference links inside the tooltip and mark them as no-preview
        const innerRefs = tippyContent.querySelectorAll('a.reference, .page-reference, .section-reference, .subsection-reference, .tab-reference, .table-reference, .column-reference, .item-reference, .action-reference, .code-reference, .item-blue-reference');
        
        innerRefs.forEach(ref => {
          ref.classList.add('no-preview');
          ref.classList.remove('reference', 'internal');
        });
      }
    }
  });
  
  console.log('Custom tooltips initialized by tippy_preview.js');
}

/**
 * Remove any existing tippy instances to prevent duplicates
 */
function removeExistingTippyInstances() {
  // Get all elements with existing tippy instances
  const existingElements = document.querySelectorAll('[data-tippy-root]');
  existingElements.forEach(el => {
    // Only remove our custom tooltips, not the ones from sphinx_tippy
    if (el._tippy && !el.classList.contains('tippy-role')) {
      el._tippy.destroy();
    }
  });
}

/**
 * Fix duplicate tooltips by removing extra instances
 */
function fixDuplicateTooltips() {
  // Find elements that might have duplicate tooltips
  document.querySelectorAll('.custom-tippy-initialized').forEach(el => {
    // Find all tooltip instances for this element
    const tippyInstances = document.querySelectorAll(`[data-tippy-root][aria-describedby^="tippy-"]`);
    
    // If there are duplicates, remove extras
    if (tippyInstances.length > 1) {
      // Keep only the first instance
      for (let i = 1; i < tippyInstances.length; i++) {
        if (tippyInstances[i]._tippy) {
          tippyInstances[i]._tippy.destroy();
        } else {
          tippyInstances[i].remove();
        }
      }
    }
  });
}

/**
 * Handle same-page reference tooltips
 * @param {string} targetId - The ID of the target element
 * @param {Object} instance - The tippy instance
 */
function handleSamePageReference(targetId, instance) {
  // Find the target element
  const targetElement = document.getElementById(targetId);
  if (!targetElement) {
    instance.setContent('<div class="tippy-error-message">Content not found</div>');
    return;
  }
  
  // Generate preview content
  const previewContent = buildPreviewContent(targetElement);
  
  // Set the content
  instance.setContent(previewContent);
}

/**
 * Handle cross-document reference tooltips
 * Uses a more compatible approach for Read the Docs
 */
function handleCrossDocReference(href, instance) {
  // Create a special tooltip body with a loading message
  instance.setContent(`
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
      instance.setContent(buildCrossDocPreview(mainContent, titleText));
    })
    .catch(error => {
      console.error('Error fetching content:', error);
      instance.setContent(`
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
 * @param {Element} contentElement - The content element to preview
 * @param {string} title - The title of the content
 * @returns {string} HTML content for the preview
 */
function buildCrossDocPreview(contentElement, title) {
  // Create a deep clone to avoid modifying the original
  const contentClone = contentElement.cloneNode(true);
  
  // Process the cloned content to fix paths and clean it up
  let preview = '';
  
  // Add a heading if we have a title
  if (title) {
    preview += `<div class="tippy-preview-heading">${title}</div>`;
  }
  
  // Look for main content sections
  const mainSections = contentClone.querySelectorAll('section, div.section, .documentwrapper');
  
  // Find all reference links in the clone and mark them to be excluded
  // This prevents tooltips from being initialized on links in the preview
  contentClone.querySelectorAll('a.reference, .page-reference, .section-reference, .subsection-reference, .tab-reference, .table-reference, .column-reference, .item-reference, .action-reference, .code-reference, .item-blue-reference').forEach(ref => {
    ref.classList.add('no-preview');
    ref.classList.remove('reference', 'internal');
  });
  
  // Instead of appending all sections, use only the first relevant one
  if (mainSections.length > 0) {
    // Find only the top-level sections (not nested)
    const topLevelSections = Array.from(mainSections).filter(section => {
      // Check if this section is not nested inside another section
      const parent = section.parentElement;
      return !parent.matches('section, div.section, .documentwrapper');
    });
    
    if (topLevelSections.length > 0) {
      // Use only the first top-level section to avoid duplication
      const firstSection = topLevelSections[0];
      preview += `<div class="tippy-section">${firstSection.innerHTML}</div>`;
    } else {
      // Fallback to first section if no top-level sections found
      preview += `<div class="tippy-section">${mainSections[0].innerHTML}</div>`;
    }
  } else {
    // Fallback for documents without section divisions
    preview += `<div class="tippy-content-wrapper">${contentClone.innerHTML}</div>`;
  }
  
  // Fix image paths in the preview content
  preview = fixImagePaths(preview);
  
  // Add a wrapper class
  return `<div class="tippy-preview tippy-preview-full-content">${preview}</div>`;
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
