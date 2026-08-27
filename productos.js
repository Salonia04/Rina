// Un solo lugar para toda la info de cada vestido.
// Para agregar un vestido nuevo, copiá un bloque, cambiá los datos y listo.
// No hace falta tocar ningún HTML.

const WHATSAPP_NUMBER = "5493513991858"; // <-- reemplazar por el número real (sin +, sin espacios)

const PRODUCTS = [
  {
    id: "vestido-azul",
    name: "Vestido Azul",
    price: 185000,
    category: "noche",
    images: ["images/azul1.webp", "images/azul2.webp", "images/azul3.webp"],
    description: "Vestido azul de lycra de seda con una caída increíble."
  },
  {
    id: "vestido-blanco",
    name: "Vestido Blanco",
    price: 210000,
    category: "noche",
    images: ["images/blanco1.webp", "images/blanco2.webp", "images/blanco3.webp"],
    description: "Vestido blanco brillante con glitter."
  },
  {
    id: "vestido-negro1",
    name: "Vestido Negro",
    price: 195000,
    category: "dia",
    images: ["images/n1.webp", "images/n2.webp"],
    description: "Vestido de lurex negro con brillos (el detalle del cinto bordado es opcional."
  },
  {
    id: "vestido-celeste",
    name: "Vestido Celeste",
    price: 160000,
    category: "dia",
    images: ["images/celeste1.webp", "images/celeste2.webp"],
    description: "Vestido de satén con aplicaciones de tul bordado."
  },
  {
    id: "vestido-rojo",
    name: "Vestido Rojo",
    price: 175000,
    category: "ceremonia",
    images: ["images/rojo1.webp", "images/rojo2.webp", "images/rojo3.webp"],
    description: "Vestido de tul bordado con piedras."
  },
  {
    id: "vestido-negro2",
    name: "Vestido Negro 2",
    price: 225000,
    category: "ceremonia",
    images: ["images/neg1.webp", "images/neg2.webp", "images/neg3.webp", "images/neg4.webp"],
    description: "Vestido de tul bordado con lentejuelas, diseño moderno con tajos y cortes."
  },
  {
    id: "vestido-plateado",
    name: "Vestido Plateado",
    price: 198000,
    category: "novia",
    images: ["images/plateado1.webp", "images/plateado2.webp", "images/plateado3.webp"],
    description: "Vestido de Satén con diseño estampado."
  },
  {
    id: "vestido-negro3",
    name: "Vestido Negro 3",
    price: 205000,
    category: "novia",
    images: ["images/negro1.webp", "images/negro2.webp"],
    description: "Vestido negro de lurex con brillos."
  },
  {
    id: "vestido-bordo",
    name: "Vestido Bordó",
    price: 205000,
    category: "novia",
    images: ["images/bordo1.webp", "images/bordo2.webp"],
    description: "Vestido tul bordado con transparencias."
  },
  {
    id: "vestido-bicolor",
    name: "Vestido Bicolor",
    price: 205000,
    category: "novia",
    images: ["images/bicolor1.webp", "images/bicolor2.webp", "images/bicolor3.webp"],
    description: "Corset tul bordado y pollera en capas de organza."
  },
  {
    id: "vestido-multiuso",
    name: "Vestido Multiuso",
    price: 205000,
    category: "novia",
    images: ["images/celes1.webp", "images/celes2.webp", "images/celes3.webp", "images/celes4.webp", "images/celes5.webp", "images/celes6.webp", "images/celes7.webp"],
    description: "Vestido en yersey de seda elastizada."
  },
  {
    id: "vestido-lunares",
    name: "Vestido a Lunares",
    price: 205000,
    category: "novia",
    images: ["images/circulos1.webp", "images/circulos2.webp"],
    description: "Vestido a lunares en gasa y crep satén."
  },
  {
    id: "vestido-azulOscuro",
    name: "Vestido Azul Oscuro",
    price: 205000,
    category: "novia",
    images: ["images/ne1.webp", "images/ne2.webp"],
    description: "Vestido azul con detalle de cinto brillante en crep elastizado."
  },
  {
    id: "vestido-verde",
    name: "Vestido Verde",
    price: 205000,
    category: "novia",
    images: ["images/verde1.webp", "images/verde2.webp"],
    description: "Mono de Yersey con espandex."
  },
  {
    id: "vestido-hilos",
    name: "Vestido de Tul",
    price: 205000,
    category: "novia",
    images: ["images/hilos1.webp", "images/hilos2.webp", "images/hilos3.webp" ],
    description: "Vestido en tul bordado."
  },
  {
    id: "vestido-flores",
    name: "Vestido de Tul",
    price: 205000,
    category: "novia",
    images: ["images/flores1.webp", "images/flores2.webp"],
    description: "Vestido de novia o egreso en tul bordado 3 D."
  },
  {
    id: "vestido-xxxxxx",
    name: "xxxxxx",
    price: 205000,
    category: "novia",
    images: ["images/verdeplata1.webp", "images/verdeplata2.webp", "images/verdeplata3.webp"],
    description: "xxxxxxxxxx."
  },
  {
    id: "vestido-xxxxxx",
    name: "xxxxxx",
    price: 205000,
    category: "novia",
    images: ["images/verdenegro1.webp", "images/verdenegro2.webp"],
    description: "xxxxxxxxxx."
  },
  {
    id: "vestido-xxxxxx",
    name: "xxxxxx",
    price: 205000,
    category: "novia",
    images: ["images/negroblanco1.webp", "images/negroblanco2.webp"],
    description: "xxxxxxxxxx."
  },
  {
    id: "vestido-xxxxxx",
    name: "xxxxxx",
    price: 205000,
    category: "novia",
    images: ["images/grisbrillos1.webp", "images/grisbrillos2.webp", "images/grisbrillos3.webp"],
    description: "xxxxxxxxxx."
  },
  {
    id: "vestido-xxxxxx",
    name: "xxxxxx",
    price: 205000,
    category: "novia",
    images: ["images/otrogrisbrillos1.webp", "images/otrogrisbrillos2.webp", "images/otrogrisbrillos3.webp"],
    description: "xxxxxxxxxx."
  },
];

function formatPrice(value) {
  return "$" + value.toLocaleString("es-AR");
}

function whatsappLink(productName) {
  const message = encodeURIComponent(`Hola, me interesa el ${productName}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}