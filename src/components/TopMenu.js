import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/Cart';

export default function TopMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link className="nav-link" to="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/products">Products</Link>
                </NavItem>
                <NavItem>
                    <CartContext.Consumer>
                        {({ cart }) => 
                            <Link className="nav-link" to="/products">
                                Cart ({cart.length})
                            </Link>
                        }
                    </CartContext.Consumer>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
    );
}