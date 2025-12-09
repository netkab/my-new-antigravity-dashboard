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
  setInnerHTML('#advanced-analytics', content.tabs.advancedAnalytics);
  setInnerHTML('#strategy', content.tabs.strategy);
  setInnerHTML('#investigation', content.tabs.investigation);

  setupNavigation();
  setupAlerts();
  setupInvestigationForm();
  setupInteractiveCharts();
  setupIncidentActions();
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

const setupIncidentActions = () => {
  const alerts = document.querySelectorAll<HTMLElement>('#live-incidents .alert-body');

  alerts.forEach(alertBody => {
    if (alertBody.querySelector('.incident-action-stack')) return;

    const actionStack = document.createElement('div');
    actionStack.className = 'incident-action-stack';

    const actions = document.createElement('div');
    actions.className = 'incident-actions';

    const acknowledgeButton = document.createElement('button');
    acknowledgeButton.type = 'button';
    acknowledgeButton.className = 'incident-btn acknowledge';
    acknowledgeButton.textContent = 'Acknowledge';

    const dismissButton = document.createElement('button');
    dismissButton.type = 'button';
    dismissButton.className = 'incident-btn dismiss';
    dismissButton.textContent = 'Dismiss';

    actions.appendChild(acknowledgeButton);
    actions.appendChild(dismissButton);

    const form = document.createElement('form');
    form.className = 'decision-form hidden';
    form.dataset.action = 'Acknowledge';

    const decisionLabel = document.createElement('div');
    decisionLabel.className = 'decision-label';
    decisionLabel.textContent = 'Add note for Acknowledge';

    const decisionNote = document.createElement('textarea');
    decisionNote.className = 'decision-note';
    decisionNote.placeholder = 'Log the context behind this decision...';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'submit-btn';
    submitButton.textContent = 'Submit';

    const status = document.createElement('div');
    status.className = 'form-status hidden';
    status.textContent = 'Decision recorded.';

    form.append(decisionLabel, decisionNote, submitButton, status);
    actionStack.append(actions, form);

    const cardsContainer = alertBody.querySelector('.cards-container');
    if (cardsContainer) {
      cardsContainer.insertAdjacentElement('afterend', actionStack);
    } else {
      alertBody.appendChild(actionStack);
    }

    const openForm = (action: 'Acknowledge' | 'Dismiss') => {
      form.dataset.action = action;
      decisionLabel.textContent = `Add note for ${action}`;
      decisionNote.placeholder = action === 'Acknowledge'
        ? 'What context led to acknowledging this incident?'
        : 'Why should this be dismissed? Include guardrails.';
      form.classList.remove('hidden');
      status.classList.add('hidden');
      decisionNote.focus();
    };

    acknowledgeButton.addEventListener('click', () => openForm('Acknowledge'));
    dismissButton.addEventListener('click', () => openForm('Dismiss'));

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const action = form.dataset.action || 'Acknowledge';
      const note = decisionNote.value.trim();
      status.textContent = note
        ? `${action} logged with note: "${note}"`
        : `${action} logged.`;
      status.classList.remove('hidden');
      decisionNote.value = '';
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

const setupInteractiveCharts = () => {
  const charts = document.querySelectorAll<SVGSVGElement>('.chart-interactive');
  charts.forEach(chart => {
    const dataAttr = chart.dataset.points;
    if (!dataAttr) return;

    const cursor = chart.querySelector<SVGCircleElement>('.chart-cursor');
    const hoverLine = chart.querySelector<SVGLineElement>('.chart-hover-line');
    const hitArea = chart.querySelector<SVGRectElement>('.chart-hit-area');
    const output = chart.closest('.chart-container')?.querySelector<HTMLElement>('[data-role="chart-value"]');
    if (!cursor || !hoverLine || !hitArea) return;

    const defaultText = output?.textContent ?? '';
    const points = dataAttr.split('|').map(chunk => {
      const [xStr, yStr, label = '', value = ''] = chunk.split(',');
      const x = Number(xStr);
      const y = Number(yStr);
      return { x, y, label, value };
    }).filter(point => !Number.isNaN(point.x) && !Number.isNaN(point.y));
    if (!points.length) return;

    const showPoint = (point: { x: number; y: number; label: string; value: string }) => {
      cursor.setAttribute('cx', point.x.toString());
      cursor.setAttribute('cy', point.y.toString());
      hoverLine.setAttribute('x1', point.x.toString());
      hoverLine.setAttribute('x2', point.x.toString());
      hoverLine.setAttribute('y1', '20');
      hoverLine.setAttribute('y2', '190');
      if (output) {
        output.textContent = `${point.label} → ${point.value}`;
      }
    };

    const handlePointer = (clientX: number) => {
      const rect = chart.getBoundingClientRect();
      const svgX = clientX - rect.left;
      const nearest = points.reduce((prev, point) => {
        const prevDiff = Math.abs(prev.x - svgX);
        const nextDiff = Math.abs(point.x - svgX);
        return nextDiff < prevDiff ? point : prev;
      });
      cursor.classList.remove('hidden');
      hoverLine.classList.remove('hidden');
      showPoint(nearest);
    };

    hitArea.addEventListener('pointerenter', event => handlePointer(event.clientX));
    hitArea.addEventListener('pointermove', event => handlePointer(event.clientX));
    chart.addEventListener('pointerleave', () => {
      cursor.classList.add('hidden');
      hoverLine.classList.add('hidden');
      if (output) {
        output.textContent = defaultText;
      }
    });
  });
};
