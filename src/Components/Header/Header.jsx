import React from "react";

import Container from '../Common/Container/Container';

import './header.scss';

import logoImg from '../../images/logo.png';


const Header = () => {
    return (
        <header classNameName="header">
            <Container>
                <div className="header__inner">
                    <div className="header__logo">
                        <img src={logoImg} alt="" />
                    </div>

                    <ul className="header__info header-info">
                        <li className="header-info__item header__address">
                            📍 Чапаева 10Б (МОД/ЖТК)
                        </li>
                        <li className="header-info__item header-working shedule-desktop">

                            <span>пн / пт 10-20</span>
                            <span>
                                сб 10-19
                                вс 11-18
                            </span>
                        </li>
                        <li className="header-info__item header__phone">
                            <a href="tel:+380688352996">
                                +38 068 835 29 96
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </header>
    )
}

export default Header;