// data/menu.ts
export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  inStock: boolean;
};

export type Category = {
  id: string;
  name: string;
  products: Product[];
};

export const menuData: Category[] = [
  {
    id: "everyday-use",
    name: "Everyday Use Notebooks",
    products: [
      {
        id: "p1",
        name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
        image: "/products/laptop1.png",
        price: 499.0,
        oldPrice: 799.0,
        rating: 4,
        reviews: 4,
        inStock: true,
      },
      {
        id: "p2",
        name: "EX DISPLAY : MSI Prestige 14 Evo",
        image: "/products/laptop2.png",
        price: 899.0,
        oldPrice: 1099.0,
        rating: 5,
        reviews: 10,
        inStock: true,
      },
    ],
  },
  {
    id: "msi-workstation",
    name: "MSI Workstation Series",
    products: [/* ... */],
  },
  // เพิ่มหมวดอื่นๆ ...
];
