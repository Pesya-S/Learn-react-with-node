import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const ProductToRecipe = () => {

    const [ptr,set_ptr ] = useState({ productId: 0, productName: '', sum:0, size:'' });

    const updateFormState = (event) => {
        set_ptr({
            ...ptr,
            [event.target.name]: event.target.value,
        });
    };

    const save=()=>{}

    return (
        <>
         
                    <Col>
                        <Form.Group size="lg" controlId="name">
                            <Form.Control
                                autoFocus
                                name='sum'
                                placeholder="כמות"
                                value={ptr.sum}
                                onChange={updateFormState}
                            />
                        </Form.Group>

                    </Col>
                    <Col>
                    <Form.Group size="lg" controlId="password">
                            <Form.Control
                                name='size'
                                placeholder="מידה"
                                value={ptr.size}
                                onChange={updateFormState}
                            />
                            <div styles="height:20px"></div>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group size="lg" controlId="password">
                            <Form.Control
                                name='productName'
                                placeholder="מוצר"
                                value={ptr.productName}
                                onChange={updateFormState}
                            />
                            <div styles="height:20px"></div>
                        </Form.Group>
                    </Col>


             


              
        </>
    );
};

export default ProductToRecipe;