import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { GlowingEffectComponent } from "./glowing-effect.component";

interface Cube3DProps {
  onRotationChange?: (rotation: { x: number; y: number; z: number }) => void;
  rotation?: { x: number; y: number; z: number };
  projectImages?: string[];
}

function Cube({ onRotationChange, rotation = { x: 0, y: 0, z: 0 }, projectImages = [] }: Cube3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [targetRotation, setTargetRotation] = useState(rotation);
  const [currentRotation, setCurrentRotation] = useState(rotation);

  // Carrega as texturas das imagens
  const textures = useTexture(projectImages.length > 0 ? projectImages : ["/791.jpg", "/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg"]);

  useEffect(() => {
    setTargetRotation(rotation);
  }, [rotation]);

  useFrame(() => {
    if (meshRef.current) {
      // Interpolação suave entre rotação atual e alvo
      const lerpFactor = 0.1;
      const newRotation = {
        x: currentRotation.x + (targetRotation.x - currentRotation.x) * lerpFactor,
        y: currentRotation.y + (targetRotation.y - currentRotation.y) * lerpFactor,
        z: currentRotation.z + (targetRotation.z - currentRotation.z) * lerpFactor,
      };

      setCurrentRotation(newRotation);

      meshRef.current.rotation.x = newRotation.x;
      meshRef.current.rotation.y = newRotation.y;
      meshRef.current.rotation.z = newRotation.z;

      if (onRotationChange) {
        onRotationChange(newRotation);
      }
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <boxGeometry args={[4, 4, 4]} />
        <meshStandardMaterial 
          map={textures[0]} 
          metalness={0.1} 
          roughness={0.1} 
          emissive="#000000"
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  );
}

export const Cube3D = ({ onRotationChange, rotation, projectImages }: Cube3DProps) => {
  return (
    <div className="w-full h-[450px] overflow-visible flex items-center justify-center">
      <div className="w-[450px] h-[450px]">
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }} style={{ background: "transparent", width: "100%", height: "100%" }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[0, 0, 5]} intensity={2.0} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[0, 0, 3]} intensity={1.0} />
          <pointLight position={[-3, 3, 3]} intensity={0.8} />

          <Cube onRotationChange={onRotationChange} rotation={rotation} projectImages={projectImages} />

          <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} autoRotate={false} />
        </Canvas>
      </div>
    </div>
  );
};

interface CubeControlsProps {
  onRotate: (direction: "up" | "down" | "left" | "right") => void;
  onReset: () => void;
}

export const CubeControls = ({ onRotate, onReset }: CubeControlsProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Up button */}
      <button
        onClick={() => onRotate("up")}
        className="w-14 h-8 bg-[#1b1b1b] cursor-pointer hover:bg-[#272727] border-dotted border border-gray-400 rounded-md flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 active:scale-95"
        aria-label="Rotate up"
      >
        <GlowingEffectComponent spread={50} glow={true} disabled={false} proximity={200} inactiveZone={0.01} borderWidth={1} />
        <svg className="w-4 h-4 text-white transition-transform duration-200 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Left and Right buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => onRotate("left")}
          className="w-14 h-8 bg-[#1b1b1b] cursor-pointer hover:bg-[#272727] border-dotted border border-gray-400 rounded-md flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 active:scale-95"
          aria-label="Rotate left"
        >
          <GlowingEffectComponent spread={50} glow={true} disabled={false} proximity={200} inactiveZone={0.01} borderWidth={1} />
          <svg className="w-4 h-4 text-white transition-transform duration-200 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button onClick={onReset} className="w-14 h-8 cursor-pointer bg-white/90 hover:bg-white text-black rounded-md flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 active:scale-95" aria-label="Reset rotation">
          <GlowingEffectComponent spread={50} glow={true} disabled={false} proximity={200} inactiveZone={0.01} borderWidth={1} />
          <svg className="w-4 h-4 transition-transform duration-200 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>

        <button
          onClick={() => onRotate("right")}
          className="w-14 h-8 bg-[#1b1b1b] cursor-pointer hover:bg-[#272727] border-dotted border border-gray-400 rounded-md flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 active:scale-95"
          aria-label="Rotate right"
        >
          <GlowingEffectComponent spread={50} glow={true} disabled={false} proximity={200} inactiveZone={0.01} borderWidth={1} />
          <svg className="w-4 h-4 text-white transition-transform duration-200 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Down button */}
      <button
        onClick={() => onRotate("down")}
        className="w-14 h-8 bg-[#1b1b1b] cursor-pointer hover:bg-[#272727] border-dotted border border-gray-400 rounded-md flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 active:scale-95"
        aria-label="Rotate down"
      >
        <GlowingEffectComponent spread={50} glow={true} disabled={false} proximity={200} inactiveZone={0.01} borderWidth={1} />

        <svg className="w-4 h-4 text-white transition-transform duration-200 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};