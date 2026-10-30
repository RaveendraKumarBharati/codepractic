import React, { useEffect } from "react";

// Google AdSense Banner Component
const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", margin: "20px 0" }}
      data-ad-client="ca-pub-XXXXXX"   // replace with your AdSense publisher IDo
      data-ad-slot="1234567890"        // replace with your Ad unit slot ID
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

// Custom Sponsor Ad Example (if you don’t use AdSense)
const CustomAd = () => (
  <div style={{
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "center",
    margin: "20px 0",
    background: "#f9f9f9"
  }}>
    <a href="https://sponsor-link.com" target="_blank" rel="noopener noreferrer">
      <img src="/ads/banner1.png" alt="Sponsor Ad" style={{ maxWidth: "100%" }} />
    </a>
    <p>Sponsored by XYZ Company</p>
  </div>
);

const CodePracticePage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Welcome to CodePractice</h1>
      <p>Learn programming by solving real coding exercises.</p>

      <h2>How It Works</h2>
      <ol>
        <li><strong>Select Language</strong> – Choose Java, C++ or Python.</li>
        <li><strong>Choose Exercise</strong> – Select a coding problem based on your skill level.</li>
      </ol>

      {/* Insert Ad Here */}
      <AdBanner />
      {/* Or use <CustomAd /> if you want your own banner */}

      <ol start="3">
        <li><strong>Write Code</strong> – Write your solution in the code editor.</li>
        <li><strong>Submit</strong> – Submit your solution and view the result.</li>
      </ol>
    </div>
  );
};

export default CodePracticePage;
