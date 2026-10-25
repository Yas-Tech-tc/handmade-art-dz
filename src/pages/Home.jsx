import { Link } from "react-router-dom";
import Container from "../components/Container";

function Home() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl sm:text-5xl">
        L'artisanat algérien, <span className="text-terracotta">porte après porte</span>
      </h1>
      <p className="mt-4 max-w-xl text-lg">
        Céramiques, décoration, mode et cadeaux faits main en Algérie.
      </p>
      <Link
        to="/boutique"
        className="mt-8 inline-flex min-h-12 items-center rounded-full bg-terracotta px-8 font-bold text-white hover:bg-terracotta-dark"
      >
        Découvrir la boutique
      </Link>
    </Container>
  );
}

export default Home;