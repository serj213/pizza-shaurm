import React from 'react';

import './communicationContacts.scss';

import credtiCartImg from '../../../images/communic-contacts/credit-card.svg';
import nalicImg from '../../../images/communic-contacts/nalic.svg';
import checkImg from '../../../images/communic-contacts/check.svg';

const CommunicationContacts = () => {

    const typePay = ['Картой', 'Наличные'];

    return (
        <div className='contacts-communicate'>
            <h3 className="contacts-communicate__title">
                Оформление заказа
            </h3>
            <div className="contacts-communicate__box">
                <div className="contacts-communicate__mainInfo">
                    <div className="contacts-communicate__top">
                        <div className="contacts-communicate__input phone-input">
                            <div className="contacts-communicate__labels">
                                <span></span>
                                <span></span>
                            </div>
                            <input type="text" />
                        </div>

                        <div className="contacts-communicate__input phone-input">
                            <div className="contacts-communicate__labels">
                                <span></span>
                                <span></span>
                            </div>
                            <input type="text" />
                        </div>

                    </div>

                    <div className="contacts-communicate__middle">
                        {
                            typePay.map((type, index) => <span key={index}>{type}</span>)
                        }
                    </div>

                    <div className="contacts-communicate__bottom communicate-bottom">
                        <div className="communicate-bottom__item">
                            <div className="communicate-bottom__name"></div>
                            <div className="communicate-bottom__time">

                            </div>
                        </div>
                        <div className="communicate-bottom__item">
                            <div className="communicate-bottom__name"></div>
                            <div className="communicate-bottom__comment"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CommunicationContacts;