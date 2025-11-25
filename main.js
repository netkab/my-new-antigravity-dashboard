document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const tabContents = document.querySelectorAll('.tab-content');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      // Remove active class from all nav items
      navItems.forEach(nav => nav.classList.remove('active'));

      // Add active class to clicked item
      item.classList.add('active');

      // Hide all tab contents
      tabContents.forEach(content => content.classList.remove('active'));

      // Show target tab content
      const tabId = item.getAttribute('data-tab');
      const targetContent = document.getElementById(tabId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // Alert Collapse/Expand Logic
  const alertHeaders = document.querySelectorAll('.alert-header-row');

  alertHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');
      const chevron = header.querySelector('.chevron');

      // Close all others (Accordion style - optional, but good for focus)
      // document.querySelectorAll('.alert-item').forEach(i => {
      //   i.classList.remove('active');
      //   const c = i.querySelector('.chevron');
      //   if(c) c.textContent = '▶';
      // });

      if (isActive) {
        item.classList.remove('active');
        if (chevron) chevron.textContent = '▶';
      } else {
        item.classList.add('active');
        if (chevron) chevron.textContent = '▼';
      }
    });
  });
});
