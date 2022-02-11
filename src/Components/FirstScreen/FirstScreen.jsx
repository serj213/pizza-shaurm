import React from "react";
import './firstScreen.scss';

import rightTopImg from '../../images/first-screen/list-rightTop.png';
import leftTop from '../../images/first-screen/list-leftTop.png';
import rightBottom from '../../images/first-screen/list-rightBottom.png';
import leftBottom from '../../images/first-screen/list-leftBottom.png';
import pizzaImg from '../../images/first-screen/pizza.png';
import ticktokImg from '../../images/socials/ticktok.svg';
import instaImg from '../../images/socials/insta.svg';
import telegramImg from '../../images/socials/telegram.svg';


const FirstScreen = () => {




    return (
        <section id="parallax" class="first-screen">
            <div class="container">
                <div class="first-screen__inner">
                    <div class="first-screen__content content-text">
                        <h1 class="content-text__title">
                            Идеальная шаурма
                            и пицца Житомир
                        </h1>
                        <p class="content-text__desript">
                            Ель Шейх заказать шаурму и пиццу
                            с доставкой на дом от 250 грн
                        </p>

                        <button class="content-text__btn btn">
                            <span>🤤</span> Заказать с доставкой
                        </button>

                        <div class="header-info__item header-working shedule-mobile">

                            <span>пн / пт 10-20</span>
                            <span>
                                сб 10-19
                                вс 11-18
                            </span>
                        </div>
                    </div>

                    <div class="first-screen__image content-image">
                        <div class="content-image__images">
                            <div class="content-image__pizza image-pizza">
                                <img id="pizza-img" src={pizzaImg} alt="" />
                                <div class="image-pizza__haract">
                                    <span>Ароматная пицца</span>
                                    <span>55 грн</span>
                                </div>
                            </div>
                            <img class="content-image__list-topRight" src={rightTopImg} alt=" " />
                            <img class="content-image__list-topLeft" src={leftTop} alt="" />
                            <img class="content-image__list-bottomRight" src={rightBottom} alt="" />
                            <img class="content-image__list-bottomLeft" src={leftBottom} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="first-screen__bottom content-bottom">
                <div class="container">
                    <div class="content-bottom__inner">
                        <ul class="first-screen__socials socials">
                            <li>
                                <a target="_blank" href="#" class="socials__link">
                                    <img src={ticktokImg} alt="" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="#" class="socials__link">
                                    <img src={instaImg} alt="" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="#" class="socials__link">
                                    <img src={telegramImg} alt="" />
                                </a>
                            </li>
                        </ul>
                        <span>
                            Подпишись и получи скидку -10%
                        </span>
                    </div>
                </div>
            </div>

            <div class="checkout">
                <div class="container">
                    <div class="checkout__inner">
                        <div class="checkout__left">
                            ☝️ От <span>250</span> гривен — бесплатная доставка
                        </div>

                        <div class="checkout__right">
                            <div class="checkout__info">
                                <p><span id="number_position"></span> — позиции</p>
                                <p><span id="price">325</span>грн</p>
                            </div>
                            <div class="checkout__btn-box">
                                <button class="checkout__btn btn">
                                    🤤 оформить заказ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FirstScreen;