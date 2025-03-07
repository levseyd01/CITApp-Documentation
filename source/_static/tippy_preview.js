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
  
  // Set up a flag to track if we've already initialized tooltips
  window.TIPPY_PREVIEW_INITIALIZED = window.TIPPY_PREVIEW_INITIALIZED || false;
  
  // If we've already run, don't run again
  if (window.TIPPY_PREVIEW_INITIALIZED) {
    console.log('tippy_preview.js already initialized, skipping duplicate initialization');
    return;
  }
  
  // Initialize after a short delay to ensure DOM is fully ready
  // and after sphinx_tippy has been initialized
  setTimeout(function() {
    // Clean up any existing tooltips first
    removeExistingTippyInstances();
    
    // Initialize our custom tooltips
    initCustomTippyPreviews();
    
    // Also ensure we're not duplicating tooltips
    fixDuplicateTooltips();
    
    // Mark as initialized
    window.TIPPY_PREVIEW_INITIALIZED = true;
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
    '.page-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview):not(.tippy-initialized), ' + 
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.section-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview):not(.tippy-initialized), ' + 
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.subsection-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview):not(.tippy-initialized), ' +
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.tab-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview):not(.tippy-initialized), ' + 
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.table-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview):not(.tippy-initialized), ' + 
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.column-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview):not(.tippy-initialized), ' +
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.item-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview):not(.tippy-initialized), ' + 
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.action-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview):not(.tippy-initialized), ' + 
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.code-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview):not(.tippy-initialized), ' +
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    '.item-blue-reference:not(.tippy-role):not(.enhance-references-initialized):not(.no-preview):not(.tippy-initialized), ' + 
    ':not(.tippy-box):not(.tippy-content):not(.tippy-preview-tooltip):not(.tippy-preview) > ' +
    'a.reference.internal:not(.tippy-role):not(.enhance-references-initialized):not(.tippyAnchor):not(.no-preview):not(.tippy-initialized)'
  );
  
  if (referenceLinks.length === 0) {
    console.log('No reference links found that need custom tooltips');
    return;
  }
  
  console.log(`tippy_preview.js found ${referenceLinks.length} reference links for tooltips`);
  
  // Check if any of these elements already have tippy instances and destroy them
  referenceLinks.forEach(el => {
    if (el._tippy) {
      el._tippy.destroy();
    }
  });
  
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

// Function to handle content that might contain images and filter out binary data
function processContentForTooltip(content) {
  if (!content) return '';
  
  // Check if this appears to be binary image data
  if (isBinaryContent(content)) {
    // For binary content, try to extract just text parts if possible
    const cleanedContent = content.replace(/[\x00-\x1F\x7F-\x9F]+/g, ' ')
                                 .replace(/[^\x20-\x7E\s]/g, '')
                                 .replace(/\s{2,}/g, ' ')
                                 .trim();
    
    // If we have meaningful text after cleaning, use it
    if (cleanedContent.length > 20 && !/PNG|JFIF|IHDR|IDAT|sRGB/.test(cleanedContent)) {
      return cleanedContent;
    }
    
    // Otherwise just return a placeholder
    return '[Content preview not available]';
  }
  
  return sanitizeContent(content);
}

/**
 * Creates a tooltip with basic information from a target element
 * @param {HTMLElement} element - The target element to inspect
 * @returns {string} - Tooltip HTML content
 */
function createBasicTooltip(element) {
  let content = '';
  
  // Get the heading if available
  const heading = element.querySelector('h1, h2, h3, h4, h5, h6');
  if (heading) {
    content += `<div class="tippy-preview-heading">${sanitizeContent(heading.textContent)}</div>`;
  }
  
  // Get first paragraph if available
  const paragraphs = element.querySelectorAll('p');
  if (paragraphs.length > 0) {
    content += `<p>${sanitizeContent(paragraphs[0].textContent)}</p>`;
    
    if (paragraphs.length > 1) {
      content += '<small><em>(Click to view more...)</em></small>';
    }
  }
  
  // If there's an image, include it
  const images = element.querySelectorAll('img');
  if (images.length > 0) {
    const img = images[0];
    const imgSrc = img.getAttribute('src');
    if (imgSrc && !isBinaryContent(imgSrc)) {
      content += `<div style="text-align:center; margin-top:8px;"><img src="${imgSrc}" alt="Preview" style="max-width: 250px; margin:auto;"></div>`;
    }
  }
  
  return content || '[Content preview not available]';
}

