import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';

import './ModelViewer.css';
import modelPath from '/assets/computer_terminal.glb';

const Model = () => {
    const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
};

const ModelViewer = () => {
  return (
    <div className="model-viewer-container">
      <Canvas dpr={[1, 2]} camera={{ fov: 50 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Model />
          </Stage>

        </Suspense>
        <OrbitControls />
      </Canvas>

    </div>
  );
};

export default ModelViewer;
