import React from 'react';

import Header from './Components/Header/Header';
import FirstScreen from './Components/FirstScreen/FirstScreen';
import Promotion from './Components/Promotion/Promotion';
import SpecialOffers from './Components/SpecialOffers/SpecialOffers';
import Carts from './Components/Carts/Carts';

import products from './products.json';



const App = () => {


  const [productsList, setProductsLists] = React.useState([]);

  React.useEffect(() => {
    setProductsLists(products);
  }, [])




  return (
    <div className='wrapper'>
      <Header />
      <FirstScreen />
      <Promotion />
      <SpecialOffers />
      <Carts productsList={productsList}/>
    </div>
  );
}

export default App;
