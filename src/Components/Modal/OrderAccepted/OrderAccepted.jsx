import React from "react";

import Socials from "../../Common/Socials/Socials";

import './orderAccepted.scss';

import btnMain from '../../../images/on-main-btn.png';

const OrderAccepted = ({ setModalActive, setOrderAccepted, setBasketList }) => {

    
    const closeOrderPopup = () => {
        setModalActive(false);
        setOrderAccepted(false);
        setBasketList([]);
    }


    return (
        <div className="accepted">
            <div className="accepted__body">


                <h3 className="accepted__title">
                    Заказ готовят
                    приятного апетита
                </h3>
                <p className="accepted__subtitle">
                    Скоро с вами свяжуться
                </p>
                <div className="accepted__box">
                    <Socials />
                    <p className="accepted__description">
                        Подпишись в соцсетях и получи скидку -10%
                    </p>
                </div>

                <div className="accepted__btn-box">
                    <button onClick={closeOrderPopup}>
                        <img src={btnMain} alt="" />
                    </button>
                    <p className="accepted__btn-descript">
                        на главную
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OrderAccepted;