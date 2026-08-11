import {Canvas} from '@react-three/fiber';
import {Environment} from '@react-three/drei';
import {Suspense} from 'react';
import type {RefObject} from 'react';

import {CameraRig} from './CameraRig';
import {BrandText3D} from './BrandText3D';
import type {MousePosition} from '../../hooks/useMouseParallax';
import {brand, ui} from '../../styles/colors';

interface HeroSceneProps {
  mousePos: RefObject<MousePosition>;
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
        gl.domElement.addEventListener(
          'webglcontextlost',
          (e) => {
            e.preventDefault();
          },
          false,
        );
      }}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 6]} intensity={2.2} color={ui.white} />
      <directionalLight position={[-6, 2, 4]} intensity={1.1} color={ui.white} />
      <pointLight position={[-3, 1.5, 3]} intensity={5} color={brand.base} />
      <pointLight position={[3, -2, 2]} intensity={3} color={brand.faint} />

      <Suspense fallback={null}>
        <Environment preset="city" background={false} />
      </Suspense>

      <BrandText3D />
      <CameraRig mousePos={mousePos} />
    </Canvas>
  );
}
