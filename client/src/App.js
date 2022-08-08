import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/login/Login.css';

import "bootstrap/dist/css/bootstrap.min.css"

import UsersList from './components/users/UsersList'
import ProductsList from './components/products/ProductsList'
import { Route, Switch, Link, BrowserRouter } from "react-router-dom";
import Login from './components/login/Login';
import { useSelector, useDispatch } from "react-redux";
import recipesList from './components/recipes/RecipesList';
import UserContext from './store/UserContext';
import Home from './components/Home/Home';
function App() {

  // context initial value
  const [currentUser, setUserContext] = useState(localStorage.currentUser != null ? JSON.parse(localStorage.currentUser) : { id: -1, name: "", email: "" });
  const userValue = { currentUser, setUserContext };

  return (
    <>
      <UserContext.Provider value={userValue}>
        <BrowserRouter>
          {/* <Link to='/usersList'>users</Link><br/> 
        <Link to='/productsList'>prducts</Link><br/>
        <Link to='/wordsList'>words link</Link><br/>*/}
        {currentUser.id==-1?<Login/>:<Home/>}
          
        </BrowserRouter>
      </UserContext.Provider>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
