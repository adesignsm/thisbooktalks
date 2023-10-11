import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Bloom, Noise, EffectComposer, DepthOfField, DotScreen, Scanline, Pixelation } from '@react-three/postprocessing'
import { PointerLockControls, OrbitControls, Box } from "@react-three/drei";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase";
import $ from "jquery";

import "./index.css";

const FlowerArt = () => {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const storageRef = ref(storage, "creatives/offline_modesty/flower_art");

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

    const OBJECT_FLOWER_ART = () => {
        let gradientBgTexture, blueFlowerTexture, orangeSplashTexture, pinkFlowerTexture, redFlowerTexture, stemsTexture;

        if (imageUrls.length > 0) {
            blueFlowerTexture = imageUrls[0].url;
            gradientBgTexture = imageUrls[1].url;
            orangeSplashTexture = imageUrls[2].url;
            pinkFlowerTexture = imageUrls[3].url;
            redFlowerTexture = imageUrls[4].url;
            stemsTexture = imageUrls[5].url;
        }

        return (
            <>
                {imageUrls.length > 0 &&
                    <group position={[0, 0, -2]}>
                        <mesh position={[0, 0, 0]}>
                            <planeGeometry args={[7, 8]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(gradientBgTexture)} transparent={true} />
                        </mesh>
                        <mesh position={[0, 0, 1]}>
                            <planeGeometry args={[7, 8]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(orangeSplashTexture)} transparent={true} />
                        </mesh>
                        <mesh position={[0, 0, 1.5]}>
                            <planeGeometry args={[7, 8]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(blueFlowerTexture)} transparent={true} />
                        </mesh>
                        <mesh position={[0, 0, 1.7]}>
                            <planeGeometry args={[8, 7]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(redFlowerTexture)} transparent={true} />
                        </mesh>
                        <mesh position={[0, 0, 2]}>
                            <planeGeometry args={[8, 7]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(pinkFlowerTexture)} transparent={true} />
                        </mesh>
                        <mesh position={[0, 0, 4]}>
                            <planeGeometry args={[5, 7]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(stemsTexture)} transparent={true} />
                        </mesh>
                    </group>
                }
            </>
        )
    }

    return (
        <>
            <div id="flower-art-container">
                <Canvas id="flower-art-container-canvas" frameloop="always" camera={{fov: 75, near: 0.1, far: 10000, position: [0, 1, 8],}}>
                    <ambientLight intensity={1} />
                    <OBJECT_FLOWER_ART />
                    <EffectComposer>
                        <Bloom luminanceThreshold={0.7} luminanceSmoothing={1} height={window.innerHeight} />
                        <Noise opacity={0.5} />
                        <Pixelation granularity={0} />
                    </EffectComposer>
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
}

export default FlowerArt;