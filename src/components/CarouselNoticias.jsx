import { useState, useEffect } from "react";
import { Carousel, Spinner } from "react-bootstrap";
import axios from "axios";

export default function CarouselNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );
        setNoticias(res.data.articles);
        setLoading(false);
      } catch (err) {
        console.error("Error cargando noticias:", err);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div className="mb-4">
      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <Carousel>
          {noticias.map((n, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={n.urlToImage || "https://via.placeholder.com/800x400?text=Sin+Imagen"}
                alt={n.title}
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-2">
                <h5>{n.title}</h5>
                <p>{n.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
}
