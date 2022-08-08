import React from 'react';
import logo from './logo.svg';
import './App.css';

import UsersList from './components/users/UsersList'
import ProductsList from './components/products/ProductsList'
import { Route, Switch, Link, BrowserRouter } from "react-router-dom";
import wordsList from './components/WordsList';

function App() {


  return (
    <>
      shop project:<br/>

      <BrowserRouter>
        <Link to='/usersList'>users</Link><br/>
        <Link to='/productsList'>prducts</Link><br/>
        <Link to='/wordsList'>words link</Link><br/>

        <Switch>
          <Route path='/usersList' component={UsersList} />
          <Route path='/wordsList' component={wordsList} />
          <Route path='/productsList' component={ProductsList} />
        </Switch>
      </BrowserRouter>

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
