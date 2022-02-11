import React from "react";
import Container from "../Common/Container/Container";
import './carts.scss';


const Carts = ({ productsList }) => {


    return (
        <section class="carts">
            <div class="container">
                <div class="carts__inner">
                    <div class="carts__top carts-top">
                        <div class="carts-top__left">
                            <h3 class="carts-top__name">
                                Шаурма Житомир 🌯
                            </h3>
                            <div class="carts-top__desript">
                                ☝️от 250 грн бесплатная доставка ☝️️
                            </div>
                        </div>

                        <div class="tabs__desktop">
                            <div class="carts-top__tabs tabs">
                                <div data-shaurm="shaurm" class="tabs__item">Шаурма</div>
                                <div class="tabs__item tabs__item--active">Все позиции</div>
                                <div data-pizza="pizza" class="tabs__item">Пицца</div>
                                <div data-drink="drink" class="tabs__item">Напитки</div>
                            </div>
                        </div>

                    </div>

                    {/* <div class="tabs__mobile">
                        <div class="carts-top__tabs tabs">
                            <div class="tabs__item">Шаурма</div>
                            <div class="tabs__item tabs__item--active">Все позиции</div>
                            <div class="tabs__item">Пицца</div>
                            <div class="tabs__item">Напитки</div>
                        </div>
                    </div>  */}

                    <div class="carts__box">
                        {
                            productsList.map(cart => {
                                return (
                                    <div id={cart.type} class="carts__item item">
                                        <div class="item__image">
                                            <img src={cart.img} alt="" />
                                        </div>
                                        <div class="item__content">
                                            <div class="item__name">
                                                {cart.name}
                                            </div>
                                            <p class="item__composition">
                                                {cart.composition}
                                            </p>
                                        </div>
                                        <div class="item__cost">
                                            <p>
                                                Cтоимость
                                            </p>
                                            <p>
                                                от <span>
                                                    {cart.price}
                                                </span>грн
                                            </p>
                                        </div>
                                        <button onclick='addToBasket(${item.id})'
                                            class="item__btn btn">
                                            <span>🌯</span> добавить в корзину
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carts;