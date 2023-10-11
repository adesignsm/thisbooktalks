import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Bloom, Noise, EffectComposer, DepthOfField, DotScreen, Scanline, Pixelation } from '@react-three/postprocessing'
import { PointerLockControls, OrbitControls, Box } from "@react-three/drei";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase";
import $ from "jquery";

import "./index.css";

const Dominicana = () => {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const storageRef = ref(storage, "creatives/offline_modesty/dominicana");

        listAll(storageRef).then((result) => {
            const promises = result.items.map((item) => {
                return getDownloadURL(item).then((url) => {
                    return { url, name: item.name };
                }).catch((error) => {
                    console.error("Error fetching download URL for item:", item.name, error);
                    return null;
                });
            });

            Promise.all(promises).then((urls) => {
                const validUrls = urls.filter((url) => url !== null);
                setImageUrls(validUrls);
            }).catch((error) => {
                console.error("Error fetching image URLs:", error);
            });
        }).catch((error) => {
            console.error("Error listing files in storage:", error);
        });
    }, []);

    useEffect(() => {
        console.log("imageUrls:", imageUrls);
    }, [imageUrls]);

    const OBJECT_DOMINICANA = () => {
        let purpleScribbleTexture, blueScribbleTexture, redCircleTexture, spotsTexture, topStarTexture, bottomStarTexture;

        if (imageUrls.length > 0) {
            purpleScribbleTexture = imageUrls[3].url;
            blueScribbleTexture = imageUrls[0].url;
            redCircleTexture = imageUrls[4].url;
            spotsTexture = imageUrls[2].url;
            topStarTexture = imageUrls[5].url;
            bottomStarTexture = imageUrls[1].url;
        }

        return (
            <>
                {imageUrls.length > 0 &&
                    <group position={[0, 0, 0]}>
                        <mesh position={[0, 0, 1]}>
                            <planeGeometry args={[7, 8]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(purpleScribbleTexture)} transparent={true} />
                        </mesh>
                        <mesh position={[0, 0, 1]}>
                            <planeGeometry args={[7, 8]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(blueScribbleTexture)} transparent={true} />
                        </mesh>
                        <mesh position={[0, 0, -1]}>
                            <planeGeometry args={[7, 8]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(redCircleTexture)} transparent={true} />
                        </mesh>
                        <mesh position={[0, 0, 1]}>
                            <planeGeometry args={[7, 8]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(spotsTexture)} transparent={true} />
                        </mesh>
                        <mesh position={[0, 0, 0]}>
                            <planeGeometry args={[7, 8]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(topStarTexture)} transparent={true} />
                        </mesh>
                        <mesh position={[0, 0, 0.5]}>
                            <planeGeometry args={[7, 8]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(bottomStarTexture)} transparent={true} />
                        </mesh>
                    </group>
                }
            </>
        )
    }

    return (
        <>
            <div id="dominicana-container">
                <Canvas id="dominicana-container-canvas" frameloop="always" camera={{fov: 75, near: 0.1, far: 10000, position: [-1, 1, 8],}}>
                    <ambientLight intensity={1} />
                    <OBJECT_DOMINICANA />
                    <EffectComposer>
                        <Bloom luminanceThreshold={0.7} luminanceSmoothing={1} height={window.innerHeight} />
                        <Noise opacity={1} />
                        <Pixelation granularity={0} />
                    </EffectComposer>
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
}

export default Dominicana;