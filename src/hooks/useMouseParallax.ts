import {useEffect, useRef} from 'react'

export interface MousePosition {
    x: number
    y: number
}

export function useMouseParallax() {
    const mousePos = useRef<MousePosition>({x: 0, y: 0})

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1
            mousePos.current.y = (e.clientY / window.innerHeight) * 2 - 1
        }
        const onResize = () => {
            mousePos.current = {x: 0, y: 0}
        }

        window.addEventListener('mousemove', onMove)
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return mousePos
}
