import type { Category, Product } from "../src/type-alias";
describe('Alias Data Types', function () {
  it('Variable with Alias Data Types', function () {
    const category: Category = {
        id: 1,
        name: 'Electronics',
    };
    const product: Product = {
        id: "1",
        name: 'Smartphone',
        price: 699,
        category: category,
    };

    // product.description = 'A high-end smartphone with advanced features'; // Error: Property 'description' does not exist on type 'Product'

    console.log('Category:', category);
    console.log('Product:', product);
  });
});