import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
export default class Header extends Component{
   render(){
      return(
         <div>
           <h1>Header</h1>
           <Link to = "featured" >Featured</Link> &nbsp;
            <Link to = "/" >App</Link>
         </div>
      );
   }
}
