// Comm.jsx
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from './canvas/Gmail'  // ← IMPORT HER ZAMAN EN ÜSTE
import { Scene } from 'three'

function Comm() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [0.1, 1, 1] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <primitive object={Scene} scale={2} />
                <OrbitControls />
                <Model /> {/* ← BOŞ ETİKET KULLANMANA GEREK YOK */}
            </Canvas>
        </div>
    )
}

export default Comm