/**
 * Remove existing tippy instances from elements
 * This prevents duplicate tooltips when re-initializing
 */
function removeExistingTippyInstances() {
  // First, try to find any elements with _tippy property and destroy those instances
  document.querySelectorAll('[data-tippy-content]').forEach(el => {
    if (el._tippy) {
      el._tippy.destroy();
    }
  });
  
  // Then, try to find any elements with tippy-initialized class
  document.querySelectorAll('.tippy-initialized').forEach(el => {
    if (el._tippy) {
      el._tippy.destroy();
    }
  });
  
  // Also check for our custom class
  document.querySelectorAll('.custom-tippy-initialized').forEach(el => {
    if (el._tippy) {
      el._tippy.destroy();
    }
  });
  
  // Remove any tippy-root elements that might be orphaned
  document.querySelectorAll('.tippy-box').forEach(box => {
    if (box && box.parentNode) {
      box.parentNode.removeChild(box);
    }
  });
}

/**
 * Fix duplicate tooltips by identifying and removing them
 */
function fixDuplicateTooltips() {
  // Wait a moment for all tooltips to be created
  setTimeout(function() {
    // First, find all elements that might have multiple tooltips
    const allElements = document.querySelectorAll('.page-reference, .section-reference, .subsection-reference, .tab-reference, .table-reference, .column-reference, .item-reference, .action-reference, .code-reference, .item-blue-reference, a.reference.internal, a.tippyAnchor');
    
    // Check each element
    allElements.forEach(el => {
      // If an element has both classes, it might have duplicate tooltips
      if (el.classList.contains('custom-tippy-initialized') && 
          el.classList.contains('enhance-references-initialized')) {
        // Keep only one tooltip - prioritize the custom-tippy ones
        if (el._tippy) {
          el._tippy.destroy();
        }
        // Remove any class that might trigger another tooltip
        el.classList.remove('enhance-references-initialized');
        el.classList.add('no-preview');
      }
    });
    
    // For elements inside tooltips, disable any tooltips
    document.querySelectorAll('.tippy-content a, .tippy-content .page-reference, .tippy-content .section-reference, .tippy-content .subsection-reference, .tippy-content .tab-reference, .tippy-content .table-reference, .tippy-content .column-reference, .tippy-content .item-reference, .tippy-content .action-reference, .tippy-content .code-reference').forEach(el => {
      el.classList.add('no-preview');
      if (el._tippy) {
        el._tippy.destroy();
      }
    });
    
    console.log('Duplicate tooltips fixed');
  }, 2000);
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
    preview += `<div class="tippy-preview-heading">${sanitizeContent(heading.textContent)}</div>`;
  }
  
  // Add the content
  preview += `<div class="tippy-preview-content">${clone.innerHTML}</div>`;
  
  // Close the container
  preview += `</div>`;
  
  return preview;
}

/**
 * Main load content function
 * @param {string} targetId - The ID of the target element
 * @returns {string} - HTML content for the tooltip
 */
function loadContent(targetId) {
  // Look for same-page reference
  let targetElement = document.getElementById(targetId);
  
  if (!targetElement) {
    return "Content not found";
  }
  
  // Clone the element to avoid any side effects
  let clonedElement = targetElement.cloneNode(true);
  
  // Get the title/heading
  let title = '';
  const heading = clonedElement.querySelector('h1, h2, h3, h4, h5, h6');
  if (heading) {
    title = sanitizeContent(heading.textContent.trim());
  } else {
    title = sanitizeContent(targetId);
  }
  
  // Get the main content
  let content = '';
  
  // For tables, render them specially
  if (clonedElement.tagName === 'TABLE' || clonedElement.querySelector('table')) {
    const table = clonedElement.tagName === 'TABLE' ? clonedElement : clonedElement.querySelector('table');
    content = table.outerHTML;
  } 
  // For images, show them with alt text
  else if (clonedElement.tagName === 'IMG' || clonedElement.querySelector('img')) {
    const img = clonedElement.tagName === 'IMG' ? clonedElement : clonedElement.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt') || 'Image';
    
    if (src && !isBinaryContent(src)) {
      content = `<div style="text-align:center;"><img src="${src}" alt="${alt}" style="max-width: 100%; max-height: 400px;"></div>
                <p style="text-align:center; font-style:italic;">${sanitizeContent(alt)}</p>`;
    } else {
      content = `<p style="text-align:center;">[Image: ${sanitizeContent(alt)}]</p>`;
    }
  }
  // For paragraphs and other content, just use the inner HTML
  else {
    // Remove nested links to avoid infinite tooltip loop
    const links = clonedElement.querySelectorAll('a');
    links.forEach(link => {
      link.classList.add('no-preview');
    });
    
    content = clonedElement.innerHTML;
    
    // Check for binary content and sanitize if needed
    if (isBinaryContent(content)) {
      content = createBasicTooltip(clonedElement);
    }
  }
  
  return `<div class="tippy-preview">
            <div class="tippy-preview-heading">${title}</div>
            <div class="tippy-preview-full-content">${content}</div>
          </div>`;
}

