import React from "react";
import validator from 'validator';

import Basket from "./Basket/Basket";
import CommunicationContacts from "./CommunicationContacts/CommunicationContacts";

import './modal.scss';

const Modal = ({
    basketList,
    setModalActive,
    lenghtBasketItem,
    totalCost,
    setBasketList,
    totalPriceBasket,
    deleteToCart
}) => {

    const basketRef = React.useRef(null);
    const [basketActive, setBasketActive] = React.useState(true);

    const [phoneNumberValue, setPhoneNumberValue] = React.useState('');
    const [errorValidate, setErrorValidate] = React.useState(false);


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

    const clickBtnBottom = () => {
        if (basketActive) {
            setBasketActive(false)
        } else {
            let reg = /^\+7\s\(\d{3}\)\s(\d{3})-(\d{2})-(\d{2})$/

            if (!reg.test(phoneNumberValue)) {
                setErrorValidate(true)
                console.log('нет');
            }else{
                console.log('верно');
                
            }
        }
    }

  


    return (
        <div className={`basket`}>
            <div ref={basketRef} className="basket__body">

                {
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
                            errorValidate={errorValidate}
                        />

                }

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
                        

                        <button onClick={clickBtnBottom} className={`basket-bottom__btn btn`
                        }>
                            🤤 Оформить заказ
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal;