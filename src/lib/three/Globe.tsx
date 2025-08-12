import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useMemo } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

function PointsSphere() {
  const positions = useMemo(() => {
    const pts: number[] = [];
    const count = 500;
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 1;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      pts.push(x, y, z);
    }
    return new Float32Array(pts);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="hsl(187,92%,42%)" size={0.01} sizeAttenuation />
    </points>
  );
}

export function Globe() {
  const reduced = usePrefersReducedMotion();
  return (
    <Canvas camera={{ position: [0, 0, 2.2], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={0.8} />
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#1f2937" wireframe opacity={0.25} transparent />
      </mesh>
      <PointsSphere />
      <Stars radius={10} depth={20} count={2000} factor={2} fade speed={reduced ? 0 : 1} />
      <OrbitControls enableZoom={false} autoRotate={!reduced} autoRotateSpeed={0.6} />
    </Canvas>
  );
}
