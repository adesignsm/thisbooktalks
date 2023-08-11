import ARCHIVE_1 from "../../Assets/Media/Archive/archive_1.jpg";
import ARCHIVE_2 from "../../Assets/Media/Archive/archive_2.jpg";
import ARCHIVE_3 from "../../Assets/Media/Archive/archive_3.jpg";
import ARCHIVE_4 from "../../Assets/Media/Archive/archive_4.jpg";

import "./index.css";

const Archive = () => {
    return (
        <>
            <main id="archive-container">
                <div className="title-container">
                    <h1> BCT GUEST ARCHIVE </h1>
                </div>
                <section className="intro-container">
                    <div className="intro-text-container">
                        <p>
                            Check out more conversations we’ve had with Toronto leaders and creators such as:
                            <br />
                            <br />
                            Freeza Chin <strong><a href="https://www.instagram.com/freezachin" target="_blank">(@freezachin)</a></strong>,
                            Jayem Kayem <strong><a href="https://www.instagram.com/jayemkayem" target="_blank">(@jayemkayem)</a></strong>,
                            DONOTPUSH <strong><a href="https://www.instagram.com/do.not.push" target="_blank">(@do.not.push)</a></strong>,
                            Jandre <strong><a href="https://www.instagram.com/jandreamos" target="_blank">(@freezachin)</a></strong>,
                            Noiir <strong><a href="https://www.instagram.com/itsnoiir" target="_blank">(@itsnoiir)</a></strong>,
                            Mila Salav <strong><a href="https://www.instagram.com/miasalav" target="_blank">(@miasalav)</a></strong>,
                            & June Findlay <strong><a href="https://www.instagram.com/missladyniobe" target="_blank">(@missladyniobe)</a></strong>,
                            Strictly Steele <strong><a href="https://www.instagram.com/bystrictlysteele" target="_blank">(@bystrictlysteele)</a></strong>,
                            & Jenelle Lewis <strong>(<a href="https://www.instagram.com/stickto_otherartists" target="_blank">@stickto_otherartists</a>, <a href="https://www.instagram.com/aka_camiiie" target="_blank">@aka_camiiie</a>)</strong>
                        </p>
                    </div>
                </section>
                <section className="archive-images-container">
                    <img src={ARCHIVE_1} />
                    <img src={ARCHIVE_2} />
                    <img src={ARCHIVE_3} />
                    <img src={ARCHIVE_4} />
                </section>
                <div className="next-page-button-container">
                    <button>
                        <a href="https://thisbooktalks.vercel.app/friendsmas">NEXT PAGE</a>
                    </button>
                </div>
            </main>
        </>
    )
}

export default Archive;