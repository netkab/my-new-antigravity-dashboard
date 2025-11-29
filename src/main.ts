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
  setupInteractiveCharts();
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
