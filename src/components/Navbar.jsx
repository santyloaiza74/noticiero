import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavbarNoticias() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">📰 Noticiero React</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="ms-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Categorías</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
