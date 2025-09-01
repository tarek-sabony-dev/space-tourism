'use client'

import { Canvas } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Planet({ 
  texturePath, 
  size = 1, 
  rotationSpeed = 0.2, 
  roughness = 0.8, 
  metalness = 0.1,
  position = [0, 0, 0]
}) {
  const planetRef = useRef()

  // Load the planet texture from the provided path
  const colorMap = useTexture(texturePath)

  // Configure texture properties
  colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping

  useFrame((state, delta) => {
    // Rotate the planet around its Y axis
    planetRef.current.rotation.y += delta * rotationSpeed
  })

  return (
    <mesh ref={planetRef} position={position} rotation={[0.2, 0, -0.2]}>
      <sphereGeometry args={[size, 128, 128]} />
      <meshStandardMaterial 
        map={colorMap}
        roughness={roughness}
        metalness={metalness}
      />
    </mesh>
  )
}

function Scene({ texturePath }) {
  return (
    <>
      {/* Ambient light for overall illumination - very low for dramatic shadows */}
      <ambientLight intensity={0.18} />
      
      {/* Strong directional light to simulate bright sunlight */}
      <directionalLight 
        position={[-5, 12, -3]}
        intensity={5.0}
        castShadow
      />
      
      {/* Subtle rim light for edge definition */}
      <directionalLight 
        position={[-15, 12, 3]}
        intensity={0.8}
        castShadow
      />
      <directionalLight 
        position={[-15, 12, -5]}
        intensity={2}
        castShadow
      />
      <directionalLight 
        position={[15, 100, -2]}
        intensity={2}
        castShadow
      />
      
      {/* Very subtle backlight for edge glow */}
      <directionalLight 
        position={[0, -5, -8]}
        intensity={0.1}
        castShadow={false}
      />
      
      {/* Planet model */}
      <Planet 
        texturePath={texturePath}
        size={2.4}
        rotationSpeed={0.1}
        roughness={0.95}
        metalness={0.5}
      />
    </>
  )
}

export default function PlanetModel({ texturePath }) {
  return (
    <>  
      <Canvas
        camera={{ position: [0, 0, 4], fov: 75 }}
        shadows
        className="w-fit h-fit"
        >
        <Scene texturePath={texturePath} />
      </Canvas>
    </>
  )
}
