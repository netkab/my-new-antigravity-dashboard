import './style.css';
import { content } from './content';

const setInnerHTML = (selector: string, value: string) => {
  const target = document.querySelector<HTMLElement>(selector);
  if (target) {
    target.innerHTML = value.trim();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.title = content.metaTitle;

  setInnerHTML('.sidebar', content.sidebar);
  setInnerHTML('#live-incidents', content.tabs.liveIncidents);
  setInnerHTML('#performance', content.tabs.performance);
  setInnerHTML('#strategy', content.tabs.strategy);
  setInnerHTML('#investigation', content.tabs.investigation);

  setupNavigation();
  setupAlerts();
  setupInvestigationForm();
});

const setupNavigation = () => {
  const navItems = document.querySelectorAll<HTMLAnchorElement>('.nav-item');
  const tabContents = document.querySelectorAll<HTMLElement>('.tab-content');

  navItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      tabContents.forEach(contentEl => contentEl.classList.remove('active'));
      const tabId = item.getAttribute('data-tab');
      const target = tabId ? document.getElementById(tabId) : null;
      if (target) {
        target.classList.add('active');
      }
    });
  });
};

const setupAlerts = () => {
  const alertHeaders = document.querySelectorAll<HTMLElement>('.alert-header-row');
  alertHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      if (!item) return;
      const isActive = item.classList.contains('active');
      const chevron = header.querySelector<HTMLElement>('.chevron');
      if (isActive) {
        item.classList.remove('active');
        if (chevron) chevron.textContent = '▶';
      } else {
        item.classList.add('active');
        if (chevron) chevron.textContent = '▼';
      }
    });
  });
};

const setupInvestigationForm = () => {
  const analysisForm = document.getElementById('analysis-form') as HTMLFormElement | null;
  const analysisInput = document.getElementById('analysis-input') as HTMLTextAreaElement | null;
  const analysisSpinner = document.getElementById('analysis-spinner');
  const analysisOutput = document.getElementById('analysis-output');
  const analysisQueryBubble = document.getElementById('analysis-query-bubble');
  let analysisTimer: number | undefined;

  if (!analysisForm || !analysisInput || !analysisSpinner || !analysisOutput || !analysisQueryBubble) {
    return;
  }

  analysisForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const prompt = analysisInput.value.trim();
    if (!prompt) return;
    analysisQueryBubble.textContent = prompt;
    analysisSpinner.classList.remove('hidden');
    analysisOutput.classList.add('hidden');

    if (analysisTimer) {
      window.clearTimeout(analysisTimer);
    }

    analysisTimer = window.setTimeout(() => {
      analysisSpinner.classList.add('hidden');
      analysisOutput.classList.remove('hidden');
    }, 1000);
  });
};
