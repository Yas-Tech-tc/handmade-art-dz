import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

function Cart() {
  return (
    <Container className="py-10">
      <SectionTitle title="Votre panier" subtitle="Le panier sera construit avec Redux." />
    </Container>
  );
}

export default Cart;