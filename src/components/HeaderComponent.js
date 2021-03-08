import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, Collapse, NavItem, Jumbotron, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
      }

      toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                    <NavbarToggler className="toggler" onClick={this.toggleNav} />
                        <NavbarBrand  href="/"><img src='assets/images/proOwned_logo.svg' height="80" width="131" alt='ProOwnedCycling' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h2 align="left">ProOwnedCycling</h2>
                                <p align="left">- Cycling gear from the professionals</p>
                                <p align="center"><iframe title="vimeo-player" src="https://player.vimeo.com/video/434736767" width="840" height="560" frameborder="0" allowfullscreen></iframe></p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}


export default Header;