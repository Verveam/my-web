
import {Navbar, Container, Nav, Button, Form} from "react-bootstrap"

import { Outlet,Link } from "react-router-dom"


const NavBarExample = () => {
    return(
        <>
    
    <header class="header">
        
        <Navbar className="navBg" variant="red" expand="lg">
        <div className="mx-4">
            
            <img src="../CIRCULO.png"  width="100"></img><h1>CIRCULO</h1></div>
            
                <Navbar.Brand as={Link} to="/" ><i className="fa-solid fa-screwdriver-wrench "></i><i class="fa-solid fa-cat"></i></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">

                    <Nav.Link as={Link} to="/" >HOME</Nav.Link>
                    <Nav.Link as={Link} to="/about">PRODUCTO</Nav.Link>
                    <Nav.Link as={Link} to="/contact">CONTACTO</Nav.Link>
                    <Nav.Link as={Link} to="/inscribirse"><Button>INCRIBASE</Button></Nav.Link>


                <Form className="d-flex">
                <Form.Control
                    type="Busqueda"
                    placeholder="Busqueda..."
                    className="m-2"
                    aria-label="Busqueda"
                />
                <Button variant="outline-success" className="m-2">Busqueda</Button>
                </Form>
                    

                </Nav>
                </Navbar.Collapse>
            
        </Navbar>
    </header> 
    
        
        <section>
            <Outlet></Outlet>
        </section>


        </>
    )
}
export default NavBarExample