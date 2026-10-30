import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { useSelector } from "react-redux";
import { selectCartCount } from "../store/cartSlice";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/boutique", label: "Boutique" },
  { to: "/favoris", label: "Favoris" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const cartCount = useSelector(selectCartCount);

  const linkClass = ({ isActive }) =>
    `py-2 font-medium hover:text-terracotta ${isActive ? "text-terracotta" : ""}`;

  const items = links.map((l) => (
    <NavLink key={l.to} to={l.to} end className={linkClass} onClick={() => setOpen(false)}>
      {l.label}
    </NavLink>
  ));

  return (
    <header className="sticky top-0 z-10 border-b border-night/10 bg-cream">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="font-display text-xl">
            Art <span className="text-terracotta">DZ</span>
          </Link>

          <nav className="hidden gap-8 md:flex">{items}</nav>

          <div className="flex items-center gap-2">
            <Link
              to="/panier"
              className="flex min-h-11 items-center rounded-full border-2 border-night px-4 font-bold hover:bg-night hover:text-cream"
            >
              Panier · {cartCount}
            </Link>
            <button
              className="flex h-11 w-11 items-center justify-center text-2xl md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {open && <nav className="flex flex-col pb-4 md:hidden">{items}</nav>}
      </Container>
    </header>
  );
}

export default Header;