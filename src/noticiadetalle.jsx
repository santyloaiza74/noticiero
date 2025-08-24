import { useParams, Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

const noticias = [
  {
    id: 1,
    titulo: "Nueva ley de educación aprobada en el Congreso",
    categoria: "Política",
    imagen: "https://picsum.photos/1000/500?random=1",
    contenido:
      "El Congreso aprobó hoy una nueva ley que busca modernizar el sistema educativo del país. Incluye reformas clave en la formación de docentes, infraestructura digital y acceso gratuito a recursos educativos...",
  },
  {
    id: 2,
    titulo: "La selección nacional gana el campeonato",
    categoria: "Deportes",
    imagen: "https://picsum.photos/1000/500?random=2",
    contenido:
      "En un partido histórico, la selección se coronó campeona regional tras vencer a su rival con un marcador de 3-1. Los fanáticos celebraron en las calles hasta altas horas de la noche...",
  },
  {
    id: 3,
    titulo: "Avances tecnológicos en inteligencia artificial",
    categoria: "Tecnología",
    imagen: "https://picsum.photos/1000/500?random=3",
    contenido:
      "Expertos anuncian un nuevo modelo de IA que promete revolucionar la industria médica, permitiendo diagnósticos más rápidos y precisos...",
  },
  {
    id: 4,
    titulo: "Economía en crecimiento este trimestre",
    categoria: "Economía",
    imagen: "https://picsum.photos/1000/500?random=4",
    contenido:
      "El último informe del banco central muestra un crecimiento del 3% en la economía nacional, impulsado por el sector tecnológico y las exportaciones...",
  },
];

export default function NoticiaDetalle() {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === parseInt(id));

  if (!noticia) {
    return (
      <Container className="mt-4 text-center">
        <h2>Noticia no encontrada</h2>
        <Button as={Link} to="/">Volver al inicio</Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Img variant="top" src={noticia.imagen} />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{noticia.categoria}</Card.Subtitle>
          <Card.Title>{noticia.titulo}</Card.Title>
          <Card.Text>{noticia.contenido}</Card.Text>
          <Button as={Link} to="/" variant="secondary">
            Volver al inicio
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
