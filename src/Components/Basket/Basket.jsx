import React from "react";


import './basket.scss';

import deleteImg from '../../images/delete.svg';


const Basket = ({
    basketList,
    setBasketActive,
    lenghtBasketItem,
    totalCost,
    setBasketList,
    totalPriceBasket,
    deleteToCart
}) => {

    const basketRef = React.useRef(null);

    React.useEffect(() => {
        document.body.addEventListener('click', clickOutside);
        return () => {
            document.body.removeEventListener('click', clickOutside);
        }
    }, [])

    const clickOutside = e => {
        if (!e.path.includes(basketRef.current)) {
            setBasketActive(false)
        }
    }


    const plusCountClick = (id) => {
        const cartClick = basketList.map(cart => {
            if (id === cart.id) {
                cart.count = ++cart.count;
                cart.totalPrice = cart.count * cart.price
                totalPriceBasket('plus')
            }
            return cart
        });
        setBasketList(cartClick)
    }

    const minusCountClick = (id) => {
        const cartClick = basketList.map(cart => {
            if (id === cart.id) {
                if (cart.count > 1) {
                    cart.count = --cart.count;
                    cart.totalPrice = cart.totalPrice - cart.price
                    totalPriceBasket('minus')
                }
            }
            return cart
        });
        setBasketList(cartClick)
    }





    return (
        <div className={`basket`}>
            <div ref={basketRef} className="basket__body">
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



                <div className="basket__bottom basket-bottom">
                    <div className="basket-bottom__left">
                        ☝️
                        От <span>250</span> гривен — бесплатная доставка
                    </div>
                    <div className="basket-bottom__right">
                        <div className="basket-bottom__position">
                            <p>
                                <span id="positionBasketBottom">{lenghtBasketItem}</span> — позиции
                            </p>
                            <p>
                                <span id="basketBottomPrice">{totalCost}</span> грн
                            </p>
                        </div>


                        <button className="basket-bottom__btn btn">
                            🤤 Оформить заказ
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Basket;