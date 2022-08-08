import React, { useContext } from 'react';
import UserContext from '../../store/UserContext';
import ProductsList from '../products/ProductsList';
import RecipesList from '../recipes/RecipesList';
import UsersList from '../users/UsersList';
import { Route, Switch, Link, BrowserRouter } from "react-router-dom";
import Navbar from './Navbar';
import AddRecipe from '../recipes/AddRecipe';

const Home = () => {
    const { currentUser, setUserContext } = useContext(UserContext)//get the curent user from the context

    const exit = () => {
        localStorage.removeItem('currentUser');
        setUserContext({id:-1,name:''});
    }

    return (
        <div>
            <Navbar/>
            <h1>Home page</h1>
            <p>user: {currentUser.name}, {currentUser.email} {currentUser.password} {currentUser.id}</p>
            <button onClick={exit}>exit</button>
<ProductsList/>
            <Switch>
            <Route path='/usersList' component={UsersList} />
            <Route path='/productsList' component={ProductsList} />
            <Route path='/recipeList' component={RecipesList} />
            <Route path='/AddRecipe' component={AddRecipe} />

          </Switch>
        </div>
    );
};

export default Home;