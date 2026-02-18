import {useState} from 'react'

export function useShouldRenderCanvas() {
    const [should] = useState(
        () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
    return should
}