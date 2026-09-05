(() => {
  document.querySelectorAll('.social-qr-trigger').forEach((trigger) => {
    const dialog = document.getElementById(trigger.getAttribute('aria-controls'));
    if (!dialog) return;

    trigger.addEventListener('click', () => dialog.showModal());
    dialog.addEventListener('click', (event) => {
      const bounds = dialog.getBoundingClientRect();
      if (
        event.target === dialog &&
        (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)
      ) {
        dialog.close();
      }
    });
    dialog.addEventListener('close', () => trigger.focus());
  });
})();
