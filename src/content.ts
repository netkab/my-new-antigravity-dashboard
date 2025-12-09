export const content = {
  metaTitle: 'Minoris Dashboard',
  sidebar: `
      <div class="logo-area">
        <img src="./logo.png" alt="Minoris Logo" class="company-logo" />
        <span class="company-name">MINORIS.AI</span>
      </div>
      <nav class="sidebar-nav">
        <a href="#" class="nav-item active" data-tab="live-incidents">
          <span class="icon">⚡</span> Live Incidents
        </a>
        <a href="#" class="nav-item" data-tab="advanced-analytics">
          <span class="icon">🛡️</span> Fraud Posture
        </a>
        <a href="#" class="nav-item" data-tab="strategy">
          <span class="icon">🎯</span> Strategy
        </a>
        <a href="#" class="nav-item" data-tab="investigation">
          <span class="icon">👥</span> Investigation
        </a>
      </nav>
  `,
  tabs: {
    liveIncidents: `
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
    `,
    advancedAnalytics: `
        <div class="advanced-analytics">
          <div class="aa-header">
            <div>
              <div class="aa-eyebrow">Agent Insights</div>
              <h2 class="aa-title">Fraud Posture</h2>
              <p class="aa-subtitle">Deep dive into risk posture, projected fraud, and automation quality.</p>
            </div>
            <div class="aa-actions">
              <span class="aa-chip muted">Nov 1 - Nov 30</span>
              <button class="aa-chip">Filters</button>
            </div>
          </div>

          <div class="aa-kpi-grid">
            <div class="aa-kpi-card">
              <div class="aa-kpi-label-row">
                <div class="aa-kpi-label">Transaction Volume</div>
                <div class="aa-tooltip" aria-label="Transaction Volume tooltip">
                  <span class="aa-tooltip-trigger">i</span>
                  <div class="aa-tooltip-bubble">Total value of processed transactions. Projection blends seasonality and recent daily velocity.</div>
                </div>
              </div>
              <div class="aa-kpi-value-row">
                <span class="aa-kpi-value">$2.45M</span>
                <span class="aa-trend up">+12.5%</span>
              </div>
              <p class="aa-kpi-sub">Projected to close at $2.61M</p>
            </div>
            <div class="aa-kpi-card">
              <div class="aa-kpi-label-row">
                <div class="aa-kpi-label">Fraud Resiliency Score</div>
                <div class="aa-tooltip" aria-label="Fraud Resiliency tooltip">
                  <span class="aa-tooltip-trigger">i</span>
                  <div class="aa-tooltip-bubble">Composite of chargeback trend, model precision/recall, and rule coverage; 100 = strongest posture.</div>
                </div>
              </div>
              <div class="aa-kpi-value-row">
                <span class="aa-kpi-value">94 / 100</span>
                <span class="aa-trend up">+2.1%</span>
              </div>
              <p class="aa-kpi-sub">Composite risk posture</p>
            </div>
            <div class="aa-kpi-card">
              <div class="aa-kpi-label-row">
                <div class="aa-kpi-label">False Positive Rate</div>
                <div class="aa-tooltip" aria-label="False Positive tooltip">
                  <span class="aa-tooltip-trigger">i</span>
                  <div class="aa-tooltip-bubble">Share of good users declined and later cleared by step-up or manual review. Lower keeps revenue intact.</div>
                </div>
              </div>
              <div class="aa-kpi-value-row">
                <span class="aa-kpi-value accent">0.38%</span>
                <span class="aa-trend down">-0.05%</span>
              </div>
              <p class="aa-kpi-sub">Est. 125 good users saved</p>
            </div>
            <div class="aa-kpi-card">
              <div class="aa-kpi-label-row">
                <div class="aa-kpi-label">Agent Autonomy Score</div>
                <div class="aa-tooltip" aria-label="Agent Autonomy tooltip">
                  <span class="aa-tooltip-trigger">i</span>
                  <div class="aa-tooltip-bubble">Percent of decisions resolved without human review. High autonomy keeps latency down and teams focused.</div>
                </div>
              </div>
              <div class="aa-kpi-value-row">
                <span class="aa-kpi-value">98.2%</span>
                <span class="aa-trend up">+0.8%</span>
              </div>
              <p class="aa-kpi-sub">Decisions without manual review</p>
            </div>
          </div>

          <div class="aa-main-grid">
            <div class="aa-panel">
              <div class="aa-panel-head">
                <div>
                  <div class="aa-panel-title">Transaction Volume</div>
                  <p class="aa-panel-sub">Actuals vs projection</p>
                </div>
                <span class="aa-tag">Live</span>
              </div>
              <div class="aa-chart large">
                <svg viewBox="0 0 560 240" role="img" aria-label="Transaction volume and projection">
                  <defs>
                    <linearGradient id="aaVolumeBg" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stop-color="#0f172a" />
                      <stop offset="100%" stop-color="#0b1118" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="560" height="240" fill="url(#aaVolumeBg)" stroke="#1f2937" />
                  <g stroke="#1f2937" stroke-width="1" stroke-dasharray="4 4">
                    <line x1="50" y1="50" x2="520" y2="50" />
                    <line x1="50" y1="100" x2="520" y2="100" />
                    <line x1="50" y1="150" x2="520" y2="150" />
                    <line x1="50" y1="200" x2="520" y2="200" />
                  </g>
                  <g>
                    <rect x="60" y="70" width="40" height="130" rx="6" fill="#3b82f6" />
                    <rect x="140" y="50" width="40" height="150" rx="6" fill="#3b82f6" />
                    <rect x="220" y="42" width="40" height="158" rx="6" fill="#3b82f6" />
                    <rect x="300" y="60" width="40" height="140" rx="6" fill="#3b82f6" />
                    <rect x="380" y="28" width="40" height="172" rx="6" fill="#3b82f6" />
                  </g>
                  <polyline points="80,82 160,60 240,54 320,70 400,46" fill="none" stroke="#a78bfa" stroke-width="3" stroke-dasharray="5 4" />
                  <circle cx="80" cy="82" r="4" fill="#a78bfa" />
                  <circle cx="160" cy="60" r="4" fill="#a78bfa" />
                  <circle cx="240" cy="54" r="4" fill="#a78bfa" />
                  <circle cx="320" cy="70" r="4" fill="#a78bfa" />
                  <circle cx="400" cy="46" r="4" fill="#a78bfa" />
                  <text x="60" y="225" fill="#94a3b8" font-size="11">Nov 1</text>
                  <text x="140" y="225" fill="#94a3b8" font-size="11">Nov 8</text>
                  <text x="220" y="225" fill="#94a3b8" font-size="11">Nov 15</text>
                  <text x="300" y="225" fill="#94a3b8" font-size="11">Nov 22</text>
                  <text x="380" y="225" fill="#94a3b8" font-size="11">Nov 29</text>
                  <text x="430" y="75" fill="#3b82f6" font-size="11">Actuals</text>
                  <text x="430" y="95" fill="#a78bfa" font-size="11">Projection</text>
                </svg>
              </div>
            </div>
            <div class="aa-side-stack">
              <div class="aa-panel">
                <div class="aa-panel-head">
                  <div>
                    <div class="aa-panel-title">Fraud Rate Forecast</div>
                    <p class="aa-panel-sub">95% confidence band</p>
                  </div>
                  <span class="aa-tag subtle">Predictive</span>
                </div>
                <div class="aa-chart small">
                  <svg viewBox="0 0 300 180" role="img" aria-label="Fraud forecast">
                    <defs>
                      <linearGradient id="aaForecast" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stop-color="rgba(248,113,113,0.45)" />
                        <stop offset="100%" stop-color="rgba(248,113,113,0.05)" />
                      </linearGradient>
                    </defs>
                    <rect x="0" y="0" width="300" height="180" fill="#0b1118" stroke="#1f2937" />
                    <g stroke="#1f2937" stroke-width="1" stroke-dasharray="4 4">
                      <line x1="30" y1="40" x2="270" y2="40" />
                      <line x1="30" y1="80" x2="270" y2="80" />
                      <line x1="30" y1="120" x2="270" y2="120" />
                    </g>
                    <path d="M30,80 L90,95 L150,70 L210,75 L270,65 L270,115 L210,125 L150,140 L90,120 L30,135 Z" fill="url(#aaForecast)" />
                    <polyline points="30,90 90,105 150,82 210,90 270,78" fill="none" stroke="#f87171" stroke-width="2" />
                    <polyline points="30,70 90,85 150,60 210,68 270,55" fill="none" stroke="#f87171" stroke-width="2" stroke-dasharray="5 4" />
                    <circle cx="90" cy="105" r="3" fill="#f87171" />
                    <circle cx="150" cy="82" r="3" fill="#f87171" />
                    <circle cx="210" cy="90" r="3" fill="#f87171" />
                    <text x="36" y="165" fill="#94a3b8" font-size="10">Nov 1</text>
                    <text x="120" y="165" fill="#94a3b8" font-size="10">Nov 15</text>
                    <text x="210" y="165" fill="#94a3b8" font-size="10">Nov 29</text>
                  </svg>
                </div>
              </div>
              <div class="aa-panel aa-vintage">
                <div class="aa-panel-head">
                  <div>
                    <div class="aa-panel-title">Proj. Ultimate Fraud Rate</div>
                    <p class="aa-panel-sub">Cohort vintage trajectory</p>
                  </div>
                  <span class="aa-tag success">0.45%</span>
                </div>
                <div class="aa-vintage-body">
                  <div class="aa-vintage-metrics">
                    <div>
                      <p class="aa-label">Realized</p>
                      <p class="aa-value">0.09%</p>
                    </div>
                    <div>
                      <p class="aa-label">Delta</p>
                      <p class="aa-value warn">+0.02%</p>
                    </div>
                  </div>
                  <div class="aa-chart tiny">
                    <svg viewBox="0 0 320 70" role="img" aria-label="Vintage chart">
                      <polyline points="10,55 90,40 170,30 250,20 310,18" fill="none" stroke="#f87171" stroke-width="3" stroke-dasharray="5 4" />
                      <polyline points="10,55 90,50 170,48 250,46 310,44" fill="none" stroke="#f87171" stroke-width="3" />
                      <circle cx="90" cy="50" r="4" fill="#f87171" />
                      <circle cx="170" cy="48" r="4" fill="#f87171" />
                      <circle cx="250" cy="46" r="4" fill="#f87171" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="aa-region-section">
            <div class="aa-section-head">
              <div>
                <div class="aa-panel-title">Regional Intelligence</div>
                <p class="aa-panel-sub">Where to double down and where to defend.</p>
              </div>
              <span class="aa-chip muted">Agent-led</span>
            </div>
            <div class="aa-region-grid">
              <div class="aa-region-card opportunity">
                <div class="aa-region-top">
                  <span class="aa-region-name">US & Canada</span>
                  <span class="aa-region-pill">Optimization</span>
                </div>
                <p class="aa-region-note">Clean traffic increase from marketing push. Agent relaxed 3 velocity rules.</p>
                <div class="aa-region-metric">
                  <span>Approval Lift</span>
                  <span class="aa-metric-value up">+2.4%</span>
                </div>
              </div>
              <div class="aa-region-card watch">
                <div class="aa-region-top">
                  <span class="aa-region-name">Europe</span>
                  <span class="aa-region-pill">Monitoring</span>
                </div>
                <p class="aa-region-note">High 3DS failure rates in France. Agent rerouted 15% to alternate auth.</p>
                <div class="aa-region-metric">
                  <span>3DS Success</span>
                  <span class="aa-metric-value neutral">82.1%</span>
                </div>
              </div>
              <div class="aa-region-card alert">
                <div class="aa-region-top">
                  <span class="aa-region-name">Latin America</span>
                  <span class="aa-region-pill">Threat</span>
                </div>
                <p class="aa-region-note">Card testing attack detected in Brazil. 4,200 requests blocked.</p>
                <div class="aa-region-metric">
                  <span>Threats Blocked</span>
                  <span class="aa-metric-value warn">4,200</span>
                </div>
              </div>
              <div class="aa-region-card stable">
                <div class="aa-region-top">
                  <span class="aa-region-name">APAC</span>
                  <span class="aa-region-pill">Stable</span>
                </div>
                <p class="aa-region-note">No significant anomalies. Payment mix holding seasonal baseline.</p>
                <div class="aa-region-metric">
                  <span>Fraud Rate</span>
                  <span class="aa-metric-value">0.08%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="aa-bottom-grid">
            <div class="aa-panel">
              <div class="aa-panel-head">
                <div>
                  <div class="aa-panel-title">Fraud Rate by Product</div>
                  <p class="aa-panel-sub">Percent of traffic flagged by product line.</p>
                </div>
              </div>
              <div class="aa-chart medium">
                <svg viewBox="0 0 520 220" role="img" aria-label="Fraud rate by product">
                  <rect x="0" y="0" width="520" height="220" fill="#0b1118" stroke="#1f2937" />
                  <g stroke="#1f2937" stroke-dasharray="4 4">
                    <line x1="80" y1="50" x2="480" y2="50" />
                    <line x1="80" y1="100" x2="480" y2="100" />
                    <line x1="80" y1="150" x2="480" y2="150" />
                  </g>
                  <rect x="120" y="120" width="50" height="80" rx="6" fill="#ef4444" />
                  <rect x="220" y="60" width="50" height="140" rx="6" fill="#ef4444" />
                  <rect x="320" y="40" width="50" height="160" rx="6" fill="#ef4444" />
                  <rect x="420" y="90" width="50" height="110" rx="6" fill="#ef4444" />
                  <text x="122" y="210" fill="#94a3b8" font-size="11">Checking</text>
                  <text x="222" y="210" fill="#94a3b8" font-size="11">Savings</text>
                  <text x="330" y="210" fill="#94a3b8" font-size="11">Lending</text>
                  <text x="428" y="210" fill="#94a3b8" font-size="11">Crypto</text>
                </svg>
              </div>
            </div>
            <div class="aa-panel">
              <div class="aa-panel-head">
                <div>
                  <div class="aa-panel-title">Agent Workflow & Recovery</div>
                  <p class="aa-panel-sub">Automation vs human review</p>
                </div>
                <span class="aa-tag subtle">Stacked</span>
              </div>
              <div class="aa-chart medium">
                <svg viewBox="0 0 520 220" role="img" aria-label="Agent workflow">
                  <rect x="0" y="0" width="520" height="220" fill="#0b1118" stroke="#1f2937" />
                  <g stroke="#1f2937" stroke-dasharray="4 4">
                    <line x1="60" y1="60" x2="480" y2="60" />
                    <line x1="60" y1="110" x2="480" y2="110" />
                    <line x1="60" y1="160" x2="480" y2="160" />
                  </g>
                  <polyline points="60,170 140,165 220,155 300,150 380,140 460,135" fill="#6366f1" stroke="#6366f1" stroke-width="0" opacity="0.25" />
                  <polyline points="60,150 140,142 220,136 300,132 380,128 460,122" fill="none" stroke="#6366f1" stroke-width="3" />
                  <polyline points="60,180 140,172 220,168 300,165 380,160 460,154" fill="none" stroke="#10b981" stroke-width="3" />
                  <polyline points="60,190 140,188 220,186 300,184 380,182 460,180" fill="none" stroke="#94a3b8" stroke-width="3" stroke-dasharray="5 4" />
                  <circle cx="220" cy="136" r="4" fill="#6366f1" />
                  <circle cx="300" cy="132" r="4" fill="#6366f1" />
                  <circle cx="380" cy="160" r="4" fill="#10b981" />
                  <text x="80" y="205" fill="#94a3b8" font-size="11">Nov 1</text>
                  <text x="200" y="205" fill="#94a3b8" font-size="11">Nov 15</text>
                  <text x="360" y="205" fill="#94a3b8" font-size="11">Nov 29</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
    `,
    strategy: `
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
    `,
    investigation: `
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
    `
  }
};
