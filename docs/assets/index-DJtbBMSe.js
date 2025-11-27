(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const n={metaTitle:"Minoris Dashboard",sidebar:`
      <div class="logo-area">
        <img src="./logo.png" alt="Minoris Logo" class="company-logo" />
        <span class="company-name">MINORIS.AI</span>
      </div>
      <nav class="sidebar-nav">
        <a href="#" class="nav-item active" data-tab="live-incidents">
          <span class="icon">⚡</span> Live Incidents
        </a>
        <a href="#" class="nav-item" data-tab="performance">
          <span class="icon">📈</span> Performance
        </a>
        <a href="#" class="nav-item" data-tab="strategy">
          <span class="icon">🎯</span> Strategy
        </a>
        <a href="#" class="nav-item" data-tab="investigation">
          <span class="icon">👥</span> Investigation
        </a>
      </nav>
  `,tabs:{liveIncidents:`
        <div class="alert-list">
          <div class="alert-item active">
            <div class="alert-header-row">
              <span class="chevron">▼</span>
              <span class="alert-title">Alert #802: Root Cause Analysis</span>
              <div class="alert-badges">
                <span class="badge critical"
                  style="color: #ff4d4d; background: rgba(255, 77, 77, 0.1); padding: 2px 8px; border-radius: 4px; font-size: 0.8em; margin-left: 10px;">High
                  Impact</span>
              </div>
            </div>
            <div class="alert-body">
              <div class="cards-container">
                <div class="dashboard-card">
                  <h3 class="card-title">STEP 1: CONTEXTUAL CORRELATION</h3>
                  <div class="chart-container">
                    <div class="chart-annotation">
                      <span class="annotation-icon">@</span> Correlated with "Summer_Referral" Launch
                      <div class="annotation-arrow"></div>
                    </div>
                    <div class="bar-chart">
                      <div class="bar" style="height: 30%"></div>
                      <div class="bar" style="height: 30%"></div>
                      <div class="bar" style="height: 25%"></div>
                      <div class="bar" style="height: 35%"></div>
                      <div class="bar" style="height: 35%"></div>
                      <div class="bar" style="height: 40%"></div>
                      <div class="bar highlight" style="height: 60%"></div>
                      <div class="bar highlight" style="height: 85%"></div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <span class="clock-icon">🕒</span> Fraud spike aligned perfectly with Promo Code deployment at
                    14:00.
                  </div>
                </div>
                <div class="dashboard-card">
                  <h3 class="card-title">STEP 2: AGENTIC DIAGNOSIS</h3>
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon"></div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Root Cause Identified</h4>
                      <p>Loophole found in <span class="code-ref">referral_bonus_logic.py</span>. Bots are creating
                        circular referrals to drain wallet credits.</p>
                    </div>
                  </div>
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon magic">✨</div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Automated Action Taken</h4>
                      <p>Applied velocity limit: <span class="highlight-text">Max 2 referrals / hour</span> per IP
                        subnet.</p>
                      <p class="success-text">🛡️ 4,500 bot accounts blocked. $45k saved.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="alert-item">
            <div class="alert-header-row">
              <span class="chevron">▶</span>
              <span class="alert-title">Drop in approval rate (EU)</span>
              <div class="alert-badges">
                <span class="badge warning"
                  style="color: #fbbf24; background: rgba(251, 191, 36, 0.1); padding: 2px 8px; border-radius: 4px; font-size: 0.8em; margin-left: 10px;">Medium
                  Impact</span>
              </div>
            </div>
            <div class="alert-body">
              <div class="dashboard-card">
                <h3 class="card-title">DETAIL</h3>
                <ul
                  style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; padding-left: 1.2rem; margin-bottom: 1.5rem;">
                  <li>Drop localized to PayPal and Klarna methods.</li>
                  <li>Latency increased 20% after UI changes.</li>
                  <li>Fraud rate unchanged, suggesting technical rather than behavioral cause.</li>
                  <li>Recommend rollback or A/B testing new flow.</li>
                </ul>
                <div class="chart-container" style="height: 150px;">
                  <div class="chart-annotation alert-2-annotation">
                    <span class="annotation-icon">@</span> Checkout Update
                    <div class="annotation-arrow"></div>
                  </div>
                  <svg viewBox="0 0 400 100" width="100%" height="100%" preserveAspectRatio="none">
                    <line x1="0" y1="20" x2="400" y2="20" stroke="#334155" stroke-dasharray="4" />
                    <line x1="0" y1="50" x2="400" y2="50" stroke="#334155" stroke-dasharray="4" />
                    <line x1="0" y1="80" x2="400" y2="80" stroke="#334155" stroke-dasharray="4" />
                    <path d="M0,30 L100,32 L200,30 L250,70 L300,72 L400,70" fill="none" stroke="#3b82f6"
                      stroke-width="2" />
                    <circle cx="100" cy="32" r="3" fill="#3b82f6" />
                    <circle cx="200" cy="30" r="3" fill="#3b82f6" />
                    <circle cx="250" cy="70" r="3" fill="#f87171" />
                    <circle cx="300" cy="72" r="3" fill="#3b82f6" />
                    <circle cx="400" cy="70" r="3" fill="#3b82f6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="alert-item">
            <div class="alert-header-row">
              <span class="chevron">▶</span>
              <span class="alert-title">Alert #804: Vendor Optimization</span>
              <div class="alert-badges">
                <span class="badge info"
                  style="color: #60a5fa; background: rgba(96, 165, 250, 0.1); padding: 2px 8px; border-radius: 4px; font-size: 0.8em; margin-left: 10px;">Optimization</span>
              </div>
            </div>
            <div class="alert-body">
              <div class="cards-container">
                <div class="dashboard-card">
                  <h3 class="card-title">VENDOR STACK SCAN</h3>
                  <p>Spend monitors escalated after the EU low-risk lane started overusing the top-tier vendor. Policy
                    trace shows sandbox tenants still pinned to premium checks.</p>
                  <div class="mini-metric-grid">
                    <div class="mini-metric">
                      <span class="label">Daily spend</span>
                      <span class="value">$82K</span>
                      <span class="change negative">+18%</span>
                    </div>
                    <div class="mini-metric">
                      <span class="label">Redundant calls</span>
                      <span class="value">41%</span>
                      <span class="change negative">▲ 11 pts</span>
                    </div>
                    <div class="mini-metric">
                      <span class="label">Risk score impact</span>
                      <span class="value">+0.2%</span>
                      <span class="change neutral">flat</span>
                    </div>
                  </div>
                  <div class="chart-container" style="height: 180px;">
                    <div class="chart-annotation" style="left: 60%; top: 28%;">
                      <span class="annotation-icon">@</span> Switchback test
                      <div class="annotation-arrow"></div>
                    </div>
                    <svg viewBox="0 0 420 150" width="100%" height="100%" preserveAspectRatio="none">
                      <line x1="0" y1="30" x2="420" y2="30" stroke="#334155" stroke-dasharray="4" />
                      <line x1="0" y1="70" x2="420" y2="70" stroke="#334155" stroke-dasharray="4" />
                      <line x1="0" y1="110" x2="420" y2="110" stroke="#334155" stroke-dasharray="4" />
                      <rect x="20" y="60" width="60" height="70" fill="#60a5fa" rx="6" />
                      <rect x="120" y="35" width="60" height="95" fill="#34d399" rx="6" />
                      <rect x="220" y="20" width="60" height="110" fill="#f97316" rx="6" />
                      <rect x="320" y="65" width="60" height="65" fill="#a78bfa" rx="6" />
                      <path d="M0,50 L420,50" stroke="#facc15" stroke-dasharray="5 5" stroke-width="2" />
                      <text x="5" y="45" fill="#facc15" font-size="10">Budget guardrail</text>
                      <text x="30" y="140" fill="#94a3b8" font-size="10">Zephyr</text>
                      <text x="125" y="140" fill="#94a3b8" font-size="10">Halo</text>
                      <text x="232" y="140" fill="#94a3b8" font-size="10">Sentinel</text>
                      <text x="330" y="140" fill="#94a3b8" font-size="10">Mercury</text>
                    </svg>
                  </div>
                  <div class="card-footer">
                    <span class="clock-icon">🕒</span> Ops routed 68% of sandbox checks through Sentinel in the last 30
                    minutes.
                  </div>
                </div>
                <div class="dashboard-card">
                  <h3 class="card-title">AGENTIC ROUTING PLAN</h3>
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon"></div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Policy rewrite</h4>
                      <p>Updated <span class="code-ref">vendor_router.yaml</span> to weight low-risk cohorts toward
                        Zephyr/Halo mix and reserve Sentinel for step-up flows.</p>
                    </div>
                  </div>
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon magic">✨</div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Automation outcome</h4>
                      <p>Agent approved new policy, replayed 5k historical decisions, and published guardrails to the
                        orchestrator.</p>
                      <p class="success-text">🛡️ Forecasted savings: $24K / day without impact to fraud posture.</p>
                    </div>
                  </div>
                  <div class="vendor-route-timeline">
                    <div class="route-step">
                      <span class="step-dot"></span>
                      <div>
                        <strong>T+0 mitigation</strong>
                        <p>Throttle Sentinel usage on sandbox tenant IDs 223-231 (already live).</p>
                      </div>
                    </div>
                    <div class="route-step">
                      <span class="step-dot warning"></span>
                      <div>
                        <strong>Rolling switchback</strong>
                        <p>50/50 split to verify latency and approval deltas across Zephyr vs Halo lanes.</p>
                      </div>
                    </div>
                    <div class="route-step">
                      <span class="step-dot success"></span>
                      <div>
                        <strong>Final hardening</strong>
                        <p>Retrofit policy into production once variance &lt; 1.5% for 6 hrs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="alert-item">
            <div class="alert-header-row">
              <span class="chevron">▶</span>
              <span class="alert-title">Alert #818: Bot Activity Verified as Safe</span>
              <div class="alert-badges">
                <span class="badge success"
                  style="color: #4ade80; background: rgba(74, 222, 128, 0.1); padding: 2px 8px; border-radius: 4px; font-size: 0.8em; margin-left: 10px;">Greenlit</span>
              </div>
            </div>
            <div class="alert-body">
              <div class="cards-container">
                <div class="dashboard-card">
                  <h3 class="card-title">SURGE REPLAY</h3>
                  <p>Autonomous monitors detected a 6× spike in checkout bots across sandbox tenants. Session
                    fingerprints and API keys matched the SOC's Ops-Agent stress test plan.</p>
                  <div class="chart-container" style="height: 180px;">
                    <div class="chart-annotation" style="left: 70%; top: 25%;">
                      <span class="annotation-icon">@</span> Agent playback verified
                      <div class="annotation-arrow"></div>
                    </div>
                    <svg viewBox="0 0 400 140" width="100%" height="100%" preserveAspectRatio="none">
                      <line x1="0" y1="30" x2="400" y2="30" stroke="#334155" stroke-dasharray="4" />
                      <line x1="0" y1="70" x2="400" y2="70" stroke="#334155" stroke-dasharray="4" />
                      <line x1="0" y1="110" x2="400" y2="110" stroke="#334155" stroke-dasharray="4" />
                      <path d="M0,105 L60,95 L120,90 L180,85 L220,35 L300,40 L360,45 L400,42" fill="none"
                        stroke="#f87171" stroke-width="2" />
                      <circle cx="220" cy="35" r="5" fill="#f87171" />
                      <circle cx="360" cy="45" r="4" fill="#f87171" />
                      <path d="M0,95 L400,95" fill="none" stroke="#22d3ee" stroke-width="2" stroke-dasharray="6 4" />
                      <path d="M0,120 L100,115 L160,100 L220,60 L280,55 L340,52 L400,50" fill="none"
                        stroke="#34d399" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="card-footer">
                    <span class="clock-icon">🕒</span> SOC confirmed replay began 14:35 UTC with Ops-Agent-24 scripts.
                  </div>
                </div>
                <div class="dashboard-card">
                  <h3 class="card-title">AGENTIC DETERMINATION</h3>
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon"></div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Signals Cross-Checked</h4>
                      <p>Botnet telemetry correlated with <span class="code-ref">agent_lab.yaml</span> signatures and
                        whitelisted CIDR ranges.</p>
                    </div>
                  </div>
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon magic">✨</div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Outcome</h4>
                      <p>Escalation downgraded. Model paused enforcement and tagged traffic as <span
                          class="highlight-text">agent-driven QA</span>.</p>
                      <p class="success-text">🛡️ Guardrails stayed armed; customer flow uninterrupted.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    `,performance:`
        <div class="performance-grid">
          <div class="kpi-row">
            <div class="kpi-card">
              <div class="kpi-title">Approval Rate</div>
              <div class="kpi-value-row">
                <span class="kpi-value">96%</span>
                <span class="kpi-badge success">+1.2%</span>
              </div>
            </div>
            <div class="kpi-card">
              <div class="kpi-title">Model Latency</div>
              <div class="kpi-value-row">
                <span class="kpi-value">820ms</span>
                <span class="kpi-badge success">-5%</span>
              </div>
            </div>
            <div class="kpi-card">
              <div class="kpi-title">Vendor SLA</div>
              <div class="kpi-value-row">
                <span class="kpi-value">99.7%</span>
                <span class="kpi-badge neutral">stable</span>
              </div>
            </div>
            <div class="kpi-card">
              <div class="kpi-title">Chargeback Rate</div>
              <div class="kpi-value-row">
                <span class="kpi-value">0.09%</span>
                <span class="kpi-badge success">-0.01%</span>
              </div>
            </div>
            <div class="kpi-card">
              <div class="kpi-title">Fraud Resiliency</div>
              <div class="kpi-value-row">
                <span class="kpi-value">87 / 100</span>
                <span class="kpi-badge info">i</span>
              </div>
            </div>
          </div>
          <div class="charts-row">
            <div class="chart-card">
              <div class="card-header">Transaction Volume & Approval Rate</div>
              <div class="chart-placeholder">
                <svg viewBox="0 0 600 200" width="100%" height="100%" preserveAspectRatio="none">
                  <line x1="0" y1="40" x2="600" y2="40" stroke="#334155" stroke-dasharray="4" />
                  <line x1="0" y1="80" x2="600" y2="80" stroke="#334155" stroke-dasharray="4" />
                  <line x1="0" y1="120" x2="600" y2="120" stroke="#334155" stroke-dasharray="4" />
                  <line x1="0" y1="160" x2="600" y2="160" stroke="#334155" stroke-dasharray="4" />
                  <path d="M0,120 C100,100 200,110 300,80 S500,60 600,50" fill="none" stroke="#3b82f6"
                    stroke-width="2" />
                  <circle cx="150" cy="108" r="3" fill="#3b82f6" />
                  <circle cx="300" cy="80" r="3" fill="#3b82f6" />
                  <circle cx="450" cy="55" r="3" fill="#3b82f6" />
                  <path d="M0,50 C150,50 300,45 450,40 S600,35 600,35" fill="none" stroke="#4ade80"
                    stroke-width="2" />
                  <circle cx="150" cy="50" r="3" fill="#4ade80" />
                  <circle cx="300" cy="45" r="3" fill="#4ade80" />
                  <circle cx="450" cy="40" r="3" fill="#4ade80" />
                  <text x="10" y="190" fill="#64748b" font-size="10">Nov 1</text>
                  <text x="150" y="190" fill="#64748b" font-size="10">Nov 2</text>
                  <text x="300" y="190" fill="#64748b" font-size="10">Nov 3</text>
                  <text x="450" y="190" fill="#64748b" font-size="10">Nov 4</text>
                  <text x="580" y="190" fill="#64748b" font-size="10">Nov 5</text>
                </svg>
              </div>
            </div>
            <div class="chart-card">
              <div class="card-header">Fraud Rate Forecast</div>
              <div class="chart-placeholder">
                <svg viewBox="0 0 300 200" width="100%" height="100%" preserveAspectRatio="none">
                  <line x1="0" y1="40" x2="300" y2="40" stroke="#334155" stroke-dasharray="4" />
                  <line x1="0" y1="80" x2="300" y2="80" stroke="#334155" stroke-dasharray="4" />
                  <line x1="0" y1="120" x2="300" y2="120" stroke="#334155" stroke-dasharray="4" />
                  <line x1="0" y1="160" x2="300" y2="160" stroke="#334155" stroke-dasharray="4" />
                  <path d="M0,100 C50,80 100,120 150,60 S250,40 300,80" fill="none" stroke="#f97316"
                    stroke-width="2" />
                  <circle cx="75" cy="90" r="3" fill="#f97316" />
                  <circle cx="150" cy="60" r="3" fill="#f97316" />
                  <circle cx="225" cy="50" r="3" fill="#f97316" />
                  <text x="10" y="190" fill="#64748b" font-size="10">Nov 1</text>
                  <text x="80" y="190" fill="#64748b" font-size="10">Nov 2</text>
                  <text x="150" y="190" fill="#64748b" font-size="10">Nov 3</text>
                  <text x="220" y="190" fill="#64748b" font-size="10">Nov 4</text>
                  <text x="280" y="190" fill="#64748b" font-size="10">Nov 5</text>
                </svg>
              </div>
            </div>
          </div>
          <div class="charts-row triple">
            <div class="chart-card">
              <div class="card-header">User Cohorts Behavior</div>
              <div class="chart-placeholder">
                <svg viewBox="0 0 600 200" width="100%" height="100%" preserveAspectRatio="none">
                  <line x1="0" y1="40" x2="600" y2="40" stroke="#334155" stroke-dasharray="4" />
                  <line x1="0" y1="80" x2="600" y2="80" stroke="#334155" stroke-dasharray="4" />
                  <line x1="0" y1="120" x2="600" y2="120" stroke="#334155" stroke-dasharray="4" />
                  <path d="M0,150 L80,135 L160,125 L240,110 L320,95 L400,90 L480,100 L560,110 L560,200 L0,200 Z"
                    fill="rgba(56,189,248,0.12)" />
                  <path d="M0,180 L80,175 L160,165 L240,150 L320,140 L400,130 L480,125 L560,120 L560,200 L0,200 Z"
                    fill="rgba(167,139,250,0.08)" />
                  <path d="M0,140 L80,120 L160,105 L240,92 L320,82 L400,88 L480,94 L560,100" fill="none"
                    stroke="#38bdf8" stroke-width="2" />
                  <circle cx="120" cy="112" r="3" fill="#38bdf8" />
                  <circle cx="240" cy="92" r="4" fill="#38bdf8" />
                  <circle cx="440" cy="90" r="3" fill="#38bdf8" />
                  <path d="M0,155 L80,150 L160,145 L240,138 L320,130 L400,118 L480,112 L560,107" fill="none"
                    stroke="#a78bfa" stroke-width="2" stroke-dasharray="6 4" />
                  <circle cx="360" cy="124" r="4" fill="#a78bfa" />
                  <path d="M0,185 L80,172 L160,160 L240,142 L320,125 L400,112 L480,106 L560,104" fill="none"
                    stroke="#f97316" stroke-width="2" />
                  <circle cx="320" cy="125" r="4" fill="#f97316" />
                  <line x1="300" y1="20" x2="300" y2="180" stroke="#64748b" stroke-dasharray="2 4" />
                  <text x="310" y="30" fill="#94a3b8" font-size="10">Week 5 retention</text>
                </svg>
              </div>
              <div class="chart-legend">
                <span class="legend-item"><span class="legend-dot" style="background:#38bdf8"></span>New</span>
                <span class="legend-item"><span class="legend-dot" style="background:#a78bfa"></span>Returning</span>
                <span class="legend-item"><span class="legend-dot" style="background:#f97316"></span>Power</span>
              </div>
            </div>
            <div class="chart-card">
              <div class="card-header">Support Tickets Trend</div>
              <div class="chart-placeholder">
                <svg viewBox="0 0 600 200" width="100%" height="100%" preserveAspectRatio="none">
                  <line x1="0" y1="40" x2="600" y2="40" stroke="#334155" stroke-dasharray="4" />
                  <line x1="0" y1="80" x2="600" y2="80" stroke="#334155" stroke-dasharray="4" />
                  <line x1="0" y1="120" x2="600" y2="120" stroke="#334155" stroke-dasharray="4" />
                  <line x1="0" y1="160" x2="600" y2="160" stroke="#334155" stroke-dasharray="4" />
                  <path d="M0,130 L80,128 L160,125 L240,135 L320,150 L400,160 L480,148 L560,140 L560,200 L0,200 Z"
                    fill="rgba(248,113,113,0.08)" />
                  <path d="M0,150 L80,138 L160,130 L240,122 L320,138 L400,152 L480,140 L560,132" fill="none"
                    stroke="#f87171" stroke-width="2" />
                  <circle cx="200" cy="126" r="3" fill="#f87171" />
                  <circle cx="360" cy="145" r="4" fill="#f87171" />
                  <circle cx="520" cy="135" r="3" fill="#f87171" />
                  <path d="M0,120 L80,112 L160,104 L240,92 L320,98 L400,105 L480,94 L560,86" fill="none"
                    stroke="#4ade80" stroke-width="2" />
                  <circle cx="260" cy="94" r="3" fill="#4ade80" />
                  <circle cx="440" cy="100" r="3" fill="#4ade80" />
                  <path d="M0,130 L600,130" stroke="#facc15" stroke-width="2" stroke-dasharray="5 5" />
                  <rect x="300" y="110" width="6" height="40" fill="rgba(248,181,0,0.6)" />
                  <rect x="420" y="120" width="6" height="35" fill="rgba(248,181,0,0.6)" />
                  <text x="310" y="115" fill="#facc15" font-size="9">Promo launch</text>
                </svg>
              </div>
              <div class="chart-legend">
                <span class="legend-item"><span class="legend-dot" style="background:#f87171"></span>Open</span>
                <span class="legend-item"><span class="legend-dot" style="background:#4ade80"></span>Resolved</span>
                <span class="legend-item"><span class="legend-dot" style="background:#facc15"></span>Threshold</span>
              </div>
            </div>
            <div class="chart-card">
              <div class="card-header">Product Line Snapshot</div>
              <div class="chart-placeholder">
                <svg viewBox="0 0 600 200" width="100%" height="100%" preserveAspectRatio="none">
                  <line x1="0" y1="40" x2="600" y2="40" stroke="#334155" stroke-dasharray="4" />
                  <line x1="0" y1="80" x2="600" y2="80" stroke="#334155" stroke-dasharray="4" />
                  <line x1="0" y1="120" x2="600" y2="120" stroke="#334155" stroke-dasharray="4" />
                  <line x1="0" y1="160" x2="600" y2="160" stroke="#334155" stroke-dasharray="4" />
                  <rect x="40" y="95" width="50" height="65" fill="#38bdf8" rx="6" />
                  <rect x="140" y="70" width="50" height="90" fill="#34d399" rx="6" />
                  <rect x="240" y="50" width="50" height="110" fill="#f97316" rx="6" />
                  <rect x="340" y="80" width="50" height="80" fill="#a78bfa" rx="6" />
                  <rect x="440" y="105" width="50" height="55" fill="#f87171" rx="6" />
                  <rect x="540" y="85" width="50" height="75" fill="#22d3ee" rx="6" />
                  <path d="M65,95 L165,75 L265,55 L365,85 L465,110 L565,90" fill="none" stroke="#facc15"
                    stroke-width="2" stroke-dasharray="4 3" />
                  <circle cx="265" cy="55" r="4" fill="#facc15" />
                  <path d="M65,160 L165,150 L265,130 L365,135 L465,140 L565,145" fill="none" stroke="#94a3b8"
                    stroke-width="2" />
                  <circle cx="65" cy="95" r="3" fill="#38bdf8" />
                  <circle cx="165" cy="70" r="3" fill="#34d399" />
                  <circle cx="265" cy="50" r="3" fill="#f97316" />
                  <circle cx="365" cy="80" r="3" fill="#a78bfa" />
                  <circle cx="465" cy="105" r="3" fill="#f87171" />
                  <circle cx="565" cy="85" r="3" fill="#22d3ee" />
                  <text x="48" y="188" fill="#64748b" font-size="10">IDV</text>
                  <text x="148" y="188" fill="#64748b" font-size="10">Wallet</text>
                  <text x="248" y="188" fill="#64748b" font-size="10">Lending</text>
                  <text x="348" y="188" fill="#64748b" font-size="10">Risk API</text>
                  <text x="448" y="188" fill="#64748b" font-size="10">Payouts</text>
                  <text x="548" y="188" fill="#64748b" font-size="10">Trust</text>
                </svg>
              </div>
              <div class="chart-legend">
                <span class="legend-item"><span class="legend-dot" style="background:#f97316"></span>GMV</span>
                <span class="legend-item"><span class="legend-dot" style="background:#facc15"></span>Revenue</span>
                <span class="legend-item"><span class="legend-dot" style="background:#94a3b8"></span>Conversion</span>
              </div>
            </div>
          </div>
          <div class="regional-row">
            <div class="regional-card">
              <div class="reg-header">
                US & CANADA
                <span class="kpi-badge info">Opportunity</span>
              </div>
              <div class="reg-stat">Approval <span>97%</span></div>
              <div class="reg-stat">Fraud <span>8.0%</span></div>
              <div class="reg-stat">Volume <span>540k tx</span></div>
              <div class="reg-trend up">+4.0%</div>
              <div class="reg-note">Marketing push is adding clean shoppers.</div>
            </div>
            <div class="regional-card">
              <div class="reg-header">
                EUROPE
                <span class="kpi-badge warning">Watch</span>
              </div>
              <div class="reg-stat">Approval <span>94%</span></div>
              <div class="reg-stat">Fraud <span>11.0%</span></div>
              <div class="reg-stat">Volume <span>210k tx</span></div>
              <div class="reg-trend down">-2.1%</div>
              <div class="reg-note">Checkout experiment still stabilizing.</div>
            </div>
            <div class="regional-card">
              <div class="reg-header">
                LATIN AMERICA
                <span class="kpi-badge critical">Alert</span>
              </div>
              <div class="reg-stat">Approval <span>90%</span></div>
              <div class="reg-stat">Fraud <span>15.0%</span></div>
              <div class="reg-stat">Volume <span>190k tx</span></div>
              <div class="reg-trend up">+3.4%</div>
              <div class="reg-note">Chargebacks concentrated in Brazil.</div>
            </div>
            <div class="regional-card">
              <div class="reg-header">
                APAC
                <span class="kpi-badge neutral">Stable</span>
              </div>
              <div class="reg-stat">Approval <span>96%</span></div>
              <div class="reg-stat">Fraud <span>7.0%</span></div>
              <div class="reg-stat">Volume <span>260k tx</span></div>
              <div class="reg-trend up">+1.2%</div>
              <div class="reg-note">Cash-on-delivery pilot fully rolled out.</div>
            </div>
          </div>
        </div>
    `,strategy:`
        <div class="strategy-grid">
          <div class="dashboard-card strategy-card">
            <div class="strategy-header">
              <h3>Login Challenge Optimization</h3>
              <span class="impact-pill positive">+6% completion</span>
            </div>
            <p>Challenging only new IPs instead of all logins would reduce false positives by ~35% and improve login completion by ~6%.</p>
          </div>
          <div class="dashboard-card strategy-card">
            <div class="strategy-header">
              <h3>High Decline Threshold</h3>
              <span class="impact-pill positive">+2.5% approvals</span>
            </div>
            <p>Raising the fraud score threshold from <span class="code-ref">0.6 → 0.7</span> would recover ~2.5% approvals with &lt;0.05% fraud increase.</p>
          </div>
          <div class="dashboard-card strategy-card">
            <div class="strategy-header">
              <h3>Shorten the Checkout Experience</h3>
              <span class="impact-pill warning">5–8% completion lift</span>
            </div>
            <p>Your checkout takes 20–30% longer than comparable customers. Removing or auto-filling one optional step usually brings completion rates up by 5–8%.</p>
          </div>
          <div class="dashboard-card strategy-card">
            <div class="strategy-header">
              <h3>Vendor Load Balancing</h3>
              <span class="impact-pill info">+6% conversion</span>
            </div>
            <p>Vendor B handles ~80% of traffic. Routing new EU users to Vendor A first would drop this to ~40% and lift conversion by ~6%.</p>
          </div>
          <div class="dashboard-card strategy-card">
            <div class="strategy-header">
              <h3>3DS Exemption Strategy</h3>
              <span class="impact-pill positive">-25% friction</span>
            </div>
            <p>Enabling 3DS exemptions for low-risk returning users could remove friction for ~25% of customers and improve conversion by ~4%.</p>
          </div>
          <div class="dashboard-card strategy-card">
            <div class="strategy-header">
              <h3>Fill the Missing Decline Reason Code</h3>
              <span class="impact-pill neutral">Faster investigations</span>
            </div>
            <p>A large share of declines lacks a clear reason code. Other customers improved investigation speed by &gt;50% after adding a simple field indicating which rule or system made the decision.</p>
          </div>
        </div>
    `,investigation:`
        <div class="investigation-grid">
          <div class="chat-panel">
            <div class="chat-header">
              <h3>Investigation Copilot</h3>
              <p>Ask ad-hoc questions and let Minoris correlate telemetry, policies, and vendor data.</p>
            </div>
            <div class="chat-window">
              <div class="chat-message user" id="analysis-query-bubble">
                why did the approval rate in LATAM dropped last week?
              </div>
              <div class="chat-message bot">
                I’ll correlate regional approvals, vendor routing, and promo signals for you.
              </div>
              <div class="chat-hint">Use natural language prompts to investigate incidents on demand.</div>
            </div>
            <form id="analysis-form" class="analysis-form">
              <textarea id="analysis-input" rows="3">why did the approval rate in LATAM dropped last week?</textarea>
              <button type="submit" class="generate-button">Generate</button>
            </form>
          </div>
          <div class="analysis-panel">
            <div id="analysis-spinner" class="analysis-spinner hidden">
              <div class="spinner"></div>
              <span>Generating analysis...</span>
            </div>
            <div id="analysis-output" class="analysis-output hidden">
              <div class="cards-container">
                <div class="dashboard-card">
                  <h3 class="card-title">STEP 1: LATAM APPROVAL SEQUENCE</h3>
                  <p>Regional tracing shows approvals dipped 5.8 pts between Tue–Thu. Drop aligns with a vendor policy
                    tweak plus localized payment holiday in Brazil.</p>
                  <div class="chart-container" style="height: 170px;">
                    <div class="chart-annotation" style="left: 58%; top: 32%;">
                      <span class="annotation-icon">@</span> Vendor shift
                      <div class="annotation-arrow"></div>
                    </div>
                    <svg viewBox="0 0 420 150" width="100%" height="100%" preserveAspectRatio="none">
                      <line x1="0" y1="30" x2="420" y2="30" stroke="#334155" stroke-dasharray="4" />
                      <line x1="0" y1="70" x2="420" y2="70" stroke="#334155" stroke-dasharray="4" />
                      <line x1="0" y1="110" x2="420" y2="110" stroke="#334155" stroke-dasharray="4" />
                      <path d="M0,60 L60,58 L120,55 L180,70 L240,95 L300,92 L360,88 L420,80" fill="none"
                        stroke="#60a5fa" stroke-width="3" />
                      <circle cx="240" cy="95" r="4" fill="#f87171" />
                      <circle cx="360" cy="88" r="4" fill="#60a5fa" />
                      <circle cx="300" cy="92" r="4" fill="#60a5fa" />
                      <path d="M0,75 L420,75" stroke="#facc15" stroke-width="2" stroke-dasharray="6 4" />
                      <text x="0" y="140" fill="#64748b" font-size="10">Mon</text>
                      <text x="80" y="140" fill="#64748b" font-size="10">Tue</text>
                      <text x="160" y="140" fill="#64748b" font-size="10">Wed</text>
                      <text x="240" y="140" fill="#64748b" font-size="10">Thu</text>
                      <text x="320" y="140" fill="#64748b" font-size="10">Fri</text>
                      <text x="400" y="140" fill="#64748b" font-size="10">Sat</text>
                    </svg>
                  </div>
                  <ul class="analysis-list">
                    <li><strong>43% of declines</strong> tied to Sentinel step-up paths for gig riders.</li>
                    <li>Brazilian bank holiday added +220ms latency, causing abandonment.</li>
                    <li>Zephyr vendor would have cleared 78% of the rejected cohort.</li>
                  </ul>
                </div>
                <div class="dashboard-card">
                  <h3 class="card-title">STEP 2: SIGNAL CORRELATION</h3>
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon"></div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Promo cross-check</h4>
                      <p>Drop overlapped with <span class="code-ref">ride_latam_bonus</span> campaign. Promo traffic
                        skewed toward wallets with low trust scores.</p>
                    </div>
                  </div>
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon magic">✨</div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Automated remedy</h4>
                      <p>Copilot proposes rebalancing vendor mix (70% Zephyr / 30% Sentinel) and pre-approving promo
                        wallets that cleared biometric checks.</p>
                      <p class="success-text">🛡️ Projected recovery: +4.9 approval pts within 24h.</p>
                    </div>
                  </div>
                  <div class="analysis-actions">
                    <span class="action-pill">Throttle Sentinel in BR/AZ</span>
                    <span class="action-pill">Extend promo holdouts</span>
                    <span class="action-pill">Latency A/B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    `}},d=(l,i)=>{const e=document.querySelector(l);e&&(e.innerHTML=i.trim())};document.addEventListener("DOMContentLoaded",()=>{document.title=n.metaTitle,d(".sidebar",n.sidebar),d("#live-incidents",n.tabs.liveIncidents),d("#performance",n.tabs.performance),d("#strategy",n.tabs.strategy),d("#investigation",n.tabs.investigation),o(),p(),v()});const o=()=>{const l=document.querySelectorAll(".nav-item"),i=document.querySelectorAll(".tab-content");l.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),l.forEach(r=>r.classList.remove("active")),e.classList.add("active"),i.forEach(r=>r.classList.remove("active"));const s=e.getAttribute("data-tab"),a=s?document.getElementById(s):null;a&&a.classList.add("active")})})},p=()=>{document.querySelectorAll(".alert-header-row").forEach(i=>{i.addEventListener("click",()=>{const e=i.parentElement;if(!e)return;const t=e.classList.contains("active"),s=i.querySelector(".chevron");t?(e.classList.remove("active"),s&&(s.textContent="▶")):(e.classList.add("active"),s&&(s.textContent="▼"))})})},v=()=>{const l=document.getElementById("analysis-form"),i=document.getElementById("analysis-input"),e=document.getElementById("analysis-spinner"),t=document.getElementById("analysis-output"),s=document.getElementById("analysis-query-bubble");let a;!l||!i||!e||!t||!s||l.addEventListener("submit",r=>{r.preventDefault();const c=i.value.trim();c&&(s.textContent=c,e.classList.remove("hidden"),t.classList.add("hidden"),a&&window.clearTimeout(a),a=window.setTimeout(()=>{e.classList.add("hidden"),t.classList.remove("hidden")},1e3))})};
