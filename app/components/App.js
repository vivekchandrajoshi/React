import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
class App extends Component{
  constructor () {
    super ();
    this.state ={title : "Welcome"};
  }
  changeTitle(title){
    this.setState({title: title})
  }
   render(){
      return(
         <div>
          <h1>APP</h1>
         </div>
      );
   }
}
export default App;
