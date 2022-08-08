import React, { useContext, useEffect, useState } from 'react';
import Form from "react-bootstrap/Form";
import UserContext from '../../store/UserContext';
import Button from "react-bootstrap/Button";
import './AddRecipe.css'
import { Col, Row } from 'react-bootstrap';
import { recipeAction_post } from '../../store/recipesReducer';
import { useDispatch } from 'react-redux';
import ProductToRecipe from './ProductToRecipe';
const AddRecipe = (props) => {

    const { currentUser, setUserContext } = useContext(UserContext)//get the curent user from the context
    const [newRecipe, set_newRecipe] = useState({ name: '', src: '', userId: currentUser.id, how: '' });
    const dispatch = useDispatch();
    const newProduct = { productId: 0, productName: '', sum: 0, size: '' };
    const [products, setProducts] = useState([{...newProduct}])

    useEffect(() => //initial
    {

        // eslint-disable-next-line
    }, []);




    const save = async () => {
        dispatch(recipeAction_post(newRecipe));
        set_newRecipe({ name: '' });
    }

    const updateFormState = (event) => {
        set_newRecipe({
            ...newRecipe,
            [event.target.name]: event.target.value,
        });
    };

    const addProduct = () => {
        setProducts([...products, { ...newProduct }]);

    }




    return (
        <div className="Login">
            <Form onSubmit={save}>
                <Row style={{ direction: 'rtl' }}>
                    <Col>
                        <Form.Group size="lg" controlId="name">
                            <Form.Control
                                autoFocus
                                name='name'
                                placeholder="שם"
                                value={newRecipe.name}
                                onChange={updateFormState}
                            />
                        </Form.Group>

                    </Col>
                    <Col>
                        <p style={{ textAlign: 'center' }}>/</p>
                    </Col>
                    <Col>
                        <Form.Group size="lg" controlId="password">
                            <Form.Control
                                name='src'
                                placeholder="מקור"

                                value={newRecipe.src}
                                onChange={updateFormState}
                            />
                            <div styles="height:20px"></div>
                        </Form.Group>
                    </Col>


                </Row>
                <Row>
                    <Col xs={5}>
                        <hr
                            style={{
                                color: 'black',
                                backgroundColor: 'grey',
                                height: 5
                            }}
                        />
                    </Col>
                    <Col >
                        <Button onClick={addProduct}>+</Button>
                    </Col>

                    <Col Col xs={5}>
                        <hr
                            style={{
                                color: 'black',
                                backgroundColor: 'grey',
                                height: 5
                            }}
                        />
                    </Col>
                </Row>
                {
                    products.map(p =>

                        <Row style={{ direction: 'rtl' }}>
                            <ProductToRecipe />
                        </Row>
                    )}
                <Row>
                    <Col xs={4}>
                        <hr
                            style={{
                                color: 'black',
                                backgroundColor: 'grey',
                                height: 5
                            }}
                        />
                    </Col>
                    <Col >
                        <Button >אופן ההכנה</Button>
                    </Col>

                    <Col Col xs={4}>
                        <hr
                            style={{
                                color: 'black',
                                backgroundColor: 'grey',
                                height: 5
                            }}
                        />
                    </Col>
                </Row>
                <Button
                    className="submitbutton"
                    block
                    size="lg"
                    type="submit"
                >
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default AddRecipe;