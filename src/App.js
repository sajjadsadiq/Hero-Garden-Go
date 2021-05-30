import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import DeliveryInfo from './components/DeliveryInfo/DeliveryInfo';
import Footer from './components/Footer/Footer';
import SubscribeEmail from './components/SubscribeEmail/SubscribeEmail';
import SpecialOffer from './components/SpecialOffer/SpecialOffer';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route as Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Product from './components/Product/Product';
import Contact from './components/Contact/Contact';
import Shop from './components/Shop/Shop';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext()
export const IdContext = createContext()
function App() {
  const [loggedInUser,setLoggedInUser] = useState({
    signIn:true,
  })
  const [id,setId] = useState(0)
  console.log('id:',id);
  return (
    <IdContext.Provider value={[id,setId]}>
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <div className="">
      
   <Router>
   <Navbar/>

     <Switch>
     <Route exact path='/'>
   <Header/>
   <Products/>
      <DeliveryInfo/>
      <SpecialOffer/>
      <SubscribeEmail/>

   </Route>

   <Route  path='/home'>
   <Header/>
   <Products/>
      <DeliveryInfo/>
      <SpecialOffer/>
      <SubscribeEmail/>

   </Route>
   <Route path='/contact'>
     <Contact />
   </Route>
   <Route path='/Products'>
     <Products />
   </Route>
   <Route path='/shop'>
     <Shop />
   </Route>
  <Route path='/login'>
    <Login />
  </Route>
  <PrivateRoute path='/product'>
    <Product />
  </PrivateRoute>

     </Switch>
     <Footer/>
   </Router>
    </div>
    </UserContext.Provider>
    </IdContext.Provider>
  );
}

export default App;
