import React from "react";
import Container from "../Common/Container/Container";
import './carts.scss';


const Carts = ({ productsList, addCartToBasket, checkoutActive, cartBlock }) => {

    const [activeTab, setActiveTab] = React.useState(1);
    const [widthWindow, setWidthWindow] = React.useState(null);


    React.useEffect(() => {
        setWidthWindow(document.body.offsetWidth);
    }, [])


    const tabs = [
        { id: 1, name: 'Все позиции' },
        { id: 2, name: 'Шаурма' },
        { id: 3, name: 'Пицца' },
        { id: 4, name: 'Напитки' },

    ]

    const changeActiveTab = (id) => {
        setActiveTab(id)
    }



    return (
        <section ref={cartBlock} className="carts">
            <div className="container">
                <div className="carts__inner">
                    <div className="carts__top carts-top">
                        <div className="carts-top__left">
                            <h3 className="carts-top__name">
                                Шаурма Житомир 🌯
                            </h3>
                            <div className="carts-top__desript">
                                ☝️от 250 грн бесплатная доставка ☝️️
                            </div>
                        </div>



                        {
                            widthWindow > 700 ?
                                <div className="carts-top__tabs tabs__desktop tabs ">
                                    {
                                        tabs.map(tab => {
                                            return <div key={tab.id} onClick={() => changeActiveTab(tab.id)}
                                                className={`tabs__item
                                            ${activeTab === tab.id && 'tabs__item--active'}`}>
                                                {tab.name}
                                            </div>
                                        })
                                    }
                                </div>
                                :
                                <div className="tabs__mobile">
                                    <div className="carts-top__tabs tabs">
                                        {
                                            tabs.map(tab => {
                                                return <div key={tab.id} onClick={() => changeActiveTab(tab.id)}
                                                    className={`tabs__item
                                                    ${activeTab === tab.id && 'tabs__item--active'}`}>
                                                    {tab.name}
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                        }

                        {

                        }

                    </div>

                    {/*  */}
                    <div className={`carts__box ${checkoutActive && 'carts__padding-bottom'}`}>
                        {
                            productsList.map(cart => {
                                return (
                                    <div key={cart.id} id={cart.type}
                                        className={`carts__item item
                                        ${activeTab === cart.type ? 'disable' : ''}
                                        ${activeTab === 1 && 'disable'}
                                        
                                    `}>
                                        <div className="item__image">
                                            <img src={cart.img} alt="" />
                                        </div>
                                        <div className="item__content">
                                            <div className="item__name">
                                                {cart.name}
                                            </div>
                                            <p className="item__composition">
                                                {cart.composition}
                                            </p>
                                        </div>
                                        <div className="item__cost">
                                            <p>
                                                Cтоимость
                                            </p>
                                            <p>
                                                от <span>
                                                    {cart.price}
                                                </span>грн
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => addCartToBasket(cart)}
                                            className="item__btn btn">
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