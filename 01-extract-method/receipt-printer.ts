export interface Item {
  name: string;
  price: number;
}

export function printReceipt(items: Item[], taxRate: number): string {
  let output = '';
  let total = 0;
  output += "RECEIPT\n";
  output += "-------\n";
  for (let item of items) {
    output += `${item.name}: $${item.price.toFixed(2)}\n`;
    total += item.price;
  }
  output += "-------\n";
  let tax = total * taxRate;
  let grandTotal = total + tax;
  output += `Subtotal: $${total.toFixed(2)}\n`;
  output += `Tax: $${tax.toFixed(2)}\n`;
  output += `Total: $${grandTotal.toFixed(2)}\n`;
  return output;
}
