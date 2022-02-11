import React from "react";
import './basket.scss';


const Basket = () => {
    return (
        <div class="basket">
            <div class="basket__body">
                <div class="basket__top">
                    <div class="basket__name image">Корзина</div>
                    <div class="basket__position position">Позиция</div>
                    <div class="basket__numbers numbers">Количество</div>
                    <div class="basket__price price">Цена</div>
                    <div class="basket__action action">Действие</div>
                </div>

                <div class="basket__box">

                    <div class="basket-item">
                        <img src="" alt="" class="basket-item__img" />
                            <div class="basket-item__position">
                                <p>

                                </p>
                                <p>

                                </p>
                            </div>
                            <div class="basket-item__numbers">
                                <div class="number-itemBasket">
                                    <button>-</button>
                                    <span>

                                    </span>
                                    <button>+</button>
                                </div>
                            </div>
                            <div class="basket-item__price">
                                <span id="price-basket">

                                </span>грн
                            </div>
                            <div class="basket-item__action">
                                <img src="" alt="" />
                            </div>
                    </div>

                </div>



                <div class="basket__bottom basket-bottom">
                    <div class="basket-bottom__left">
                        ☝️
                        От <span>250</span> гривен — бесплатная доставка
                    </div>
                    <div class="basket-bottom__right">
                        <div class="basket-bottom__position">
                            <p>
                                <span id="positionBasketBottom"></span> — позиции
                            </p>
                            <p>
                                <span id="basketBottomPrice"></span> грн
                            </p>
                        </div>


                        <button class="basket-bottom__btn btn">
                            🤤 Оформить заказ
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Basket;