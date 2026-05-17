"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Float,
  MeshDistortMaterial,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

// Main Core Shape
function CoreShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
      // Breathing pulse
      const scale = 1 + Math.sin(t * 1.5) * 0.03;
      meshRef.current.scale.setScalar(scale);
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = t * 0.15;
      wireRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
      wireRef.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.03);
    }
  });

  return (
    <group>
      {/* Main Icosahedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <MeshDistortMaterial
          color="#06b6d4"
          transparent
          opacity={0.15}
          roughness={0.1}
          metalness={0.8}
          distort={0.2}
          speed={2}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[2.02, 1]} />
        <meshBasicMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Inner core */}
      <mesh>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={2}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Glow sphere */}
      <mesh>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

// Orbiting Particles
function Particles() {
  const count = 80;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 3 + Math.random() * 2;
      const speed = 0.2 + Math.random() * 0.5;
      const yOffset = (Math.random() - 0.5) * 2;
      temp.push({ angle, radius, speed, yOffset });
    }
    return temp;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!meshRef.current) return;

    particles.forEach((p, i) => {
      const currentAngle = p.angle + t * p.speed;
      dummy.position.set(
        Math.cos(currentAngle) * p.radius,
        p.yOffset + Math.sin(t * 0.5 + i) * 0.3,
        Math.sin(currentAngle) * p.radius
      );
      dummy.scale.setScalar(0.03 + Math.sin(t * 2 + i) * 0.01);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial
        color="#22d3ee"
        emissive="#22d3ee"
        emissiveIntensity={3}
        transparent
        opacity={0.8}
      />
    </instancedMesh>
  );
}

// Connection Lines (representing marketplace network)
function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 12; i++) {
      const startAngle = (i / 12) * Math.PI * 2;
      const endAngle = ((i + 4) / 12) * Math.PI * 2;
      temp.push({
        start: new THREE.Vector3(
          Math.cos(startAngle) * 3.5,
          (Math.random() - 0.5) * 1,
          Math.sin(startAngle) * 3.5
        ),
        end: new THREE.Vector3(
          Math.cos(endAngle) * 3.5,
          (Math.random() - 0.5) * 1,
          Math.sin(endAngle) * 3.5
        ),
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (linesRef.current) {
      linesRef.current.rotation.y = t * 0.05;
    }
  });

  return (
    <group ref={linesRef}>
      {lines.map((line, i) => {
        const points = [line.start, line.end];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial
              color="#06b6d4"
              transparent
              opacity={0.15}
            />
          </line>
        );
      })}
    </group>
  );
}

// Floating Labels around the core
function FloatingLabels() {
  const labels = [
    { text: "Clients", position: [-4, 1, 0], color: "#3b82f6" },
    { text: "Workers", position: [4, -1, 0], color: "#22c55e" },
    { text: "Services", position: [0, 3, 2], color: "#f59e0b" },
    { text: "Admin", position: [0, -3, -2], color: "#ef4444" },
  ];

  return (
    <>
      {labels.map((label, i) => (
        <Float
          key={i}
          speed={2}
          rotationIntensity={0.1}
          floatIntensity={0.5}
          floatingRange={[-0.2, 0.2]}
        >
          <group position={label.position as [number, number, number]}>
            {/* Glow point */}
            <mesh>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial
                color={label.color}
                emissive={label.color}
                emissiveIntensity={2}
              />
            </mesh>
            {/* Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.2, 0.25, 32]} />
              <meshBasicMaterial color={label.color} transparent opacity={0.5} side={THREE.DoubleSide} />
            </mesh>
          </group>
        </Float>
      ))}
    </>
  );
}

// Main Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[0, 0, 0]} intensity={1} color="#06b6d4" />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />

      <CoreShape />
      <Particles />
      <ConnectionLines />
      <FloatingLabels />

      <ContactShadows
        position={[0, -4, 0]}
        opacity={0.3}
        scale={20}
        blur={2}
        far={8}
      />

      <Environment preset="city" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

// Exported Component
export default function ServixoCore() {
  return (
    <div className="w-full h-[600px] md:h-[700px] lg:h-[800px]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
