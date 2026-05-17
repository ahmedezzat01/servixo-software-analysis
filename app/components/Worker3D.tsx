"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, ContactShadows, Float } from "@react-three/drei";
import * as THREE from "three";

// 3D Worker Character - Procedural humanoid
function WorkerCharacter() {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);
  const torsoRef = useRef<THREE.Mesh>(null);

  const mousePos = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      // Idle breathing animation
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.05;

      // Mouse following - smooth lerp
      targetRotation.current.x = mousePos.current.y * 0.3;
      targetRotation.current.y = mousePos.current.x * 0.5;

      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.05;
    }

    // Head looks at mouse more intensely
    if (headRef.current) {
      headRef.current.rotation.y = mousePos.current.x * 0.8;
      headRef.current.rotation.x = -mousePos.current.y * 0.5;
    }

    // Arms sway
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(t * 1.2) * 0.1 + 0.2;
      leftArmRef.current.rotation.x = Math.sin(t * 0.8) * 0.05;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = -Math.sin(t * 1.2 + Math.PI) * 0.1 - 0.2;
      rightArmRef.current.rotation.x = Math.sin(t * 0.8 + Math.PI) * 0.05;
    }

    // Legs idle
    if (leftLegRef.current) {
      leftLegRef.current.rotation.x = Math.sin(t * 0.5) * 0.02;
    }
    if (rightLegRef.current) {
      rightLegRef.current.rotation.x = Math.sin(t * 0.5 + Math.PI) * 0.02;
    }

    // Torso breathing
    if (torsoRef.current) {
      torsoRef.current.scale.x = 1 + Math.sin(t * 2) * 0.01;
      torsoRef.current.scale.z = 1 + Math.sin(t * 2) * 0.01;
    }
  });

  // Materials
  const bodyMaterial = useMemo(() => (
    <meshStandardMaterial
      color="#1a1a2e"
      metalness={0.7}
      roughness={0.3}
    />
  ), []);

  const jointMaterial = useMemo(() => (
    <meshStandardMaterial
      color="#06b6d4"
      metalness={0.9}
      roughness={0.1}
      emissive="#06b6d4"
      emissiveIntensity={0.2}
    />
  ), []);

  const glowMaterial = useMemo(() => (
    <meshStandardMaterial
      color="#06b6d4"
      emissive="#06b6d4"
      emissiveIntensity={1}
      transparent
      opacity={0.8}
    />
  ), []);

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Head */}
      <group position={[0, 2.2, 0]}>
        <mesh ref={headRef}>
          <sphereGeometry args={[0.35, 32, 32]} />
          {bodyMaterial}
        </mesh>
        {/* Eyes - glowing */}
        <mesh position={[-0.12, 0.05, 0.28]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          {glowMaterial}
        </mesh>
        <mesh position={[0.12, 0.05, 0.28]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          {glowMaterial}
        </mesh>
        {/* Headset/helmet ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.38, 0.02, 16, 64]} />
          {jointMaterial}
        </mesh>
      </group>

      {/* Neck */}
      <mesh position={[0, 1.8, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.2, 16]} />
        {jointMaterial}
      </mesh>

      {/* Torso */}
      <mesh ref={torsoRef} position={[0, 1.2, 0]}>
        <boxGeometry args={[0.6, 0.9, 0.35]} />
        {bodyMaterial}
      </mesh>
      {/* Chest glow */}
      <mesh position={[0, 1.3, 0.18]}>
        <circleGeometry args={[0.1, 32]} />
        {glowMaterial}
      </mesh>

      {/* Shoulders */}
      <mesh position={[-0.4, 1.55, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        {jointMaterial}
      </mesh>
      <mesh position={[0.4, 1.55, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        {jointMaterial}
      </mesh>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.5, 1.4, 0]}>
        <mesh position={[0, -0.3, 0]}>
          <capsuleGeometry args={[0.08, 0.4, 8, 16]} />
          {bodyMaterial}
        </mesh>
        {/* Elbow */}
        <mesh position={[0, -0.6, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          {jointMaterial}
        </mesh>
        {/* Forearm */}
        <mesh position={[0, -0.9, 0]}>
          <capsuleGeometry args={[0.07, 0.35, 8, 16]} />
          {bodyMaterial}
        </mesh>
        {/* Hand */}
        <mesh position={[0, -1.15, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          {jointMaterial}
        </mesh>
      </group>

      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.5, 1.4, 0]}>
        <mesh position={[0, -0.3, 0]}>
          <capsuleGeometry args={[0.08, 0.4, 8, 16]} />
          {bodyMaterial}
        </mesh>
        {/* Elbow */}
        <mesh position={[0, -0.6, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          {jointMaterial}
        </mesh>
        {/* Forearm */}
        <mesh position={[0, -0.9, 0]}>
          <capsuleGeometry args={[0.07, 0.35, 8, 16]} />
          {bodyMaterial}
        </mesh>
        {/* Hand */}
        <mesh position={[0, -1.15, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          {jointMaterial}
        </mesh>
      </group>

      {/* Hips */}
      <mesh position={[0, 0.65, 0]}>
        <boxGeometry args={[0.5, 0.2, 0.3]} />
        {bodyMaterial}
      </mesh>

      {/* Left Leg */}
      <group ref={leftLegRef} position={[-0.2, 0.5, 0]}>
        <mesh position={[0, -0.35, 0]}>
          <capsuleGeometry args={[0.1, 0.5, 8, 16]} />
          {bodyMaterial}
        </mesh>
        {/* Knee */}
        <mesh position={[0, -0.7, 0]}>
          <sphereGeometry args={[0.11, 16, 16]} />
          {jointMaterial}
        </mesh>
        {/* Shin */}
        <mesh position={[0, -1.05, 0]}>
          <capsuleGeometry args={[0.09, 0.45, 8, 16]} />
          {bodyMaterial}
        </mesh>
        {/* Foot */}
        <mesh position={[0, -1.35, 0.05]}>
          <boxGeometry args={[0.15, 0.1, 0.25]} />
          {jointMaterial}
        </mesh>
      </group>

      {/* Right Leg */}
      <group ref={rightLegRef} position={[0.2, 0.5, 0]}>
        <mesh position={[0, -0.35, 0]}>
          <capsuleGeometry args={[0.1, 0.5, 8, 16]} />
          {bodyMaterial}
        </mesh>
        {/* Knee */}
        <mesh position={[0, -0.7, 0]}>
          <sphereGeometry args={[0.11, 16, 16]} />
          {jointMaterial}
        </mesh>
        {/* Shin */}
        <mesh position={[0, -1.05, 0]}>
          <capsuleGeometry args={[0.09, 0.45, 8, 16]} />
          {bodyMaterial}
        </mesh>
        {/* Foot */}
        <mesh position={[0, -1.35, 0.05]}>
          <boxGeometry args={[0.15, 0.1, 0.25]} />
          {jointMaterial}
        </mesh>
      </group>

      {/* Tool/Tablet in hand */}
      <group position={[0.5, 0.3, 0.3]} rotation={[0.3, 0, -0.2]}>
        <mesh>
          <boxGeometry args={[0.3, 0.4, 0.02]} />
          <meshStandardMaterial
            color="#0a0a1a"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        {/* Screen glow */}
        <mesh position={[0, 0, 0.015]}>
          <planeGeometry args={[0.25, 0.35]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>
    </group>
  );
}

// Floating particles around worker
function WorkerParticles() {
  const count = 30;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2 + Math.random() * 1.5;
      const speed = 0.3 + Math.random() * 0.7;
      const yOffset = Math.random() * 4 - 1;
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
        p.yOffset + Math.sin(t * 0.8 + i) * 0.2,
        Math.sin(currentAngle) * p.radius
      );
      dummy.scale.setScalar(0.02 + Math.sin(t * 2 + i) * 0.005);
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
        emissiveIntensity={2}
        transparent
        opacity={0.6}
      />
    </instancedMesh>
  );
}

// Ground reflection
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial
        color="#000"
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

// Main Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} castShadow />
      <pointLight position={[0, 3, 0]} intensity={1} color="#06b6d4" />
      <pointLight position={[-3, 2, 3]} intensity={0.5} color="#3b82f6" />
      <pointLight position={[3, 2, -3]} intensity={0.5} color="#8b5cf6" />

      <WorkerCharacter />
      <WorkerParticles />
      <Ground />

      <ContactShadows
        position={[0, -1.49, 0]}
        opacity={0.4}
        scale={10}
        blur={2}
        far={4}
      />

      <Environment preset="city" />
    </>
  );
}

// Exported Component
export default function Worker3D() {
  return (
    <div className="w-full h-[600px] md:h-[700px] lg:h-[800px]">
      <Canvas
        camera={{ position: [0, 1, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        shadows
      >
        <Scene />
      </Canvas>
    </div>
  );
}
