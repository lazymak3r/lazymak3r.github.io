import {useRef} from 'react';
import helvetikerBold from 'three/examples/fonts/helvetiker_bold.typeface.json';
import {Text3D, Center} from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import type {Group} from 'three';
import {neutral} from '../../styles/colors';

const TEXT_SIZE = 0.42;
const TEXT_HEIGHT = TEXT_SIZE / 3;

export function BrandText3D() {
  const groupRef = useRef<Group>(null);
  const {viewport} = useThree();

  const scale = Math.max(0.22, Math.min(0.66, viewport.width * 0.165));

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.25) * 0.12;
  });

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      <Center>
        <Text3D
          font={helvetikerBold as never}
          size={TEXT_SIZE}
          height={TEXT_HEIGHT}
          curveSegments={12}
          bevelEnabled
          bevelThickness={TEXT_SIZE * 0.06}
          bevelSize={TEXT_SIZE * 0.029}
          bevelOffset={0}
          bevelSegments={6}
        >
          Aram Suqiasyan
          <meshPhysicalMaterial
            color={neutral.n800}
            transparent
            opacity={0.92}
            roughness={0.08}
            metalness={0.35}
            clearcoat={1}
            clearcoatRoughness={0.05}
            envMapIntensity={1.6}
          />
        </Text3D>
      </Center>
    </group>
  );
}
