import NavbarNoticias from "./components/Navbar";
import CarouselNoticias from "./components/CarouselNoticias";
import NoticiasGrid from "./components/NoticiasGrid";
import UltimasNoticias from "./components/UltimasNoticias";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <NavbarNoticias />
      <Container className="mt-4">
        {/* Carrusel de noticias destacadas */}
        <CarouselNoticias />

        <Row>
          <Col md={9}>
            {/* Noticias en cuadrícula */}
            <NoticiasGrid />
          </Col>

          <Col md={3}>
            {/* Barra lateral de últimas noticias */}
            <UltimasNoticias />
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark text-white text-center py-3 mt-4">
        © {new Date().getFullYear()} Noticiero React - Todos los derechos reservados
      </footer>
    </>
  );
}

export default App;
