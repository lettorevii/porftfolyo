import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
    const { nodes, materials } = useGLTF('/gmail/gmail.glb')
    return (
        <group {...props} dispose={null} scale={8

        }>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh_Mesh_head_geo001_lambert2SG001.geometry}
                material={materials['lambert2SG.001']}
                rotation={[-Math.PI / 2, 0, 0]}
                userData={{ name: 'Mesh_Mesh_head_geo.001_lambert2SG.001' }}

            />
        </group >
    )
}

useGLTF.preload('/gmail/gmail.glb')
