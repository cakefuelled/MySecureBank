import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


class Header extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    /*componentWillMount() {
        //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
        //always reset that global state back to null when you REMOUNT
        this.props.resetMe();
    }*/

    componentWillReceiveProps(nextProps) {
        if(nextProps.deletedPost.error) {
            alert('Could not delete. Please try again.');
        } else if(nextProps.deletedPost.post && !nextProps.deletedPost.error) {
            this.context.router.push('/');
        }
    }

    render() {
        return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">MySecureBank</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="#">Link</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>
        );
    }
}

export default Header