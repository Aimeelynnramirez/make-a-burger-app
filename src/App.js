import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
    
const Title = () => (
    <div>
      <h3>Welcome to Make a Burger</h3>
      <p style={{fontSize:'13px'}}>
      <br/>For All Your Cooking Needs
      <br/>This is Saved in DevTools
    Console for Your Readable Data Rendering </p>
    </div>
  )

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
       <BrowserRouter>

        <Route path='/' render={() =>
         <h2 style={{textAlign:'center'}}> 
         <Title/>
         <hr/>
        <BurgerBuilder/> </h2> } />

       </BrowserRouter>
     
        </Layout>
      </div>
    );
  }
}

export default App;
