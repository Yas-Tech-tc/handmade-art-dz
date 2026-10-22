export const categories = [
  { id: "maison-decoration", name: "Maison & Décoration" },
  { id: "art-de-la-table", name: "Art de la table & Vaisselle" },
  { id: "poterie-ceramique", name: "Poterie & Céramique" },
  { id: "mode-maroquinerie", name: "Mode & Maroquinerie" },
  { id: "bijoux-accessoires", name: "Bijoux & Accessoires" },
  { id: "cosmetiques-naturels", name: "Cosmétiques Naturels" },
  { id: "cadeaux-entreprise", name: "Cadeaux d'Entreprise" },
  { id: "pop-culture", name: "Pop Culture Algérienne" },
];

export function getCategoryName(id) {
  return categories.find((c) => c.id === id)?.name ?? "";
}