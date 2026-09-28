const WHATSAPP_NUMBER = "5493513991858";

const PRODUCTS = [
  {
    id: "vestido-azul",
    name: "Vestido Azul",
    price: 185000,
    category: "noche",
    images: ["images/vestidos/azul1.webp", "images/vestidos/azul2.webp", "images/vestidos/azul3.webp"],
    description: "Vestido azul de lycra de seda con una caída increíble."
  },
  {
    id: "vestido-blanco",
    name: "Vestido Blanco",
    price: 190000,
    category: "noche",
    images: ["images/vestidos/blanco1.webp", "images/vestidos/blanco2.webp", "images/vestidos/blanco3.webp"],
    description: "Vestido blanco brillante con glitter."
  },
  {
    id: "vestido-negro1",
    name: "Vestido Negro",
    price: 190000,
    category: "dia",
    images: ["images/vestidos/n1.webp", "images/vestidos/n2.webp"],
    description: "Vestido de lurex negro con brillos (el detalle del cinto bordado es opcional."
  },
  {
    id: "vestido-mika",
    name: "Vestido Mika",
    price: 210000,
    category: "dia",
    images: ["images/vestidos/celeste1.webp", "images/vestidos/celeste2.webp"],
    description: "Vestido de satén con aplicaciones de tul bordado. Segunda mano."
  },
  {
    id: "vestido-rojo",
    name: "Vestido Rojo",
    price: 185000,
    category: "ceremonia",
    images: ["images/vestidos/rojo1.webp", "images/vestidos/rojo2.webp", "images/vestidos/rojo3.webp"],
    description: "Vestido de tul bordado con piedras."
  },
  {
    id: "vestido-marti",
    name: "Vestido Marti",
    price: 210000,
    category: "ceremonia",
    images: ["images/vestidos/neg1.webp", "images/vestidos/neg2.webp", "images/vestidos/neg3.webp", "images/vestidos/neg4.webp"],
    description: "Vestido de tul bordado con lentejuelas, diseño moderno con tajos y cortes. Segunda mano."
  },
  {
    id: "vestido-plateado",
    name: "Vestido Plateado",
    price: 195000,
    category: "novia",
    images: ["images/vestidos/plateado1.webp", "images/vestidos/plateado2.webp", "images/vestidos/plateado3.webp"],
    description: "Vestido de Satén con diseño estampado."
  },
  {
    id: "vestido-vicki",
    name: "Vestido Vicki",
    price: 190000,
    category: "novia",
    images: ["images/vestidos/negro1.webp", "images/vestidos/negro2.webp"],
    description: "Vestido negro de lurex con brillos."
  },
  {
    id: "vestido-bordo",
    name: "Vestido Bordó",
    price: 180000,
    category: "novia",
    images: ["images/vestidos/bordo1.webp", "images/vestidos/bordo2.webp"],
    description: "Vestido tul bordado con transparencias. Segunda mano."
  },
  {
    id: "vestido-15s",
    name: "Vestido 15s",
    price: 200000,
    category: "novia",
    images: ["images/vestidos/bicolor1.webp", "images/vestidos/bicolor2.webp", "images/vestidos/bicolor3.webp"],
    description: "Corset tul bordado y pollera en capas de organza."
  },
  {
    id: "vestido-multiuso",
    name: "Vestido Multiuso",
    price: 185000,
    category: "novia",
    images: ["images/vestidos/celes1.webp", "images/vestidos/celes2.webp", "images/vestidos/celes3.webp", "images/vestidos/celes4.webp", "images/vestidos/celes5.webp", "images/vestidos/celes6.webp", "images/vestidos/celes7.webp"],
    description: "Vestido en yersey de seda elastizada."
  },
  {
    id: "vestido-lunares",
    name: "Vestido a Lunares",
    price: 195000,
    category: "novia",
    images: ["images/vestidos/circulos1.webp", "images/vestidos/circulos2.webp"],
    description: "Vestido a lunares en gasa y crep satén."
  },
  {
    id: "vestido-azulOscuro",
    name: "Vestido Azul Oscuro",
    price: 185000,
    category: "novia",
    images: ["images/vestidos/ne1.webp", "images/vestidos/ne2.webp"],
    description: "Vestido azul con detalle de cinto brillante en crep elastizado."
  },
  {
    id: "mono-verde",
    name: "Mono Verde",
    price: 190000,
    category: "novia",
    images: ["images/vestidos/verde1.webp", "images/vestidos/verde2.webp"],
    description: "Mono de Yersey con espandex. Segunda mano."
  },
  {
    id: "vestido-tul-flecos",
    name: "Vestido de Tul con Flecos",
    price: 195000,
    category: "novia",
    images: ["images/vestidos/hilos1.webp", "images/vestidos/hilos2.webp", "images/vestidos/hilos3.webp" ],
    description: "Vestido en tul bordado."
  },
  {
    id: "vestido-flores",
    name: "Vestido de Novia",
    price: 250000,
    category: "novia",
    images: ["images/vestidos/flores1.webp", "images/vestidos/flores2.webp"],
    description: "Vestido de novia o egreso en tul bordado 3D. Segunda mano."
  },
  {
    id: "pollera-plato",
    name: "Pollera Plato Verde con Corset",
    price: 250000,
    category: "novia",
    images: ["images/vestidos/verdeplata1.webp", "images/vestidos/verdeplata2.webp", "images/vestidos/verdeplata3.webp"],
    description: "Pollera campana con bolsillos + corset."
  },
  {
    id: "pollera-plato2",
    name: "Pollera Plato Verde con Corset",
    price: 250000,
    category: "novia",
    images: ["images/vestidos/verdenegro1.webp", "images/vestidos/verdenegro2.webp"],
    description: "Pollera campana con bolsillos + corset."
  },
  {
    id: "pollera-negra",
    name: "Pollera Negra con Corset",
    price: 250000,
    category: "novia",
    images: ["images/vestidos/negroblanco1.webp", "images/vestidos/negroblanco2.webp"],
    description: "Pollera campana negra con aplicaciones + Corset."
  },
  {
    id: "vestido-tornasol",
    name: "Vestido Tornasol V",
    price: 190000,
    category: "novia",
    images: ["images/vestidos/grisbrillos1.webp", "images/vestidos/grisbrillos2.webp", "images/vestidos/grisbrillos3.webp"],
    description: "Vestido tornasol con escote en V."
  },
  {
    id: "vestido-tornasol",
    name: "Vestido Tornasol □",
    price: 190000,
    category: "novia",
    images: ["images/vestidos/otrogrisbrillos1.webp", "images/vestidos/otrogrisbrillos2.webp", "images/vestidos/otrogrisbrillos3.webp"],
    description: "Vestido tornasol con escote cuadrado."
  },
];

function formatPrice(value) {
  return "$" + value.toLocaleString("es-AR");
}

function whatsappLink(productName) {
  const message = encodeURIComponent(`Hola, me interesa el ${productName}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}