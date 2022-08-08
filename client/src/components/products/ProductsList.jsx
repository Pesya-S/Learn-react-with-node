import React, { useEffect, useState, useContext } from 'react';
import productService from '../../services/productService';
import { productAction_get, productAction_post } from '../../store/productsReducer';
import { useSelector, useDispatch } from "react-redux";
import UserContext from '../../store/UserContext';

export default function ProductsList(props) {

    const products = useSelector(state => state.products);
    const { currentUser } = useContext(UserContext)//get the curent user from the context
        const [newproduct, setNewproduct] = useState({ name: '' ,userId:currentUser.id});

        const dispatch = useDispatch();
    useEffect(() => //initial
    {
        getProducts();

        // eslint-disable-next-line
    }, []);

    const getProducts = async () => {
        dispatch(productAction_get(products,currentUser.id));
    }

    const updateFormState = (event) => {
        setNewproduct({
            ...newproduct,
            [event.target.name]: event.target.value,
        });
    };

    const add=async()=>{
        dispatch(productAction_post(newproduct));        getProducts();
        setNewproduct({ name: '' });
    }

    return (
        <div>
            <div>
                <h1>new product:</h1>
        name:<input value={newproduct.name} name='name' onChange={updateFormState}></input>
        <button onClick={add}>add product</button>

            </div>

            <div>
                products list: {
                    products.map(product => <>
                        <div>
                            {product.id} {product.name} {product.password}
                        </div>
                    </>)
                }
            </div>

        </div>
    )
}