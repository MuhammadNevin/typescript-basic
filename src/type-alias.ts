// Alias Data Types

// Union Type for Category
export type ID = number | string;

export type Category = {
    id: ID;
    name: string;
    description?: string; // Optional property
}

export type Product = {
    id: ID;
    name: string;
    price: number;
    category: Category;
    description?: string; // Optional property
}