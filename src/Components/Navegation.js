import React from 'react';
import {Navbar, NavLink, Nav, NavbarBrand, NavItem} from 'reactstrap';
import Carro from './Carrito';

class Navegation extends React.Component
{
    render()
    {
        return(
            <Navbar color='light' light expand='md'>
                <NavbarBrand href='/'>{this.props.titulo}</NavbarBrand>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink href='/'>Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/'>Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <Carro></Carro>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Navegation;