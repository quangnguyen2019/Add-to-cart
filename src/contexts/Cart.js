import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor() {
        super();
        this.state = {
            cart: localStorage.getItem('cart') ? 
                  localStorage.getItem('cart').split(',') : []
        }

        this.AddToCart = this.AddToCart.bind(this);
    }

    async AddToCart(product) {
        await this.setState({ 
            cart: this.state.cart.concat(product) 
        });

        localStorage.setItem('cart', this.state.cart);
    }
    
    render() {
        return(
            <CartContext.Provider value={{ 
                cart: this.state.cart, 
                addToCart: this.AddToCart 
            }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}