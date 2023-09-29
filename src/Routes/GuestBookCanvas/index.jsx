import React, { useState, useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";
import $ from "jquery";
import rafSchd from "raf-schd";
import "./index.css";

const GuestBookCanvas = () => {
  const [entries, setEntries] = useState([]);
  const [spritePositions, setSpritePositions] = useState([]);

  useEffect(() => {
    $("#open-menu").hide();
    $("footer").hide();
  }, []);

  const updateSpritePositions = () => {
    setSpritePositions((prevPositions) =>
      prevPositions.map((position) => {
        const newX = position.x + (Math.random() - 0.5) * 1; // Adjust the speed and direction
        const newY = position.y + (Math.random() - 0.5) * 1; // Adjust the speed and direction
        const maxX = window.innerWidth - 100; 
        const maxY = window.innerHeight - 100;

        const x = Math.max(0, Math.min(maxX, newX));
        const y = Math.max(0, Math.min(maxY, newY));

        return { x, y };
      })
    );
  };

  const updatePositions = rafSchd(updateSpritePositions);

  useEffect(() => {
    const guestbookRef = ref(db, "guestbook");

    onValue(guestbookRef, (snapshot) => {
        const data = snapshot.val();
        
        if (data) {
            const entryArray = Object.values(data);
            setEntries(entryArray);

            setSpritePositions(
                entryArray.map(() => ({
                    x: Math.random() * document.getElementById("canvas-holster").offsetWidth, // Initial X position
                    y: Math.random() * document.getElementById("canvas-holster").offsetHeight, // Initial Y position
                }))
            );
        }
    });

    const animationFrame = () => {
        updatePositions();
        requestAnimationFrame(animationFrame);
    };
    
    animationFrame();

    return () => {};
  }, []);

  return (
    <>
      <main id="guestbook-canvas-container">
        <div className="title-container">
          <h1> GUEST BOOK </h1>
        </div>
        <div id="canvas-holster" className="column">
            {entries.length > 0 && entries.map((entry, index) => {
                const spriteStyle = {
                    left: spritePositions[index].x + "px",
                    top: spritePositions[index].y + "px",
                };

                return (
                    <div id={`sprite-${index}`} key={index} className="sprite" style={spriteStyle}>
                        <img src={entry.avatar} />
                        <p style={{color: entry.color, padding: 0}}> {entry.nickname} </p>
                    </div>
                )
            })}
        </div>
      </main>
    </>
  );
};

export default GuestBookCanvas;
