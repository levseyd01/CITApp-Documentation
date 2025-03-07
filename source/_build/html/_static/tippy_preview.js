// tippy_preview.js - Load content previews for tippy-ref links

document.addEventListener('DOMContentLoaded', function() {
  // Process all tippy-reference links
  const tippyLinks = document.querySelectorAll('.tippy-reference');
  
  tippyLinks.forEach(link => {
    // Get the target ID from the href
    const href = link.getAttribute('refuri') || link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    
    const targetId = href.substring(1);
    
    // Try to find the target element
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    
    // Build preview content from the target element
    let previewContent = '<div class="tippy-preview">';
    
    // Get heading if available
    const heading = targetElement.querySelector('h1, h2, h3, h4, h5, h6');
    if (heading) {
      // Create a clean clone of the heading to preserve styling but remove event handlers
      const headingClone = heading.cloneNode(true);
      previewContent += `<div class="tippy-preview-heading">${headingClone.textContent}</div>`;
    }
    
    // Get content paragraphs that are not inside admonitions
    const mainContent = Array.from(targetElement.querySelectorAll('p')).filter(p => {
      // Check if this paragraph is inside an admonition
      let parent = p.parentElement;
      while (parent && parent !== targetElement) {
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
      
      // Process custom reference styles within the paragraph
      const customRefs = pClone.querySelectorAll('.page-reference, .section-reference, .subsection-reference, .tab-reference, .table-reference, .column-reference, .item-reference, .action-reference');
      customRefs.forEach(ref => {
        // Just keep the text content for simplicity
        const text = ref.textContent;
        const span = document.createElement('span');
        span.className = ref.className;
        span.textContent = text;
        ref.parentNode.replaceChild(span, ref);
      });
      
      previewContent += `<div class="tippy-preview-content">${pClone.innerHTML}</div>`;
      
      if (mainContent.length > 1) {
        previewContent += '<div class="tippy-preview-more">Click to view more...</div>';
      }
    }
    
    // Look for images that are not inside admonitions
    const mainImages = Array.from(targetElement.querySelectorAll('img')).filter(img => {
      // Check if this image is inside an admonition
      let parent = img.parentElement;
      while (parent && parent !== targetElement) {
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
    
    // Set the preview content
    link.setAttribute('data-tippy-content', previewContent);
  });
  
  // Initialize tippy for all tippy-reference elements
  if (typeof tippy !== 'undefined') {
    tippy('.tippy-reference', {
      allowHTML: true,
      interactive: true,
      maxWidth: 450,
      theme: 'light-border',
      placement: 'top',
      delay: [100, 0],
      appendTo: document.body
    });
  }
});
