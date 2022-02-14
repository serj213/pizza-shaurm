import React from "react";
import Checkout from "../Checkout/Checkout";
import Container from "../Common/Container/Container";

import './firstScreen.scss';

import rightTopImg from '../../images/first-screen/list-rightTop.png';
import leftTop from '../../images/first-screen/list-leftTop.png';
import rightBottom from '../../images/first-screen/list-rightBottom.png';
import leftBottom from '../../images/first-screen/list-leftBottom.png';
import pizzaImg from '../../images/first-screen/pizza.png';
import Socials from "../Common/Socials/Socials";


const FirstScreen = ({
    checkoutActive,
    setModalActive,
    lenghtBasketItem,
    totalCost,
    orderWithDeliveryBtn
}) => {


    const root = React.useMemo(() => document.querySelector(':root'));


    const paralaxHandler = e => {
        const x = (e.clientX - window.innerWidth / 2) / 100;
        const y = (e.clientY - window.innerHeight / 2) / 100;
        root.style.setProperty('--posX', -x);
        root.style.setProperty('--posY', -y);
    }


    const visibleBasket = () => {

        setModalActive(true);
    }



    return (
        <section onMouseMove={paralaxHandler} className="first-screen">
            <Container>
                <div className="first-screen__inner">
                    <div className="first-screen__content content-text">
                        <h1 className="content-text__title">
                            Идеальная шаурма
                            и пицца Житомир
                        </h1>
                        <p className="content-text__desript">
                            Ель Шейх заказать шаурму и пиццу
                            с доставкой на дом от 250 грн
                        </p>

                        <button onClick={orderWithDeliveryBtn} className="content-text__btn btn">
                            <span>🤤</span> Заказать с доставкой
                        </button>

                        <div className="header-info__item header-working shedule-mobile">

                            <span>пн / пт 10-20</span>
                            <span>
                                сб 10-19
                                вс 11-18
                            </span>
                        </div>
                    </div>

                    <div className="first-screen__image content-image">
                        <div className="content-image__images">
                            <div className="content-image__pizza image-pizza">
                                <img id="pizza-img" src={pizzaImg} alt="" />
                                <div className="image-pizza__haract">
                                    <span>Ароматная пицца</span>
                                    <span>55 грн</span>
                                </div>
                            </div>
                            <img className="content-image__list-topRight" src={rightTopImg} alt=" " />
                            <img className="content-image__list-topLeft" src={leftTop} alt="" />
                            <img className="content-image__list-bottomRight" src={rightBottom} alt="" />
                            <img className="content-image__list-bottomLeft" src={leftBottom} alt="" />
                        </div>
                    </div>
                </div>
            </Container>

            <div className="first-screen__bottom content-bottom">
                <Container>
                    <div className="content-bottom__inner">
                        <Socials />
                        <span>
                            Подпишись и получи скидку -10%
                        </span>
                    </div>
                </Container>
            </div>

            <Checkout
                visibleBasket={visibleBasket}
                totalCost={totalCost}
                lenghtBasketItem={lenghtBasketItem}
                checkoutActive={checkoutActive} />

        </section>
    )
}
export default FirstScreen;