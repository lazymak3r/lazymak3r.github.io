import {useFrame} from '@react-three/fiber'
import type {RefObject} from 'react'

import type {MousePosition} from '../../hooks/useMouseParallax'

interface CameraRigProps {
    mousePos: RefObject<MousePosition>
}

const PARALLAX_FACTOR = 0.5
const LERP_FACTOR = 0.02

export function CameraRig({mousePos}: CameraRigProps) {
    useFrame(state => {
        const strength = state.viewport.width * PARALLAX_FACTOR
        const targetX = mousePos.current.x * strength
        const targetY = -mousePos.current.y * strength

        state.camera.position.x += (targetX - state.camera.position.x) * LERP_FACTOR
        state.camera.position.y += (targetY - state.camera.position.y) * LERP_FACTOR

        state.camera.lookAt(0, 0, 0)
    })

    return null
}
