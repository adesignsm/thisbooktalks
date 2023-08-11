import APB_IMAGE from "../../../Assets/Media/APB/apb_image.jpg";
import APB_QUOTE from "../../../Assets/Media/APB/apb_quote.png";
import APB_GALLERY_1 from "../../../Assets/Media/APB/apb_gallery_1.jpg";
import APB_GALLERY_2 from "../../../Assets/Media/APB/apb_gallery_2.jpg";

import "./index.css";

const APB = () => {
    return (
        <>
            <main id="apb-container">
                <div className="title-container">
                    <h1> APB </h1>
                </div>
                <section className="intro-container">
                    <div className="intro-text-container">
                        <p>
                            Music veterans, APB (an acronym for The Airplane Boys), shared gems
                            and stories of their come up in the game. This included conversations
                            surrounding what it means to be from Scarborough and the importance
                            of growing and nurturing a strong team early on. Manny and J also
                            stopped by the studio to bless us with a 1-of-1 freestyle exclusive
                            *Funkmaster Flex bomb*.
                        </p>
                        <img src={APB_IMAGE} />
                        <img src={APB_QUOTE} />
                        <iframe style={{"border-radius":"12px", "margin-bottom": "1rem"}} src="https://open.spotify.com/embed/episode/2e4MRgMOnCJdROabzzbHDV?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </section>
                <section className="apb-images-container">
                    <img src={APB_GALLERY_1} />
                    <img src={APB_GALLERY_2} />
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

export default APB;