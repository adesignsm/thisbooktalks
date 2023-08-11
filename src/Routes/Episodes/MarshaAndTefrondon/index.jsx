import MARSHATEFRODON_IMAGE from "../../../Assets/Media/MarshaAndTefrodon/marsha_and_tefrodon_image.jpg";
import MARSHATEFRODON_QUOTE from "../../../Assets/Media/MarshaAndTefrodon/marsha_and_tefrodon_quote.png";

import "./index.css";

const MarshaAndTefrondon = () => {
    return (
        <>
            <main id="marsha-tefrodon-container">
                <div className="title-container">
                    <h1> Marsha Gaye-Knight & Tefrodon </h1>
                </div>
                <section className="intro-container">
                    <div className="intro-text-container">
                        <p>
                            Lowercase and Jeka are young and talented creatives, representing the
                            east end of the city. They were first introduced to each other on the radio
                            show and have since collaborated with each other on events in Toronto.
                            In this episode, we ranged in topics surrounding the realities of making of
                            music, the listening experience and we also got an exclusive freestyle
                            from Lowercase.
                        </p>
                        <img src={MARSHATEFRODON_IMAGE} />
                        <img src={MARSHATEFRODON_QUOTE} />
                        <iframe style={{"border-radius":"12px", "margin-bottom": "1rem"}} src="https://open.spotify.com/embed/episode/3uFnXTQDSZmvb6WDJ3tiU8?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </section>
                <div className="next-page-button-container">
                    <button>
                        <a href="https://thisbooktalks.vercel.app/run-the-flex">NEXT PAGE</a>
                    </button>
                </div>
            </main>
        </>
    )
}

export default MarshaAndTefrondon;