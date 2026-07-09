/**
 * Timeline Block – Admin dashboard hero image.
 *
 * A fully self-contained SVG (no external fonts/assets) rendered as the
 * Overview banner via `media.thumbnail`. Authored as a template literal so it
 * stays human-readable, then exported as a URL-encoded data URI that works as
 * an `<img src>` inside the shared Overview component.
 *
 * Design mirrors the bPlugins product-hero style: dark indigo/blue gradient,
 * feature pills, stat counters and a browser mock-up showing a live timeline.
 */

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 520" fill="none" role="img" aria-label="Timeline Block">
  <defs>
    <style>text{font-family:'Inter','Segoe UI',system-ui,-apple-system,Roboto,Arial,sans-serif;}</style>

    <linearGradient id="tlBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2a1a6b"/>
      <stop offset="0.5" stop-color="#1a1a5e"/>
      <stop offset="1" stop-color="#0a1450"/>
    </linearGradient>
    <linearGradient id="tlTitle" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#c6d2ff"/>
    </linearGradient>
    <linearGradient id="tlAccent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0B81EE"/>
      <stop offset="1" stop-color="#8C74FD"/>
    </linearGradient>
    <linearGradient id="tlNum" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#a9b6ff"/>
      <stop offset="1" stop-color="#8C74FD"/>
    </linearGradient>
    <linearGradient id="tlProgress" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ff6a00"/>
      <stop offset="1" stop-color="#ee0979"/>
    </linearGradient>
    <filter id="tlBlur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="46"/>
    </filter>
    <filter id="tlShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="14" stdDeviation="20" flood-color="#04061f" flood-opacity="0.55"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="820" height="520" fill="url(#tlBg)"/>
  <circle cx="130" cy="80" r="210" fill="#6b46ff" opacity="0.28" filter="url(#tlBlur)"/>
  <circle cx="770" cy="470" r="190" fill="#0B81EE" opacity="0.30" filter="url(#tlBlur)"/>
  <circle cx="470" cy="30" r="140" fill="#ee0979" opacity="0.12" filter="url(#tlBlur)"/>

  <!-- ============ LEFT COLUMN ============ -->
  <!-- Badge -->
  <g transform="translate(48,40)">
    <rect width="198" height="34" rx="17" fill="#ffffff" opacity="0.09"/>
    <rect width="198" height="34" rx="17" fill="none" stroke="#ffffff" stroke-opacity="0.16"/>
    <rect x="11" y="9" width="16" height="16" rx="5" fill="url(#tlAccent)"/>
    <rect x="14.5" y="12.5" width="9" height="2.4" rx="1.2" fill="#fff"/>
    <rect x="14.5" y="16.3" width="9" height="2.4" rx="1.2" fill="#fff" opacity="0.7"/>
    <rect x="14.5" y="20.1" width="6" height="2.4" rx="1.2" fill="#fff" opacity="0.5"/>
    <text x="40" y="22" font-size="12" font-weight="700" letter-spacing="1.6" fill="#dfe4ff">TIMELINE BLOCK</text>
  </g>

  <!-- Title -->
  <text x="46" y="126" font-size="50" font-weight="800" letter-spacing="-1.5" fill="url(#tlTitle)">Timeline Block</text>
  <rect x="49" y="140" width="156" height="5" rx="2.5" fill="url(#tlProgress)"/>
  <text x="50" y="174" font-size="16.5" font-weight="500" fill="#aab4e8">Vertical <tspan fill="#7d88c4">·</tspan> Horizontal <tspan fill="#7d88c4">·</tspan> Responsive</text>

  <!-- Feature pills -->
  <g>
    <!-- row 1 -->
    <g transform="translate(48,198)">
      <rect width="168" height="42" rx="10" fill="#ffffff" opacity="0.06"/>
      <rect width="168" height="42" rx="10" fill="none" stroke="#ffffff" stroke-opacity="0.10"/>
      <rect x="13" y="9" width="24" height="24" rx="7" fill="#0B81EE"/>
      <g fill="#fff"><rect x="19" y="15" width="5" height="5" rx="1"/><rect x="26" y="15" width="5" height="5" rx="1"/><rect x="19" y="22" width="5" height="5" rx="1"/><rect x="26" y="22" width="5" height="5" rx="1"/></g>
      <text x="48" y="26" font-size="13" font-weight="600" fill="#e8ecff">Gutenberg Block</text>
    </g>
    <g transform="translate(228,198)">
      <rect width="168" height="42" rx="10" fill="#ffffff" opacity="0.06"/>
      <rect width="168" height="42" rx="10" fill="none" stroke="#ffffff" stroke-opacity="0.10"/>
      <rect x="13" y="9" width="24" height="24" rx="7" fill="#8C74FD"/>
      <path d="M23 15l-4 6 4 6M27 15l4 6-4 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <text x="48" y="26" font-size="13" font-weight="600" fill="#e8ecff">Shortcode</text>
    </g>
    <!-- row 2 -->
    <g transform="translate(48,252)">
      <rect width="168" height="42" rx="10" fill="#ffffff" opacity="0.06"/>
      <rect width="168" height="42" rx="10" fill="none" stroke="#ffffff" stroke-opacity="0.10"/>
      <rect x="13" y="9" width="24" height="24" rx="7" fill="#ee0979"/>
      <g fill="#fff"><circle cx="21" cy="19" r="2.6"/><circle cx="29" cy="19" r="2.6" opacity="0.8"/><circle cx="21" cy="27" r="2.6" opacity="0.8"/><circle cx="29" cy="27" r="2.6" opacity="0.6"/></g>
      <text x="48" y="26" font-size="13" font-weight="600" fill="#e8ecff">8+ Themes</text>
    </g>
    <g transform="translate(228,252)">
      <rect width="168" height="42" rx="10" fill="#ffffff" opacity="0.06"/>
      <rect width="168" height="42" rx="10" fill="none" stroke="#ffffff" stroke-opacity="0.10"/>
      <rect x="13" y="9" width="24" height="24" rx="7" fill="#06b6d4"/>
      <path d="M22 15l8 6-8 6z" fill="#fff"/>
      <text x="48" y="26" font-size="13" font-weight="600" fill="#e8ecff">Animation</text>
    </g>
    <!-- row 3 -->
    <g transform="translate(48,306)">
      <rect width="168" height="42" rx="10" fill="#ffffff" opacity="0.06"/>
      <rect width="168" height="42" rx="10" fill="none" stroke="#ffffff" stroke-opacity="0.10"/>
      <rect x="13" y="9" width="24" height="24" rx="7" fill="#ff6a00"/>
      <line x1="25" y1="14" x2="25" y2="28" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
      <circle cx="25" cy="16.5" r="2.4" fill="#fff"/><circle cx="25" cy="25.5" r="2.4" fill="#fff"/>
      <text x="48" y="26" font-size="13" font-weight="600" fill="#e8ecff">Vertical Layout</text>
    </g>
    <g transform="translate(228,306)">
      <rect width="168" height="42" rx="10" fill="#ffffff" opacity="0.06"/>
      <rect width="168" height="42" rx="10" fill="none" stroke="#ffffff" stroke-opacity="0.10"/>
      <rect x="13" y="9" width="24" height="24" rx="7" fill="#22c55e"/>
      <line x1="18" y1="21" x2="32" y2="21" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
      <circle cx="20.5" cy="21" r="2.4" fill="#fff"/><circle cx="29.5" cy="21" r="2.4" fill="#fff"/>
      <text x="48" y="26" font-size="13" font-weight="600" fill="#e8ecff">Horizontal Layout</text>
    </g>
  </g>

  <!-- Stats -->
  <g>
    <text x="48" y="388" font-size="30" font-weight="800" fill="url(#tlNum)">8+</text>
    <text x="48" y="406" font-size="11" font-weight="500" fill="#9aa4d8">Timeline Themes</text>
    <text x="170" y="388" font-size="30" font-weight="800" fill="url(#tlNum)">2</text>
    <text x="170" y="406" font-size="11" font-weight="500" fill="#9aa4d8">Layout Modes</text>
    <text x="292" y="388" font-size="30" font-weight="800" fill="url(#tlNum)">100%</text>
    <text x="292" y="406" font-size="11" font-weight="500" fill="#9aa4d8">Responsive</text>
  </g>

  <!-- Tag pills -->
  <g transform="translate(48,426)">
    <rect width="112" height="28" rx="14" fill="#ffffff" opacity="0.06"/>
    <rect width="112" height="28" rx="14" fill="none" stroke="#ffffff" stroke-opacity="0.12"/>
    <text x="20" y="19" font-size="12" font-weight="500" fill="#c8d0f5">Milestones</text>
    <rect x="124" width="96" height="28" rx="14" fill="#ffffff" opacity="0.06"/>
    <rect x="124" width="96" height="28" rx="14" fill="none" stroke="#ffffff" stroke-opacity="0.12"/>
    <text x="144" y="19" font-size="12" font-weight="500" fill="#c8d0f5">RTL Ready</text>
  </g>

  <!-- Fast & lightweight -->
  <g transform="translate(48,472)">
    <text x="0" y="10" font-size="10" font-weight="700" letter-spacing="1.4" fill="#8a94cc">FAST &amp; LIGHTWEIGHT</text>
    <g transform="translate(0,18)">
      <rect x="0" y="10" width="9" height="10" rx="2" fill="url(#tlAccent)" opacity="0.6"/>
      <rect x="13" y="6" width="9" height="14" rx="2" fill="url(#tlAccent)" opacity="0.75"/>
      <rect x="26" y="2" width="9" height="18" rx="2" fill="url(#tlAccent)" opacity="0.9"/>
      <rect x="39" y="8" width="9" height="12" rx="2" fill="url(#tlAccent)" opacity="0.7"/>
      <rect x="52" y="0" width="9" height="20" rx="2" fill="url(#tlAccent)"/>
    </g>
  </g>

  <!-- ============ RIGHT COLUMN : browser mock-up ============ -->
  <g filter="url(#tlShadow)">
    <rect x="452" y="56" width="336" height="300" rx="16" fill="#161038"/>
    <rect x="452" y="56" width="336" height="300" rx="16" fill="none" stroke="#ffffff" stroke-opacity="0.10"/>
  </g>
  <!-- browser chrome -->
  <circle cx="472" cy="78" r="4.5" fill="#ff5f57"/>
  <circle cx="488" cy="78" r="4.5" fill="#febc2e"/>
  <circle cx="504" cy="78" r="4.5" fill="#28c840"/>
  <rect x="536" y="70" width="236" height="17" rx="8.5" fill="#ffffff" opacity="0.08"/>
  <text x="556" y="82" font-size="10.5" fill="#aeb6e6">yoursite.com/timeline</text>
  <line x1="452" y1="98" x2="788" y2="98" stroke="#ffffff" stroke-opacity="0.08"/>

  <!-- timeline rail -->
  <rect x="539" y="116" width="4" height="222" rx="2" fill="#2a2660"/>
  <rect x="539" y="116" width="4" height="150" rx="2" fill="url(#tlProgress)"/>

  <!-- node 1 (active) -->
  <circle cx="541" cy="150" r="9" fill="#161038" stroke="url(#tlProgress)" stroke-width="3"/>
  <circle cx="541" cy="150" r="3.5" fill="#ff6a00"/>
  <rect x="470" y="139" width="52" height="22" rx="6" fill="url(#tlProgress)"/>
  <text x="496" y="154" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">2024</text>
  <rect x="560" y="124" width="212" height="60" rx="10" fill="#ffffff" opacity="0.10"/>
  <rect x="560" y="124" width="212" height="60" rx="10" fill="none" stroke="#8C74FD" stroke-opacity="0.55"/>
  <rect x="574" y="138" width="120" height="9" rx="4.5" fill="#ffffff" opacity="0.85"/>
  <rect x="574" y="155" width="184" height="6" rx="3" fill="#ffffff" opacity="0.35"/>
  <rect x="574" y="167" width="150" height="6" rx="3" fill="#ffffff" opacity="0.25"/>

  <!-- node 2 -->
  <circle cx="541" cy="240" r="7" fill="#161038" stroke="#5b62b8" stroke-width="2.5"/>
  <rect x="474" y="230" width="48" height="20" rx="6" fill="#ffffff" opacity="0.10"/>
  <text x="498" y="244" font-size="10.5" font-weight="600" fill="#c8d0f5" text-anchor="middle">2023</text>
  <rect x="560" y="226" width="212" height="30" rx="9" fill="#ffffff" opacity="0.05"/>
  <rect x="574" y="238" width="96" height="7" rx="3.5" fill="#ffffff" opacity="0.5"/>
  <rect x="676" y="238" width="70" height="7" rx="3.5" fill="#ffffff" opacity="0.28"/>

  <!-- node 3 -->
  <circle cx="541" cy="305" r="7" fill="#161038" stroke="#5b62b8" stroke-width="2.5"/>
  <rect x="474" y="295" width="48" height="20" rx="6" fill="#ffffff" opacity="0.10"/>
  <text x="498" y="309" font-size="10.5" font-weight="600" fill="#c8d0f5" text-anchor="middle">2022</text>
  <rect x="560" y="291" width="212" height="30" rx="9" fill="#ffffff" opacity="0.05"/>
  <rect x="574" y="303" width="110" height="7" rx="3.5" fill="#ffffff" opacity="0.5"/>
  <rect x="690" y="303" width="56" height="7" rx="3.5" fill="#ffffff" opacity="0.28"/>

  <!-- theme swatches -->
  <text x="452" y="382" font-size="10" font-weight="700" letter-spacing="1.2" fill="#8a94cc">8+ BEAUTIFUL THEMES</text>
  <g transform="translate(452,392)">
    <rect x="0" width="34" height="24" rx="6" fill="#0B81EE"/>
    <rect x="42" width="34" height="24" rx="6" fill="#8C74FD"/>
    <rect x="84" width="34" height="24" rx="6" fill="#ee0979"/>
    <rect x="126" width="34" height="24" rx="6" fill="#ff6a00"/>
    <rect x="168" width="34" height="24" rx="6" fill="#06b6d4"/>
    <rect x="210" width="34" height="24" rx="6" fill="#22c55e"/>
    <rect x="252" width="34" height="24" rx="6" fill="#f59e0b"/>
    <rect x="294" width="34" height="24" rx="6" fill="#ec4899"/>
  </g>

  <!-- feature mini cards -->
  <g transform="translate(452,428)">
    <rect width="160" height="64" rx="12" fill="#ffffff" opacity="0.06"/>
    <rect width="160" height="64" rx="12" fill="none" stroke="#ffffff" stroke-opacity="0.10"/>
    <rect x="16" y="18" width="28" height="28" rx="8" fill="url(#tlAccent)"/>
    <line x1="24" y1="32" x2="36" y2="32" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <circle cx="26" cy="32" r="2" fill="#fff"/><circle cx="34" cy="32" r="2" fill="#fff"/>
    <text x="54" y="30" font-size="12.5" font-weight="700" fill="#eef1ff">Horizontal Layout</text>
    <text x="54" y="46" font-size="10.5" fill="#9aa4d8">Vertical &amp; History</text>
  </g>
  <g transform="translate(628,428)">
    <rect width="160" height="64" rx="12" fill="#ffffff" opacity="0.06"/>
    <rect width="160" height="64" rx="12" fill="none" stroke="#ffffff" stroke-opacity="0.10"/>
    <rect x="16" y="18" width="28" height="28" rx="8" fill="url(#tlProgress)"/>
    <path d="M27 26l8 6-8 6z" fill="#fff"/>
    <text x="54" y="30" font-size="12.5" font-weight="700" fill="#eef1ff">Smooth Animation</text>
    <text x="54" y="46" font-size="10.5" fill="#9aa4d8">Clean transitions</text>
  </g>
</svg>`;

export const heroImage = `data:image/svg+xml,${encodeURIComponent(svg)}`;
