import React from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { FaFileAlt   } from 'react-icons/fa'; 


class TopMenu extends React.Component {

    render() {

        return (

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#new"><FaFileAlt />  New</Nav.Link>
                            <NavDropdown title="Save" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#save"> Save</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#saveAll">Save All</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Results" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#asGrid">As Grid</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#asText">As Text</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#execute">Execute</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#profile">
                                Profile
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default TopMenu