(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function i(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(s){if(s.ep)return;s.ep=!0;const e=i(s);fetch(s.href,e)}})();const y={metaTitle:"Minoris Dashboard",sidebar:`
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
                    <span class="clock-icon">🕒</span> Sudden 8× velocity spike in BR registrations.
                  </div>
                </div>
                <div class="dashboard-card">
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
              <span class="alert-title">Alert #904: Vendor Signal Dissonance</span>
              <div class="alert-badges">
                <span class="badge critical"
                  style="color: #ff4d4d; background: rgba(255, 77, 77, 0.1); padding: 2px 8px; border-radius: 4px; font-size: 0.8em; margin-left: 10px;">High
                  Impact</span>
              </div>
            </div>
            <div class="alert-body">
              <div class="cards-container">
                <div class="dashboard-card">
                  <div class="chart-container" style="height: 220px;">
                    <div class="chart-annotation" style="left: 64%; top: 22%;">
                      <span class="annotation-icon">@</span> Conflict cluster
                      <div class="annotation-arrow"></div>
                    </div>
                    <svg viewBox="0 0 420 210" width="100%" height="100%" preserveAspectRatio="none"
                      class="chart-interactive"
                      data-points="60,146,14:05,Trust 0.62 | Risk 0.18|140,132,14:10,Trust 0.74 | Risk 0.22|220,118,14:15,Trust 0.88 | Risk 0.30|300,104,14:20,Trust 0.94 | Risk 0.72|360,96,14:25,Trust 0.97 | Risk 0.88">
                      <defs>
                        <linearGradient id="riskBand904" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stop-color="rgba(248,113,113,0.16)" />
                          <stop offset="100%" stop-color="rgba(248,113,113,0.03)" />
                        </linearGradient>
                        <linearGradient id="trustBand904" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stop-color="rgba(52,211,153,0.12)" />
                          <stop offset="100%" stop-color="rgba(52,211,153,0.02)" />
                        </linearGradient>
                      </defs>
                      <rect x="20" y="18" width="380" height="174" fill="#0f172a" stroke="#1f2937" />
                      <rect x="220" y="18" width="180" height="174" fill="url(#riskBand904)" />
                      <rect x="20" y="18" width="200" height="174" fill="url(#trustBand904)" />
                      <line x1="20" y1="60" x2="400" y2="60" stroke="#1f2937" />
                      <line x1="20" y1="100" x2="400" y2="100" stroke="#1f2937" />
                      <line x1="20" y1="140" x2="400" y2="140" stroke="#1f2937" />
                      <line x1="100" y1="18" x2="100" y2="192" stroke="#1f2937" />
                      <line x1="220" y1="18" x2="220" y2="192" stroke="#1f2937" />
                      <line x1="340" y1="18" x2="340" y2="192" stroke="#1f2937" />
                      <polyline points="60,146 140,132 220,118 300,104 360,96" fill="none"
                        stroke="#34d399" stroke-width="3" />
                      <polyline points="60,78 140,72 220,70 300,62 360,58" fill="none" stroke="#f87171"
                        stroke-width="3" />
                      <circle cx="220" cy="118" r="5" fill="#34d399" stroke="#0f172a" stroke-width="2" />
                      <circle cx="220" cy="70" r="5" fill="#f87171" stroke="#0f172a" stroke-width="2" />
                      <circle cx="360" cy="96" r="5" fill="#34d399" stroke="#0f172a" stroke-width="2" />
                      <circle cx="360" cy="58" r="5" fill="#f87171" stroke="#0f172a" stroke-width="2" />
                      <rect x="240" y="36" width="140" height="60" fill="rgba(248,113,113,0.1)" stroke="#f87171"
                        stroke-dasharray="5 4" />
                      <text x="310" y="204" fill="#94a3b8" font-size="10">Time →</text>
                      <circle class="chart-cursor hidden" cx="0" cy="0" r="6"></circle>
                      <line class="chart-hover-line hidden" x1="0" y1="20" x2="0" y2="190"></line>
                      <rect class="chart-hit-area" x="0" y="0" width="420" height="210" fill="transparent"></rect>
                    </svg>
                  </div>
                  <div class="card-footer">
                    <span class="clock-icon">🕒</span> 150+ apps passed IDV but failed behavioral scoring.
                  </div>
                </div>
                <div class="dashboard-card">
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon"></div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Signal Conflict Detected</h4>
                      <p><span class="code-ref">ID_Verification_Provider</span> returned "Verified" while
                        <span class="code-ref">Behavioral_Score_API</span> flagged Bot Probability &gt; 90%.</p>
                    </div>
                  </div>
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon magic">✨</div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Root Cause Analysis</h4>
                      <p>Synthetic identities pass document checks but input telemetry reveals non-human typing cadences
                        (0ms keystroke flight time).</p>
                    </div>
                  </div>
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon magic">✨</div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Automated Action</h4>
                      <p>Rule <span class="code-ref">resolve_conflict_v2</span> forced active liveness (3D face map) for this cohort.</p>
                      <p class="success-text">🛡️ 142 synthetic accounts blocked; 8 real users verified via step-up.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="alert-item">
            <div class="alert-header-row">
              <span class="chevron">▶</span>
              <span class="alert-title">Alert #811: Drop in approval rate (EU)</span>
              <div class="alert-badges">
                <span class="badge warning"
                  style="color: #fbbf24; background: rgba(251, 191, 36, 0.1); padding: 2px 8px; border-radius: 4px; font-size: 0.8em; margin-left: 10px;">Medium
                  Impact</span>
              </div>
            </div>
            <div class="alert-body">
              <div class="cards-container">
                <div class="dashboard-card">
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
                <div class="dashboard-card">
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon"></div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Symptoms observed</h4>
                      <p>Drop localized to PayPal + Klarna while fraud rate stayed flat, suggesting UI/regression issues.</p>
                    </div>
                  </div>
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon magic">✨</div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Technical root cause</h4>
                      <p><span class="code-ref">checkout_flow_v3</span> added an extra verification prompt, spiking latency 20%.</p>
                      <p class="success-text">🛡️ Rollback &amp; A/B test plan ready; expect 4–5 pts approval recovery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="alert-item">
            <div class="alert-header-row">
              <span class="chevron">▶</span>
              <span class="alert-title">Alert #912: Automated Traffic Classification</span>
              <div class="alert-badges">
                <span class="badge warning"
                  style="color: #fbbf24; background: rgba(251, 191, 36, 0.1); padding: 2px 8px; border-radius: 4px; font-size: 0.8em; margin-left: 10px;">Medium
                  Impact</span>
              </div>
            </div>
            <div class="alert-body">
              <div class="cards-container">
                <div class="dashboard-card">
                  <div class="chart-container" style="height: 190px;">
                    <div class="chart-annotation" style="left: 58%; top: 20%;">
                      <span class="annotation-icon">@</span> Traffic reclassified
                      <div class="annotation-arrow"></div>
                    </div>
                    <svg viewBox="0 0 420 170" width="100%" height="100%" preserveAspectRatio="none"
                      class="chart-interactive"
                      data-points="40,125,14:00,Blocked 1.1k|120,118,14:05,Blocked 1.4k|200,110,14:10,Blocked 1.9k|260,65,14:15,Reclassified 2.6k|320,82,14:20,Allowed 2.9k|360,102,14:25,Allowed 3.1k|400,118,14:30,Allowed 3.3k">
                      <defs>
                        <linearGradient id="trafficBlockArea912" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stop-color="rgba(248,113,113,0.24)" />
                          <stop offset="100%" stop-color="rgba(248,113,113,0.05)" />
                        </linearGradient>
                        <linearGradient id="trafficAllowArea912" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stop-color="rgba(52,211,153,0.2)" />
                          <stop offset="100%" stop-color="rgba(52,211,153,0.04)" />
                        </linearGradient>
                      </defs>
                      <rect x="0" y="0" width="260" height="150" fill="url(#trafficBlockArea912)" />
                      <rect x="260" y="0" width="160" height="150" fill="url(#trafficAllowArea912)" />
                      <line x1="0" y1="120" x2="420" y2="120" stroke="#fbbf24" stroke-dasharray="5 5" />
                      <text x="6" y="115" fill="#fbbf24" font-size="10">Normal threshold</text>
                      <polyline points="40,125 120,118 200,110 260,65" fill="none" stroke="#f87171" stroke-width="3" />
                      <polyline points="260,65 320,82 360,102 400,118" fill="none" stroke="#34d399" stroke-width="3" />
                      <circle cx="200" cy="110" r="5" fill="#f87171" stroke="#0f172a" stroke-width="2" />
                      <circle cx="260" cy="65" r="6" fill="#34d399" stroke="#0f172a" stroke-width="2" />
                      <circle cx="360" cy="102" r="5" fill="#34d399" stroke="#0f172a" stroke-width="2" />
                      <line class="chart-hover-line hidden" x1="0" y1="10" x2="0" y2="150"></line>
                      <circle class="chart-cursor hidden" cx="0" cy="0" r="6"></circle>
                      <rect class="chart-hit-area" x="0" y="0" width="420" height="170" fill="transparent"></rect>
                      <text x="18" y="162" fill="#94a3b8" font-size="10">14:00</text>
                      <text x="210" y="162" fill="#94a3b8" font-size="10">14:15</text>
                      <text x="360" y="162" fill="#94a3b8" font-size="10">14:30</text>
                    </svg>
                  </div>
                  <div class="card-footer">
                    <span class="clock-icon">🕒</span> 500% spike on Checkout API initially flagged as DDoS/Scraping.
                  </div>
                </div>
                <div class="dashboard-card">
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon"></div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Behavioral Analysis</h4>
                      <p>Velocity exceeded human thresholds (sub-200ms checkout flow) and triggered
                        <span class="code-ref">WAF_rate_limiter</span>.</p>
                    </div>
                  </div>
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon magic">✨</div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Agentic Intent Verification</h4>
                      <p><span class="code-ref">User_Journey_Analyzer</span> confirmed valid tokens and purchase intent
                        matching "ShopMate AI" signatures.</p>
                    </div>
                  </div>
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon magic">✨</div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Automated Action</h4>
                      <p>Traffic re-classified from "Malicious Bot" to "Authorized Agent" and dynamic allow-list applied
                        for <span class="code-ref">Agent_Session_ID</span> pattern.</p>
                      <p class="success-text">💎 $12k in legitimate autonomous revenue preserved; zero friction added.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="alert-item">
            <div class="alert-header-row">
              <span class="chevron">▶</span>
              <span class="alert-title">Alert #945: Regional Sign-up Anomaly (Brazil)</span>
              <div class="alert-badges">
                <span class="badge info"
                  style="color: #60a5fa; background: rgba(96, 165, 250, 0.1); padding: 2px 8px; border-radius: 4px; font-size: 0.8em; margin-left: 10px;">Low
                  Impact</span>
              </div>
            </div>
            <div class="alert-body">
              <div class="cards-container">
                <div class="dashboard-card">
                  <div class="chart-container" style="height: 190px;">
                    <div class="chart-annotation" style="left: 70%; top: 16%;">
                      <span class="annotation-icon">@</span> Campaign launch
                      <div class="annotation-arrow"></div>
                    </div>
                    <svg viewBox="0 0 420 170" width="100%" height="100%" preserveAspectRatio="none"
                      class="chart-interactive"
                      data-points="30,142,13:00,120 regs|100,134,13:15,210 regs|170,122,13:30,320 regs|230,106,13:45,480 regs|280,88,14:00,750 regs|330,68,14:15,960 regs|370,52,14:30,1100 regs|400,44,14:45,1250 regs">
                      <defs>
                        <linearGradient id="signupAreaBR" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stop-color="rgba(249,115,22,0.32)"></stop>
                          <stop offset="100%" stop-color="rgba(249,115,22,0.06)"></stop>
                        </linearGradient>
                      </defs>
                      <rect x="20" y="10" width="380" height="150" fill="#0f172a" stroke="#1f2937" />
                      <line x1="20" y1="130" x2="400" y2="130" stroke="#334155" stroke-dasharray="4 6" />
                      <line x1="20" y1="100" x2="400" y2="100" stroke="#334155" stroke-dasharray="4 6" />
                      <line x1="20" y1="70" x2="400" y2="70" stroke="#334155" stroke-dasharray="4 6" />
                      <line x1="260" y1="10" x2="260" y2="160" stroke="#f59e0b" stroke-dasharray="5 4" />
                      <text x="266" y="22" fill="#f59e0b" font-size="10">High_Volume_Launch_Mode</text>
                      <path d="M30,142 L100,134 L170,122 L230,106 L280,88 L330,68 L370,52 L400,44 L400,170 L30,170 Z"
                        fill="url(#signupAreaBR)" stroke="none" />
                      <polyline points="30,142 100,134 170,122 230,106 280,88 330,68 370,52 400,44" fill="none"
                        stroke="#f97316" stroke-width="3" />
                      <circle cx="230" cy="106" r="5" fill="#f97316" stroke="#0f172a" stroke-width="2" />
                      <circle cx="330" cy="68" r="5" fill="#f97316" stroke="#0f172a" stroke-width="2" />
                      <circle cx="400" cy="44" r="5" fill="#f97316" stroke="#0f172a" stroke-width="2" />
                      <line class="chart-hover-line hidden" x1="0" y1="10" x2="0" y2="160"></line>
                      <circle class="chart-cursor hidden" cx="0" cy="0" r="6"></circle>
                      <rect class="chart-hit-area" x="0" y="0" width="420" height="170" fill="transparent"></rect>
                      <text x="30" y="162" fill="#94a3b8" font-size="10">13:00</text>
                      <text x="220" y="162" fill="#94a3b8" font-size="10">13:45</text>
                      <text x="360" y="162" fill="#94a3b8" font-size="10">14:45</text>
                    </svg>
                  </div>
                  <div class="card-footer">
                    <span class="clock-icon">🕒</span> Fraud spike aligned perfectly with Promo Code deployment at
                    14:00.
                  </div>
                </div>
                <div class="dashboard-card">
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon"></div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Symptoms Observed</h4>
                      <p>Geo-velocity thresholds breached; system prepared to engage
                        <span class="code-ref">Geo_Block_Protocol</span>.</p>
                    </div>
                  </div>
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon magic">✨</div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Contextual Correlation</h4>
                      <p>Spike aligned with <span class="code-ref">Marketing_Campaign_LATAM_Influencer</span> launch.</p>
                    </div>
                  </div>
                  <div class="diagnosis-item">
                    <div class="diagnosis-icon-container">
                      <div class="diagnosis-icon magic">✨</div>
                    </div>
                    <div class="diagnosis-content">
                      <h4>Automated Action</h4>
                      <p>Auto-suppressed block and switched profile to
                        <span class="code-ref">High_Volume_Launch_Mode</span> (higher tolerance, strict email domain checks).</p>
                      <p class="success-text">✅ 2,500 new users onboarded without friction.</p>
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
              <p>Investigate specific segments, trends or KPIs</p>
            </div>
            <div class="chat-window">
              <div class="chat-message user" id="analysis-query-bubble">
                why did the approval rate in LATAM dropped last week?
              </div>
              <div class="chat-message bot">
                I’ll analyze the root cause across the entire system
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
    `}},x=(d,a)=>{const i=document.querySelector(d);i&&(i.innerHTML=a.trim())};document.addEventListener("DOMContentLoaded",()=>{document.title=y.metaTitle,x(".sidebar",y.sidebar),x("#live-incidents",y.tabs.liveIncidents),x("#performance",y.tabs.performance),x("#strategy",y.tabs.strategy),x("#investigation",y.tabs.investigation),k(),b(),w(),A(),L()});const k=()=>{const d=document.querySelectorAll(".nav-item"),a=document.querySelectorAll(".tab-content");d.forEach(i=>{i.addEventListener("click",n=>{n.preventDefault(),d.forEach(t=>t.classList.remove("active")),i.classList.add("active"),a.forEach(t=>t.classList.remove("active"));const s=i.getAttribute("data-tab"),e=s?document.getElementById(s):null;e&&e.classList.add("active")})})},b=()=>{document.querySelectorAll(".alert-header-row").forEach(a=>{a.addEventListener("click",()=>{const i=a.parentElement;if(!i)return;const n=i.classList.contains("active"),s=a.querySelector(".chevron");n?(i.classList.remove("active"),s&&(s.textContent="▶")):(i.classList.add("active"),s&&(s.textContent="▼"))})})},L=()=>{document.querySelectorAll("#live-incidents .alert-body").forEach(a=>{if(a.querySelector(".incident-action-stack"))return;const i=document.createElement("div");i.className="incident-action-stack";const n=document.createElement("div");n.className="incident-actions";const s=document.createElement("button");s.type="button",s.className="incident-btn acknowledge",s.textContent="Acknowledge";const e=document.createElement("button");e.type="button",e.className="incident-btn dismiss",e.textContent="Dismiss",n.appendChild(s),n.appendChild(e);const t=document.createElement("form");t.className="decision-form hidden",t.dataset.action="Acknowledge";const o=document.createElement("div");o.className="decision-label",o.textContent="Add note for Acknowledge";const c=document.createElement("textarea");c.className="decision-note",c.placeholder="Log the context behind this decision...";const h=document.createElement("button");h.type="submit",h.className="submit-btn",h.textContent="Submit";const v=document.createElement("div");v.className="form-status hidden",v.textContent="Decision recorded.",t.append(o,c,h,v),i.append(n,t);const r=a.querySelector(".cards-container");r?r.insertAdjacentElement("afterend",i):a.appendChild(i);const f=l=>{t.dataset.action=l,o.textContent=`Add note for ${l}`,c.placeholder=l==="Acknowledge"?"What context led to acknowledging this incident?":"Why should this be dismissed? Include guardrails.",t.classList.remove("hidden"),v.classList.add("hidden"),c.focus()};s.addEventListener("click",()=>f("Acknowledge")),e.addEventListener("click",()=>f("Dismiss")),t.addEventListener("submit",l=>{l.preventDefault();const g=t.dataset.action||"Acknowledge",p=c.value.trim();v.textContent=p?`${g} logged with note: "${p}"`:`${g} logged.`,v.classList.remove("hidden"),c.value=""})})},w=()=>{const d=document.getElementById("analysis-form"),a=document.getElementById("analysis-input"),i=document.getElementById("analysis-spinner"),n=document.getElementById("analysis-output"),s=document.getElementById("analysis-query-bubble");let e;!d||!a||!i||!n||!s||d.addEventListener("submit",t=>{t.preventDefault();const o=a.value.trim();o&&(s.textContent=o,i.classList.remove("hidden"),n.classList.add("hidden"),e&&window.clearTimeout(e),e=window.setTimeout(()=>{i.classList.add("hidden"),n.classList.remove("hidden")},1e3))})},A=()=>{document.querySelectorAll(".chart-interactive").forEach(a=>{const i=a.dataset.points;if(!i)return;const n=a.querySelector(".chart-cursor"),s=a.querySelector(".chart-hover-line"),e=a.querySelector(".chart-hit-area"),t=a.closest(".chart-container")?.querySelector('[data-role="chart-value"]');if(!n||!s||!e)return;const o=t?.textContent??"",c=i.split("|").map(r=>{const[f,l,g="",p=""]=r.split(","),u=Number(f),m=Number(l);return{x:u,y:m,label:g,value:p}}).filter(r=>!Number.isNaN(r.x)&&!Number.isNaN(r.y));if(!c.length)return;const h=r=>{n.setAttribute("cx",r.x.toString()),n.setAttribute("cy",r.y.toString()),s.setAttribute("x1",r.x.toString()),s.setAttribute("x2",r.x.toString()),s.setAttribute("y1","20"),s.setAttribute("y2","190"),t&&(t.textContent=`${r.label} → ${r.value}`)},v=r=>{const f=a.getBoundingClientRect(),l=r-f.left,g=c.reduce((p,u)=>{const m=Math.abs(p.x-l);return Math.abs(u.x-l)<m?u:p});n.classList.remove("hidden"),s.classList.remove("hidden"),h(g)};e.addEventListener("pointerenter",r=>v(r.clientX)),e.addEventListener("pointermove",r=>v(r.clientX)),a.addEventListener("pointerleave",()=>{n.classList.add("hidden"),s.classList.add("hidden"),t&&(t.textContent=o)})})};
