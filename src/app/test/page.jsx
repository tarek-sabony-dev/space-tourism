'use client'

import { Canvas } from '@react-three/fiber'
import { Stars, useTexture } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Moon() {
  const moonRef = useRef()

  // Load the moon texture from the models folder
  const colorMap = useTexture('/models/image.png')

  // Configure texture properties
  colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping

  useFrame((state, delta) => {
    // Rotate the moon around its Y axis
    moonRef.current.rotation.y += delta * 0.2
  })

  return (
    <mesh ref={moonRef}>
      <sphereGeometry args={[1, 128, 128]} />
      <meshStandardMaterial 
        map={colorMap}
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      {/* Ambient light for overall illumination */}
      <ambientLight intensity={0.3} />
      
      {/* Directional light to simulate sunlight */}
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow
      />
      
      {/* Moon model */}
      <Moon />
      
      {/* Stars background */}
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
    </>
  )
}

export default function TestPage() {
  return (
    <div className="w-full h-screen bg-black">
      <div className="absolute top-4 left-4 z-10 text-white">
        <h1 className="text-2xl font-bold mb-2">Rotating Moon</h1>
      </div>
      
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        shadows
        className="w-full h-full"
      >
        <Scene />
      </Canvas>
    </div>
  )
}
