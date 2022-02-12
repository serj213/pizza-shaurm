import React from "react";
import './checkout.scss';

const Checkout = ({
    checkoutActive,
    visibleBasket,
    lenghtBasketItem,
    totalCost
}) => {



    return (
        <div className={`checkout ${checkoutActive && 'checkout--visible'}`} >
            <div className="container">
                <div className="checkout__inner">
                    <div className="checkout__left">
                        ☝️ От <span>250</span> гривен — бесплатная доставка
                    </div>

                    <div className="checkout__right">
                        <div className="checkout__info">
                            <p><span id="number_position">{lenghtBasketItem}</span> — позиции</p>
                            <p><span id="price">{totalCost}</span>грн</p>
                        </div>
                        <div className="checkout__btn-box">
                            <button
                            onClick={visibleBasket}
                            className="checkout__btn btn">
                                🤤 перейти в корзину
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;