import Container from "./components/Container";
import Button from "./components/Button";
import PatternDivider from "./components/PatternDivider";
import SectionTitle from "./components/SectionTitle";
import { formatPrice } from "./utils/formatPrice";

function App() {
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-4xl sm:text-5xl">
          L'artisanat algérien, <span className="text-terracotta">porte après porte</span>
        </h1>

        <PatternDivider className="my-8 text-terracotta" />

        <SectionTitle title="Test du design system" subtitle="Cette page sera remplacée après." />

        <div className="flex flex-wrap items-center gap-4">
          <Button onClick={() => alert("Clic !")}>Ajouter</Button>
          <Button variant="outline">Voir le détail</Button>
          <Button disabled>Indisponible</Button>
          <span className="font-bold">{formatPrice(2500)}</span>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <div className="h-16 w-16 rounded-xl bg-cream ring-1 ring-night/20" />
          <div className="h-16 w-16 rounded-xl bg-night" />
          <div className="h-16 w-16 rounded-xl bg-terracotta" />
          <div className="h-16 w-16 rounded-xl bg-saffron" />
          <div className="h-16 w-16 rounded-xl bg-olive" />
        </div>
      </Container>
    </main>
  );
}

export default App;