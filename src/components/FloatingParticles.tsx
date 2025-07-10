'use client'

import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { Points } from 'three'

export default function FloatingParticles() {
  const pointsRef = useRef<Points>(null)

  // Generate random particle positions
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 200; i++) {
      temp.push(
        (Math.random() - 0.5) * 20, // x
        (Math.random() - 0.5) * 20, // y
        (Math.random() - 0.5) * 20  // z
      )
    }
    return new Float32Array(temp)
  }, [])

  // Animation loop for particles
  useFrame((state) => {
    if (pointsRef.current) {
      // Gentle rotation
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.1
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05

      // Update particle positions for floating effect
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime + i) * 0.01
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#4ecdc4"
        transparent
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  )
}
