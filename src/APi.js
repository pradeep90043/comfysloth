const dummy_data = [
  {
    id: "p1",
    img: "https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af",
    name: "Entertainment Center",
    price: 599.99,
    color: ["orange", "black"],
    company: "marcos",
    freeShipping: true,
    category: "Kitchen",
    SKUid: "p1RecQ0fMd8T0Vk21",
  },
  {
    id: "p2",
    img: "https://dl.airtable.com/.attachmentThumbnails/1af97a4d3eb28563962d8e3520727ffc/1b9cc17f",
    name: "High-Back Bench",
    price: 399.99,
    color: ["blue"],
    company: "marcos",
    freeShipping: true,
    category: "Office",
    SKUid: "p2RecQ0fMd8T0Vk21",
  },
  {
    id: "p3",
    img: "https://dl.airtable.com/.attachmentThumbnails/1e4a818f5184993e430420a152315b40/873c7094",
    name: "Modern Bookshelf",
    price: 319.99,
    color: ["blue", "green"],
    company: "ikea",
    freeShipping: false,
    category: "Bedroom",
    SKUid: "p3RecQ0fMd8T0Vk21",
  },
  {
    id: "p4",
    img: "https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359 ",
    name: "Modern Poster",
    price: 30.99,
    color: ["black"],
    company: "marcos",
    freeShipping: true,
    category: "Bedroom",
    SKUid: "p4RecQ0fMd8T0Vk21",
  },
  {
    id: "p5",
    img: "https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66    ",
    name: "Bar Stool",
    price: 40.99,
    color: ["darkgoldenrod", "blue"],
    company: "marcos",
    freeShipping: true,
    category: "Kitchen",
    SKUid: "p5RecQ0fMd8T0Vk21",
  },
  {
    id: "p6",
    img: "https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f    ",
    name: "Armchair",
    price: 125.99,
    color: ["green", "orange"],
    company: "liddy",
    freeShipping: true,
    category: "Bedroom",
    SKUid: "p6RecQ0fMd8T0Vk21",
  },
  {
    id: "p7",
    img: "https://dl.airtable.com/.attachmentThumbnails/1cf03bfcee117bd92273d996a82a1534/47ef57c7    ",
    name: "Suede Armchair",
    price: 159.99,
    color: ["darkgoldenrod"],
    company: "liddy",
    freeShipping: false,
    category: "Office",
    SKUid: "p7RecQ0fMd8T0Vk21",
  },
  {
    id: "p8",
    img: "https://dl.airtable.com/.attachmentThumbnails/d3174ad774fc628e1d50b77e3bec399f/1de7b97a",
    name: "Leather Chair",
    price: 200.99,
    color: ["green", "black"],
    company: "liddy",
    freeShipping: false,
    category: "Bedroom",
    SKUid: "p8RecQ0fMd8T0Vk21",
  },
  {
    id: "p9",
    img: "https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b    ",
    name: "Emperor Bed",
    price: 239.99,
    color: ["blue", "darkgoldenrod"],
    company: "liddy",
    freeShipping: false,
    category: "Kids",
    SKUid: "p9RecQ0fMd8T0Vk21",
  },
  {
    id: "p10",
    img: "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160    ",
    name: "Accent Chair",
    price: 259.99,
    color: ["orange", "blue"],
    company: "marcos",
    freeShipping: true,
    category: "Office",
    SKUid: "p10RecQ0fMd8T0Vk21",
  },
  {
    id: "p11",
    img: "https://dl.airtable.com/.attachmentThumbnails/2fd8fb02cc6fa5620504de41fbb662f9/3157a507    ",
    name: "Shelf",
    price: 309.99,
    color: ["green"],
    company: "liddy",
    freeShipping: true,
    category: "Kids",
    SKUid: "p11RecQ0fMd8T0Vk21",
  },
  {
    id: "p12",
    img: "https://dl.airtable.com/.attachmentThumbnails/954dfa5c8ce3df84a3c7254481464366/a3bd8c4a    ",
    name: "Wooden Desk",
    price: 400.99,
    color: ["orange"],
    company: "liddy",
    freeShipping: true,
    category: "Office",
    SKUid: "p12RecQ0fMd8T0Vk21",
  },

  {
    id: "p13",
    img: "https://dl.airtable.com/.attachmentThumbnails/7a38cf782907773d9900165530cfa583/d9f41960    ",
    name: "Dining Table",
    price: 429.99,
    color: ["green", "darkgoldenrod"],
    company: "ikea",
    freeShipping: false,
    category: "Kids",
    SKUid: "p13RecQ0fMd8T0Vk21",
  },
  {
    id: "p14",
    img: "https://dl.airtable.com/.attachmentThumbnails/5ebc46a9e31a09cbc6078190ab035abc/8480b064    ",
    name: "Utopia Sofa",
    price: 799.99,
    color: ["blue", "orange", "green"],
    company: "liddy",
    freeShipping: false,
    category: "Living Room",
    SKUid: "p14RecQ0fMd8T0Vk21",
  },
  {
    id: "p15",
    img: "https://dl.airtable.com/.attachmentThumbnails/a2f371071cf292badbb621294758b600/ca963b31    ",
    name: "Leather Sofa",
    price: 999.99,
    color: ["orange", "black", "green"],
    company: "ikea",
    freeShipping: "",
    category: "Dinning",
    SKUid: "p15RecQ0fMd8T0Vk21",
  },
  {
    id: "p16",
    img: "https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52    ",
    name: "Albany Sectional",
    price: 1099.99,
    color: ["darkgoldenrod", "blue"],
    company: "",
    freeShipping: true,
    category: "Dinnig",
    SKUid: "p16RecQ0fMd8T0Vk21",
  },
  {
    id: "p17",
    img: "https://dl.airtable.com/.attachmentThumbnails/c9d46754faf94d2283e15ac3b8accb9a/a6c343c8    ",
    name: "Simple Chair",
    price: 1099.99,
    color: ["green"],
    company: "liddy",
    freeShipping: false,
    category: "Living Room",
    SKUid: "p17RecQ0fMd8T0Vk21",
  },
  {
    id: "p18",
    img: "https://dl.airtable.com/.attachmentThumbnails/1e222e36e935db2695c33e3d30c2e482/91b542e0    ",
    name: "Vase Table",
    price: 1209.99,
    color: ["orange"],
    company: "ikea",
    freeShipping: false,
    category: "Office",
    SKUid: "p18RecQ0fMd8T0Vk21",
  },
  {
    id: "p19",
    img: "https://dl.airtable.com/.attachmentThumbnails/fe9d4f25fee307f6ae5b7a462b70b942/031464c4    ",
    name: "Sofa Set",
    price: 1299.99,
    color: ["green"],
    company: "ikea",
    freeShipping: false,
    category: "Kitchen",
    SKUid: "p19RecQ0fMd8T0Vk21",
  },

  {
    id: "p20",
    img: "https://dl.airtable.com/.attachmentThumbnails/e3fa7aa6dc112c4998da18bb401bd70f/61e2fb5e    ",
    name: "Wooden Desk",
    price: 1509.99,
    color: ["blue", "darkgoldenrod"],
    company: "ikea",
    freeShipping: false,
    category: "Kitchen",
    SKUid: "p20RecQ0fMd8T0Vk21",
  },
  {
    id: "p21",
    img: "https://dl.airtable.com/.attachmentThumbnails/e8c2f821d05b9e4e5aa450a19e62ffa5/271fc3f5    ",
    name: "Wooden Table",
    price: 2349.99,
    color: ["black"],
    company: "ikea",
    freeShipping: false,
    category: "Kitchen",
    SKUid: "p21RecQ0fMd8T0Vk21",
  },
  {
    id: "p22",
    img: "https://dl.airtable.com/.attachmentThumbnails/1d692023f254ca11a3d1a3628d198081/e922a771    ",
    name: "Wooden Bed",
    price: 2500.99,
    color: ["blue"],
    company: "ikea",
    freeShipping: false,
    category: "Bedroom",
    SKUid: "p22RecQ0fMd8T0Vk21",
  },
  {
    id: "p23",
    img: "https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f    ",
    name: "Albany Table",
    price: 3098.99,
    color: ["green"],
    company: "caressa",
    freeShipping: true,
    category: "Bedroom",
    SKUid: "p23RecQ0fMd8T0Vk21",
  },
];
export default dummy_data;
