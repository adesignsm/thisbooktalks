import CCC_IMAGE from "../../Assets/Media/CCC/community_country_club.png";

import "./index.css";

const CCC = () => {
    return (
        <>
            <main id="ccc-container">
                <div className="poster-container">
                    <img src={CCC_IMAGE} />
                    <h2>Bloom</h2>
                    <p>Spring 2023</p>
                    <p>Available at cccommunitycountry.club</p>
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

export default CCC;