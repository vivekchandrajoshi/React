import React from 'react';
import ReactDOM from 'react-dom';
import {Switch} from 'react-router';
import { BrowserRouter, Route,  } from 'react-router-dom'
import App from './components/App.js';
import Featured from './components/featured/featured.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';


ReactDOM.render(
<BrowserRouter>
      <div>
      <Header></Header>
      <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path ="/featured" component ={Featured}/>
      </Switch>
      <Footer></Footer>
      </div>
</BrowserRouter>,
   document.getElementById('app'));
