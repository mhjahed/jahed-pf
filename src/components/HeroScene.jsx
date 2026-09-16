import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function Core() {
  const rings = useRef(null)
  const halo = useRef(null)

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime
    if (rings.current) {
      rings.current.rotation.y += dt * 0.22
      rings.current.rotation.x = Math.sin(t * 0.25) * 0.28
    }
    if (halo.current) halo.current.rotation.z -= dt * 0.1
  })

  const points = useMemo(() => {
    const N = 260
    const arr = new Float32Array(N * 3)
    for (let i = 0; i < N; i += 1) {
      const r = 2.05 + Math.random() * 0.75
      const th = Math.random() * Math.PI * 2
      const ph = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(ph) * Math.cos(th)
      arr[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th)
      arr[i * 3 + 2] = r * Math.cos(ph)
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(arr, 3))
    return geometry
  }, [])

  return (
    <>
      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1.7}>
        <mesh>
          <icosahedronGeometry args={[1.02, 0]} />
          <meshBasicMaterial wireframe color="#39d353" transparent opacity={0.9} />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.02, 1]} />
          <meshBasicMaterial color="#39d353" transparent opacity={0.05} />
        </mesh>
      </Float>
      <group ref={rings}>
        <mesh rotation={[Math.PI / 2.4, 0.4, 0]}>
          <torusGeometry args={[1.55, 0.008, 8, 96]} />
          <meshBasicMaterial color="#2ea043" transparent opacity={0.9} />
        </mesh>
        <mesh rotation={[Math.PI / 1.8, -0.6, 0.4]}>
          <torusGeometry args={[1.85, 0.006, 8, 96]} />
          <meshBasicMaterial color="#196c2e" transparent opacity={0.8} />
        </mesh>
      </group>
      <group ref={halo}>
        <points geometry={points}>
          <pointsMaterial size={0.028} color="#9fefc0" transparent opacity={0.85} sizeAttenuation />
        </points>
      </group>
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.6], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <Core />
    </Canvas>
  )
}
