import { useState, useEffect } from "react";
import { Card, Button, Row, Col, Form, Spinner } from "react-bootstrap";
import axios from "axios";

export default function NoticiasGrid() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("general");

  const fetchNoticias = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&pageSize=12&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      );
      setNoticias(res.data.articles);
      setLoading(false);
    } catch (err) {
      console.error("Error cargando noticias:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNoticias();
  }, [categoria]);

  const noticiasFiltradas = noticias.filter((n) =>
    n.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="mt-4">
      <Row className="mb-3">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Buscar noticias..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Form.Select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="general">General</option>
            <option value="business">Negocios</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="health">Salud</option>
            <option value="science">Ciencia</option>
            <option value="sports">Deportes</option>
            <option value="technology">Tecnología</option>
          </Form.Select>
        </Col>
      </Row>

      {loading ? (
        <div className="text-center my-4">
          <Spinner animation="border" />
        </div>
      ) : noticiasFiltradas.length > 0 ? (
        <Row>
          {noticiasFiltradas.map((n, i) => (
            <Col key={i} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={n.urlToImage || "https://via.placeholder.com/400x200?text=Sin+Imagen"}
                  alt={n.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{n.title}</Card.Title>
                  <Card.Text>
                    {n.description || "No hay descripción disponible."}
                  </Card.Text>
                  <Button
                    href={n.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                  >
                    Leer más
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center text-muted">No se encontraron noticias.</p>
      )}
    </div>
  );
}
