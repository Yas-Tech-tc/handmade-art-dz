export function formatPrice(amount) {
  return `${new Intl.NumberFormat("fr-DZ").format(amount)} DA`;
}