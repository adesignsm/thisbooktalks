import LOWERCASE_IMAGE from "../../../Assets/Media/Lowercase/lowercase_image.png";
import LOWERCASE_QUOTE from "../../../Assets/Media/Lowercase/lowercase_quote.png";

import "./index.css";

const Lowercase = () => {
    return (
        <>
            <main id="lowercase-container">
                <div className="title-container">
                    <h1> Lowercase & Jeka </h1>
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
                        <img src={LOWERCASE_IMAGE} />
                        <img src={LOWERCASE_QUOTE} />
                        <iframe style={{"border-radius":"12px", "margin-bottom": "1rem"}} src="https://open.spotify.com/embed/episode/6rEnsdWvoZDzuoh7zgP00B?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </section>
                <div className="next-page-button-container">
                    <button>
                        <a href="https://thisbooktalks.vercel.app/community-country-club">NEXT PAGE</a>
                    </button>
                </div>
            </main>
        </>
    )
}

export default Lowercase;