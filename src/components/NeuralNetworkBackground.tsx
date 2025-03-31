
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random.js';
import { Vector3 } from 'three';

const NeuralNetwork = () => {
  const ref = useRef<THREE.Points>(null);
  const sphereCount = 5000;

  const positions = React.useMemo(() => {
    const pos = new Float32Array(sphereCount * 3);
    random.inSphere(pos as any, { radius: 1.5 });
    return pos;
  }, [sphereCount]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 10;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8B5CF6"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const NeuralNetworkBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-indigo-900 to-purple-900">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <NeuralNetwork />
      </Canvas>
    </div>
  );
};

export default NeuralNetworkBackground;

