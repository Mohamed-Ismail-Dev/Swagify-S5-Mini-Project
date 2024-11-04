import React from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  
  // Load both models (T-Shirt and Hoodie)
  const tshirtModel = useGLTF('/shirt_baked.glb');
  const hoodieModel = useGLTF('/hoodie_baked.glb');  // Assuming you have a Hoodie model file

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  logoTexture.anisotropy = 16;
  fullTexture.anisotropy = 16;

  useFrame((state, delta) => easing.dampC(
    snap.selectedModel === 'tshirt' ? tshirtModel.materials.lambert1.color : hoodieModel.materials.lambert1.color,
    snap.color,
    0.25,
    delta
  ));

  const stateString = JSON.stringify(snap);

  // Determine which model to render based on the selectedModel state
  const selectedGeometry = snap.selectedModel === 'tshirt'
    ? tshirtModel.nodes.T_Shirt_male.geometry
    : hoodieModel.nodes.Hoodie.geometry;

  const selectedMaterial = snap.selectedModel === 'tshirt'
    ? tshirtModel.materials.lambert1
    : hoodieModel.materials.lambert1;

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={selectedGeometry}
        material={selectedMaterial}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={0.75}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
