'use client'

import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'

interface AnimatedCubeProps {
  position: [number, number, number]
}

export default function AnimatedCube({ position }: AnimatedCubeProps) {
  const meshRef = useRef<Mesh>(null)

  // Animation loop
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate the cube
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3

      // Floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#ff6b6b"
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  )
}
