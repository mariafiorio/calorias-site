"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface AdSenseAdProps {
  adSlot: string
  adFormat?: string
  fullWidthResponsive?: boolean
  style?: React.CSSProperties
  className?: string
  contentCheck?: () => boolean // Function to check if content exists
}

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export default function AdSenseAd({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  style = { display: "block" },
  className = "",
  contentCheck = () => true, // Default to true if no check provided
}: AdSenseAdProps) {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    // Only render ads if content check passes
    if (contentCheck()) {
      setShouldRender(true)

      try {
        if (typeof window !== "undefined" && window.adsbygoogle) {
          window.adsbygoogle.push({})
        }
      } catch (error) {
        console.error("AdSense error:", error)
      }
    }
  }, [contentCheck])

  if (!shouldRender) {
    return null
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-2627213694460628"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  )
}
