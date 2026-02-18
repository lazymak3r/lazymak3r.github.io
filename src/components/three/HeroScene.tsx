import {Canvas} from '@react-three/fiber'
import {Environment} from '@react-three/drei'
import type {RefObject} from 'react'

import {CameraRig} from './CameraRig'
import {BrandText3D} from './BrandText3D'
import type {MousePosition} from '../../hooks/useMouseParallax'

interface HeroSceneProps {
    mousePos: RefObject<MousePosition>
}

export function HeroScene({mousePos}: HeroSceneProps) {
    return (
        <Canvas
            camera={{position: [0, 0, 4], fov: 50}}
            gl={{
                antialias: true,
                alpha: true,
                powerPreference: 'high-performance',
                failIfMajorPerformanceCaveat: false,
            }}
            dpr={[1, 2]}
            aria-hidden="true"
            onCreated={({gl}) => {
                gl.domElement.addEventListener('webglcontextlost', e => {
                    e.preventDefault()
                }, false)
            }}
            style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
            }}
        >
            <ambientLight intensity={1.2}/>
            <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff"/>
            <pointLight position={[-4, 2, 2]} intensity={3} color="#4812e4"/>
            <pointLight position={[4, -1, 2]} intensity={2} color="#1aaccc"/>
            <pointLight position={[0, -2, -3]} intensity={1.5} color="#7c3aed"/>
            <pointLight position={[0, 4, 1]} intensity={1.5} color="#ffffff"/>

            <Environment preset="city" background={false}/>

            <BrandText3D/>
            <CameraRig mousePos={mousePos}/>
        </Canvas>
    )
}