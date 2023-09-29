import React, { useState } from "react";
import { push, ref } from "firebase/database";
import { db } from "../../firebase";

import "./index.css";

import badge1 from "../../Assets/Media/GuestBookCanvas/Badges/badge_1.png";
import badge2 from "../../Assets/Media/GuestBookCanvas/Badges/badge_2.png";
import badge3 from "../../Assets/Media/GuestBookCanvas/Badges/badge_3.png";
import badge4 from "../../Assets/Media/GuestBookCanvas/Badges/badge_4.png";
import badge5 from "../../Assets/Media/GuestBookCanvas/Badges/badge_5.png";
import badge6 from "../../Assets/Media/GuestBookCanvas/Badges/badge_6.png";
import badge7 from "../../Assets/Media/GuestBookCanvas/Badges/badge_7.png";
import badge8 from "../../Assets/Media/GuestBookCanvas/Badges/badge_8.png";
import badge9 from "../../Assets/Media/GuestBookCanvas/Badges/badge_9.png";

const GuestBook = () => {
    const [nickname, setNickname] = useState("");

    const [selectedColor, setSelectedColor] = useState("");
    const [colorSelected, setColorSelected] = useState(false);

    const [selectedAvatar, setSelectedAvatar] = useState("");
    const [avatarSelected, setAvatarSelected] = useState(false);

    const [showSubmissionPrompt, setShowSubmissionPrompt] = useState(false);
    const [showErrorPrompt, setShowErrorPrompt] = useState(false);

    const avatarOptions = [
        <img src={badge1} alt="avatar" />, <img src={badge2} alt="avatar" />, <img src={badge3} alt="avatar" />,
        <img src={badge4} alt="avatar" />, <img src={badge5} alt="avatar" />, <img src={badge6} alt="avatar" />,
        <img src={badge7} alt="avatar" />, <img src={badge8} alt="avatar" />, <img src={badge9} alt="avatar" />
    ];

    const colorOptions = [
        "#FF5733", "#7D42E8", "#2FCAE6", "#91F35B", 
        "#F771A6", "#5E8E23", "#1A94BC", "#D01E66", "#FFB44E",
    ];

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleColorSelect = (e) => {
        setSelectedColor(e);
        setColorSelected(true);
    };

    const handleAvatarSelect = (avatar) => {
        setSelectedAvatar(avatar.props.src);
        setAvatarSelected(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;
        const errors = {};
    
        if (nickname.trim() === "") {
            isValid = false;
            errors.nickname = "Nickname is required";
        }
    
        if (selectedColor === "") {
            isValid = false;
            errors.color = "Color is required";
        }
    
        if (selectedAvatar === "") {
            isValid = false;
            errors.avatar = "Avatar is required";
        }

        if (!isValid) {
            console.log("Validation Errors:", errors);
            return (
                alert(
                    `There are following errors: ${
                        Object.keys(errors).map((err) => {
                            return errors[err]
                        })
                    }`
                )
            )
        } else {
            const userEntry = {
                nickname: nickname,
                color: selectedColor,
                avatar: selectedAvatar,
            };

            const guestbookRef = ref(db, "guestbook");
            push(guestbookRef, userEntry).then(() => {
                setNickname("");
                setColorSelected(false);
                setAvatarSelected(false);
                setSelectedColor("");
                setSelectedAvatar("");

                setShowSubmissionPrompt(true);
            }).catch((err) => {
                setShowErrorPrompt(true);
            })
        }
    };

    return (
        <>
            <main id="guest-book-container">
                <div className="title-container">
                    <h1> SIGN THE GUESTBOOK </h1>
                </div>
                {showSubmissionPrompt ? <div className="success-submission-container">
                    <h1> Youre all booked in! </h1>
                    <h4> 
                        Take a look at the projector screen behind the bar to see your character or head on over to
                        <a href="/guest-book-canvas"> the guestbook display page</a>
                    </h4>
                </div> : 
                <div id="form-container">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nickname">Nickname:</label>
                        <input type="text" id="nickname" value={nickname} onChange={handleNicknameChange} required />

                        <label htmlFor="color">Color:</label>
                        <div className={`color-options ${colorSelected ? "selected" : ""}`} required>
                            {colorOptions.map((color, index) => {
                                return (
                                    <div key={index} style={{backgroundColor: color, height: 60, width: 60}} className={`color ${selectedColor === color ? "selected" : ""}`} onClick={() => handleColorSelect(color)}></div>
                                )
                            })}
                        </div>

                        <label>Badge:</label>
                        <div className={`avatar-options ${avatarSelected ? "selected" : ""}`} required>
                            {avatarOptions.map((avatar, index) => (
                                <span key={index} className={`avatar ${selectedAvatar === avatar.props.src ? "selected" : ""}`} onClick={() => handleAvatarSelect(avatar)}>
                                    {avatar}
                                </span>
                            ))}
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>}
                {showErrorPrompt && 
                    <div className="error-submission-container">
                        <h1> Uh oh, there was an error. </h1>
                        <h4> 
                            Please try again or wait for our website factory to take a look at things.
                            You can check out other submissions here: <a href="/guest-book-canvas"> the guestbook display page</a>
                        </h4>
                    </div>
                }
            </main>
        </>
    )
}

export default GuestBook;