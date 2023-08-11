import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Bloom, Noise, EffectComposer, DepthOfField, DotScreen, Scanline, Pixelation } from '@react-three/postprocessing'
import { PointerLockControls, OrbitControls, Box } from "@react-three/drei";
import $ from "jquery";

import FRONT_COVER from "../../Assets/Media/Entry/front_cover.jpg";
import BACK_COVER from "../../Assets/Media/Entry/back_cover.png";
import SIDE_COVER from "../../Assets/Media/Entry/side.jpg";

import "./index.css";

const Zine = () => {
    const zineRef = useRef();

    useFrame(() => {
        if (zineRef.current) {
            zineRef.current.rotation.y += 0.01;
            if (zineRef.current.position.z < -0.1) {
                zineRef.current.position.z += 0.015;
            } else {
                setTimeout(() => {
                    $("#entry-container").fadeOut(500);
                }, 3000);
            }
        }
    });

    return (
        <group ref={zineRef} position={[0, 0, -10]}>
            <mesh position={[0, 0, 0.025]}>
                <planeGeometry args={[0.6, 0.9]} />
                <meshBasicMaterial side={THREE.FrontSide} map={new THREE.TextureLoader().load(FRONT_COVER)} color={"#fff"}/>
            </mesh>
            <mesh>
                <Box args={[0.6, 0.9, 0.04]}>
                    <meshBasicMaterial color={"#fff"} />
                    <meshBasicMaterial color={"#fff"} />
                    <meshBasicMaterial color={"#fff"} />
                    <meshBasicMaterial color={"#fff"} />
                    <meshBasicMaterial color={"#fff"} />
                    <meshBasicMaterial color={"#fff"} map={new THREE.TextureLoader().load(SIDE_COVER)} />
                </Box>
            </mesh>
            <mesh scale={[-1, 1, 1]} position={[0, 0, -0.025]}>
                <planeGeometry args={[0.6, 0.9]}/>
                <meshBasicMaterial side={THREE.BackSide} map={new THREE.TextureLoader().load(BACK_COVER)} color={"#fff"}/>
            </mesh>
        </group>
    )
}

const Entry = () => {
    return (
        <>
            <div id="entry-container">
                <Canvas id="entry-container-canvas" frameloop="always" camera={{fov: 75, near: 0.1, far: 10000, position: [0, 0, 1],}}>
                    <ambientLight intensity={1} />
                    <Zine />
                    <EffectComposer>
                        <Bloom luminanceThreshold={0.7} luminanceSmoothing={1} height={window.innerHeight} />
                        {/* <Noise opacity={0} /> */}
                        <Pixelation granularity={0} />
                    </EffectComposer>
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
}

export default Entry;