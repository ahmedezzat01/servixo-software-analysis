"use client";

import { useEffect, useRef, useState } from "react";

export default function Financial() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState({
    totalBenefits: 0,
    totalCosts: 0,
    roi: 0,
    bep: 0,
    npv: 0,
    netCashFlow: 0,
    cumulativeCashFlow: 0,
    developmentCosts: 0,
    operationalCosts: 0
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  // Animation function
  const animateNumber = (target: number, key: keyof typeof counts, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCounts(prev => ({ ...prev, [key]: target }));
        clearInterval(timer);
      } else {
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }
    }, 16);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Start animations when section becomes visible
            if (!hasAnimated) {
              setHasAnimated(true);
              animateNumber(19700000, "totalBenefits");
              animateNumber(1717000, "totalCosts");
              animateNumber(1047, "roi");
              animateNumber(19, "bep");
              animateNumber(14434559, "npv");
              animateNumber(19543000, "netCashFlow");
              animateNumber(19543000, "cumulativeCashFlow");
              animateNumber(780000, "developmentCosts");
              animateNumber(937000, "operationalCosts");
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      sectionRef.current.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated]);

  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <section id="financial" ref={sectionRef} style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span 
            className="reveal"
            style={{ 
              display: "inline-block", 
              fontSize: "12px", 
              color: "#06b6d4", 
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "16px"
            }}
          >
            Financial Feasibility
          </span>
          <h2 
            className="reveal"
            style={{ 
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)", 
              fontWeight: "800",
              letterSpacing: "-0.02em",
              lineHeight: "1"
            }}
          >
            Financial <span style={{ color: "#06b6d4" }}>Analysis</span>
          </h2>
        </div>

        {/* Benefits Table */}
        <div className="reveal" style={{ 
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "24px",
          padding: "32px",
          marginBottom: "32px"
        }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "24px", color: "#06b6d4" }}>
            📊 Total Benefits (2026-2029)
          </h3>
          
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center", fontSize: "14px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th style={{ padding: "12px", textAlign: "left" }}>Benefit Source</th>
                  <th style={{ padding: "12px" }}>2027</th>
                  <th style={{ padding: "12px" }}>2028</th>
                  <th style={{ padding: "12px" }}>2029</th>
                  <th style={{ padding: "12px" }}>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "8px", textAlign: "left" }}>Increase bookings for home services</td>
                  <td style={{ padding: "8px" }}>1,500,000</td>
                  <td style={{ padding: "8px" }}>2,200,000</td>
                  <td style={{ padding: "8px" }}>3,000,000</td>
                  <td style={{ padding: "8px" }}>6,700,000</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", textAlign: "left" }}>Improve customer satisfaction</td>
                  <td style={{ padding: "8px" }}>1,200,000</td>
                  <td style={{ padding: "8px" }}>1,800,000</td>
                  <td style={{ padding: "8px" }}>2,400,000</td>
                  <td style={{ padding: "8px" }}>5,400,000</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", textAlign: "left" }}>Increase revenue from emergency services</td>
                  <td style={{ padding: "8px" }}>900,000</td>
                  <td style={{ padding: "8px" }}>1,300,000</td>
                  <td style={{ padding: "8px" }}>1,900,000</td>
                  <td style={{ padding: "8px" }}>4,100,000</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", textAlign: "left" }}>Reduce waiting time & improve efficiency</td>
                  <td style={{ padding: "8px" }}>800,000</td>
                  <td style={{ padding: "8px" }}>1,100,000</td>
                  <td style={{ padding: "8px" }}>1,600,000</td>
                  <td style={{ padding: "8px" }}>3,500,000</td>
                </tr>
                <tr style={{ borderTop: "1px solid rgba(255,255,255,0.1)", fontWeight: "bold" }}>
                  <td style={{ padding: "12px", textAlign: "left" }}>Total Benefits</td>
                  <td style={{ padding: "12px", color: "#22c55e" }}>4,400,000</td>
                  <td style={{ padding: "12px", color: "#22c55e" }}>6,400,000</td>
                  <td style={{ padding: "12px", color: "#22c55e" }}>8,900,000</td>
                  <td style={{ padding: "12px", color: "#22c55e", fontWeight: "bold" }}>
                    {formatNumber(counts.totalBenefits)} EGP
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Costs Section */}
        <div className="reveal" style={{ 
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "24px",
          padding: "32px",
          marginBottom: "32px"
        }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "24px", color: "#ef4444" }}>
            💰 Total Costs
          </h3>

          <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "16px", color: "#f59e0b" }}>Development Costs</h4>
          <div style={{ overflowX: "auto", marginBottom: "24px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <tbody>
                <tr><td style={{ padding: "8px" }}>Software Analysis and Design and design</td><td style={{ textAlign: "right" }}>80,000</td></tr>
                <tr><td style={{ padding: "8px" }}>Website & mobile app development</td><td style={{ textAlign: "right" }}>400,000</td></tr>
                <tr><td style={{ padding: "8px" }}>Database & API integration</td><td style={{ textAlign: "right" }}>200,000</td></tr>
                <tr><td style={{ padding: "8px" }}>Security infrastructure</td><td style={{ textAlign: "right" }}>60,000</td></tr>
                <tr><td style={{ padding: "8px" }}>Hosting setup</td><td style={{ textAlign: "right" }}>40,000</td></tr>
                <tr style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <td style={{ padding: "8px", fontWeight: "bold" }}>Total Development</td>
                  <td style={{ textAlign: "right", fontWeight: "bold" }}>
                    {formatNumber(counts.developmentCosts)} EGP
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: "24px", padding: "16px", background: "rgba(0,0,0,0.2)", borderRadius: "12px" }}>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              Total Costs = <span style={{ color: "#ef4444" }}>{formatNumber(counts.totalCosts)} EGP</span>
            </p>
          </div>
        </div>

        {/* Laws Cards with Animated Numbers */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "32px" }}>
          
          <div className="reveal" style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", padding: "24px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px", color: "#22c55e" }}>📈 Return on Investment (ROI)</h3>
            <p style={{ fontFamily: "monospace", fontSize: "13px", marginBottom: "12px" }}>ROI = (Total Benefits - Total Costs) / Total Costs × 100</p>
            <div style={{ padding: "12px", background: "rgba(0,0,0,0.2)", borderRadius: "12px" }}>
              <p>= (19,700,000 - 1,717,000) / 1,717,000 × 100</p>
              <p style={{ marginTop: "8px", fontSize: "28px", fontWeight: "bold", color: "#22c55e" }}>
                {counts.roi}%
              </p>
            </div>
          </div>

          <div className="reveal" style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", padding: "24px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px", color: "#f59e0b" }}>⚖️ Break-Even Point (BEP)</h3>
            <p style={{ fontFamily: "monospace", fontSize: "13px", marginBottom: "12px" }}>BEP = Years before recovery + (Remaining cost / Cash flow in recovery year)</p>
            <div style={{ padding: "12px", background: "rgba(0,0,0,0.2)", borderRadius: "12px" }}>
              <p>= 0 + (780,000 / 4,110,000)</p>
              <p style={{ marginTop: "8px", fontSize: "28px", fontWeight: "bold", color: "#22c55e" }}>
                {counts.bep / 100} Years ≈ {(counts.bep / 100 * 12).toFixed(0)} months
              </p>
            </div>
          </div>

          <div className="reveal" style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", padding: "24px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px", color: "#06b6d4" }}>💰 Net Present Value (NPV)</h3>
            <p style={{ fontFamily: "monospace", fontSize: "13px", marginBottom: "12px" }}>NPV = Σ(PV Benefits) - Σ(PV Costs) with rate = 10%</p>
            <div style={{ padding: "12px", background: "rgba(0,0,0,0.2)", borderRadius: "12px" }}>
              <p>= 15,982,326 - 1,547,767</p>
              <p style={{ marginTop: "8px", fontSize: "24px", fontWeight: "bold", color: "#22c55e" }}>
                {formatNumber(counts.npv)} EGP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}