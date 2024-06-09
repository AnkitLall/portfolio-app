import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { a } from '@react-spring/three';

import islandScene from '../assets/island.glb';


const Island = (props) => {
  const { nodes, materials } = useGLTF(islandScene);
  return (
    <a.group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube001_Material005_0.geometry}
        material={materials['Material.005']}
        position={[92.088, -300.733, -1022.194]}
        rotation={[0, 1.387, 0]}
        scale={100.02}
      />
      {/* <mesh
        geometry={nodes.Cube002_Material004_0.geometry}
        material={materials['Material.004']}
        position={[92.088, -1359.733, -1022.194]}
        rotation={[0, 1.387, 0]}
        scale={183.02}
      />
      <mesh
        geometry={nodes.Cube_Material007_0.geometry}
        material={materials['Material.007']}
        position={[-1220.449, 322.205, -117.979]}
        rotation={[-Math.PI / 2, 0, 2.409]}
        scale={[1154.002, 1154.002, 351.421]}
      />
      <mesh
        geometry={nodes.Object001_Object001_mtl_0.geometry}
        material={materials.Object001_mtl}
        position={[-824.066, 680.058, -1303.098]}
        rotation={[-1.59, -0.01, -0.665]}
        scale={0.864}
      />
      <mesh
        geometry={nodes.Object001001_Object001_mtl_0.geometry}
        material={materials.Object001_mtl}
        position={[369.024, 680.058, -140.581]}
        rotation={[-Math.PI / 2, -0.022, 0.429]}
        scale={0.864}
      />
      <mesh
        geometry={nodes.Object001002_Object001_mtl_0.geometry}
        material={materials.Object001_mtl}
        position={[369.024, 680.058, -140.581]}
        rotation={[-Math.PI / 2, -0.022, 0.429]}
        scale={0.864}
      />
      <mesh
        geometry={nodes.Object001003_Object001_mtl_0.geometry}
        material={materials.Object001_mtl}
        position={[369.024, 680.058, -140.581]}
        rotation={[-Math.PI / 2, -0.022, 0.429]}
        scale={0.864}
      />
      <mesh
        geometry={nodes.Object001004_Object001_mtl_0.geometry}
        material={materials.Object001_mtl}
        position={[369.024, 680.058, -140.581]}
        rotation={[-Math.PI / 2, -0.022, 0.429]}
        scale={0.864}
      />
      <mesh
        geometry={nodes.Object001005_Object001_mtl_0.geometry}
        material={materials.Object001_mtl}
        position={[369.024, 680.058, -140.581]}
        rotation={[-Math.PI / 2, -0.022, 0.429]}
        scale={0.864}
      />
      <mesh
        geometry={nodes.Object001006_Object001_mtl_0.geometry}
        material={materials.Object001_mtl}
        position={[369.024, 680.058, -140.581]}
        rotation={[-Math.PI / 2, -0.022, 0.429]}
        scale={0.864}
      />
      <mesh
        geometry={nodes.Object001007_Object001_mtl_0.geometry}
        material={materials.Object001_mtl}
        position={[369.024, 680.058, -140.581]}
        rotation={[-Math.PI / 2, -0.022, 0.429]}
        scale={0.864}
      />
      <mesh
        geometry={nodes.Cube010_Cube024_M4_0.geometry}
        material={materials.material}
        position={[590.185, 677.153, -995.55]}
        rotation={[3.126, -1.494, 3.126]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube009_Cube004_M3_0.geometry}
        material={materials.material_5}
        position={[590.185, 670.893, -995.55]}
        rotation={[Math.PI, -1.494, Math.PI]}
        scale={100}
      /> */}
    </a.group>
  );
};

export default Island;
