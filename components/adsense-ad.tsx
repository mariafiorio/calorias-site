"use client";

import { useEffect } from "react";

interface AdBannerProps {
  slot: string; // O ID do slot do seu AdSense
  format?: string; // Formato opcional
  className?: string; // CSS opcional
  style?: React.CSSProperties; // Style inline opcional
}
declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export default function AdBanner({
  slot,
  format = "auto",
  className = "",
  style = {},
}: AdBannerProps) {
  useEffect(() => {
    try {
      // Ativa o bloco
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: "block", ...style }}
      data-ad-client="ca-pub-2627213694460628"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    ></ins>
    
  );
}
