import React, { Component } from 'react';
import axios from 'axios';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Col, Row, Container
} from 'reactstrap';

import { CartContext } from '../contexts/Cart';

export default class Product extends Component {
    constructor() {
        super();
        this.state = {
            products: [
              {
                "id": "574d25c9-92e0-4f79-adf3-ad8996fa49e7",
                "name": "Kaffir Lime Leaves",
                "description": "etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius",
                "imageUrl": "https://picsum.photos/300/200"
              },
              {
                "id": "ae415539-efd0-46e9-a231-f6be560ecca0",
                "name": "Cheese - Ricotta",
                "description": "luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum",
                "imageUrl": "https://picsum.photos/300/200"
              },
              {
                "id": "dce9f8c1-b2b6-4703-8d93-a9ae429ba045",
                "name": "Shrimp - 21/25, Peel And Deviened",
                "description": "odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque",
                "imageUrl": "https://picsum.photos/300/200"
              },
              {
                "id": "eee8867a-71ab-4292-a1b0-031831b07a83",
                "name": "Juice - Apple Cider",
                "description": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel",
                "imageUrl": "https://picsum.photos/300/200"
              },
              {
                "id": "620fcecb-ca82-40fa-a63a-199a819e3de6",
                "name": "Beer - Mcauslan Apricot",
                "description": "nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec",
                "imageUrl": "https://picsum.photos/300/200"
              },
              {
                "id": "9d0ceaa6-dde5-40fd-9df9-804b0136a632",
                "name": "Truffle Shells - White Chocolate",
                "description": "integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula",
                "imageUrl": "https://picsum.photos/300/200"
              },
              {
                "id": "ccc54b5e-7100-491d-89fe-28c3736d3404",
                "name": "Soup - Canadian Pea, Dry Mix",
                "description": "ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec",
                "imageUrl": "https://picsum.photos/300/200"
              },
              {
                "id": "45e6b9ca-2cb7-4b2c-9596-a5d0f8c7eac8",
                "name": "Ostrich - Prime Cut",
                "description": "donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi",
                "imageUrl": "https://picsum.photos/300/200"
              }
            ]
        }
    }

    // componentDidMount() {
    //     axios.get('http://localhost:5000/products')
    //         .then(res => {
    //             this.setState({ products: res.data });
    //         });
    // }

    render() {
        const { products } = this.state;

        return <Container>
            <h2 className="mt-3 mb-5">Products</h2>

            <div>
                <Row>
                  { products.map( (item, index) => {
                      return (
                        <Col sm="3" key={index}>
                          <Card className="mb-4">
                              <CardImg top width="100%" src={item.imageUrl} alt="" />
                              <CardBody>
                                  <CardTitle tag="h5"> {item.name} </CardTitle>
                                  <CardText> {item.description} </CardText>
                                  <CartContext.Consumer>
                                      {({ addToCart }) => 
                                          <Button onClick={() => addToCart(item)}> Add to cart </Button>
                                      }
                                  </CartContext.Consumer>
                              </CardBody>
                          </Card>
                        </Col>
                      );
                  })}
                </Row>
            </div>
        </Container>
    }
}