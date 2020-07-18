import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    render() {

        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container banner">
                        <div className="row">
                            <div className="col">
                                <h1>Tani Cafe</h1>
                                <h2>The Boutique Cafe</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }

}

export default Header;