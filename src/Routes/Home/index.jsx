import TITLE_COVER from "../../Assets/Media/Home/front_cover.jpg";
import INTRO_IMAGE from "../../Assets/Media/Home/intro_image.jpg";
import INTRO_QUOTE from "../../Assets/Media/Home/intro_quote.png";
import ISO_IMAGE from "../../Assets/Media/Home/iso_image.jpg";
import ISO_QUOTE from "../../Assets/Media/Home/iso_quote.png";

import Entry from "../../Components/Entry";

import "./index.css";

const Home = () => {
    return (
        <>
            <Entry />
            <main id="home-container">
                <div className="title-container">
                    <img className="title-cover" src={TITLE_COVER} />
                </div>
                <section className="intro-container">
                    <img src={INTRO_IMAGE} />
                    <img src={INTRO_QUOTE} />
                    <div className="intro-text-container">
                        <p>
                            Book Club Toronto originated as a recurring Zoom meetup during the
                            nationwide lockdown in 2020. It was designed for music enthusiasts from
                            our community to converge, and share their love for music and culture.
                            <br />
                            <br />
                            In 2021, Book Club Toronto transitioned into an online radio show (The
                            Queries & Anecdotes Show) as part of the ISO Radio Community. With a
                            genuine interest in the continuous development of artists, DJs, an other
                            creators in the city, Adrian and Justin, the co-founders of Book Club
                            Toronto, embarked on a journey to chronicle stories showcasing the lives
                            of folks in our city and the music they chose to score their experiences.
                        </p>
                        <p> Follow us on IG <a href="https://www.instagram.com/wearebookclubtoronto" target="_blank">@wearebookclubtoronto</a></p>
                    </div>
                </section>
                <section className="iso-radio-container">
                    <img src={ISO_IMAGE} />
                    <img src={ISO_QUOTE} />
                    <div className="iso-radio-text-container">
                        <p>
                            The ISO Radio studio, located in Toronto’s Stackt Market, has become a
                            sanctuary for Book Club Toronto and has allowed Adrian and Justin to lead
                            causal and impactful conversations about life and music. This zine is a time
                            capsule of that endeavor. Radio show episodes featured in this issue are:
                        </p>
                        <ul>
                            <li>
                                <p><strong>APB <a href="https://www.instagram.com/apbworldwide" target="_blank">(@apbworldwide)</a></strong></p>
                                <p>Music duo, Manny and J, hailing from Scarborough, ON</p>
                            </li>
                            <li>
                                <p><strong>Friendsmas</strong></p>
                                <p>
                                    Some of our closest friends from the community, Mark Emery, Tiphanie,
                                    Ellie Knight, Emanuel, Siobhan Stewart, and Rachel N
                                </p>
                            </li>
                            <li>
                                <p><strong>XYLK <a href="https://www.instagram.com/welife.design" target="_blank">(@welife.design)</a></strong></p>
                                <p>
                                    Two creatives pushing the musical envelope in the city and both
                                    representing Malvern/Scarborough, ON
                                </p>
                            </li>
                            <li>
                                <p><strong>Lowercase <a href="https://www.instagram.com/lowercasewc" target="_blank">(@apbworldwide)</a> & JEKA <a href="https://www.instagram.com/jessicaabayot" target="_blank">(@jessicaabayot)</a></strong></p>
                                <p>Music duo, Manny and J, hailing from Scarborough, ON</p>
                            </li>
                            <li>
                                <p><strong>Marsha Gaye-Knight <a href="https://www.instagram.com/blackinsportsbusiness" target="_blank">(@blackinsportsbusiness)</a> & Tefrondon <a href="https://www.instagram.com/tefrondon" target="_blank">(@tefrondon)</a></strong></p>
                                <p>
                                    Founder of Black In Sports Business (BSB), Marsha Gaye-Knight and DJ
                                    extraordinaire, Saskatchewan’s own, Tefrondon
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Guest Archive: </strong> Freeza Chin <strong><a href="https://www.instagram.com/freezachin" target="_blank">(@freezachin)</a></strong>,
                                    Jayem Kayem <strong><a href="https://www.instagram.com/jayemkayem" target="_blank">(@jayemkayem)</a></strong>,
                                    DONOTPUSH <strong><a href="https://www.instagram.com/do.not.push" target="_blank">(@do.not.push)</a></strong>,
                                    Jandre <strong><a href="https://www.instagram.com/jandreamos" target="_blank">(@freezachin)</a></strong>,
                                    Noiir <strong><a href="https://www.instagram.com/itsnoiir" target="_blank">(@itsnoiir)</a></strong>,
                                    Mila Salav <strong><a href="https://www.instagram.com/miasalav" target="_blank">(@miasalav)</a></strong>,
                                    & June Findlay <strong><a href="https://www.instagram.com/missladyniobe" target="_blank">(@missladyniobe)</a></strong>
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
                <div className="next-page-button-container">
                    <button>
                        <a href="https://thisbooktalks.vercel.app/air-plane-boys">NEXT PAGE</a>
                    </button>
                </div>
            </main>
        </>
    )
}

export default Home;