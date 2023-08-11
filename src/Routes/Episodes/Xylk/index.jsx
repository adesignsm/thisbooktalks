import XYLK_IMAGE from "../../../Assets/Media/XYLK/xylk_image.jpg";
import XYLK_QUOTE from "../../../Assets/Media/XYLK/xylk_quote.png";

import "./index.css";

const Xylk = () => {
    return (
        <>
            <main id="xylk-container">
                <div className="title-container">
                    <h1> XYLK </h1>
                </div>
                <section className="intro-container">
                    <div className="intro-text-container">
                        <p>
                            Every time that Xylk has a moment, it seems as though there’s always an
                            even bigger moment that occurs soon after. Xylk has worn many creative
                            hats over the years and has been brewing something big over at Life
                            Design. On the Queries & Anecdotes Show, he shares with us his
                            philosophy on sustainability and the importance of sticking to your roots.
                        </p>
                        <img src={XYLK_IMAGE} />
                        <img src={XYLK_QUOTE} />
                        <iframe style={{"border-radius":"12px", "margin-bottom": "1rem"}} src="https://open.spotify.com/embed/episode/4GFNzXNlXTRKL31HophkTG?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </section>
                <div className="next-page-button-container">
                    <button>
                        <a href="https://thisbooktalks.vercel.app/hex">NEXT PAGE</a>
                    </button>
                </div>
            </main>
        </>
    )
}

export default Xylk;