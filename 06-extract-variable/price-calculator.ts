export interface Order {
  quantity: number;
  itemPrice: number;
  discount: number;
  taxRate: number;
}

export function calculatePrice(order: Order): number {
  return order.quantity * order.itemPrice * (1 - order.discount) * (1 + order.taxRate) + 
         (order.quantity * order.itemPrice > 100 ? 0 : 10);
}
