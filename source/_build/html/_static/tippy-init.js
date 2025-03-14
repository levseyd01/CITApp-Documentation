// tippy-init.js
// This file initializes Tippy.js tooltips on elements with the "data-tippy-content" attribute

document.addEventListener("DOMContentLoaded", function() {
  // Initialize tooltips using Tippy for elements that have 'data-tippy-content' attribute
  tippy('[data-tippy-content]', {
    animation: 'fade',
    theme: 'light-border',
    delay: [100, 50],
  });
});
