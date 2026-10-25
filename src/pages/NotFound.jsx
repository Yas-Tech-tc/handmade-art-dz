import { Link } from "react-router-dom";
import Container from "../components/Container";

function NotFound() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl">Page introuvable</h1>
      <Link to="/" className="mt-4 inline-block font-bold text-terracotta">
        Retour à l'accueil
      </Link>
    </Container>
  );
}

export default NotFound;