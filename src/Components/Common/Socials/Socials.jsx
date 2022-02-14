import React from "react";
import './socials.scss';

import ticktokImg from '../../../images/socials/ticktok.svg'
import instaImg from '../../../images/socials/insta.svg'
import telegramImg from '../../../images/socials/telegram.svg'


const Socials = () => {
    return (
        <ul className="first-screen__socials socials">
            <li>
                <a target="_blank" href="#" className="socials__link">
                    <img src={ticktokImg} alt="" />
                </a>
            </li>
            <li>
                <a target="_blank" href="#" className="socials__link">
                    <img src={instaImg} alt="" />
                </a>
            </li>
            <li>
                <a target="_blank" href="#" className="socials__link">
                    <img src={telegramImg} alt="" />
                </a>
            </li>
        </ul>
    )
}

export default Socials