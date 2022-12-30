import { useEffect, useState } from "react";
import { throttle } from 'underscore'

export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScorllY] = useState(0)

  useEffect(() => {
    // 节流
    const handleScroll = throttle(function () {
      setScrollX(window.scrollX)
      setScorllY(window.scrollY)
    }, 200)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    scrollX,
    scrollY
  }
}