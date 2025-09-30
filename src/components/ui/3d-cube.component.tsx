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
  const [isLoading, setIsLoading] = useState(true);

  // Garante 6 imagens (uma por face)
  const imageArray =
    projectImages.length >= 6
      ? projectImages
      : ["/791.jpg", "/about.jpg", "/contact.jpg", "/feedback.jpg", "/hm.jpg", "/services.jpg"];

  const textures = useTexture(imageArray);

  useEffect(() => {
    setTargetRotation(rotation);
  }, [rotation]);

  useEffect(() => {
    // Simula o carregamento das texturas
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [textures]);

  useFrame(() => {
    if (meshRef.current) {
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

  if (isLoading) {
    return (
      <group>
        <mesh>
          <boxGeometry args={[4, 4, 4]} />
          <meshBasicMaterial color="black" wireframe />
        </mesh>
      </group>
    );
  }

  return (
    <group>
      <mesh ref={meshRef}>
        <boxGeometry args={[3.5, 3.5, 3.5]} />
        {textures.map((texture, i) => (
          <meshStandardMaterial
            key={i}
            attach={`material-${i}`} // aplica textura na face i
            map={texture}
            metalness={0.0}
            roughness={0.8}
          />
        ))}
      </mesh>
    </group>
  );
}


export const Cube3D = ({ onRotationChange, rotation, projectImages }: Cube3DProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-fit flex items-center justify-center relative min-h-[300px]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 md:w-12 md:h-12 border-4 border-gray-300 border-t-white rounded-full animate-spin"></div>
            <p className="text-white text-xs md:text-sm font-medium">Loading 3D Model...</p>
          </div>
        </div>
      )}
      <div className="w-full h-full max-w-[450px] max-h-[450px] mx-auto aspect-square">
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }} style={{ background: "transparent", width: "100%", height: "100%" }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={0.4} />
          <directionalLight position={[-5, -5, 5]} intensity={0.3} />
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
    <div className="flex flex-col items-center gap-2 md:gap-3">
      {/* Up button */}
      <button
        onClick={() => onRotate("up")}
        className="w-10 h-6 md:w-14 md:h-8 bg-[#1b1b1b] cursor-pointer hover:bg-[#272727] border-dotted border border-gray-400 rounded-md flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 active:scale-95"
        aria-label="Rotate up"
      >
        <GlowingEffectComponent spread={50} glow={true} disabled={false} proximity={200} inactiveZone={0.01} borderWidth={1} />
        <svg className="w-3 h-3 md:w-4 md:h-4 text-white transition-transform duration-200 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
      
      {/* Left and Right buttons */}
      <div className="flex gap-2 md:gap-3">
        <button
          onClick={() => onRotate("left")}
          className="w-10 h-6 md:w-14 md:h-8 bg-[#1b1b1b] cursor-pointer hover:bg-[#272727] border-dotted border border-gray-400 rounded-md flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 active:scale-95"
          aria-label="Rotate left"
        >
          <GlowingEffectComponent spread={50} glow={true} disabled={false} proximity={200} inactiveZone={0.01} borderWidth={1} />
          <svg className="w-3 h-3 md:w-4 md:h-4 text-white transition-transform duration-200 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button onClick={onReset} className="w-10 h-6 md:w-14 md:h-8 cursor-pointer bg-white/90 hover:bg-white text-black rounded-md flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 active:scale-95" aria-label="Reset rotation">
          <GlowingEffectComponent spread={50} glow={true} disabled={false} proximity={200} inactiveZone={0.01} borderWidth={1} />
          <svg className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-200 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
        
        <button
          onClick={() => onRotate("right")}
          className="w-10 h-6 md:w-14 md:h-8 bg-[#1b1b1b] cursor-pointer hover:bg-[#272727] border-dotted border border-gray-400 rounded-md flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 active:scale-95"
          aria-label="Rotate right"
        >
          <GlowingEffectComponent spread={50} glow={true} disabled={false} proximity={200} inactiveZone={0.01} borderWidth={1} />
          <svg className="w-3 h-3 md:w-4 md:h-4 text-white transition-transform duration-200 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Down button */}
      <button
        onClick={() => onRotate("down")}
        className="w-10 h-6 md:w-14 md:h-8 bg-[#1b1b1b] cursor-pointer hover:bg-[#272727] border-dotted border border-gray-400 rounded-md flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 active:scale-95"
        aria-label="Rotate down"
      >
        <GlowingEffectComponent spread={50} glow={true} disabled={false} proximity={200} inactiveZone={0.01} borderWidth={1} />

        <svg className="w-3 h-3 md:w-4 md:h-4 text-white transition-transform duration-200 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};