// close_dropdowns.js

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('details.sd-dropdown[open]').forEach(det => {
      det.removeAttribute('open');
    });
  });
  