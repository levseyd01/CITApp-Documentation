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
    '.item-blue-reference'
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
    maxWidth: 450,
    theme: 'light-border',
    placement: 'top',
    delay: [100, 0],
    appendTo: document.body,
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
      tippyInstance.setContent(buildPreviewContent(namedElements[0]));
    } else {
      tippyInstance.setContent('Content preview not available');
    }
    return;
  }
  
  // Build rich preview content
  tippyInstance.setContent(buildPreviewContent(targetElement));
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
      
      // Build rich preview with heading, text and maybe an image
      let previewContent = `<div class="tippy-preview">
        <div class="tippy-preview-heading">${titleText}</div>`;
      
      // Get first paragraph
      const paragraph = mainContent.querySelector('p');
      if (paragraph) {
        previewContent += `<div class="tippy-preview-content">${paragraph.innerHTML}</div>`;
      }
      
      // Get first image
      const image = mainContent.querySelector('img');
      if (image) {
        const imgSrc = image.getAttribute('src');
        previewContent += `<div class="tippy-preview-image"><img src="${imgSrc}" alt="Preview"></div>`;
      }
      
      previewContent += `</div>`;
      
      tippyInstance.setContent(previewContent);
    })
    .catch(error => {
      console.error('Error loading preview:', error);
      tippyInstance.setContent(`Error loading preview: ${error.message}`);
    });
}

/**
 * Build a preview of content for the tooltip
 */
function buildPreviewContent(element) {
  // Start building preview
  let previewContent = '<div class="tippy-preview">';
  
  // Add heading if available
  const heading = element.querySelector('h1, h2, h3, h4, h5, h6');
  if (heading) {
    previewContent += `<div class="tippy-preview-heading">${heading.textContent}</div>`;
  }
  
  // Get first paragraph outside of admonitions
  const paragraphs = Array.from(element.querySelectorAll('p'))
    .filter(p => !isInsideAdmonition(p, element));
  
  if (paragraphs.length > 0) {
    previewContent += `<div class="tippy-preview-content">${paragraphs[0].innerHTML}</div>`;
    
    if (paragraphs.length > 1) {
      previewContent += '<div class="tippy-preview-more">Click to view more...</div>';
    }
  }
  
  // Get first image outside of admonitions
  const images = Array.from(element.querySelectorAll('img'))
    .filter(img => !isInsideAdmonition(img, element));
  
  if (images.length > 0) {
    const imgSrc = images[0].getAttribute('src');
    previewContent += `<div class="tippy-preview-image"><img src="${imgSrc}" alt="Preview"></div>`;
  }
  
  previewContent += '</div>';
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
