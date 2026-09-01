import { useState, useEffect } from 'react'

interface MousePosition {
  x: number
  y: number
  normalizedX: number // -1 to 1
  normalizedY: number // -1 to 1
}

export function useMousePosition(elementRef?: React.RefObject<HTMLElement>): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (elementRef?.current) {
        const rect = elementRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const normalizedX = (e.clientX - centerX) / (rect.width / 2)
        const normalizedY = (e.clientY - centerY) / (rect.height / 2)
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          normalizedX: Math.max(-1, Math.min(1, normalizedX)),
          normalizedY: Math.max(-1, Math.min(1, normalizedY)),
        })
      } else {
        const normalizedX = (e.clientX / window.innerWidth) * 2 - 1
        const normalizedY = (e.clientY / window.innerHeight) * 2 - 1
        setPosition({
          x: e.clientX,
          y: e.clientY,
          normalizedX,
          normalizedY,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [elementRef])

  return position
}
