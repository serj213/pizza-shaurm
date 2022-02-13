import React from "react";
import './basket.scss';


import deleteImg from '../../../images/delete.svg';

const Basket = ({
    basketList,
    minusCountClick,
    plusCountClick,
    deleteToCart
}) => {
    return (
        <>
            <div className="basket__top">
                <div className="basket__name image">Корзина</div>
                <div className="basket__position position">Позиция</div>
                <div className="basket__numbers numbers">Количество</div>
                <div className="basket__price price">Цена</div>
                <div className="basket__action action">Действие</div>
            </div>

            <div className="basket__box">
                {
                    basketList.length > 0 ? basketList.map(cart => {
                        return (

                            <div key={cart.id} className="basket-item">
                                <img src={cart.img} alt="" className="basket-item__img" />
                                <div className="basket-item__position">
                                    <p>
                                        {cart.name}
                                    </p>
                                    <p>
                                        {cart.composition}
                                    </p>
                                </div>
                                <div className="basket-item__numbers">
                                    <div className="number-itemBasket">
                                        <button onClick={() => minusCountClick(cart.id)}>-</button>
                                        <span>
                                            {cart.count}
                                        </span>
                                        <button onClick={() => plusCountClick(cart.id)}>+</button>
                                    </div>
                                </div>
                                <div className="basket-item__price">
                                    <span id="price-basket">
                                        {cart.totalPrice}
                                    </span>грн
                                </div>
                                <div onClick={() => deleteToCart(cart.id)} className="basket-item__action">
                                    <img src={deleteImg} alt="" />
                                </div>
                            </div>
                        )
                    })
                        :
                        <div className="null-basket">
                            Корзина пуста
                        </div>
                }
            </div>
        </>
    )
}

export default Basket;