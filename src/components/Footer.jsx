import { Link } from "react-router-dom";
import Container from "./Container";
import PatternDivider from "./PatternDivider";

function Footer() {
  return (
    <footer className="mt-16 bg-night text-sand">
      <PatternDivider className="text-terracotta" />
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl"> Art DZ</p>
          <p className="mt-1 text-sm text-sand/80">Fait main en Algérie</p>
        </div>

        <nav className="flex gap-6 text-sm">
          <Link to="/boutique" className="hover:text-saffron">Boutique</Link>
          <Link to="/panier" className="hover:text-saffron">Panier</Link>
          
        </nav>
      </Container>
      <p className="pb-6 text-center text-xs text-sand/60">
        © {new Date().getFullYear()} Art DZ
      </p>
    </footer>
  );
}

export default Footer;