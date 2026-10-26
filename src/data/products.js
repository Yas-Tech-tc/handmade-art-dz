export const products = [
  // Maison & Décoration
  { id: 1, name: "Miroir décoratif en cuivre martelé", category: "maison-decoration", price: 6500,
    description: "Miroir rond encadré de cuivre martelé à la main, pour une entrée ou un salon chaleureux.",
    materials: "Cuivre, verre", dimensions: "Ø 40 cm", images: [], featured: true, isNew: false, inStock: true },
  { id: 2, name: "Panier mural en raphia", category: "maison-decoration", price: 2800,
    description: "Panier mural tressé à la main, idéal comme décoration ou pour ranger.",
    materials: "Raphia naturel", dimensions: "Ø 35 cm", images: [], featured: false, isNew: true, inStock: true },

  // Art de la table & Vaisselle
  { id: 3, name: "Tasse en céramique, calligraphie fine", category: "art-de-la-table", price: 1200,
    description: "Tasse peinte à la main, ornée d'une calligraphie délicate.",
    materials: "Céramique émaillée", dimensions: "H 9 cm, 25 cl", images: ["/images/products/test1.png", "/images/products/test2.png", "/images/products/test3.png"], featured: false, isNew: false, inStock: true },
  { id: 4, name: "Sous-plat bois et faïence peinte", category: "art-de-la-table", price: 2500,
    description: "Sous-plat en bois sombre serti d'une faïence illustrée à la main. Pièce unique.",
    materials: "Bois, faïence", dimensions: "20 x 20 cm", images: [], featured: true, isNew: true, inStock: true },

  // Poterie & Céramique
  { id: 5, name: "Vase en terre cuite", category: "poterie-ceramique", price: 3200,
    description: "Vase en terre cuite aux lignes simples, tourné et décoré à la main.",
    materials: "Terre cuite", dimensions: "H 28 cm", images: [], featured: false, isNew: false, inStock: true },
  { id: 6, name: "Jarre à couvercle", category: "poterie-ceramique", price: 3800,
    description: "Jarre traditionnelle avec son couvercle, pour la cuisine ou la décoration.",
    materials: "Terre cuite émaillée", dimensions: "H 24 cm", images: [], featured: false, isNew: false, inStock: false },

  // Mode & Maroquinerie
  { id: 7, name: "Sac en cuir, motifs berbères", category: "mode-maroquinerie", price: 8500,
    description: "Sac en cuir véritable orné de motifs berbères, cousu à la main.",
    materials: "Cuir véritable", dimensions: "30 x 25 x 10 cm", images: [], featured: true, isNew: false, inStock: true },
  { id: 8, name: "Gandoura brodée, col vert", category: "mode-maroquinerie", price: 9000,
    description: "Tenue en lin rayé blanc avec col brodé vert et dentelle orange.",
    materials: "Lin, broderie", dimensions: "Taille unique", images: [], featured: true, isNew: true, inStock: true },

  // Bijoux & Accessoires
  { id: 9, name: "Collier pendentif khamsa", category: "bijoux-accessoires", price: 2200,
    description: "Pendentif en forme de khamsa gravé de motifs amazighs, sur chaîne fine.",
    materials: "Métal argenté", dimensions: "Chaîne 45 cm", images: [], featured: false, isNew: false, inStock: true },
  { id: 10, name: "Bracelet artisanal perlé", category: "bijoux-accessoires", price: 1500,
    description: "Bracelet monté à la main, pour un style traditionnel ou moderne.",
    materials: "Perles, fil ciré", dimensions: "Ajustable", images: [], featured: false, isNew: true, inStock: true },

  // Cosmétiques Naturels
  { id: 11, name: "Savon artisanal à l'huile d'olive", category: "cosmetiques-naturels", price: 600,
    description: "Savon doux fabriqué en petite quantité à partir d'ingrédients naturels.",
    materials: "Huile d'olive, ingrédients naturels", dimensions: "100 g", images: [], featured: false, isNew: false, inStock: true },
  { id: 12, name: "Baume nourrissant pour le corps", category: "cosmetiques-naturels", price: 1400,
    description: "Baume de soin artisanal pour nourrir et protéger la peau.",
    materials: "Ingrédients naturels", dimensions: "50 ml", images: [], featured: false, isNew: false, inStock: true },

  // Cadeaux d'Entreprise
  { id: 13, name: "Coffret cadeau personnalisable", category: "cadeaux-entreprise", price: 7000,
    description: "Coffret d'objets artisanaux composé sur mesure, avec votre logo.",
    materials: "Selon composition", dimensions: "Sur commande", images: [], featured: false, isNew: false, inStock: true },
  { id: 14, name: "Magnets personnalisés (lot de 10)", category: "cadeaux-entreprise", price: 4500,
    description: "Lot de magnets en céramique peints à la main, personnalisables sur commande.",
    materials: "Céramique", dimensions: "Environ 6 x 6 cm", images: [], featured: false, isNew: false, inStock: true },

  // Pop Culture Algérienne
  { id: 15, name: "Magnet porte de la Casbah", category: "pop-culture", price: 500,
    description: "Magnet en céramique illustrant une porte traditionnelle de la Casbah.",
    materials: "Céramique peinte", dimensions: "Environ 7 x 5 cm", images: [], featured: true, isNew: false, inStock: true },
  { id: 16, name: "Carnet illustré, motifs amazighs", category: "pop-culture", price: 900,
    description: "Carnet de papeterie célébrant le patrimoine algérien au quotidien.",
    materials: "Papier recyclé", dimensions: "A5", images: [], featured: false, isNew: true, inStock: true },
];