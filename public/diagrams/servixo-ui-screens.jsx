import { useState } from "react";

const theme = {
  primary: "#1A56DB",
  primaryDark: "#1040B0",
  primaryLight: "#EBF2FF",
  accent: "#F97316",
  accentLight: "#FFF4ED",
  success: "#10B981",
  danger: "#EF4444",
  warning: "#F59E0B",
  bg: "#F8FAFF",
  surface: "#FFFFFF",
  surfaceAlt: "#F1F5FD",
  border: "#DDE5F4",
  text: "#0F172A",
  textSec: "#475569",
  textMuted: "#94A3B8",
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:'Plus Jakarta Sans',sans-serif; background:#E8EDF7; display:flex; justify-content:center; align-items:flex-start; min-height:100vh; padding:24px; }
  
  .app-shell { width:100%; max-width:960px; }
  .grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:24px; }
  
  .phone { width:280px; height:580px; background:#fff; border-radius:36px; box-shadow:0 20px 60px rgba(26,86,219,0.15),0 4px 16px rgba(0,0,0,0.08); overflow:hidden; display:flex; flex-direction:column; position:relative; border:1px solid rgba(26,86,219,0.1); }
  .phone-label { font-family:'Plus Jakarta Sans',sans-serif; font-size:11px; font-weight:700; color:#1A56DB; text-transform:uppercase; letter-spacing:1.5px; margin-bottom:8px; }
  .screen-wrap { display:flex; flex-direction:column; align-items:center; }

  .status-bar { height:28px; background:inherit; display:flex; align-items:center; justify-content:space-between; padding:0 20px; flex-shrink:0; }
  .status-bar span { font-size:10px; font-weight:700; }
  .notch { width:80px; height:16px; background:#0F172A; border-radius:0 0 12px 12px; position:absolute; top:0; left:50%; transform:translateX(-50%); }
  
  .scroll-area { flex:1; overflow:hidden; display:flex; flex-direction:column; }
  
  /* Splash */
  .splash { background:linear-gradient(160deg,#1040B0 0%,#1A56DB 50%,#2D6FEC 100%); height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:0; padding:32px 24px; }
  .splash-logo { width:72px; height:72px; background:rgba(255,255,255,0.15); border-radius:20px; display:flex; align-items:center; justify-content:center; margin-bottom:20px; border:1.5px solid rgba(255,255,255,0.25); }
  .splash-logo svg { width:40px; height:40px; }
  .splash h1 { font-size:28px; font-weight:800; color:#fff; margin-bottom:6px; letter-spacing:-0.5px; }
  .splash p { font-size:13px; color:rgba(255,255,255,0.7); text-align:center; line-height:1.5; margin-bottom:40px; }
  .ob-dots { display:flex; gap:6px; margin-bottom:32px; }
  .ob-dot { width:6px; height:6px; border-radius:3px; background:rgba(255,255,255,0.3); }
  .ob-dot.active { width:20px; background:#fff; }
  .ob-art { width:160px; height:130px; background:rgba(255,255,255,0.08); border-radius:20px; margin-bottom:32px; display:flex; align-items:center; justify-content:center; border:1px solid rgba(255,255,255,0.15); }
  .btn-white { background:#fff; color:#1A56DB; border:none; border-radius:14px; padding:14px 0; width:100%; font-size:14px; font-weight:700; cursor:pointer; font-family:inherit; }
  .btn-ghost { background:transparent; color:rgba(255,255,255,0.7); border:1.5px solid rgba(255,255,255,0.25); border-radius:14px; padding:12px 0; width:100%; font-size:14px; font-weight:600; cursor:pointer; font-family:inherit; margin-top:10px; }

  /* Auth */
  .auth-top { background:linear-gradient(160deg,#1040B0,#1A56DB); padding:32px 24px 28px; }
  .auth-top h2 { font-size:22px; font-weight:800; color:#fff; margin-bottom:4px; }
  .auth-top p { font-size:12px; color:rgba(255,255,255,0.7); }
  .tab-row { display:flex; background:rgba(255,255,255,0.15); border-radius:10px; padding:3px; margin-top:16px; }
  .tab { flex:1; text-align:center; padding:8px; border-radius:8px; font-size:12px; font-weight:600; color:rgba(255,255,255,0.6); cursor:pointer; }
  .tab.active { background:#fff; color:#1A56DB; }
  .auth-body { padding:20px 20px 0; flex:1; }
  .field-label { font-size:11px; font-weight:600; color:#475569; margin-bottom:6px; margin-top:14px; }
  .field { width:100%; border:1.5px solid #DDE5F4; border-radius:10px; padding:11px 14px; font-size:13px; font-family:inherit; color:#0F172A; background:#F8FAFF; outline:none; }
  .field:focus { border-color:#1A56DB; }
  .btn-primary { background:#1A56DB; color:#fff; border:none; border-radius:12px; padding:13px 0; width:100%; font-size:14px; font-weight:700; cursor:pointer; font-family:inherit; margin-top:16px; }
  .or-row { display:flex; align-items:center; gap:10px; margin:14px 0; }
  .or-line { flex:1; height:1px; background:#DDE5F4; }
  .or-text { font-size:11px; color:#94A3B8; font-weight:500; }
  .social-row { display:flex; gap:10px; }
  .social-btn { flex:1; border:1.5px solid #DDE5F4; border-radius:10px; padding:10px; display:flex; align-items:center; justify-content:center; gap:6px; font-size:12px; font-weight:600; color:#475569; cursor:pointer; background:#fff; font-family:inherit; }

  /* Home */
  .home-header { background:linear-gradient(160deg,#1040B0,#1A56DB); padding:20px 20px 24px; }
  .home-header-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; }
  .avatar-sm { width:34px; height:34px; border-radius:50%; background:rgba(255,255,255,0.2); display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; color:#fff; }
  .home-greeting { font-size:16px; font-weight:800; color:#fff; margin-bottom:2px; }
  .home-sub { font-size:11px; color:rgba(255,255,255,0.7); }
  .search-box { background:rgba(255,255,255,0.15); border:1.5px solid rgba(255,255,255,0.25); border-radius:12px; padding:10px 14px; display:flex; align-items:center; gap:8px; }
  .search-box span { font-size:12px; color:rgba(255,255,255,0.6); }
  .home-body { padding:16px; flex:1; overflow:hidden; }
  .section-title { font-size:13px; font-weight:700; color:#0F172A; margin-bottom:10px; }
  .cats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; margin-bottom:16px; }
  .cat-card { background:#F1F5FD; border-radius:12px; padding:10px 4px; display:flex; flex-direction:column; align-items:center; gap:4px; border:1px solid #DDE5F4; }
  .cat-icon { width:32px; height:32px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:16px; }
  .cat-name { font-size:9px; font-weight:600; color:#475569; text-align:center; }
  .promo-card { background:linear-gradient(135deg,#F97316,#FB923C); border-radius:14px; padding:14px; margin-bottom:14px; }
  .promo-card h3 { font-size:13px; font-weight:700; color:#fff; margin-bottom:3px; }
  .promo-card p { font-size:10px; color:rgba(255,255,255,0.8); }
  .service-row { display:flex; align-items:center; gap:10px; background:#fff; border-radius:12px; padding:10px; border:1px solid #DDE5F4; margin-bottom:8px; }
  .service-icon { width:40px; height:40px; border-radius:10px; background:#EBF2FF; display:flex; align-items:center; justify-content:center; font-size:18px; flex-shrink:0; }
  .service-info { flex:1; }
  .service-name { font-size:12px; font-weight:700; color:#0F172A; }
  .service-meta { font-size:10px; color:#94A3B8; }
  .service-price { font-size:12px; font-weight:700; color:#1A56DB; }

  /* Booking */
  .book-header { background:linear-gradient(160deg,#1040B0,#1A56DB); padding:20px 20px 20px; }
  .back-row { display:flex; align-items:center; gap:8px; margin-bottom:12px; }
  .back-btn { width:30px; height:30px; border-radius:8px; background:rgba(255,255,255,0.15); display:flex; align-items:center; justify-content:center; cursor:pointer; }
  .back-btn svg { width:14px; height:14px; stroke:#fff; fill:none; }
  .book-header h2 { font-size:17px; font-weight:800; color:#fff; }
  .book-header p { font-size:11px; color:rgba(255,255,255,0.7); }
  .book-body { padding:16px; flex:1; overflow:hidden; }
  .step-row { display:flex; gap:6px; margin-bottom:16px; }
  .step { flex:1; height:4px; border-radius:2px; background:#DDE5F4; }
  .step.done { background:#1A56DB; }
  .card-section { background:#fff; border-radius:14px; padding:14px; border:1px solid #DDE5F4; margin-bottom:12px; }
  .card-section-title { font-size:11px; font-weight:700; color:#94A3B8; text-transform:uppercase; letter-spacing:0.8px; margin-bottom:10px; }
  .date-chips { display:flex; gap:6px; overflow:hidden; }
  .date-chip { flex-shrink:0; padding:8px 12px; border-radius:10px; border:1.5px solid #DDE5F4; text-align:center; cursor:pointer; }
  .date-chip.sel { border-color:#1A56DB; background:#EBF2FF; }
  .date-chip .day { font-size:9px; color:#94A3B8; font-weight:600; }
  .date-chip .num { font-size:14px; font-weight:700; color:#0F172A; }
  .date-chip.sel .num { color:#1A56DB; }
  .time-chips { display:flex; gap:6px; flex-wrap:wrap; }
  .time-chip { padding:7px 10px; border-radius:8px; border:1.5px solid #DDE5F4; font-size:11px; font-weight:600; color:#475569; cursor:pointer; }
  .time-chip.sel { border-color:#1A56DB; background:#EBF2FF; color:#1A56DB; }
  .loc-field { display:flex; align-items:center; gap:8px; border:1.5px solid #DDE5F4; border-radius:10px; padding:10px 12px; }
  .loc-field span { font-size:12px; color:#475569; }
  .map-preview { height:70px; background:linear-gradient(135deg,#EBF2FF,#F1F5FD); border-radius:10px; margin-top:8px; display:flex; align-items:center; justify-content:center; }
  .map-preview span { font-size:10px; color:#94A3B8; }
  textarea.field { height:60px; resize:none; }

  /* Emergency */
  .emer-screen { background:linear-gradient(160deg,#7F1D1D,#DC2626,#EF4444); height:100%; display:flex; flex-direction:column; padding:28px 24px; }
  .emer-badge { background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.3); border-radius:8px; padding:5px 12px; font-size:10px; font-weight:700; color:#fff; letter-spacing:1px; display:inline-block; margin-bottom:20px; }
  .emer-screen h2 { font-size:22px; font-weight:800; color:#fff; margin-bottom:6px; }
  .emer-screen p { font-size:12px; color:rgba(255,255,255,0.75); margin-bottom:24px; line-height:1.5; }
  .emer-btn { width:140px; height:140px; border-radius:50%; background:rgba(255,255,255,0.15); border:3px solid rgba(255,255,255,0.4); display:flex; flex-direction:column; align-items:center; justify-content:center; margin:0 auto 20px; cursor:pointer; }
  .emer-btn .icon { font-size:40px; margin-bottom:6px; }
  .emer-btn span { font-size:13px; font-weight:800; color:#fff; }
  .emer-info { background:rgba(0,0,0,0.2); border-radius:12px; padding:12px; }
  .emer-info-row { display:flex; justify-content:space-between; margin-bottom:6px; }
  .emer-info-label { font-size:10px; color:rgba(255,255,255,0.6); }
  .emer-info-val { font-size:10px; font-weight:700; color:#fff; }
  .emer-cats { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:20px; }
  .emer-cat { background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.25); border-radius:8px; padding:6px 10px; font-size:10px; font-weight:600; color:#fff; cursor:pointer; }
  .emer-cat.sel { background:rgba(255,255,255,0.95); color:#DC2626; }

  /* Tracking */
  .track-map { height:220px; background:linear-gradient(135deg,#EBF2FF 0%,#DBEAFE 40%,#E0F2FE 100%); position:relative; flex-shrink:0; }
  .track-map-overlay { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; }
  .map-pin { width:20px; height:20px; background:#1A56DB; border-radius:50%; border:3px solid #fff; box-shadow:0 0 0 6px rgba(26,86,219,0.2); }
  .route-line { position:absolute; width:2px; height:80px; background:repeating-linear-gradient(to bottom,#1A56DB 0,#1A56DB 6px,transparent 6px,transparent 12px); top:70px; left:50%; transform:translateX(-50%); }
  .dest-pin { position:absolute; bottom:40px; left:50%; transform:translateX(-50%); font-size:24px; }
  .track-panel { background:#fff; border-radius:20px 20px 0 0; flex:1; padding:16px; margin-top:-16px; position:relative; overflow:hidden; }
  .eta-badge { background:#EBF2FF; border-radius:10px; padding:10px 14px; display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; }
  .eta-left h3 { font-size:20px; font-weight:800; color:#1A56DB; }
  .eta-left p { font-size:10px; color:#94A3B8; }
  .eta-right { font-size:11px; font-weight:600; color:#10B981; background:#D1FAE5; padding:4px 10px; border-radius:20px; }
  .tech-card { background:#fff; border:1px solid #DDE5F4; border-radius:14px; padding:12px; display:flex; align-items:center; gap:10px; margin-bottom:12px; }
  .tech-avatar { width:44px; height:44px; border-radius:12px; background:#EBF2FF; display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0; }
  .tech-name { font-size:13px; font-weight:700; color:#0F172A; }
  .tech-meta { font-size:10px; color:#94A3B8; }
  .tech-actions { display:flex; gap:8px; margin-left:auto; }
  .icon-btn { width:32px; height:32px; border-radius:8px; border:1px solid #DDE5F4; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:14px; }
  .progress-steps { display:flex; align-items:center; gap:0; }
  .pstep { display:flex; flex-direction:column; align-items:center; flex:1; }
  .pstep-dot { width:20px; height:20px; border-radius:50%; background:#1A56DB; display:flex; align-items:center; justify-content:center; margin-bottom:4px; }
  .pstep-dot.pending { background:#DDE5F4; }
  .pstep-dot svg { width:10px; height:10px; stroke:#fff; fill:none; }
  .pstep-label { font-size:8px; font-weight:600; color:#94A3B8; text-align:center; }
  .pstep-label.active { color:#1A56DB; }
  .pstep-line { flex:1; height:2px; background:#1A56DB; margin-top:-14px; }
  .pstep-line.pending { background:#DDE5F4; }

  /* Payment */
  .pay-header { background:linear-gradient(160deg,#1040B0,#1A56DB); padding:20px; }
  .pay-body { padding:16px; flex:1; overflow:hidden; }
  .pay-summary { background:#EBF2FF; border-radius:14px; padding:14px; margin-bottom:14px; }
  .pay-row { display:flex; justify-content:space-between; margin-bottom:6px; font-size:12px; }
  .pay-row .label { color:#475569; }
  .pay-row .val { font-weight:600; color:#0F172A; }
  .pay-total { border-top:1px solid #DDE5F4; padding-top:8px; margin-top:4px; }
  .pay-total .label { font-weight:700; color:#0F172A; }
  .pay-total .val { font-size:16px; font-weight:800; color:#1A56DB; }
  .method-card { display:flex; align-items:center; gap:10px; border:1.5px solid #DDE5F4; border-radius:12px; padding:12px; margin-bottom:8px; cursor:pointer; background:#fff; }
  .method-card.sel { border-color:#1A56DB; background:#EBF2FF; }
  .method-logo { width:36px; height:24px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:16px; background:#F1F5FD; }
  .method-name { font-size:12px; font-weight:700; color:#0F172A; flex:1; }
  .method-detail { font-size:10px; color:#94A3B8; }
  .radio { width:16px; height:16px; border-radius:50%; border:2px solid #DDE5F4; }
  .radio.sel { border-color:#1A56DB; background:#1A56DB; }

  /* Rating */
  .rate-screen { padding:20px; display:flex; flex-direction:column; flex:1; }
  .rate-header { text-align:center; margin-bottom:20px; }
  .rate-header h2 { font-size:18px; font-weight:800; color:#0F172A; margin-bottom:4px; }
  .rate-header p { font-size:12px; color:#94A3B8; }
  .rate-avatar { width:72px; height:72px; border-radius:20px; background:#EBF2FF; margin:0 auto 12px; display:flex; align-items:center; justify-content:center; font-size:32px; }
  .rate-name { font-size:14px; font-weight:700; color:#0F172A; text-align:center; margin-bottom:2px; }
  .rate-service { font-size:11px; color:#94A3B8; text-align:center; margin-bottom:16px; }
  .stars-row { display:flex; justify-content:center; gap:8px; margin-bottom:20px; }
  .star { font-size:32px; cursor:pointer; }
  .aspect-chips { display:flex; gap:6px; flex-wrap:wrap; justify-content:center; margin-bottom:16px; }
  .aspect-chip { border:1.5px solid #DDE5F4; border-radius:20px; padding:6px 12px; font-size:11px; font-weight:600; color:#475569; cursor:pointer; }
  .aspect-chip.sel { border-color:#1A56DB; background:#EBF2FF; color:#1A56DB; }

  /* Profile */
  .prof-header { background:linear-gradient(160deg,#1040B0,#1A56DB); padding:20px 20px 28px; text-align:center; }
  .prof-avatar { width:64px; height:64px; border-radius:20px; background:rgba(255,255,255,0.2); margin:0 auto 10px; display:flex; align-items:center; justify-content:center; font-size:28px; border:2px solid rgba(255,255,255,0.3); }
  .prof-name { font-size:16px; font-weight:800; color:#fff; margin-bottom:2px; }
  .prof-email { font-size:11px; color:rgba(255,255,255,0.7); }
  .stats-row { display:flex; gap:0; background:rgba(255,255,255,0.1); border-radius:12px; margin-top:14px; overflow:hidden; }
  .stat-box { flex:1; padding:10px; text-align:center; border-right:1px solid rgba(255,255,255,0.15); }
  .stat-box:last-child { border-right:none; }
  .stat-val { font-size:16px; font-weight:800; color:#fff; }
  .stat-lbl { font-size:9px; color:rgba(255,255,255,0.6); }
  .prof-body { padding:14px; flex:1; overflow:hidden; }
  .booking-item { background:#fff; border-radius:12px; padding:12px; border:1px solid #DDE5F4; margin-bottom:8px; display:flex; gap:10px; align-items:center; }
  .booking-icon { width:38px; height:38px; border-radius:10px; background:#EBF2FF; display:flex; align-items:center; justify-content:center; font-size:16px; flex-shrink:0; }
  .booking-name { font-size:12px; font-weight:700; color:#0F172A; }
  .booking-date { font-size:10px; color:#94A3B8; }
  .status-badge { font-size:9px; font-weight:700; padding:3px 8px; border-radius:20px; }
  .status-done { background:#D1FAE5; color:#059669; }
  .status-pending { background:#FEF9C3; color:#B45309; }
  .status-cancel { background:#FEE2E2; color:#DC2626; }
  .menu-item { display:flex; align-items:center; gap:10px; padding:12px 0; border-bottom:1px solid #F1F5FD; cursor:pointer; }
  .menu-item-icon { width:32px; height:32px; border-radius:8px; background:#F1F5FD; display:flex; align-items:center; justify-content:center; font-size:14px; }
  .menu-item-label { font-size:13px; font-weight:600; color:#0F172A; flex:1; }
  .menu-chevron { font-size:12px; color:#94A3B8; }

  /* Admin */
  .admin-screen { background:#F8FAFF; height:100%; overflow:hidden; display:flex; flex-direction:column; }
  .admin-header { background:linear-gradient(160deg,#0F172A,#1E293B); padding:16px 16px 14px; }
  .admin-header h2 { font-size:15px; font-weight:800; color:#fff; margin-bottom:2px; }
  .admin-header p { font-size:10px; color:#64748B; }
  .admin-body { padding:12px; flex:1; overflow:hidden; }
  .kpi-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px; }
  .kpi-card { background:#fff; border-radius:12px; padding:12px; border:1px solid #DDE5F4; }
  .kpi-label { font-size:9px; font-weight:600; color:#94A3B8; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px; }
  .kpi-val { font-size:20px; font-weight:800; color:#0F172A; }
  .kpi-delta { font-size:9px; font-weight:600; }
  .kpi-delta.up { color:#10B981; }
  .kpi-delta.down { color:#EF4444; }
  .chart-bar-row { display:flex; align-items:flex-end; gap:4px; height:60px; margin-bottom:4px; }
  .bar { flex:1; border-radius:4px 4px 0 0; background:#1A56DB; opacity:0.8; }
  .bar:nth-child(even) { opacity:0.5; }
  .bar.highlight { opacity:1; background:#F97316; }
  .chart-labels { display:flex; gap:4px; }
  .chart-label { flex:1; text-align:center; font-size:8px; color:#94A3B8; }
  .tech-list-item { display:flex; align-items:center; gap:8px; padding:8px 0; border-bottom:1px solid #F1F5FD; }
  .tech-avatar-sm { width:28px; height:28px; border-radius:8px; background:#EBF2FF; display:flex; align-items:center; justify-content:center; font-size:12px; flex-shrink:0; }
  .tech-item-name { font-size:11px; font-weight:700; color:#0F172A; }
  .tech-item-meta { font-size:9px; color:#94A3B8; }
  .online-dot { width:7px; height:7px; border-radius:50%; background:#10B981; flex-shrink:0; }
  .offline-dot { width:7px; height:7px; border-radius:50%; background:#94A3B8; flex-shrink:0; }

  /* Nav bar */
  .nav-bar { height:54px; background:#fff; border-top:1px solid #DDE5F4; display:flex; align-items:center; justify-content:space-around; padding:0 8px; flex-shrink:0; }
  .nav-item { display:flex; flex-direction:column; align-items:center; gap:2px; cursor:pointer; padding:4px 8px; }
  .nav-icon { font-size:18px; }
  .nav-label { font-size:8px; font-weight:600; color:#94A3B8; }
  .nav-item.active .nav-label { color:#1A56DB; }
  .nav-item.active .nav-icon { filter:none; }
  .nav-dot { width:5px; height:5px; border-radius:50%; background:#1A56DB; }
`;

const screens = [
  { id: "splash", label: "01 — Splash & Onboarding" },
  { id: "auth", label: "02 — Login / Register" },
  { id: "home", label: "03 — Home Dashboard" },
  { id: "booking", label: "04 — Service Booking" },
  { id: "emergency", label: "05 — Emergency Request" },
  { id: "tracking", label: "06 — Technician Tracking" },
  { id: "payment", label: "07 — Payment" },
  { id: "rating", label: "08 — Rating & Review" },
  { id: "profile", label: "09 — Customer Profile" },
  { id: "admin", label: "10 — Admin Dashboard" },
];

function Phone({ children, label }) {
  return (
    <div className="screen-wrap">
      <div className="phone-label">{label}</div>
      <div className="phone">
        <div className="notch" />
        <div className="status-bar" style={{ background: "transparent" }}>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 10 }}>9:41</span>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 10 }}>●●●●</span>
        </div>
        {children}
      </div>
    </div>
  );
}

function SplashScreen() {
  return (
    <Phone label="01 — Splash & Onboarding">
      <div className="splash">
        <div className="splash-logo">
          <svg viewBox="0 0 40 40" fill="none">
            <path d="M8 20C8 13.37 13.37 8 20 8" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <path d="M32 20C32 26.63 26.63 32 20 32" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="20" cy="20" r="5" fill="white"/>
            <path d="M20 8V14M20 26V32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div style={{ fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 4, letterSpacing: "-0.5px" }}>Servixo</div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginBottom: 24, textAlign: "center" }}>Your trusted home services platform</div>
        <div className="ob-art">
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 6 }}>🔧</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)" }}>AC · Plumbing · Electric</div>
          </div>
        </div>
        <div className="ob-dots">
          <div className="ob-dot active" />
          <div className="ob-dot" />
          <div className="ob-dot" />
        </div>
        <div style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 8, textAlign: "center" }}>Expert Help at Your Door</div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", textAlign: "center", marginBottom: 28, lineHeight: 1.6 }}>Book verified technicians for any home service in minutes</div>
        <button className="btn-white">Get Started</button>
        <button className="btn-ghost">I already have an account</button>
      </div>
    </Phone>
  );
}

function AuthScreen() {
  const [tab, setTab] = useState("customer");
  return (
    <Phone label="02 — Login / Register">
      <div className="auth-top">
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>Welcome back 👋</div>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 2 }}>Sign In to Servixo</h2>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.65)" }}>Access your services & bookings</p>
        <div className="tab-row">
          <div className={`tab ${tab === "customer" ? "active" : ""}`} onClick={() => setTab("customer")}>Customer</div>
          <div className={`tab ${tab === "tech" ? "active" : ""}`} onClick={() => setTab("tech")}>Technician</div>
        </div>
      </div>
      <div className="auth-body">
        <div className="field-label">Email address</div>
        <input className="field" placeholder="you@example.com" readOnly />
        <div className="field-label">Password</div>
        <input className="field" placeholder="••••••••" readOnly />
        <div style={{ textAlign: "right", marginTop: 6 }}>
          <span style={{ fontSize: 11, color: "#1A56DB", fontWeight: 600 }}>Forgot password?</span>
        </div>
        {tab === "tech" && (
          <div style={{ background: "#EBF2FF", borderRadius: 10, padding: "8px 12px", marginTop: 10, fontSize: 10, color: "#1A56DB", fontWeight: 600 }}>
            🔒 Technician login requires your verified ID
          </div>
        )}
        <button className="btn-primary">Sign In</button>
        <div className="or-row">
          <div className="or-line" /><div className="or-text">or continue with</div><div className="or-line" />
        </div>
        <div className="social-row">
          <button className="social-btn">🌐 Google</button>
          <button className="social-btn">🍎 Apple</button>
        </div>
        <div style={{ textAlign: "center", marginTop: 14, fontSize: 11, color: "#94A3B8" }}>
          New to Servixo? <span style={{ color: "#1A56DB", fontWeight: 700 }}>Create account</span>
        </div>
      </div>
    </Phone>
  );
}

function HomeScreen() {
  const cats = [
    { icon: "❄️", name: "AC & Cooling", bg: "#EBF2FF" },
    { icon: "💧", name: "Plumbing", bg: "#E0F2FE" },
    { icon: "⚡", name: "Electric", bg: "#FEF9C3" },
    { icon: "🔨", name: "Carpentry", bg: "#FFF4ED" },
    { icon: "🎨", name: "Painting", bg: "#FDF4FF" },
    { icon: "🧹", name: "Cleaning", bg: "#F0FDF4" },
    { icon: "🏠", name: "Roofing", bg: "#FFF1F2" },
    { icon: "➕", name: "More", bg: "#F1F5FD" },
  ];
  return (
    <Phone label="03 — Home Dashboard">
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div className="home-header">
          <div className="home-header-top">
            <div>
              <div className="home-greeting">Good morning, Ahmed 👋</div>
              <div className="home-sub">📍 Cairo, Egypt</div>
            </div>
            <div style={{ position: "relative" }}>
              <div className="avatar-sm">A</div>
              <div style={{ position: "absolute", top: -2, right: -2, width: 8, height: 8, borderRadius: "50%", background: "#F97316", border: "1.5px solid #1040B0" }} />
            </div>
          </div>
          <div className="search-box">
            <span style={{ fontSize: 14 }}>🔍</span>
            <span>Search for a service...</span>
          </div>
        </div>
        <div className="home-body">
          <div className="section-title">Categories</div>
          <div className="cats-grid">
            {cats.map((c, i) => (
              <div className="cat-card" key={i} style={{ background: c.bg }}>
                <div className="cat-icon">{c.icon}</div>
                <div className="cat-name">{c.name}</div>
              </div>
            ))}
          </div>
          <div className="promo-card">
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.8)", marginBottom: 3 }}>🔥 Limited offer</div>
            <h3>30% off AC service</h3>
            <p>Book before end of month · Use: COOL30</p>
          </div>
          <div className="section-title">Popular Services</div>
          {[
            { icon: "❄️", name: "AC Installation", meta: "⭐ 4.9 · 2.3k bookings", price: "From 250 EGP" },
            { icon: "💧", name: "Pipe Repair", meta: "⭐ 4.8 · 1.8k bookings", price: "From 180 EGP" },
          ].map((s, i) => (
            <div className="service-row" key={i}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-info">
                <div className="service-name">{s.name}</div>
                <div className="service-meta">{s.meta}</div>
              </div>
              <div className="service-price">{s.price}</div>
            </div>
          ))}
        </div>
        <div className="nav-bar">
          {[["🏠","Home"],["🔖","Bookings"],["🔴","Emergency"],["💬","Chat"],["👤","Profile"]].map(([icon, label], i) => (
            <div className={`nav-item ${i === 0 ? "active" : ""}`} key={i}>
              <div className="nav-icon">{icon}</div>
              <div className="nav-label">{label}</div>
              {i === 0 && <div className="nav-dot" />}
            </div>
          ))}
        </div>
      </div>
    </Phone>
  );
}

function BookingScreen() {
  const [selDate, setSelDate] = useState(1);
  const [selTime, setSelTime] = useState("10:00");
  const days = [
    { day: "MON", num: 12 }, { day: "TUE", num: 13 }, { day: "WED", num: 14 },
    { day: "THU", num: 15 }, { day: "FRI", num: 16 },
  ];
  const times = ["09:00", "10:00", "11:00", "14:00", "16:00"];
  return (
    <Phone label="04 — Service Booking">
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div className="book-header">
          <div className="back-row">
            <div className="back-btn"><svg viewBox="0 0 14 14"><polyline points="9,2 4,7 9,12" /></svg></div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#fff" }}>Book AC Service</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.65)" }}>AC Installation & Maintenance</div>
            </div>
          </div>
          <div className="step-row">
            <div className="step done" /><div className="step done" /><div className="step" /><div className="step" />
          </div>
        </div>
        <div className="book-body">
          <div className="card-section">
            <div className="card-section-title">Select Date</div>
            <div className="date-chips">
              {days.map((d, i) => (
                <div key={i} className={`date-chip ${selDate === i ? "sel" : ""}`} onClick={() => setSelDate(i)}>
                  <div className="day">{d.day}</div>
                  <div className="num">{d.num}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="card-section">
            <div className="card-section-title">Select Time</div>
            <div className="time-chips">
              {times.map(t => (
                <div key={t} className={`time-chip ${selTime === t ? "sel" : ""}`} onClick={() => setSelTime(t)}>{t}</div>
              ))}
            </div>
          </div>
          <div className="card-section">
            <div className="card-section-title">Service Location</div>
            <div className="loc-field">
              <span>📍</span>
              <span>24 Tahrir St, Cairo, Egypt</span>
            </div>
            <div className="map-preview"><span>🗺 Map Preview</span></div>
          </div>
          <div className="card-section" style={{ marginBottom: 0 }}>
            <div className="card-section-title">Problem Description</div>
            <textarea className="field" placeholder="Describe the issue..." readOnly />
          </div>
        </div>
        <div style={{ padding: "12px 16px 16px" }}>
          <button className="btn-primary">Continue to Confirm →</button>
        </div>
      </div>
    </Phone>
  );
}

function EmergencyScreen() {
  const [selCat, setSelCat] = useState("Flooding");
  const cats = ["Flooding", "No Power", "Gas Leak", "AC Down", "Fire Risk"];
  return (
    <Phone label="05 — Emergency Request">
      <div className="emer-screen">
        <div className="emer-badge">🚨 EMERGENCY</div>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 6 }}>Need Urgent Help?</h2>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", marginBottom: 16, lineHeight: 1.5 }}>One tap connects you to the nearest available technician within 30 minutes</p>
        <div className="emer-cats">
          {cats.map(c => (
            <div key={c} className={`emer-cat ${selCat === c ? "sel" : ""}`} onClick={() => setSelCat(c)}>{c}</div>
          ))}
        </div>
        <div className="emer-btn">
          <div className="icon">🆘</div>
          <span>TAP TO CALL</span>
        </div>
        <div className="emer-info">
          <div className="emer-info-row">
            <span className="emer-info-label">📍 Your location</span>
            <span className="emer-info-val">24 Tahrir St, Cairo</span>
          </div>
          <div className="emer-info-row">
            <span className="emer-info-label">⏱ Est. arrival</span>
            <span className="emer-info-val">15–30 min</span>
          </div>
          <div className="emer-info-row" style={{ marginBottom: 0 }}>
            <span className="emer-info-label">👨‍🔧 Nearby techs</span>
            <span className="emer-info-val" style={{ color: "#4ADE80" }}>6 available</span>
          </div>
        </div>
        <div style={{ marginTop: 14, fontSize: 10, color: "rgba(255,255,255,0.5)", textAlign: "center" }}>Emergency surcharge may apply · Min 350 EGP</div>
      </div>
    </Phone>
  );
}

function TrackingScreen() {
  return (
    <Phone label="06 — Technician Tracking">
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div className="track-map">
          <div className="track-map-overlay">
            <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="route-line" />
              <div style={{ position: "absolute", top: 32 }}>
                <div className="map-pin" />
              </div>
              <div className="dest-pin">🏠</div>
            </div>
          </div>
          <div style={{ position: "absolute", top: 10, left: 14, background: "rgba(255,255,255,0.9)", borderRadius: 8, padding: "5px 10px" }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#1A56DB" }}>🔵 LIVE</span>
          </div>
        </div>
        <div className="track-panel">
          <div className="eta-badge">
            <div className="eta-left">
              <h3>12 min</h3>
              <p>Estimated arrival</p>
            </div>
            <div className="eta-right">On the way</div>
          </div>
          <div className="tech-card">
            <div className="tech-avatar">👨‍🔧</div>
            <div>
              <div className="tech-name">Mohamed Hassan</div>
              <div className="tech-meta">⭐ 4.9 · 847 jobs · AC Specialist</div>
            </div>
            <div className="tech-actions">
              <div className="icon-btn">📞</div>
              <div className="icon-btn">💬</div>
            </div>
          </div>
          <div className="section-title" style={{ fontSize: 11, color: "#94A3B8", marginBottom: 10 }}>JOB PROGRESS</div>
          <div className="progress-steps">
            <div className="pstep">
              <div className="pstep-dot"><svg viewBox="0 0 10 10"><polyline points="2,5 4,8 8,2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <span className="pstep-label active">Confirmed</span>
            </div>
            <div className="pstep-line" />
            <div className="pstep">
              <div className="pstep-dot"><svg viewBox="0 0 10 10"><polyline points="2,5 4,8 8,2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <span className="pstep-label active">En Route</span>
            </div>
            <div className="pstep-line pending" />
            <div className="pstep">
              <div className="pstep-dot pending" />
              <span className="pstep-label">Arrived</span>
            </div>
            <div className="pstep-line pending" />
            <div className="pstep">
              <div className="pstep-dot pending" />
              <span className="pstep-label">Done</span>
            </div>
          </div>
          <div style={{ background: "#F8FAFF", borderRadius: 10, padding: "10px 12px", marginTop: 12, fontSize: 11, color: "#475569" }}>
            📋 AC Installation · 14 Jan, 10:00 AM · 24 Tahrir St
          </div>
        </div>
      </div>
    </Phone>
  );
}

function PaymentScreen() {
  const [method, setMethod] = useState("card");
  const methods = [
    { id: "card", logo: "💳", name: "Credit / Debit Card", detail: "Visa ending in 4242" },
    { id: "instapay", logo: "🏦", name: "InstaPay", detail: "Instant bank transfer" },
    { id: "fawry", logo: "🟡", name: "Fawry", detail: "Pay at any Fawry outlet" },
    { id: "cash", logo: "💵", name: "Cash on Service", detail: "Pay the technician directly" },
  ];
  return (
    <Phone label="07 — Payment">
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div className="pay-header">
          <div className="back-row">
            <div className="back-btn"><svg viewBox="0 0 14 14" style={{ width: 14, height: 14 }} fill="none" stroke="white" strokeWidth="1.5"><polyline points="9,2 4,7 9,12" /></svg></div>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#fff" }}>Checkout</div>
          </div>
        </div>
        <div className="pay-body">
          <div className="pay-summary">
            <div className="pay-row"><span className="label">AC Installation</span><span className="val">450 EGP</span></div>
            <div className="pay-row"><span className="label">Service fee</span><span className="val">25 EGP</span></div>
            <div className="pay-row"><span className="label">Discount (COOL30)</span><span className="val" style={{ color: "#10B981" }}>-135 EGP</span></div>
            <div className="pay-row pay-total"><span className="label">Total</span><span className="val">340 EGP</span></div>
          </div>
          <div className="section-title">Payment Method</div>
          {methods.map(m => (
            <div key={m.id} className={`method-card ${method === m.id ? "sel" : ""}`} onClick={() => setMethod(m.id)}>
              <div className="method-logo">{m.logo}</div>
              <div>
                <div className="method-name">{m.name}</div>
                <div className="method-detail">{m.detail}</div>
              </div>
              <div className={`radio ${method === m.id ? "sel" : ""}`} />
            </div>
          ))}
          {method === "card" && (
            <div style={{ background: "#F8FAFF", borderRadius: 12, padding: 12, border: "1px solid #DDE5F4", marginTop: 4 }}>
              <input className="field" placeholder="Card number" style={{ marginBottom: 8 }} readOnly />
              <div style={{ display: "flex", gap: 8 }}>
                <input className="field" placeholder="MM/YY" style={{ flex: 1 }} readOnly />
                <input className="field" placeholder="CVV" style={{ flex: 1 }} readOnly />
              </div>
            </div>
          )}
        </div>
        <div style={{ padding: "12px 16px 16px" }}>
          <button className="btn-primary">Pay 340 EGP →</button>
          <div style={{ textAlign: "center", marginTop: 8, fontSize: 10, color: "#94A3B8" }}>🔒 Secured by SSL encryption · PCI-DSS compliant</div>
        </div>
      </div>
    </Phone>
  );
}

function RatingScreen() {
  const [stars, setStars] = useState(4);
  const [chips, setChips] = useState(["Professional"]);
  const allChips = ["Professional", "On Time", "Clean Work", "Friendly", "Skilled", "Fast"];
  const toggleChip = c => setChips(ch => ch.includes(c) ? ch.filter(x => x !== c) : [...ch, c]);
  return (
    <Phone label="08 — Rating & Review">
      <div style={{ flex: 1, overflow: "hidden", padding: "16px 16px 8px" }}>
        <div style={{ background: "#D1FAE5", borderRadius: 12, padding: "10px 14px", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
          <span>✅</span>
          <span style={{ fontSize: 11, fontWeight: 600, color: "#059669" }}>Service completed successfully!</span>
        </div>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <div className="rate-avatar">👨‍🔧</div>
          <div className="rate-name">Mohamed Hassan</div>
          <div className="rate-service">AC Installation · 14 Jan 2025</div>
        </div>
        <div style={{ textAlign: "center", marginBottom: 6, fontSize: 12, fontWeight: 600, color: "#475569" }}>How was your experience?</div>
        <div className="stars-row">
          {[1,2,3,4,5].map(n => (
            <span key={n} className="star" onClick={() => setStars(n)} style={{ opacity: n <= stars ? 1 : 0.25 }}>⭐</span>
          ))}
        </div>
        <div style={{ textAlign: "center", fontSize: 12, color: "#1A56DB", fontWeight: 700, marginBottom: 14 }}>
          {["","Poor","Fair","Good","Great","Excellent!"][stars]}
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#0F172A", marginBottom: 8 }}>What went well?</div>
        <div className="aspect-chips">
          {allChips.map(c => (
            <div key={c} className={`aspect-chip ${chips.includes(c) ? "sel" : ""}`} onClick={() => toggleChip(c)}>{c}</div>
          ))}
        </div>
        <div className="field-label">Add a comment (optional)</div>
        <textarea className="field" placeholder="Share your experience..." readOnly style={{ height: 60, resize: "none", marginBottom: 12 }} />
        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ flex: 1, border: "1.5px solid #DDE5F4", borderRadius: 12, padding: 11, fontSize: 13, fontWeight: 600, color: "#475569", background: "#fff", cursor: "pointer", fontFamily: "inherit" }}>Skip</button>
          <button className="btn-primary" style={{ flex: 2, marginTop: 0 }}>Submit Review</button>
        </div>
      </div>
    </Phone>
  );
}

function ProfileScreen() {
  const bookings = [
    { icon: "❄️", name: "AC Installation", date: "14 Jan 2025", status: "done" },
    { icon: "💧", name: "Pipe Repair", date: "02 Jan 2025", status: "done" },
    { icon: "⚡", name: "Electrical Check", date: "28 Dec 2024", status: "cancel" },
    { icon: "🎨", name: "Wall Painting", date: "15 Jan 2025", status: "pending" },
  ];
  return (
    <Phone label="09 — Customer Profile">
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div className="prof-header">
          <div className="prof-avatar">👤</div>
          <div className="prof-name">Ahmed Youssef</div>
          <div className="prof-email">ahmed.y@gmail.com</div>
          <div className="stats-row">
            <div className="stat-box"><div className="stat-val">14</div><div className="stat-lbl">Bookings</div></div>
            <div className="stat-box"><div className="stat-val">4.8⭐</div><div className="stat-lbl">Avg Rating</div></div>
            <div className="stat-box"><div className="stat-val">2yrs</div><div className="stat-lbl">Member</div></div>
          </div>
        </div>
        <div className="prof-body">
          <div className="section-title">Recent Bookings</div>
          {bookings.map((b, i) => (
            <div className="booking-item" key={i}>
              <div className="booking-icon">{b.icon}</div>
              <div style={{ flex: 1 }}>
                <div className="booking-name">{b.name}</div>
                <div className="booking-date">{b.date}</div>
              </div>
              <div className={`status-badge status-${b.status}`}>
                {{ done: "Completed", pending: "Upcoming", cancel: "Cancelled" }[b.status]}
              </div>
            </div>
          ))}
          <div style={{ marginTop: 8 }}>
            {[["⚙️","Account Settings"],["📍","Saved Addresses"],["💳","Payment Methods"],["🔔","Notifications"],["🔒","Privacy & Security"]].map(([icon, label], i) => (
              <div className="menu-item" key={i}>
                <div className="menu-item-icon">{icon}</div>
                <div className="menu-item-label">{label}</div>
                <div className="menu-chevron">›</div>
              </div>
            ))}
          </div>
        </div>
        <div className="nav-bar">
          {[["🏠","Home"],["🔖","Bookings"],["🔴","SOS"],["💬","Chat"],["👤","Profile"]].map(([icon, label], i) => (
            <div className={`nav-item ${i === 4 ? "active" : ""}`} key={i}>
              <div className="nav-icon">{icon}</div>
              <div className="nav-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </Phone>
  );
}

function AdminScreen() {
  const kpis = [
    { label: "Total Revenue", val: "128K EGP", delta: "+18%", dir: "up" },
    { label: "Active Jobs", val: "47", delta: "+5", dir: "up" },
    { label: "Technicians", val: "83", delta: "+3", dir: "up" },
    { label: "Avg Rating", val: "4.86 ⭐", delta: "+0.2", dir: "up" },
  ];
  const bars = [45, 60, 38, 72, 55, 88, 65];
  const days2 = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const techs = [
    { name: "Mohamed H.", meta: "AC · 23 jobs", online: true },
    { name: "Khaled R.", meta: "Electric · 18 jobs", online: true },
    { name: "Sami A.", meta: "Plumbing · 15 jobs", online: false },
    { name: "Youssef M.", meta: "Cleaning · 11 jobs", online: true },
  ];
  return (
    <Phone label="10 — Admin Dashboard">
      <div className="admin-screen">
        <div className="admin-header">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h2>Admin Console</h2>
              <p>Servixo · Real-time overview</p>
            </div>
            <div style={{ background: "rgba(16,185,129,0.15)", borderRadius: 8, padding: "4px 10px", fontSize: 10, color: "#10B981", fontWeight: 700 }}>● LIVE</div>
          </div>
        </div>
        <div className="admin-body">
          <div className="kpi-grid">
            {kpis.map((k, i) => (
              <div className="kpi-card" key={i}>
                <div className="kpi-label">{k.label}</div>
                <div className="kpi-val">{k.val}</div>
                <div className={`kpi-delta ${k.dir}`}>{k.dir === "up" ? "↑" : "↓"} {k.delta}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "#fff", borderRadius: 12, padding: 12, border: "1px solid #DDE5F4", marginBottom: 10 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#0F172A", marginBottom: 8 }}>Bookings This Week</div>
            <div className="chart-bar-row">
              {bars.map((h, i) => (
                <div key={i} className={`bar ${i === 5 ? "highlight" : ""}`} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="chart-labels">
              {days2.map(d => <div key={d} className="chart-label">{d}</div>)}
            </div>
          </div>
          <div style={{ background: "#fff", borderRadius: 12, padding: 12, border: "1px solid #DDE5F4" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#0F172A" }}>Active Technicians</span>
              <span style={{ fontSize: 10, color: "#1A56DB", fontWeight: 600 }}>View all</span>
            </div>
            {techs.map((t, i) => (
              <div className="tech-list-item" key={i}>
                <div className="tech-avatar-sm">👨‍🔧</div>
                <div style={{ flex: 1 }}>
                  <div className="tech-item-name">{t.name}</div>
                  <div className="tech-item-meta">{t.meta}</div>
                </div>
                <div className={t.online ? "online-dot" : "offline-dot"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Phone>
  );
}

export default function App() {
  return (
    <>
      <style>{css}</style>
      <div className="app-shell">
        <div style={{ marginBottom: 28, paddingBottom: 20, borderBottom: "1px solid #DDE5F4" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#1A56DB", textTransform: "uppercase", letterSpacing: "2px", marginBottom: 6, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Servixo · Mobile UI</div>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#0F172A", fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: "-0.5px" }}>10 Screen Design System</div>
          <div style={{ fontSize: 13, color: "#64748B", marginTop: 4, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>React Native · Professional Blue/White · Plus Jakarta Sans</div>
        </div>
        <div className="grid">
          <SplashScreen />
          <AuthScreen />
          <HomeScreen />
          <BookingScreen />
          <EmergencyScreen />
          <TrackingScreen />
          <PaymentScreen />
          <RatingScreen />
          <ProfileScreen />
          <AdminScreen />
        </div>
      </div>
    </>
  );
}
