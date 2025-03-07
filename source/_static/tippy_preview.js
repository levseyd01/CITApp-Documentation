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
      </div>
    </div>
  `);
  
  // Resolve the target path by joining with the current path
  let targetPath = '';
  
  if (href.startsWith('http://') || href.startsWith('https://')) {
    // Full URL - use as is
    targetPath = href;
  } else if (href.startsWith('/')) {
    // Absolute path - join with origin
    targetPath = window.location.origin + href;
  } else {
    // Relative path - resolve against current page
    // Get the current path minus filename
    const currentPath = window.location.pathname.split('/');
    currentPath.pop(); // Remove current file name
    
    // Build the target path
    targetPath = window.location.origin + 
                 currentPath.join('/') + '/' + 
                 href.split('#')[0]; // Remove any fragments
  }
  
  // Store the original targeted URL for later use with image path fixing
  const fetchedUrl = new URL(targetPath, window.location.href).href;
  
  // Initialize parser if not already done
  if (!window.customDOMParser) {
    window.customDOMParser = new DOMParser();
  }
  const parser = window.customDOMParser;
  
  // Fetch the content
  fetch(targetPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch content: ${response.status} ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => {
      // Parse the HTML
      const doc = parser.parseFromString(html, 'text/html');
      
      // Find the main content and title
      const mainContent = doc.querySelector('.document') || 
                          doc.querySelector('article') || 
                          doc.querySelector('main') || 
                          doc.querySelector('.content') ||
                          doc.querySelector('.rst-content') ||
                          doc.querySelector('.body') ||
                          doc.body;
      
      const title = doc.querySelector('h1') || 
                    doc.querySelector('title');
                    
      const titleText = title ? title.textContent.trim() : 'Content Preview';
      
      // Build preview with content sections
      let preview = buildCrossDocPreview(mainContent, titleText);
      
      // Fix image paths using the fetchedUrl
      preview = fixImagePaths(preview, fetchedUrl);
      
      instance.setContent(preview);
    })
    .catch(error => {
      console.error('Error fetching content:', error);
      instance.setContent(`
        <div class="tippy-preview">
          <div class="tippy-preview-heading">Preview Unavailable</div>
          <div class="tippy-preview-content">
            <p>Could not load content preview.</p>
          </div>
        </div>
      `);
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
 * Fix image paths to be compatible with RTD and local builds
 * @param {string} htmlContent - The HTML content to process
 * @param {string} fetchedUrl - The URL of the document the content was fetched from
 * @returns {string} HTML content with fixed image paths
 */
function fixImagePaths(htmlContent, fetchedUrl) {
  // Create a temporary div to manipulate the DOM
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  
  // Find all image elements
  const images = tempDiv.querySelectorAll('img');
  
  // Check if we're on Read the Docs
  const isReadTheDocs = window.location.hostname.includes('readthedocs') || 
                        document.querySelector('meta[name="generator"][content*="Read the Docs"]') !== null;
  
  // Get base URL parts for RTD
  let rtdBasePath = '';
  if (isReadTheDocs) {
    // Format: https://project-name.readthedocs-hosted.com/en/latest/
    const pathParts = window.location.pathname.split('/');
    // Get parts up to "en/latest" or "en/stable"
    const versionIndex = pathParts.findIndex(part => part === 'en' || part === 'latest' || part === 'stable');
    if (versionIndex > 0) {
      rtdBasePath = pathParts.slice(0, versionIndex + 2).join('/');
    }
  }
  
  // Process each image source
  images.forEach(img => {
    const src = img.getAttribute('src');
    if (!src) return;
    
    // Skip data URIs
    if (src.startsWith('data:')) {
      return;
    }
    
    // For Read the Docs hosted sites
    if (isReadTheDocs) {
      // If it's already an absolute URL with the correct domain, leave it
      if (src.startsWith('http') && src.includes(window.location.hostname)) {
        return;
      }
      
      // If it's an absolute path starting with /
      if (src.startsWith('/')) {
        // Use the RTD base with the absolute path
        img.setAttribute('src', window.location.origin + src);
        return;
      }
      
      // If it's a relative path to _static or _images
      if (src.includes('_static/') || src.includes('_images/')) {
        // Extract the path part after _static/ or _images/
        let resourcePath = '';
        if (src.includes('_static/')) {
          resourcePath = '_static/' + src.split('_static/')[1];
        } else if (src.includes('_images/')) {
          resourcePath = '_images/' + src.split('_images/')[1];
        }
        
        // Construct a proper RTD path
        if (rtdBasePath) {
          img.setAttribute('src', window.location.origin + rtdBasePath + '/' + resourcePath);
        } else {
          // Fallback to just appending to origin
          img.setAttribute('src', window.location.origin + '/' + resourcePath);
        }
        return;
      }
      
      // For other relative paths, try to use the fetched document's path as base
      try {
        // Get the directory of the fetched document
        const fetchedUrlObj = new URL(fetchedUrl);
        const fetchedDir = fetchedUrlObj.pathname.split('/').slice(0, -1).join('/');
        
        // Handle path with or without leading ../
        let relativePath = src;
        if (src.startsWith('../')) {
          // Go up one level from the fetched directory
          const dirParts = fetchedDir.split('/');
          dirParts.pop();
          const parentDir = dirParts.join('/');
          relativePath = src.replace(/^\.\.\//, '');
          img.setAttribute('src', window.location.origin + parentDir + '/' + relativePath);
        } else {
          // Use the fetched directory as is
          img.setAttribute('src', window.location.origin + fetchedDir + '/' + relativePath);
        }
      } catch (e) {
        console.warn('Failed to rebase image URL for RTD:', src, e);
        // Last resort - try to make an absolute URL from the RTD base
        if (rtdBasePath) {
          img.setAttribute('src', window.location.origin + rtdBasePath + '/' + src);
        }
      }
    } 
    // For local development or other environments
    else {
      // If it's already absolute, leave it alone
      if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/')) {
        return;
      }
      
      try {
        // Rebase the relative path against the fetched document's URL
        const absoluteUrl = new URL(src, fetchedUrl).href;
        img.setAttribute('src', absoluteUrl);
      } catch (e) {
        console.warn('Failed to rebase image URL:', src, e);
      }
    }
  });
  
  return tempDiv.innerHTML;
}

/**
 * Remove existing tippy instances from elements
 * This prevents duplicate tooltips when re-initializing
 */
function removeExistingTippyInstances() {
  // Try to find any elements with _tippy property and destroy those instances
  document.querySelectorAll('[data-tippy-content]').forEach(el => {
    if (el._tippy) {
      el._tippy.destroy();
    }
  });
}

/**
 * Fix duplicate tooltips by identifying and removing them
 */
function fixDuplicateTooltips() {
  // Look for elements with multiple tippy instances
  document.querySelectorAll('a.reference, .page-reference, .section-reference, .subsection-reference, .tab-reference, .table-reference, .column-reference, .item-reference, .action-reference, .code-reference, .item-blue-reference').forEach(el => {
    // If multiple tooltips are attached, keep only one
    if (el._tippy && document.querySelectorAll(`[data-tippy-root][data-reference-for="${el.id}"]`).length > 1) {
      // Destroy all but keep the most recent one
      el._tippy.destroy();
      
      // Mark as needing reinit
      el.classList.remove('custom-tippy-initialized');
      el.classList.remove('enhance-references-initialized');
    }
  });
}

/**
 * Build preview content for an element
 * @param {Element} targetElement - The element to preview
 * @returns {string} HTML content for the preview
 */
function buildPreviewContent(targetElement) {
  // Clone the target to avoid modifying the original
  const clone = targetElement.cloneNode(true);
  
  // Process internal links to prevent nested tooltips
  clone.querySelectorAll('a.reference, .page-reference, .section-reference, .subsection-reference, .tab-reference, .table-reference, .column-reference, .item-reference, .action-reference, .code-reference, .item-blue-reference').forEach(ref => {
    ref.classList.add('no-preview');
    ref.classList.remove('reference', 'internal');
  });
  
  // Create a container for the preview
  let preview = `<div class="tippy-preview">`;
  
  // Add a title if there is one
  const heading = clone.querySelector('h1, h2, h3, h4, h5, h6');
  if (heading) {
    preview += `<div class="tippy-preview-heading">${heading.textContent.trim()}</div>`;
  }
  
  // Add the content
  preview += `<div class="tippy-preview-content">${clone.innerHTML}</div>`;
  
  // Close the container
  preview += `</div>`;
  
  return preview;
}
