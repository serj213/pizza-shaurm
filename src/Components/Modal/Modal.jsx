import React from "react";

import Basket from "./Basket/Basket";
import CommunicationContacts from "./CommunicationContacts/CommunicationContacts";
import OrderAccepted from "./OrderAccepted/OrderAccepted";

import './modal.scss';

const Modal = ({
    basketList,
    setModalActive,
    lenghtBasketItem,
    totalCost,
    setBasketList,
    totalPriceBasket,
    deleteToCart,
}) => {

    const basketRef = React.useRef(null);
    const [basketActive, setBasketActive] = React.useState(true);

    const [phoneNumberValue, setPhoneNumberValue] = React.useState('');
    const [addressValue, setAddressValue] = React.useState('');
    const [orderAccepted, setOrderAccepted] = React.useState(false);


    React.useEffect(() => {
        document.body.addEventListener('click', clickOutside);
        return () => {
            document.body.removeEventListener('click', clickOutside);
        }
    }, [])

    const clickOutside = e => {
        if (!e.path.includes(basketRef.current)) {
            setModalActive(false)
        }

        if (orderAccepted || !e.path.includes(basketRef.current)) {
            setModalActive(false);
            setOrderAccepted(false);
            setBasketList([]);
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

    const mobileValidate = () => {
        let reg = /^\+7\s\(\d{3}\)\s(\d{3})-(\d{2})-(\d{2})$/
        return !reg.test(phoneNumberValue)
    }

    const clickBtnBottom = () => {
        if (basketActive) {
            setBasketActive(false)
        } else {
            let reg = /^\+7\s\(\d{3}\)\s(\d{3})-(\d{2})-(\d{2})$/

            if (mobileValidate() || addressValue.length === 0) {

            } else {
                setOrderAccepted(true)
            }
        }
    }



    return (
        <div className={`basket`}>
            <div ref={basketRef} className={`${orderAccepted ? 'accepted__body' : 'basket__body'} `} >


                {

                    !orderAccepted ?

                        basketActive ? <Basket
                            basketList={basketList}
                            minusCountClick={minusCountClick}
                            plusCountClick={plusCountClick}
                            deleteToCart={deleteToCart}

                        />
                            :
                            <CommunicationContacts
                                phoneNumberValue={phoneNumberValue}
                                setPhoneNumberValue={setPhoneNumberValue}
                                addressValue={addressValue}
                                setAddressValue={setAddressValue}
                                mobileValidate={mobileValidate}
                            />

                        :

                        <OrderAccepted
                            setModalActive={setModalActive}
                            setOrderAccepted={setOrderAccepted}
                            setBasketList={setBasketList}
                        />

                }

                {
                    !orderAccepted && <div className="basket__bottom basket-bottom">
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


                            <button onClick={clickBtnBottom} className={`basket-bottom__btn btn`
                            }>
                                🤤 Оформить заказ
                            </button>

                        </div>
                    </div>
                }



            </div>
        </div>
    )
}

export default Modal;