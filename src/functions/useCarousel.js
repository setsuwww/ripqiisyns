import { useState, useRef } from "react"

const useSwipeCarousel = (length, minSwipe = 50) => {
  const [index, setIndex] = useState(0)
  const start = useRef(null), end = useRef(null)

  const next = () => setIndex((i) => (i + 1) % length)
  const prev = () => setIndex((i) => (i - 1 + length) % length)

  const onTouchStart = (e) => (start.current = e.touches[0].clientX)
  const onTouchMove = (e) => (end.current = e.touches[0].clientX)
  const onTouchEnd = () => {
    const dist = start.current - end.current
    if (dist > minSwipe) next()
    if (dist < -minSwipe) prev()
  }

  return { index, next, prev, onTouchStart, onTouchMove, onTouchEnd }
}

export default useSwipeCarousel
