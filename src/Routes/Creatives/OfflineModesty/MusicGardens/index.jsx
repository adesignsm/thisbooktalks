import React, { useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Noise, EffectComposer, Pixelation } from '@react-three/postprocessing'
import { OrbitControls, Html } from "@react-three/drei";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase";

import "./index.css";

import eightOeightEight from "../../../../Assets/Media/OfflineModestySounds/808_8.wav";
import eightOeightTen from "../../../../Assets/Media/OfflineModestySounds/808_10.wav";
import clap2 from "../../../../Assets/Media/OfflineModestySounds/Clap_2.wav";
import hhTen from "../../../../Assets/Media/OfflineModestySounds/HH_10.wav";
import milageArpByXiztaa from "../../../../Assets/Media/OfflineModestySounds/milage_arp_by_xiztaa.wav";
import snareSeven from "../../../../Assets/Media/OfflineModestySounds/Snare_7.wav";

const MusicGardens = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const [sound, setSound] = useState("");

    useEffect(() => {
        const storageRef = ref(storage, "creatives/offline_modesty/music_gardens");

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

    const OBJECT_MUSIC_GARDENS = () => {
        let blueGradientTexture, flowerBgTexture, pinkNoteTexture, smallFlowerTexture, bigFlowerTexture, vineTexture, yellowNoteTexture;

        if (imageUrls.length > 0) {
            bigFlowerTexture = imageUrls[0].url;
            blueGradientTexture = imageUrls[1].url;
            flowerBgTexture = imageUrls[2].url;
            pinkNoteTexture = imageUrls[3].url;
            smallFlowerTexture = imageUrls[4].url;
            vineTexture = imageUrls[5].url;
            yellowNoteTexture = imageUrls[6].url;
        }

        const handleMouseDown = (meshName, e) => {
            e.stopPropagation();

            if (meshName === "bigFlower") {
                console.log("Clicked on bigFlower");
                const bigFlowerSound = document.getElementById('bigFlowerSound');
                bigFlowerSound.addEventListener("play", () => setSound('"Milage Arp" By Xiztaa - playing'));
                bigFlowerSound.addEventListener("ended", () => setSound('"Milage Arp" By Xiztaa - ended'));
                bigFlowerSound.play();
                bigFlowerSound.loop = true;

            } else if (meshName === "flowerBg") {
                console.log("Clicked on flowerBg");
                const flowerBgSound = document.getElementById('flowerBgSound');
                flowerBgSound.addEventListener("play", () => setSound('"808_8" - playing'));
                flowerBgSound.addEventListener("ended", () => setSound('"808_8" - ended'));
                flowerBgSound.play();

            } else if (meshName === "pinkNote") {
                console.log("Clicked on pinkNote");
                const pinkNoteSound = document.getElementById('pinkNoteSound');
                pinkNoteSound.addEventListener("play", () => setSound('"808_10" - playing'));
                pinkNoteSound.addEventListener("ended", () => setSound('"808_10" - ended'));
                pinkNoteSound.play();

            } else if (meshName === "smallFlower") {
                console.log("Clicked on smallFlower");
                const smallFlowerSound = document.getElementById('smallFlowerSound');
                smallFlowerSound.addEventListener("play", () => setSound('"Clap_2" - playing'));
                smallFlowerSound.addEventListener("ended", () => setSound('"Clap_2" - ended'));
                smallFlowerSound.play();

            } else if (meshName === "vine") {
                console.log("Clicked on vine");
                const vineSound = document.getElementById('vineSound');
                vineSound.addEventListener("play", () => setSound('"HH_10" - playing'));
                vineSound.addEventListener("ended", () => setSound('"HH_10" - ended'));
                vineSound.play();

            } else if (meshName === "yellowNote") {
                console.log("Clicked on yellowNote");
                const yellowNoteSound = document.getElementById('yellowNoteSound');
                yellowNoteSound.addEventListener("play", () => setSound('"Snare_7" - playing'));
                yellowNoteSound.addEventListener("ended", () => setSound('"Snare_7" - ended'));
                yellowNoteSound.play();
            }
        }

        return (
            <>
                {imageUrls.length > 0 &&
                    <group position={[0, 0, -2]}>
                        <mesh name="blueGradientBg" position={[0, 0, 0]}>
                            <planeGeometry args={[7, 8]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(blueGradientTexture)} transparent={true} opacity={20} alphaTest={0.5}/>
                        </mesh>
                        <mesh name="bigFlower" position={[0.7, 0, 1.1]} onClick={(e) => handleMouseDown("bigFlower", e)}>
                            <planeGeometry args={[4, 7]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(bigFlowerTexture)} transparent={true} opacity={0.5} alphaTest={0.1}/>
                        </mesh>
                        <mesh name="flowerBg" position={[-1.1, 0.3, 1]} onClick={(e) => handleMouseDown("flowerBg", e)}>
                            <planeGeometry args={[4, 6.5]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(flowerBgTexture)} transparent={true} alphaTest={0.1}/>
                        </mesh>
                        <mesh name="pinkNote" position={[2, 1.8, 1.5]} onClick={(e) => handleMouseDown("pinkNote", e)}>
                            <planeGeometry args={[1, 1]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(pinkNoteTexture)} transparent={true} alphaTest={0.1}/>
                        </mesh>
                        <mesh name="smallFlower" position={[2, -1, 1.7]} onClick={(e) => handleMouseDown("smallFlower", e)}>
                            <planeGeometry args={[0.7, 1.2]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(smallFlowerTexture)} transparent={true} alphaTest={0.1}/>
                        </mesh>
                        <mesh name="vine" position={[-2, 0, 2]} onClick={(e) => handleMouseDown("vine", e)}>
                            <planeGeometry args={[1, 6]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(vineTexture)} transparent={true} alphaTest={0}/>
                        </mesh>
                        <mesh name="yellowNote" position={[-0.5, 2, 2]} onClick={(e) => handleMouseDown("yellowNote", e)}>
                            <planeGeometry args={[1, 1]} />
                            <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.TextureLoader().load(yellowNoteTexture)} transparent={true} alphaTest={0}/>
                        </mesh>
                    </group>
                }
            </>
        )
    }

    return (
        <>
            <div id="music-gardens-container">
                <audio id="bigFlowerSound" src={milageArpByXiztaa} preload="auto"></audio>
                <audio id="flowerBgSound" src={eightOeightEight} preload="auto"></audio>
                <audio id="pinkNoteSound" src={eightOeightTen} preload="auto"></audio>
                <audio id="smallFlowerSound" src={clap2} preload="auto"></audio>
                <audio id="vineSound" src={hhTen} preload="auto"></audio>
                <audio id="yellowNoteSound" src={snareSeven} preload="auto"></audio>
                <Canvas id="music-gardnes-container-canvas" frameloop="always" camera={{fov: 75, near: 0.1, far: 10000, position: [0, 1, 8],}}>
                    <OBJECT_MUSIC_GARDENS />
                    <Html position={(0, 0, 1)}>
                        <div className="sound-label">{sound || "Click on one of the parts to play a sound"}</div>
                    </Html>
                    <EffectComposer>
                        <Noise opacity={0.3} />
                        <Pixelation granularity={0} />
                    </EffectComposer>
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
}

export default MusicGardens;