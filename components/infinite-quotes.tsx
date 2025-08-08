"use client"

import { useEffect, useRef } from "react"

export function InfiniteQuotes() {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function createScrollingBanner(wrapperSelector: string, contentSelector: string, speed = 2) {
      const bannerContainer = document.querySelector(wrapperSelector) as HTMLElement
      const bannerContent = bannerContainer?.querySelector(contentSelector) as HTMLElement
      
      if (!bannerContainer || !bannerContent) {
        console.error('Invalid container or content selectors.')
        return
      }

      // Prepare widths and clone content for seamless scroll
      let contentWidth = bannerContent.offsetWidth
      bannerContainer.style.overflow = 'hidden'
      bannerContainer.style.whiteSpace = 'nowrap'
      bannerContainer.style.marginLeft = `-${bannerContainer.offsetWidth}px`
      bannerContainer.style.width = `${(bannerContainer.offsetWidth * 2) + contentWidth}px`
      let containerWidth = bannerContainer.offsetWidth + contentWidth

      // Clone content until it fills the container for infinite scroll
      while (contentWidth < containerWidth * 2) {
        const clonedNode = bannerContent.cloneNode(true) as HTMLElement
        bannerContainer.appendChild(clonedNode)
        contentWidth += clonedNode.offsetWidth
      }

      let scrollPosition = 0
      function scroll() {
        scrollPosition += speed
        // Adjust the speed dynamically
        bannerContainer.style.transform = `translateX(${scrollPosition}px)`
        // Reset scroll position for infinite scroll
        if (scrollPosition >= ((containerWidth / 2) - bannerContent.offsetWidth)) {
          scrollPosition = -((containerWidth % bannerContent.offsetWidth) - 81)
        }
        requestAnimationFrame(scroll)
      }
      scroll()
    }

    // Initialize the banner
    createScrollingBanner('#banner1', '.scrolling-banner', 1)
  }, [])

  return (
    <section className="bg-red-600 py-6 overflow-hidden">
      <div id="banner1" className="scrolling-banner-wrapper">
        <div className="scrolling-banner">
          <h3 className="text-4xl md:text-6xl font-bold">
            <span className="text-white mr-8">TE NECESITAMOS </span>
            <span className="text-outline-red mr-8">TE NECESITAMOS </span>
          </h3>
        </div>
      </div>
    </section>
  )
}
