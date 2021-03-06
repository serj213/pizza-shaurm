import React from 'react';
import { TextField } from '@material-ui/core';
import NumberFormat from 'react-number-format';


import './communicationContacts.scss';

import upImg from '../../../images/up.png'

const CommunicationContacts = ({
    phoneNumberValue,
    setPhoneNumberValue,
    addressValue,
    setAddressValue,
    mobileValidate
}) => {

    const [activeTypePay, setActiveTypePay] = React.useState(0);


    const changeActiveTypePay = (index) => {

        setActiveTypePay(index);

    }

    const typePay = ['Картой', 'Наличные'];
    const currentHours = new Date().getHours() + 1;
    let minutes = new Date().getMinutes() + 15;
    let currentTime = `${currentHours}:${minutes > 60 ? (minutes - 60) < 10 ? '0' + (minutes - 60) : (minutes - 60) : minutes}`;


    const onChangePhoneNumber = (e) => {
        setPhoneNumberValue(e.target.value)
    }

    const onChangeAddressValue = e => {
        setAddressValue(e.target.value)
    }

    return (
        <div className='contacts-communicate'>
            <h3 className="contacts-communicate__title">
                Оформление заказа
            </h3>
            <div className="contacts-communicate__box">
                <div className="contacts-communicate__mainInfo">
                    <div className="contacts-communicate__top">
                        <div className="contacts-communicate__input">
                            <div className="contacts-communicate__labels">
                                <span>Номер телефона <span>*</span></span>
                                <span>(обязательно)</span>
                            </div>

                            <NumberFormat
                                type='tel'
                                value={phoneNumberValue}
                                format="+7 (###) ###-##-##"
                                onChange={onChangePhoneNumber}
                                className={`${mobileValidate() === true && 'input-error'}`}
                            />
                        </div>

                        <div className="contacts-communicate__input">
                            <div className="contacts-communicate__labels">
                                <span>Адрес доставки <span>*</span></span>
                                <span></span>
                            </div>
                            <input
                                placeholder='Введите адрес'
                                className={`${addressValue.length === 0 && 'input-error'}`}
                                type="text"
                                value={addressValue}
                                onChange={onChangeAddressValue}
                            />
                        </div>

                    </div>

                    <div className="contacts-communicate__middle">
                        <div className='name-label'>
                            Способ оплаты:
                        </div>
                        {
                            typePay.map((type, index) => <span
                                className={`contacts-communicate__type 
                             ${activeTypePay === index && 'contacts-communicate__type--active'}`}
                                onClick={() => changeActiveTypePay(index)}
                                key={index}>{type}</span>)
                        }
                    </div>

                    <div className="contacts-communicate__bottom communicate-bottom">
                        <div className="communicate-bottom__item">
                            <div className='name-label'>
                                В котором часу доставить?
                            </div>
                            <div className="communicate-bottom__time">
                                <TextField
                                    id="time"
                                    className='communicate-bottom__input'
                                    type="time"
                                    defaultValue={`${currentTime}`}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                />
                            </div>
                        </div>
                        <div className="communicate-bottom__item">
                            <div className="communicate-bottom__name">Комментарии</div>
                            <div className="communicate-bottom__comment">
                                <textarea placeholder='dfdf'></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contacts-communicate__dop-info">

                    <img src={upImg} alt="" />

                    <p>
                        Наличие позиций уточняйте по номеру, сообщайте если нужно убрать ингридиент
                    </p>
                </div>
            </div>
        </div>
    )

}

export default CommunicationContacts;