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
    images: ["images/azul1.png", "images/azul2.png", "images/azul3.png"],
    description: "Vestido azul de lycra de seda con una caída increíble."
  },
  {
    id: "vestido-blanco",
    name: "Vestido Blanco",
    price: 210000,
    category: "noche",
    images: ["images/blanco1.png", "images/blanco2.png", "images/blanco3.png"],
    description: "Vestido blanco brillante con glitter."
  },
  {
    id: "vestido-negro1",
    name: "Vestido Negro",
    price: 195000,
    category: "dia",
    images: ["images/n1.png", "images/n2.png"],
    description: "Vestido de lurex negro con brillos (el detalle del cinto bordado es opcional."
  },
  {
    id: "vestido-celeste",
    name: "Vestido Celeste",
    price: 160000,
    category: "dia",
    images: ["images/celeste1.png", "images/celeste2.png"],
    description: "Vestido de satén con aplicaciones de tul bordado."
  },
  {
    id: "vestido-rojo",
    name: "Vestido Rojo",
    price: 175000,
    category: "ceremonia",
    images: ["images/rojo1.png", "images/rojo2.png", "images/rojo3.png"],
    description: "Vestido de tul bordado con piedras."
  },
  {
    id: "vestido-negro2",
    name: "Vestido Negro 2",
    price: 225000,
    category: "ceremonia",
    images: ["images/neg1.png", "images/neg2.png", "images/neg3.png", "images/neg4.png"],
    description: "Vestido de tul bordado con lentejuelas, diseño moderno con tajos y cortes."
  },
  {
    id: "vestido-plateado",
    name: "Vestido Plateado",
    price: 198000,
    category: "novia",
    images: ["images/plateado1.png", "images/plateado2.png", "images/plateado3.png"],
    description: "Vestido de Satén con diseño estampado."
  },
  {
    id: "vestido-negro3",
    name: "Vestido Negro 3",
    price: 205000,
    category: "novia",
    images: ["images/negro1.png", "images/negro2.png"],
    description: "Vestido negro de lurex con brillos."
  },
  {
    id: "vestido-bordo",
    name: "Vestido Bordó",
    price: 205000,
    category: "novia",
    images: ["images/bordo1.png", "images/bordo2.png"],
    description: "Vestido tul bordado con transparencias."
  },
  {
    id: "vestido-bicolor",
    name: "Vestido Bicolor",
    price: 205000,
    category: "novia",
    images: ["images/bicolor1.png", "images/bicolor2.png", "images/bicolor3.png"],
    description: "Corset tul bordado y pollera en capas de organza."
  },
  {
    id: "vestido-dorado",
    name: "Vestido de 15",
    price: 205000,
    category: "novia",
    images: ["images/dorado1.png", "images/dorado2.png"],
    description: "Vestido de 15."
  },
  {
    id: "vestido-naranja",
    name: "Vestido Naranja de Fiesta",
    price: 205000,
    category: "novia",
    images: ["images/naranja1.png"],
    description: "Vestido de fiesta."
  },
  {
    id: "vestido-rosa",
    name: "Vestido Rosa",
    price: 205000,
    category: "novia",
    images: ["images/rosa1.png"],
    description: "Vestido de fiesta."
  },
  {
    id: "vestido-blanco2",
    name: "Vestido de Egreso",
    price: 205000,
    category: "novia",
    images: ["images/randomblanco1.png", "images/randomblanco2.png"],
    description: "Vestido de egreso."
  },
  {
    id: "vestido-multiuso",
    name: "Vestido Multiuso",
    price: 205000,
    category: "novia",
    images: ["images/celes1.png", "images/celes2.png", "images/celes3.png", "images/celes4.png", "images/celes5.png", "images/celes6.png", "images/celes7.png"],
    description: "Vestido en yersey de seda elastizada."
  },
  {
    id: "vestido-lunares",
    name: "Vestido a Lunares",
    price: 205000,
    category: "novia",
    images: ["images/circulos1.png", "images/circulos2.png"],
    description: "Vestido a lunares en gasa y crep satén."
  },
  {
    id: "vestido-azulOscuro",
    name: "Vestido Azul Oscuro",
    price: 205000,
    category: "novia",
    images: ["images/ne1.png", "images/ne2.png"],
    description: "Vestido azul con detalle de cinto brillante en crep elastizado."
  },
  {
    id: "vestido-verde",
    name: "Vestido Verde",
    price: 205000,
    category: "novia",
    images: ["images/verde1.png", "images/verde2.png"],
    description: "Mono de Yersey con espandex."
  },
  {
    id: "vestido-hilos",
    name: "Vestido de Tul",
    price: 205000,
    category: "novia",
    images: ["images/hilos1.png", "images/hilos2.png", "images/hilos3.png" ],
    description: "Vestido en tul bordado."
  },
  {
    id: "vestido-flores",
    name: "Vestido de Tul",
    price: 205000,
    category: "novia",
    images: ["images/flores1.png", "images/flores2.png"],
    description: "Vestido de novia o egreso en tul bordado 3 D."
  },
  {
    id: "vestido-xxxxxx",
    name: "xxxxxx",
    price: 205000,
    category: "novia",
    images: ["images/verdeplata1.jpeg", "images/verdeplata2.jpeg", "images/verdeplata3.jpeg"],
    description: "xxxxxxxxxx."
  },
  {
    id: "vestido-xxxxxx",
    name: "xxxxxx",
    price: 205000,
    category: "novia",
    images: ["images/verdenegro1.png", "images/verdenegro2.png"],
    description: "xxxxxxxxxx."
  },
  {
    id: "vestido-xxxxxx",
    name: "xxxxxx",
    price: 205000,
    category: "novia",
    images: ["images/negroblanco1.png", "images/negroblanco2.png"],
    description: "xxxxxxxxxx."
  },
  {
    id: "vestido-xxxxxx",
    name: "xxxxxx",
    price: 205000,
    category: "novia",
    images: ["images/grisbrillos1.jpeg", "images/grisbrillos2.jpeg", "images/grisbrillos3.jpeg"],
    description: "xxxxxxxxxx."
  },
  {
    id: "vestido-xxxxxx",
    name: "xxxxxx",
    price: 205000,
    category: "novia",
    images: ["images/otrogrisbrillos1.jpeg", "images/otrogrisbrillos2.jpeg", "images/otrogrisbrillos3.jpeg"],
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