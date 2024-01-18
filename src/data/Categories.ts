export interface Subcategory {
  id: number;
  slug: string;
  categoryName: string;
  products: Product[];
}

export interface Category {
  id: number;
  slug: string;
  name: string;
  subcategories: Subcategory[];
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // New price field
  description: string; // New description field
}

export const categories: Category[] =  [
    {
      "id": 1,
      "slug": "electronics",
      "name": "Electronics",
      "subcategories": [
        {
          "id": 101,
          "slug": "smartphones",
          "categoryName": "Electronics",
          "products": [
            {
              "id": 1001,
              "name": "Smartphone A",
              "slug": "smartphone-a",
              "price": 599.99,
              "description": "A powerful and feature-rich smartphone."
            },
            {
              "id": 1002,
              "name": "Smartphone B",
              "slug": "smartphone-b",
              "price": 749.99,
              "description": "An advanced smartphone with cutting-edge technology."
            }
          ]
        },
        {
          "id": 102,
          "slug": "laptops",
          "categoryName": "Electronics",
          "products": [
            {
              "id": 1003,
              "name": "Laptop X",
              "slug": "laptop-x",
              "price": 1299.99,
              "description": "A high-performance laptop for professionals."
            },
            {
              "id": 1004,
              "name": "Laptop Y",
              "slug": "laptop-y",
              "price": 1599.99,
              "description": "An ultra-thin and lightweight laptop for on-the-go users."
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "slug": "clothing",
      "name": "Clothing",
      "subcategories": [
        {
          "id": 201,
          "slug": "shoes",
          "categoryName": "Clothing",
          "products": [
            {
              "id": 2001,
              "name": "Running Shoes",
              "slug": "running-shoes",
              "price": 79.99,
              "description": "Comfortable and durable running shoes."
            },
            {
              "id": 2002,
              "name": "Casual Shoes",
              "slug": "casual-shoes",
              "price": 49.99,
              "description": "Stylish and versatile casual shoes."
            }
          ]
        },
        {
          "id": 202,
          "slug": "jeans",
          "categoryName": "Clothing",
          "products": [
            {
              "id": 2003,
              "name": "Slim Fit Jeans",
              "slug": "slim-fit-jeans",
              "price": 59.99,
              "description": "Trendy slim fit jeans for a modern look."
            },
            {
              "id": 2004,
              "name": "Straight Leg Jeans",
              "slug": "straight-leg-jeans",
              "price": 54.99,
              "description": "Classic straight leg jeans for everyday wear."
            }
          ]
        }
      ]
    }
  ]

