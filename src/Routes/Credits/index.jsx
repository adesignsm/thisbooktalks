import SUNDAYS_COFFEE from "../../Assets/Media/Credits/sundaysCoffee.png";
import ISO from "../../Assets/Media/Credits/ISO.png";
import AUXGOD from "../../Assets/Media/Credits/AUXGOD.png";
import THINKER from "../../Assets/Media/Credits/THINKER.png";
import JUNE_PLUM from "../../Assets/Media/Credits/junePlum.png";
import BOOK_CLUB from "../../Assets/Media/Credits/bookClub.png";
import BACK_COVER from "../../Assets/Media/Ending/back_cover.png";

import "./index.css";

const Credits = () => {
    return (
        <>
            <main id="credits-container">
                <div className="title-container">
                    <h1> <span>Big</span> up yourself </h1>
                </div>
                <section className="intro-container">
                    <div className="intro-text-container">
                        <p>
                            A special thank you goes out to the following friends:
                            <br />
                            <br />
                            <strong>Thinker (<a href="https://www.instagram.com/thinkeronoff">@thinkeronoff</a>).</strong> Thank you for believing in us and for giving us the
                            opportunity to put this publication together.
                            <br />
                            <br />
                            <strong>Sundays Coffee Club (<a href="https://www.instagram.com/sundayscoffee.club">@sundayscoffee.club</a>).</strong> Thank you for bringing great
                            coffee to this collaboration!
                            <br />
                            <br />
                            <strong>Mark Emery (<a href="https://www.instagram.com/_markemery">@_markemery</a>).</strong> Thank you for being you and continually
                            supporting us in the area of design and tastemaking.
                            <br />
                            <br />
                            <strong>Hex Studio (<a href="https://www.instagram.com/hexstudio.io">@hexstudio.io</a>).</strong> Thank you for using your conceptual web
                            development & design skills to bring the radio show to life in a new way.
                            <br />
                            <br />
                            <strong>Jenelle Lewis (<a href="https://www.instagram.com/stickto_otherartists">@stickto_otherartists</a>, <a href="https://www.instagram.com/aka_camiiie">@aka_camiiie</a>) & June Findlay (<a href="https://www.instagram.com/missladyniobe">@missladyniobe</a>).</strong> Thank you for helping us to host the show, and for
                            bringing impactful perspectives and skills.
                            <br />
                            <br />
                            <strong>ISO Radio (<a href="https://www.instagram.com/iso.radio">@iso.radio</a>, <a href="https://www.instagram.com/freezachin">@freezachin</a>, <a href="https://www.instagram.com/jayemkayem">@jayemkayem</a>) .</strong> Thank you for
                            creating such an important facet of Toronto life, and for modeling inclusive
                            and impactful city building.
                            <br />
                            <br />
                            <strong>JunePlum (<a href="https://www.instagram.com/juneplumto">@juneplumto</a>) .</strong> Thank you for kindly offering your
                            space to enable community development.
                            <br />
                            <br />
                            <strong>AUXGOD Game (<a href="https://www.instagram.com/Auxgodgame">@Auxgodgame</a>, <a href="https://www.instagram.com/mikebambo">@mikebambo</a>) .</strong> Thank for letting us
                            represent your brand early on. Means alot!
                            <br />
                            <br />
                        </p>
                    </div>
                </section>
                <section className="credits-logos-container">
                    <div className="logo-container">
                        <img src={SUNDAYS_COFFEE} />
                        <img src={ISO} />
                        <img src={AUXGOD} />
                        <img src={THINKER} />
                        <img src={JUNE_PLUM} />
                        <img src={BOOK_CLUB} />
                    </div>
                </section>
                <div className="ending-container">
                    <img className="ending-cover" src={BACK_COVER} />
                </div>
            </main>    
        </>
    )
}

export default Credits