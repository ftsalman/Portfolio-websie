"use client";

import { Suspense, useRef } from "react";
import type { ComponentRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function DistortedBlob() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<ComponentRef<typeof MeshDistortMaterial>>(null);
  const pointer = useRef(new THREE.Vector2(0, 0));

  useFrame(() => {
    const mesh = meshRef.current;
    const material = materialRef.current;
    if (!mesh || !material) {
      return;
    }

    mesh.rotation.y += 0.004;
    mesh.rotation.x = THREE.MathUtils.lerp(
      mesh.rotation.x,
      pointer.current.y * 0.55,
      0.09,
    );
    mesh.rotation.z = THREE.MathUtils.lerp(
      mesh.rotation.z,
      -pointer.current.x * 0.45,
      0.09,
    );

    const targetDistortion = 0.32 + Math.abs(pointer.current.x) * 0.25;
    material.distort = THREE.MathUtils.lerp(
      material.distort,
      targetDistortion,
      0.08,
    );
  });

  return (
    <Float speed={2.1} rotationIntensity={0.65} floatIntensity={0.8}>
      <mesh
        ref={meshRef}
        onPointerMove={(event) => {
          if (!event.uv) {
            return;
          }

          pointer.current.set(event.uv.x * 2 - 1, event.uv.y * 2 - 1);
        }}
        onPointerOut={() => {
          pointer.current.set(0, 0);
        }}
      >
        <icosahedronGeometry args={[1.46, 64]} />
        <MeshDistortMaterial
          ref={materialRef}
          color="#101010"
          metalness={0.92}
          roughness={0.08}
          distort={0.35}
          speed={1.75}
          emissive="#FF5F1F"
          emissiveIntensity={0.22}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[2.4, 3.2, 2]} intensity={1.15} />
      <pointLight
        position={[2.8, 0.6, 2.3]}
        color="#FF5F1F"
        intensity={42}
        distance={9}
      />
      <pointLight
        position={[-2.3, -1.1, -2]}
        color="#8A2BE2"
        intensity={25}
        distance={9}
      />
      <DistortedBlob />
    </>
  );
}

function CanvasLoader() {
  return (
    <Html center>
      <div className="rounded-3xl border border-white/20 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/75 backdrop-blur-xl">
        Loading 3D
      </div>
    </Html>
  );
}

export function Hero3D() {
  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/65 md:h-[420px]">
      <Suspense
        fallback={
          <div className="flex h-full items-center justify-center rounded-3xl border border-white/10 bg-black/65 text-xs uppercase tracking-[0.2em] text-white/70">
            Loading 3D
          </div>
        }
      >
        <Canvas camera={{ position: [0, 0, 3.3], fov: 44 }}>
          <fog attach="fog" args={["#050505", 2.8, 6.4]} />
          <Suspense fallback={<CanvasLoader />}>
            <Scene />
          </Suspense>
        </Canvas>
      </Suspense>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,95,31,0.24),transparent_40%),radial-gradient(circle_at_30%_80%,rgba(138,43,226,0.2),transparent_45%)]" />
    </div>
  );
}
