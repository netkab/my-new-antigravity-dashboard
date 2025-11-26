

import './style.css';

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

      if (isActive) {
        item.classList.remove('active');
        if (chevron) chevron.textContent = '▶';
      } else {
        item.classList.add('active');
        if (chevron) chevron.textContent = '▼';
      }
    });
  });

  // Investigation tab chat interaction
  const analysisForm = document.getElementById('analysis-form');
  const analysisInput = document.getElementById('analysis-input');
  const analysisSpinner = document.getElementById('analysis-spinner');
  const analysisOutput = document.getElementById('analysis-output');
  const analysisQueryBubble = document.getElementById('analysis-query-bubble');
  let analysisTimer;

  if (analysisForm && analysisInput && analysisSpinner && analysisOutput && analysisQueryBubble) {
    analysisForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const prompt = analysisInput.value.trim();
      if (!prompt) return;

      analysisQueryBubble.textContent = prompt;
      analysisSpinner.classList.remove('hidden');
      analysisOutput.classList.add('hidden');

      if (analysisTimer) {
        clearTimeout(analysisTimer);
      }

      analysisTimer = window.setTimeout(() => {
        analysisSpinner.classList.add('hidden');
        analysisOutput.classList.remove('hidden');
      }, 1000);
    });
  }
});
