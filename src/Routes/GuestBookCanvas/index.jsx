import React, { useState, useEffect, useRef } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";
import {
  Engine,
  Render,
  Runner,
  World,
  Bodies,
} from "matter-js";
import "./index.css";

const GuestBookCanvas = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const guestbookRef = ref(db, "guestbook");

    onValue(guestbookRef, (snapshot) => {
        const data = snapshot.val();
        
        if (data) {
            const entryArray = Object.values(data);
            setEntries(entryArray);
        }
    });

    return () => {};
  }, []);

  return (
    <>
      <main id="guestbook-canvas-container">
        <div className="title-container">
          <h1> GUEST BOOK </h1>
        </div>
        <div id="canvas-holster" className="column">
        </div>
      </main>
    </>
  );
};

export default GuestBookCanvas;
