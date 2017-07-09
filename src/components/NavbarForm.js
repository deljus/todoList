import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap';

class NavbarForm extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">TASK LIST</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            </Navbar>
        )
    }
}

export default NavbarForm;
