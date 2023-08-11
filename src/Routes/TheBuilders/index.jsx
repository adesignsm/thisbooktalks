import React, { useEffect, useRef } from "react";
import { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } from 'matter-js';

import HEXSTUDIO from "../../Assets/Media/TheBuilders/hexstudio/profile_pic.jpg";
import WEAREBOOKCLUBTORONTO from "../../Assets/Media/TheBuilders/wearebookclubtoronto/profile_pic.jpg";
import ADRIAN from "../../Assets/Media/TheBuilders/adrian/profile_pic.jpg";
import MARK from "../../Assets/Media/TheBuilders/mark/profile_pic.jpg";
import JUSTIN from "../../Assets/Media/TheBuilders/justin/profile_pic.jpg";

import "./index.css";

const TheBuilders = () => {
    const scene = useRef();
    const engine = useRef(Engine.create());
    const profiles = {
        weAreBookClubToronto: {
            name: "BCT",
            link: "https://www.instagram.com/wearebookclubtoronto",
            bgColour: "#0000FF",
            color: "#fff"
        },
        hexStudio: {
            name: "HEX Web",
            link: "https://www.instagram.com/hexstudio.io",
            bgColour: "#0000FF",
            color: "#fff"
        },
        adrian: {
            name: "Adrian Curator",
            link: "https://www.instagram.com/augustusknightt",
            bgColour: "#000",
            color: "#fff"
        },
        mark: {
            name: "Mark Designer",
            link: "https://www.instagram.com/_markemery",
            bgColour: "#202020",
            color: "#fff"
        },
        justin: {
            name: "Justin Writer",
            link: "https://www.instagram.com/justinbayot",
            bgColour: "#000",
            color: "#fff"
        }
    };

    useEffect(() => {
        const cw = document.getElementById("canvas-holster").offsetWidth;
        const ch = document.getElementById("canvas-holster").offsetHeight;

        const render = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                width: cw,
                height: ch,
                wireframes: false,
                background: 'transparent'
            }
        })

        World.add(engine.current.world, [
            Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
            Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
            Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
            Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })
        ])

        Runner.run(engine.current)
        Render.run(render);

        engine.current.world.gravity.y = 0.01;

        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine.current, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });
    
        World.add(engine.current.world, mouseConstraint);
    
        render.mouse = mouse;

        addProfiles();

        return () => {
            Render.stop(render)
            World.clear(engine.current.world)
            Engine.clear(engine.current)
            render.canvas.remove()
            render.canvas = null
            render.context = null
            render.textures = {}
        }
    }, []);
    

    const addProfiles = () => {
        for (const profileKey in profiles) {
            const profile = profiles[profileKey];

            const ball = Bodies.circle(Math.random() * window.innerWidth, 0, 70, {
                restitution: 1,
                friction: 0,
                density: 0.1,
                render: {
                    fillStyle: profile.bgColour
                }
            });

            const text = document.createElement('a');
            text.classList.add("links");
            text.innerHTML = profile.name;
            text.href = profile.link;
            text.style.color = profile.color;
            
            setInterval(() => {
                text.style.top = (ball.position.y -15) + "px";
                text.style.left = (ball.position.x - 19) + "px";
            }, 10);

            document.getElementById("canvas-holster").appendChild(text);

            World.add(engine.current.world, [ball])
        }
    }

    return (
        <>
            <main id="the-builders-container">
                <div id="canvas-holster" className="column">
                    <div>
                        <div ref={scene} style={{"position": "relative"}}/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default TheBuilders;