// Original fetchContent function - enhance to handle binary content
function fetchContent(url, callback) {
  console.log(`Fetching content from: ${url}`);
  
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => {
      // Parse the HTML content
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Check if we have binary content
      if (isBinaryContent(html)) {
        callback('[Content preview not available - binary content detected]');
        return;
      }
      
      // Look for the content
      let content = '';
      
      // Try to find the section by ID first (if there's a hash)
      const hashIndex = url.indexOf('#');
      if (hashIndex !== -1) {
        const id = url.substring(hashIndex + 1);
        const targetElement = doc.getElementById(id);
        
        if (targetElement) {
          content = createTooltipPreview(targetElement);
        }
      }
      
      // If we couldn't find it by ID, show page title at least
      if (!content) {
        const title = doc.querySelector('title');
        content = `<div class="tippy-preview">
                    <div class="tippy-preview-heading">${sanitizeContent(title ? title.textContent : 'Page preview')}</div>
                    <div class="tippy-preview-full-content"><p>Click to view content on this page</p></div>
                  </div>`;
      }
      
      callback(content);
    })
    .catch(error => {
      console.error('Error fetching content:', error);
      callback(`<div class="tippy-error-message">Error loading preview: ${error.message}</div>`);
    });
}

// Update tooltip content creation - sanitize all text
function createTooltipPreview(element) {
  if (!element) return '';
  
  // Create a clone to manipulate
  const clone = element.cloneNode(true);
  
  // Remove any potentially interactive elements to avoid nested tooltips
  const nestedLinks = clone.querySelectorAll('a');
  nestedLinks.forEach(link => {
    link.classList.add('no-preview');
    link.removeAttribute('data-tippy-content');
  });
  
  // Start building the preview
  let preview = '<div class="tippy-preview">';
  
  // Add a title if there is one
  const heading = clone.querySelector('h1, h2, h3, h4, h5, h6');
  if (heading) {
    preview += `<div class="tippy-preview-heading">${sanitizeContent(heading.textContent)}</div>`;
  }
  
  // Check if content might be binary
  const contentHtml = clone.innerHTML;
  let contentToUse = contentHtml;
  
  if (isBinaryContent(contentHtml)) {
    contentToUse = createBasicTooltip(element);
  }
  
  // Add the content
  preview += `<div class="tippy-preview-full-content">${contentToUse}</div>`;
  
  preview += '</div>';
  
  return preview;
}

// Update the section that processes non-same-page links
function processCrossPageLinks() {
  // Get all links that go to other pages
  const crossPageLinks = document.querySelectorAll('a.reference.external:not(.no-preview):not(.custom-tippy-initialized)');
  
  crossPageLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Skip mail links, PDFs, etc.
    if (!href || href.startsWith('mailto:') || href.endsWith('.pdf') || 
        href.endsWith('.zip') || href.endsWith('.exe') || 
        href.includes('://') && !href.includes(window.location.hostname)) {
      return;
    }
    
    // Set a placeholder while loading
    const linkText = sanitizeContent(link.textContent.trim());
    const placeholderContent = `<div class="tippy-preview">
                                <div class="tippy-preview-heading">Loading preview...</div>
                                <div class="loading-spinner"></div>
                                <div>Loading preview for: ${linkText}</div>
                              </div>`;
    
    // Initialize the tooltip with a placeholder
    const instance = tippy(link, {
      content: placeholderContent,
      allowHTML: true,
      interactive: true,
      appendTo: document.body,
      placement: 'auto',
      delay: [500, 0],
      maxWidth: 800,
      theme: 'light-border',
      touch: ['hold', 500],
      onShow(instance) {
        // Only fetch content when showing the tooltip
        if (instance.props.content === placeholderContent) {
          fetchContent(href, content => {
            instance.setContent(content);
          });
        }
      }
    });
    
    // Mark as processed
    link.classList.add('custom-tippy-initialized');
  });
}
