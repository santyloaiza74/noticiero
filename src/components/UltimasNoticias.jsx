import { useState, useEffect } from "react";
import { Card, Spinner, ListGroup } from "react-bootstrap";
import axios from "axios";

export default function UltimasNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );
        const titulares = res.data.articles.map((a) => ({
          titulo: a.title,
          url: a.url,
        }));
        setNoticias(titulares);
        setLoading(false);
      } catch (err) {
        console.error("Error cargando noticias:", err);
      }
    };

    fetchNoticias();
    const intervaloAPI = setInterval(fetchNoticias, 60000);
    return () => clearInterval(intervaloAPI);
  }, []);

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header className="bg-danger text-white fw-bold text-center">
        Últimas Noticias
      </Card.Header>
      <Card.Body className="p-0">
        {loading ? (
          <div className="text-center py-4">
            <Spinner animation="border" />
          </div>
        ) : (
          <div className="ticker">
            <ListGroup variant="flush">
              {noticias.slice(0, 5).map((n, i) => (
                <ListGroup.Item
                  key={i}
                  className="py-2 small"
                  style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  <a
                    href={n.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    {n.titulo}
                  </a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
