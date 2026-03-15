import {Canvas} from '@react-three/fiber';
import {Environment} from '@react-three/drei';
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
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={2} color={ui.white} />
      <pointLight position={[-4, 2, 2]} intensity={3} color={brand.base} />
      <pointLight position={[4, -1, 2]} intensity={2} color={brand.soft} />
      <pointLight position={[0, -2, -3]} intensity={1.5} color={brand.vivid} />
      <pointLight position={[0, 4, 1]} intensity={1.5} color={brand.faint} />

      <Environment preset="city" background={false} />

      <BrandText3D />
      <CameraRig mousePos={mousePos} />
    </Canvas>
  );
}
