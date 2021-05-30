import './App.css';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import DeliveryInfo from './components/DeliveryInfo/DeliveryInfo';
import Footer from './components/Footer/Footer';
import SubscribeEmail from './components/SubscribeEmail/SubscribeEmail';
import SpecialOffer from './components/SpecialOffer/SpecialOffer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Header/>
      <Products/>
      <DeliveryInfo/>
      <SpecialOffer/>
      <SubscribeEmail />
      <Footer/>
    </div>
  );
}

export default App;
