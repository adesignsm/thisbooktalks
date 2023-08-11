import FRIENDSMAS_IMAGE from "../../../Assets/Media/Friendsmas/friendsmas_image.jpg";
import FRIENDSMAS_QUOTE from "../../../Assets/Media/Friendsmas/friendsmas_quote.png";
import FRIENDSMAS_GALLERY_1 from "../../../Assets/Media/Friendsmas/friendsmas_gallery_1.jpg";
import FRIENDSMAS_GALLERY_2 from "../../../Assets/Media/Friendsmas/friendsmas_gallery_2.jpg";

import "./index.css";

const Friendsmas = () => {
    return (
        <>
            <main id="friendsmas-container">
                <div className="title-container">
                    <h1> Friendsmas </h1>
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
                        <img src={FRIENDSMAS_IMAGE} />
                        <img src={FRIENDSMAS_QUOTE} />
                        <iframe style={{"border-radius":"12px", "margin-bottom": "1rem"}} src="https://open.spotify.com/embed/episode/7wIhl7PoadefxCT8gAqqLk?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </section>
                <section className="friendsmas-images-container">
                    <img src={FRIENDSMAS_GALLERY_1} />
                    <img src={FRIENDSMAS_GALLERY_2} />
                </section>
                <div className="next-page-button-container">
                    <button>
                        <a href="https://thisbooktalks.vercel.app/lower-case">NEXT PAGE</a>
                    </button>
                </div>
            </main>
        </>
    )
}

export default Friendsmas;