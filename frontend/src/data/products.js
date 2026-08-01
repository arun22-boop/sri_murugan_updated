const products = [
  // 🏗️ Hollow Blocks
{
  id: 1,
  name: "4 Inch Hollow Block",
  tamilName: "4 அங்குல ஹாலோ பிளாக்",
  category: "Hollow Blocks",
  brand: "Sri Murugan Agency",
  unit: "Nos",
  stock: "In Stock",
  price: 25,
  image: "/images/products/hollow-block-4.png",
},
  {
    id: 2,
    name: "4 Inch Solid Block",
    tamilName: "4 அங்குல சாலிட் பிளாக்",
    category: "Hollow Blocks",
    image: "/images/products/solid-block-4.png",
    description: "High quality 4 inch solid concrete block.",
    brand: "Sri Murugan Agency",
    unit: "Nos",
    stock: "In Stock",
    price: 25,
  },
  {
    id: 3,
    name: "6 Inch Solid Block",
    tamilName: "6 அங்குல சாலிட் பிளாக்",
    category: "Hollow Blocks",
    image: "/images/products/solid-block-6.png",
    description: "High quality 6 inch solid concrete block.",
    brand: "Sri Murugan Agency",
    unit: "Nos",
    stock: "In Stock",
    price: 35,
  },

  // 🧱 Cement
  {
    id: 4,
    name: "Dalmia DC Cement",
    tamilName: "டால்மியா DC சிமெண்ட்",
    category: "Cement",
    image: "/images/products/dalmia-dc.png",
    description: "Premium cement for all construction works.",
    brand: "Sri Murugan Agency",
    unit: "Bag",
    stock: "In Stock",
    price: 310,
  },
  {
    id: 5,
    name: "Dalmia DSP Cement",
    tamilName: "டால்மியா DSP சிமெண்ட்",
    category: "Cement",
    image: "/images/products/dalmia-dsp.png",
    description: "Premium strength cement.",
    brand: "Sri Murugan Agency",
    unit: "Bag",
    stock: "In Stock",
    price: 340,
  },
  {
    id: 6,
    name: "Ramco Cement",
    tamilName: "ராம்கோ சிமெண்ட்",
    category: "Cement",
    image: "/images/products/ramco-cement.png",
    description: "Ramco OPC/PPC Cement.",
    brand: "Sri Murugan Agency",
    unit: "Bag",
    stock: "In Stock",
    price: 310,
  },

  // 🏖️ Sand
  {
    id: 7,
    name: "M Sand",
    tamilName: "எம் சாண்ட்",
    category: "Sand",
    image: "/images/products/msand.png",
    description: "Manufactured Sand.",
    brand: "Sri Murugan Agency",
    unit: "unit",
    stock: "In Stock",
    price: 5000,
  },
  {
    id: 8,
    name: "P Sand",
    tamilName: "பி சாண்ட்",
    category: "Sand",
    image: "/images/products/psand.png",
    description: "Plastering Sand.",
    brand: "Sri Murugan Agency",
    unit: "unit",
    stock: "In Stock",
    price: 5500,
  },

  // 🪨 Jalli
  {
    id: 9,
    name: "3/4 Inch Jalli",
    tamilName: "3/4 ஜல்லி",
    category: "Jalli",
    image: "/images/products/jalli-34.png",
    description: "3/4 inch blue metal.",
    brand: "Sri Murugan Agency",
    unit: "unit",
    stock: "In Stock",
    price: 0,
  },
  {
    id: 10,
    name: "1/2 Inch Jalli",
    tamilName: "1/2 ஜல்லி",
    category: "Jalli",
    image: "/images/products/jalli-12.png",
    description: "1/2 inch blue metal.",
    brand: "Sri Murugan Agency",
    unit: "unit",
    stock: "In Stock",
    price: 0,
  },
  {
    id: 11,
    name: "6 mm Jalli",
    tamilName: "6 மிமீ ஜல்லி",
    category: "Jalli",
    image: "/images/products/jalli-6mm.png",
    description: "6 mm aggregate.",
    brand: "Sri Murugan Agency",
    unit: "unit",
    stock: "In Stock",
    price: 0,
  },

// ==========================
// 🪟 Cement Windows
// ==========================

{
  id: 12,
  name: "2 x 11/2 Cement Window",
  tamilName: "2 × 1½ சிமெண்ட் ஜன்னல்",
  category: "Cement Window",
  image: "/images/products/window-2x1.5.png",
  description: "High quality cement window.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 13,
  name: "2 x 2 Cement Window",
  tamilName: "2 × 2 சிமெண்ட் ஜன்னல்",
  category: "Cement Window",
  image: "/images/products/window-2x2.png",
  description: "High quality cement window.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 14,
  name: "21/2 x 2 Cement Window",
  tamilName: "2½ × 2 சிமெண்ட் ஜன்னல்",
  category: "Cement Window",
  image: "/images/products/window-2.5x2.png",
  description: "High quality cement window.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 15,
  name: "3 x 2 Cement Window",
  tamilName: "3 × 2 சிமெண்ட் ஜன்னல்",
  category: "Cement Window",
  image: "/images/products/window-3x2.png",
  description: "High quality cement window.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

// ==========================
// 🪟 Cement Jolly
// ==========================

{
  id: 16,
  name: "1 x 1 Cement Jolly",
  tamilName: "1 × 1 சிமெண்ட் ஜாலி",
  category: "Cement Jolly",
  image: "/images/products/jolly-1x1.png",
  description: "Decorative cement jolly.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 17,
  name: "11/2 x 1 Cement Jolly",
  tamilName: "1½ × 1 சிமெண்ட் ஜாலி",
  category: "Cement Jolly",
  image: "/images/products/jolly-1.5x1.png",
  description: "Decorative cement jolly.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 18,
  name: "11/2 x 11/2 Cement Jolly",
  tamilName: "1½ × 1½ சிமெண்ட் ஜாலி",
  category: "Cement Jolly",
  image: "/images/products/jolly-1.5x1.5.png",
  description: "Decorative cement jolly.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 19,
  name: "2 x 11/2 Cement Jolly",
  tamilName: "2 × 1½ சிமெண்ட் ஜாலி",
  category: "Cement Jolly",
  image: "/images/products/jolly-2x1.5.png",
  description: "Decorative cement jolly.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 20,
  name: "2 x 2 Cement Jolly",
  tamilName: "2 × 2 சிமெண்ட் ஜாலி",
  category: "Cement Jolly",
  image: "/images/products/jolly-2x2.png",
  description: "Decorative cement jolly.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

// ==========================
// 🌬️ Other Cement Products
// ==========================

{
  id: 21,
  name: "Ex Fan Pipe",
  tamilName: "எக்ஸாஸ்ட் ஃபேன் பிரேம்",
  category: "Other Cement Products",
  image: "/images/products/exhaust-frame.png",
  description: "High quality cement exhaust fan frame.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 22,
  name: "Cement Adupu",
  tamilName: "சிமெண்ட் அடுப்பு",
  category: "Other Cement Products",
  image: "/images/products/adupu.png",
  description: "Strong and durable cement stove.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

// ==========================
// ⭕ Cement Rings
// ==========================

{
  id: 23,
  name: "3 Feet Cement Ring",
  tamilName: "3 அடி சிமெண்ட் ரிங்",
  category: "Cement Rings",
  image: "/images/products/ring-3ft.png",
  description: "3 feet cement ring for drainage and wells.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 24,
  name: "4 Feet Cement Ring",
  tamilName: "4 அடி சிமெண்ட் ரிங்",
  category: "Cement Rings",
  image: "/images/products/ring-4ft.png",
  description: "4 feet cement ring for drainage and wells.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

// ==========================
// 🪵 Cement Slabs (4")
// ==========================

{
  id: 25,
  name: "3 x 4 inch Cement Slab",
  tamilName: "3 × 4 அங்குல சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "3 x 4 inch Cement Slab",
 brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 26,
  name: "31/2 x 4 inch Cement Slab",
  tamilName: "3½ × 4 அங்குல சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "3½ x 4 inch Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 27,
  name: "4 x 4 inch Cement Slab",
  tamilName: "4 × 4 அங்குல சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "4 x 4 inch Cement Slab",
 brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 28,
  name: "41/2 x 4 inch Cement Slab",
  tamilName: "4½ × 4 அங்குல சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "4½ x 4 inch Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 29,
  name: "5 x 4 inch Cement Slab",
  tamilName: "5 × 4 அங்குல சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "5 x 4 inch Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 30,
  name: "51/2 x 4 inch Cement Slab",
  tamilName: "5½ × 4 அங்குல சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "5½ × 4 inch Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

// ==========================
// 🪵 Cement Slabs (6")
// ==========================

{
  id: 31,
  name: "3 x 6 inch Cement Slab",
  tamilName: "3 × 6 அங்குல சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "3 x 6 inch Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 32,
  name: "31/2 x 6 inch Cement Slab",
  tamilName: "3½ × 6 அங்குல சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "3½ x 6 inch Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 33,
  name: "4 x 6 inch Cement Slab",
  tamilName: "4 × 6 அங்குல சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "4 x 6 inch Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 34,
  name: "41/2 x 6 inch Cement Slab",
  tamilName: "4½ × 6 அங்குல சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "4½ x 6 inch Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 35,
  name: "5 x 6 inch Cement Slab",
  tamilName: "5 × 6 அங்குல சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "5 x 6 inch Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 36,
  name: "51/2 x 6 inch Cement Slab",
  tamilName: "5½ × 6 அங்குல சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "5½ × 6 inch Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 37,
  name: "6 x 6 inch Cement Slab",
  tamilName: "6 × 6 அங்குல சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "6 x 6 inch Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

// ==========================
// 🪵 Cement Slabs (1½")
// ==========================

{
  id: 38,
  name: "3 x 1½ Cement Slab",
  tamilName: "3 × 1½ சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "3 x 1½ Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 39,
  name: "3½ x 1½ Cement Slab",
  tamilName: "3½ × 1½ சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "3½ x 1½ Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 40,
  name: "4 x 1½ Cement Slab",
  tamilName: "4 × 1½ சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "4 x 1½ Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 41,
  name: "4½ x 1½ Cement Slab",
  tamilName: "4½ × 1½ சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "4½ x 1½ Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 42,
  name: "5 x 1½ Cement Slab",
  tamilName: "5 × 1½ சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "5 x 1½ Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

// ==========================
// 🪵 Cement Slabs (2")
// ==========================

{
  id: 43,
  name: "2 x 2 Cement Slab",
  tamilName: "2 × 2 சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "2 x 2 Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 44,
  name: "3 x 2 Cement Slab",
  tamilName: "3 × 2 சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "3 x 2 Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 45,
  name: "3½ x 2 Cement Slab",
  tamilName: "3½ × 2 சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "3½ x 2 Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 46,
  name: "4 x 2 Cement Slab",
  tamilName: "4 × 2 சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "4 x 2 Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 47,
  name: "4½ x 2 Cement Slab",
  tamilName: "4½ × 2 சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "4½ x 2 Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 48,
  name: "5 x 2 Cement Slab",
  tamilName: "5 × 2 சிமெண்ட் ஸ்லாப்",
  category: "Cement Slabs",
  image: "/images/products/cement-slab.png",
  description: "5 x 2 Cement Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

// ==========================
// 🚧 Cement Posts
// ==========================

{
  id: 49,
  name: "6 Feet Cement Post",
  tamilName: "6 அடி சிமெண்ட் தூண்",
  category: "Cement Posts",
  image: "/images/products/post-6ft.png",
  description: "Strong RCC cement post for fencing.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 50,
  name: "7 Feet Cement Post",
  tamilName: "7 அடி சிமெண்ட் தூண்",
  category: "Cement Posts",
  image: "/images/products/post-7ft.png",
  description: "Strong RCC cement post for fencing.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 51,
  name: "8 Feet Cement Post",
  tamilName: "8 அடி சிமெண்ட் தூண்",
  category: "Cement Posts",
  image: "/images/products/post-8ft.png",
  description: "Strong RCC cement post for fencing.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 52,
  name: "10 Feet Cement Post",
  tamilName: "10 அடி சிமெண்ட் தூண்",
  category: "Cement Posts",
  image: "/images/products/post-10ft.png",
  description: "Strong RCC cement post for fencing.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 53,
  name: "12 Feet Cement Post",
  tamilName: "12 அடி சிமெண்ட் தூண்",
  category: "Cement Posts",
  image: "/images/products/post-12ft.png",
  description: "Heavy-duty RCC cement post.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

// ==========================
// 🪨 Kadapa Slabs (1 ft)
// ==========================

{
  id: 54,
  name: "3 x 1 Kadapa Slab",
  tamilName: "3 × 1 கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 55,
  name: "31/2 x 1 Kadapa Slab",
  tamilName: "3½ × 1 கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 56,
  name: "4 x 1 Kadapa Slab",
  tamilName: "4 × 1 கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 57,
  name: "41/2 x 1 Kadapa Slab",
  tamilName: "4½ × 1 கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

// ==========================
// 🪨 Kadapa Slabs (1¼ ft)
// ==========================

{
  id: 58,
  name: "3 x 11/4 Kadapa Slab",
  tamilName: "3 × 1¼ கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 59,
  name: "31/2 x 11/4 Kadapa Slab",
  tamilName: "3½ × 1¼ கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 60,
  name: "4 x 11/4 Kadapa Slab",
  tamilName: "4 × 1¼ கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

// ==========================
// 🪨 Kadapa Slabs (1½ ft)
// ==========================

{
  id: 61,
  name: "3 x 11/2 Kadapa Slab",
  tamilName: "3 × 1½ கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 62,
  name: "31/2 x 11/2 Kadapa Slab",
  tamilName: "3½ × 1½ கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 63,
  name: "4 x 11/2 Kadapa Slab",
  tamilName: "4 × 1½ கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 64,
  name: "41/2 x 11/2 Kadapa Slab",
  tamilName: "4½ × 1½ கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 65,
  name: "5 x 11/2 Kadapa Slab",
  tamilName: "5 × 1½ கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 66,
  name: "51/2 x 11/2 Kadapa Slab",
  tamilName: "5½ × 1½ கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 67,
  name: "6 x 11/2 Kadapa Slab",
  tamilName: "6 × 1½ கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

// ==========================
// 🪨 Kadapa Slabs (2 ft)
// ==========================

{
  id: 68,
  name: "3 x 2 Kadapa Slab",
  tamilName: "3 × 2 கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 69,
  name: "31/2 x 2 Kadapa Slab",
  tamilName: "3½ × 2 கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 70,
  name: "4 x 2 Kadapa Slab",
  tamilName: "4 × 2 கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 71,
  name: "41/2 x 2 Kadapa Slab",
  tamilName: "4½ × 2 கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 72,
  name: "5 x 2 Kadapa Slab",
  tamilName: "5 × 2 கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 73,
  name: "51/2 x 2 Kadapa Slab",
  tamilName: "5½ × 2 கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 74,
  name: "6 x 2 Kadapa Slab",
  tamilName: "6 × 2 கடப்பா கல்",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa.png",
  description: "Premium Kadapa Stone",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

// ==========================
// 🚰 Kadapa Sink Slabs
// ==========================

{
  id: 75,
  name: "2 x 11/2 Sink Slab",
  tamilName: "2 × 1½ சிங்க் கடப்பா",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa-sink.png",
  description: "Kadapa Sink Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 76,
  name: "2 x 2 Sink Slab",
  tamilName: "2 × 2 சிங்க் கடப்பா",
  category: "Kadapa Slabs",
  image: "/images/products/kadapa-sink.png",
  description: "Kadapa Sink Slab",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

// ==========================
// ⚪ ACC Pipes & Fittings
// ==========================

{
  id: 77,
  name: "10 Feet ACC Pipe",
  tamilName: "10 அடி ACC பைப்",
  category: "ACC Pipes",
  image: "/images/products/acc-pipe-10ft.png",
  description: "10 Feet ACC Pipe for drainage and water applications.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 78,
  name: "8 Feet ACC Pipe",
  tamilName: "8 அடி ACC பைப்",
  category: "ACC Pipes",
  image: "/images/products/acc-pipe-8ft.png",
  description: "8 Feet ACC Pipe for drainage and water applications.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 79,
  name: "ACC Bend",
  tamilName: "ACC பெண்ட்",
  category: "ACC Pipes",
  image: "/images/products/acc-bend.png",
  description: "ACC Pipe Bend Fitting.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

{
  id: 80,
  name: "ACC Cowl",
  tamilName: "ACC கவுல்",
  category: "ACC Pipes",
  image: "/images/products/acc-cowl.png",
  description: "ACC Pipe Cowl.",
  brand: "Sri Murugan Agency",
  unit: "nos",
  stock: "In Stock",
  price: 0,
},

];

export default products;