import React from 'react';

import Header from './Components/Header/Header';
import FirstScreen from './Components/FirstScreen/FirstScreen';
import Promotion from './Components/Promotion/Promotion';
import SpecialOffers from './Components/SpecialOffers/SpecialOffers';
import Carts from './Components/Carts/Carts';
import Modal from './Components/Modal/Modal';

import products from './products.json';



const App = () => {


  const [productsList, setProductsLists] = React.useState([]);
  const [basketList, setBasketList] = React.useState([]);
  const [checkoutActive, setCheckoutActive] = React.useState(false);
  const [modalActive, setModalActive] = React.useState(false);
  const [lenghtBasketItem, setLenghtBasketItem] = React.useState(0);
  const [totalCost, setTotalCost] = React.useState(0);
  const cartBlock = React.useRef(null);


  React.useEffect(() => {
    
  }, [])

  const orderWithDeliveryBtn = () => {
    const positionCartBlock = cartBlock.current.getBoundingClientRect().y;
    window.scrollTo({
      top: positionCartBlock - 30,
      behavior: "smooth"

    });

  }

  React.useEffect(() => {
    setProductsLists(products);

  }, [basketList]);

  React.useEffect(() => {
    setLenghtBasketItem(basketList.length);
    sumPriceCheckout();
    if (basketList.length === 0) {
      setCheckoutActive(false);
      setModalActive(false);
    }

  }, [basketList])

  const sumPriceCheckout = () => {

    const priceArr = [];

    basketList.forEach(({ totalPrice }) => {
      priceArr.push(totalPrice)
    });

    if (basketList.length === 1) {
      setTotalCost(basketList[0].totalPrice);
    } else if (basketList.length > 1) {
      setTotalCost(priceArr.reduce((a, b) => a + b));
    } else {
      setTotalCost(0)
    }
  }

  const totalPriceBasket = (action) => {
    const totalPriceArr = [];
    basketList.forEach(item => {
      totalPriceArr.push(item.totalPrice);
    });

    if (action === 'plus') {
      setTotalCost(totalPriceArr.reduce((a, b) => a + b));
    } else {
      setTotalCost(totalPriceArr.reduce((a, b) => a + b));
    }

  }

  const addCartToBasket = (obj) => {

    const dubble = basketList.find(el => el.id === obj.id);

    if (!dubble) {
      setBasketList([...basketList, obj]);

    }

    if (!checkoutActive) {
      setCheckoutActive(true);
    }
  }

  const deleteToCart = (id) => {
    const counterList = basketList.map(item => {
      if (item.id === id) {
        item.count = 1
        item.totalPrice = item.price
      }
      return item;
    });
    const newBasket = counterList.filter(item => item.id !== id);
    setBasketList(newBasket);
  }




  return (
    <div className='wrapper'>
      <Header />
      <FirstScreen
        checkoutActive={checkoutActive}
        setModalActive={setModalActive}
        lenghtBasketItem={lenghtBasketItem}
        totalCost={totalCost}
        orderWithDeliveryBtn={orderWithDeliveryBtn}
      />
      <Promotion />
      <SpecialOffers />
      <Carts
        productsList={productsList}
        addCartToBasket={addCartToBasket}
        checkoutActive={checkoutActive}
        cartBlock={cartBlock}
      />

      {modalActive && <Modal
        modalActive={modalActive}
        basketList={basketList}
        setModalActive={setModalActive}
        lenghtBasketItem={lenghtBasketItem}
        totalCost={totalCost}
        setTotalCost={setTotalCost}
        setBasketList={setBasketList}
        totalPriceBasket={totalPriceBasket}
        deleteToCart={deleteToCart}
      />}

    </div>
  );
}

export default App;
