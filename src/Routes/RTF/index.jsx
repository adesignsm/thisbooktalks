import RTF_IMAGE from "../../Assets/Media/RTF/run_the_flex.png";

import "./index.css";

const RTF = () => {
    return (
        <>
            <main id="rtf-container">
                <div className="poster-container">
                    <img src={RTF_IMAGE} />
                </div>
                <div className="next-page-button-container">
                    <button>
                        <a href="https://thisbooktalks.vercel.app/xylk">NEXT PAGE</a>
                    </button>
                </div>
            </main>
        </>
    )
}

export default RTF;