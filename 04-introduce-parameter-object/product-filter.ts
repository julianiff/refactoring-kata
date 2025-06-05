export interface Product {
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  brand: string;
}

export function filterProducts(minPrice: number, maxPrice: number, category: string, inStock: boolean, brand: string): Product[] {
  // filter products
  const products: Product[] = [
    { name: 'Laptop', price: 999, category: 'Electronics', inStock: true, brand: 'TechCo' },
    { name: 'Phone', price: 699, category: 'Electronics', inStock: false, brand: 'TechCo' }
  ];
  
  return products.filter(p => 
    p.price >= minPrice && 
    p.price <= maxPrice && 
    p.category === category &&
    p.inStock === inStock &&
    p.brand === brand
  );
}

export function countProducts(minPrice: number, maxPrice: number, category: string, inStock: boolean, brand: string): number {
  // count matching products
  return filterProducts(minPrice, maxPrice, category, inStock, brand).length;
}

export function exportProducts(minPrice: number, maxPrice: number, category: string, inStock: boolean, brand: string, format: string): string {
  // export filtered products
  const products = filterProducts(minPrice, maxPrice, category, inStock, brand);
  return `Exporting ${products.length} products as ${format}`;
}
