// tippy_preview.js - Load content previews for tippy-ref links

document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit for everything to be loaded and settled before initializing
  setTimeout(function() {
    initTippyPreviews();
  }, 500);
});

function initTippyPreviews() {
  // First, destroy any existing tippy instances to prevent duplicates
  if (typeof tippy !== 'undefined' && tippy.hideAll) {
    tippy.hideAll();
  }

  // Get all elements that should have tippy tooltips
  const tippyLinks = document.querySelectorAll('.tippy-reference, a.reference.internal');
  
  // Create a Set to track elements that already have tippy instances
  const processedElements = new Set();
  
  tippyLinks.forEach(link => {
    // Skip if we've already processed this element
    if (processedElements.has(link)) return;
    processedElements.add(link);
    
    // Get the target URL from the href
    const href = link.getAttribute('refuri') || link.getAttribute('href');
    if (!href) return;
    
    // Set initial loading state for all links
    link.setAttribute('data-tippy-content', 'Loading preview...');
    
    // Handle both same-page and cross-document references
    if (href.startsWith('#')) {
      // Same-page reference
      const targetId = href.substring(1);
      
      // Try to find the target element
      const targetElement = document.getElementById(targetId);
      if (!targetElement) {
        // Try to find by name attribute (for older browsers/sphinx versions)
        const namedElement = document.getElementsByName(targetId)[0];
        if (namedElement) {
          let previewContent = buildPreviewContent(namedElement);
          link.setAttribute('data-tippy-content', previewContent);
        } else {
          console.log('Target not found:', targetId);
          link.setAttribute('data-tippy-content', 'Content preview not available (target not found)');
        }
        return;
      }
      
      // Build preview content from the target element
      let previewContent = buildPreviewContent(targetElement);
      link.setAttribute('data-tippy-content', previewContent);
    } else {
      // Cross-document reference
      // We need to handle both relative and absolute paths
      let targetUrl = href;
      
      // Check if this is a document reference 
      if (targetUrl.endsWith('.html')) {
        // Already an HTML link, keep as is
      } else if (targetUrl.includes('#')) {
        // Handle section references, e.g., page.html#section
        targetUrl = targetUrl.split('#')[0] + '.html';
      } else {
        // Plain reference to a page
        targetUrl = targetUrl + '.html';
      }
      
      // For Sphinx HTML output, transform URL to get the proper HTML file
      // This is needed because of how Sphinx generates HTML files from source files
      targetUrl = targetUrl.replace(/\.\.\//g, ''); // Remove any relative path navigation

      // Try to fetch from _build/html instead
      let buildUrl = '/_build/html/' + targetUrl;
      
      console.log('Fetching content from:', buildUrl);
      
      // Fetch the content of the linked page
      fetchPageContent(buildUrl, link);
    }
  });
  
  // Initialize tippy just once for each element
  if (typeof tippy !== 'undefined') {
    // Initialize new tippy instances
    tippy('.tippy-reference, a.reference.internal', {
      allowHTML: true,
      interactive: true,
      maxWidth: 450,
      theme: 'light-border',
      placement: 'top',
      delay: [100, 0],
      appendTo: document.body
    });
  }
}

// Function to fetch cross-document content
function fetchPageContent(url, link) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        // Try another URL format if the first one fails
        const alternateUrl = url.replace('/_build/html/', '/');
        console.log('First URL failed, trying alternate URL:', alternateUrl);
        return fetch(alternateUrl);
      }
      return response;
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText} for URL: ${url}`);
      }
      return response.text();
    })
    .then(html => {
      // Create a temporary DOM element to parse the HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Look for the main content area (most Sphinx themes use 'div.body' or 'main' or 'div.document')
      const mainContent = doc.querySelector('div.body') || 
                          doc.querySelector('main') || 
                          doc.querySelector('div.document') || 
                          doc.body;
      
      if (mainContent) {
        // Extract title
        const title = doc.querySelector('h1') || doc.querySelector('title');
        let titleText = title ? title.textContent : 'Linked Page';
        
        // Build a preview with title and first paragraph
        let preview = `<div class="tippy-preview">`;
        preview += `<div class="tippy-preview-heading">${titleText}</div>`;
        
        // Find first paragraph not in admonition
        const paragraphs = Array.from(mainContent.querySelectorAll('p')).filter(p => {
          let parent = p.parentElement;
          while (parent && parent !== mainContent) {
            if (parent.classList.contains('admonition') || 
                parent.classList.contains('sd-card') ||
                parent.classList.contains('sd-tab-content') ||
                parent.tagName.toLowerCase() === 'details') {
              return false;
            }
            parent = parent.parentElement;
          }
          return true;
        });
        
        if (paragraphs.length > 0) {
          // Properly handle reference styles inside paragraphs
          const pClone = paragraphs[0].cloneNode(true);
          
          // Extract content safely
          preview += `<div class="tippy-preview-content">${pClone.innerHTML}</div>`;
          
          if (paragraphs.length > 1) {
            preview += '<div class="tippy-preview-more">Click to view more...</div>';
          }
        }
        
        // Find first image not in admonition
        const images = Array.from(mainContent.querySelectorAll('img')).filter(img => {
          let parent = img.parentElement;
          while (parent && parent !== mainContent) {
            if (parent.classList.contains('admonition') || 
                parent.classList.contains('sd-card') ||
                parent.classList.contains('sd-tab-content') ||
                parent.tagName.toLowerCase() === 'details') {
              return false;
            }
            parent = parent.parentElement;
          }
          return true;
        });
        
        if (images.length > 0) {
          const imgSrc = images[0].getAttribute('src');
          // Handle relative paths
          try {
            const imgUrl = new URL(imgSrc, url).href;
            preview += `<div class="tippy-preview-image"><img src="${imgUrl}" alt="Preview"></div>`;
          } catch (error) {
            console.error('Error processing image URL:', error);
          }
        }
        
        preview += '</div>';
        
        // Update the link with the preview content
        link.setAttribute('data-tippy-content', preview);
        
        // Update existing tippy instance if it exists
        if (typeof tippy !== 'undefined' && link._tippy) {
          link._tippy.setContent(preview);
        }
      } else {
        console.warn('No main content found in fetched page:', url);
        link.setAttribute('data-tippy-content', 'Content preview not available (no main content)');
      }
    })
    .catch(error => {
      console.error('Error fetching page:', error);
      link.setAttribute('data-tippy-content', `Error loading preview: ${error.message}`);
    });
}

// Function to build preview content from an element
function buildPreviewContent(element) {
  let previewContent = '<div class="tippy-preview">';
  
  // Get heading if available
  const heading = element.querySelector('h1, h2, h3, h4, h5, h6');
  if (heading) {
    // Create a clean clone of the heading to preserve styling but remove event handlers
    const headingClone = heading.cloneNode(true);
    previewContent += `<div class="tippy-preview-heading">${headingClone.textContent}</div>`;
  }
  
  // Get content paragraphs that are not inside admonitions
  const mainContent = Array.from(element.querySelectorAll('p')).filter(p => {
    // Check if this paragraph is inside an admonition
    let parent = p.parentElement;
    while (parent && parent !== element) {
      // Check for admonition classes - both sphinx-design and standard sphinx admonitions
      if (parent.classList.contains('admonition') || 
          parent.classList.contains('sd-card') ||
          parent.classList.contains('sd-tab-content') ||
          parent.tagName.toLowerCase() === 'details') {
        return false; // Skip this paragraph
      }
      parent = parent.parentElement;
    }
    return true; // Include this paragraph
  });
  
  // Add first paragraph if available (filtering out admonitions)
  if (mainContent.length > 0) {
    // Create a clean clone of the paragraph
    const pClone = mainContent[0].cloneNode(true);
    
    previewContent += `<div class="tippy-preview-content">${pClone.innerHTML}</div>`;
    
    if (mainContent.length > 1) {
      previewContent += '<div class="tippy-preview-more">Click to view more...</div>';
    }
  }
  
  // Look for images that are not inside admonitions
  const mainImages = Array.from(element.querySelectorAll('img')).filter(img => {
    // Check if this image is inside an admonition
    let parent = img.parentElement;
    while (parent && parent !== element) {
      if (parent.classList.contains('admonition') || 
          parent.classList.contains('sd-card') ||
          parent.classList.contains('sd-tab-content') ||
          parent.tagName.toLowerCase() === 'details') {
        return false; // Skip this image
      }
      parent = parent.parentElement;
    }
    return true; // Include this image
  });
  
  // Add first image if available (filtering out admonitions)
  if (mainImages.length > 0) {
    const imgSrc = mainImages[0].getAttribute('src');
    previewContent += `<div class="tippy-preview-image"><img src="${imgSrc}" alt="Preview"></div>`;
  }
  
  previewContent += '</div>';
  
  return previewContent;
}
