import {useRef} from 'react'
import {Text3D, Center} from '@react-three/drei'
import {Canvas, useFrame, useThree} from '@react-three/fiber'
import helvetikerBold from 'three/examples/fonts/helvetiker_bold.typeface.json'
import type {Group} from 'three'

const BRAND_COLOR = '#a78bfa'

const tagData = [
    {label: 'React', xFrac: -0.80, yFrac: 0.60, z: -0.6, phase: 0.0, speed: 0.50, rxS: 0.40, ryS: 0.30, rzS: 0.20},
    {label: 'TypeScript', xFrac: 0.72, yFrac: 0.65, z: -1.0, phase: 1.2, speed: 0.40, rxS: 0.35, ryS: 0.50, rzS: 0.25},
    {label: 'Node.js', xFrac: -0.82, yFrac: -0.50, z: -0.3, phase: 2.1, speed: 0.55, rxS: 0.45, ryS: 0.28, rzS: 0.35},
    {
        label: 'React Native',
        xFrac: 0.70,
        yFrac: -0.58,
        z: -0.8,
        phase: 0.7,
        speed: 0.45,
        rxS: 0.30,
        ryS: 0.42,
        rzS: 0.18
    },
    {label: 'Web3.js', xFrac: -0.55, yFrac: 0.74, z: -1.2, phase: 1.5, speed: 0.52, rxS: 0.50, ryS: 0.22, rzS: 0.40},
    {label: 'NestJS', xFrac: 0.58, yFrac: 0.72, z: -0.5, phase: 2.5, speed: 0.48, rxS: 0.28, ryS: 0.55, rzS: 0.30},
    {label: 'Next.js', xFrac: -0.65, yFrac: -0.72, z: -0.7, phase: 0.4, speed: 0.46, rxS: 0.42, ryS: 0.35, rzS: 0.22},
    {label: 'Angular', xFrac: 0.78, yFrac: -0.22, z: -1.4, phase: 1.8, speed: 0.50, rxS: 0.38, ryS: 0.45, rzS: 0.28},
    {label: 'MongoDB', xFrac: 0.74, yFrac: 0.35, z: -0.6, phase: 0.9, speed: 0.55, rxS: 0.32, ryS: 0.38, rzS: 0.45},
    {label: 'GraphQL', xFrac: -0.20, yFrac: -0.76, z: -0.9, phase: 1.3, speed: 0.42, rxS: 0.48, ryS: 0.30, rzS: 0.35},
]

interface TagProps {
    label: string
    xFrac: number
    yFrac: number
    z: number
    phase: number
    speed: number
    rxS: number
    ryS: number
    rzS: number
    vw: number
    vh: number
}

function FloatingTag({label, xFrac, yFrac, z, phase, speed, rxS, ryS, rzS, vw, vh}: TagProps) {
    const ref = useRef<Group>(null)
    const baseX = xFrac * vw * 0.5
    const baseY = yFrac * vh * 0.5

    useFrame(({clock}) => {
        if (!ref.current) return
        const t = clock.elapsedTime
        ref.current.position.y = baseY + Math.sin(t * speed + phase) * 0.18
        ref.current.rotation.x = Math.sin(t * rxS + phase) * 0.5
        ref.current.rotation.y = Math.sin(t * ryS + phase + 1.0) * 0.6
        ref.current.rotation.z = Math.cos(t * rzS + phase + 0.5) * 0.3
    })

    return (
        <group ref={ref} position={[baseX, baseY, z]}>
            <Center>
                <Text3D
                    font={helvetikerBold as unknown as string}
                    size={0.17}
                    height={0.04}
                    curveSegments={4}
                    bevelEnabled
                    bevelThickness={0.007}
                    bevelSize={0.004}
                    bevelSegments={2}
                >
                    {label}
                    <meshPhysicalMaterial
                        color={BRAND_COLOR}
                        transparent
                        opacity={0.7}
                        roughness={0.05}
                        metalness={0.6}
                        clearcoat={1}
                        clearcoatRoughness={0.05}
                        envMapIntensity={3}
                    />
                </Text3D>
            </Center>
        </group>
    )
}

function SceneTags() {
    const {viewport} = useThree()
    return (
        <>
            <ambientLight intensity={0.4}/>
            <pointLight position={[0, 0, 5]} intensity={3.0} color="#ffffff"/>
            <pointLight position={[-6, 4, 3]} intensity={4.0} color="#4812e4"/>
            <pointLight position={[6, -2, 3]} intensity={4.0} color="#1aaccc"/>
            <pointLight position={[0, 6, 2]} intensity={3.5} color="#7c3aed"/>
            <pointLight position={[-4, -4, 2]} intensity={3.0} color="#1aaccc"/>
            <pointLight position={[5, 3, 1]} intensity={3.0} color="#4812e4"/>
            <pointLight position={[0, -5, 4]} intensity={2.5} color="#a78bfa"/>
            <pointLight position={[-5, 0, 2]} intensity={2.5} color="#22d3ee"/>
            {tagData.map(tag => (
                <FloatingTag
                    key={tag.label}
                    {...tag}
                    vw={viewport.width}
                    vh={viewport.height}
                />
            ))}
        </>
    )
}

export function FloatingTechTags() {
    return (
        <Canvas
            camera={{position: [0, 0, 4], fov: 50}}
            gl={{
                antialias: true,
                alpha: true,
                powerPreference: 'high-performance',
                failIfMajorPerformanceCaveat: false,
            }}
            dpr={[1, 1.5]}
            aria-hidden="true"
            style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 1,
                opacity: 0.8
            }}
        >
            <SceneTags/>
        </Canvas>
    )
}