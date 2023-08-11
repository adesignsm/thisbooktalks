import HEX_IMAGE from "../../Assets/Media/HEX/hex_image.png";

import "./index.css";

const Hex = () => {
    return (
        <>
            <main id="hex-container">
                <div className="poster-container">
                    <img src={HEX_IMAGE} />
                </div>
                <div className="next-page-button-container">
                    <button>
                        <a href="https://thisbooktalks.vercel.app/marsha-and-tefrondon">NEXT PAGE</a>
                    </button>
                </div>
            </main>
        </>
    )
}

export default Hex;