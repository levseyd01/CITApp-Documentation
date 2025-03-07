// enhance_references.js - Add tooltip functionality to all reference links

document.addEventListener('DOMContentLoaded', function() {
  // Process all reference links with the tippyAnchor class
  const refLinks = document.querySelectorAll('a.tippyAnchor, .standard-link.tippyAnchor');
  
  refLinks.forEach(link => {
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
          previewContent += `<h4>${heading.textContent}</h4>`;
        }
        
        // Try to get paragraph content
        const paragraphs = targetElement.querySelectorAll('p');
        if (paragraphs.length > 0) {
          // Get first paragraph text
          previewContent += `<p>${paragraphs[0].textContent}</p>`;
          
          // If there's more than one paragraph, add a note
          if (paragraphs.length > 1) {
            previewContent += `<small><em>(Click to view more...)</em></small>`;
          }
        }
        
        // If there's an image, include that too
        const image = targetElement.querySelector('img');
        if (image) {
          const imgSrc = image.getAttribute('src');
          previewContent += `<div style="text-align:center;margin-top:8px;"><img src="${imgSrc}" alt="Preview" style="max-width: 250px; margin:auto;"></div>`;
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
      link.setAttribute('data-tippy-content', `<p>Link to ${linkText}</p><small>Click to navigate</small>`);
    }
  });
  
  // Initialize or reinitialize tippy for all tooltip links
  if (typeof tippy !== 'undefined') {
    tippy('a.tippyAnchor, .standard-link.tippyAnchor', {
      allowHTML: true,
      interactive: true,
      maxWidth: 350,
      theme: 'light-border',
      placement: 'top',
      delay: [200, 0] // 200ms delay before showing, 0ms delay before hiding
    });
  }
});
