import { Product, MegaMenuCategory } from "./types";

export const products: Product[] = [
  {
    id: 1,
    slug: "msi-pro-16",
    name: "EX DISPLAY : MSI Pro 16 Flex-036AU",
    description: "15.6 MULTITOUCH All-In-One ...",
    rating: 4,
    reviewsCount: 4,
    price: 499.0,
    oldPrice: 599.0,
    img: "/images/products/laptop1.png",
    brand: "MSI",
    inStock: true,
  },
  {
    id: 2,
    slug: "msi-gaming-1",
    name: "MSI Gaming Desktop",
    price: 899.0,
    img: "/images/products/desktop1.png",
    brand: "MSI",
    inStock: true,
  },
  // เพิ่มตามต้องการ...
];

export const megaMenu: MegaMenuCategory[] = [
  {
    id: 1,
    name: "Laptops",
    subcategories: [
      "Everyday Use Notebooks",
      "MSI Workstation Series",
      "MSI Prestige Series",
      "Gaming Notebooks",
      "Tablets And Pads",
    ],
    products: products.slice(0, 4), // ตัวอย่าง
    brands: [
      { id: 1, name: "MSI", logo: "/images/brands/msi.png" },
      { id: 2, name: "Razer", logo: "/images/brands/razer.png" },
      { id: 3, name: "ADATA", logo: "/images/brands/adata.png" },
    ],
  },
  // category อื่นๆ...
];
