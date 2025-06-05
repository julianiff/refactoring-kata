export interface Order {
  id: string;
  status: number;
  priority: number;
}

export function ship(order: Order): void {
  console.log(`Shipping order ${order.id}`);
}

export function cancel(order: Order): void {
  console.log(`Cancelling order ${order.id}`);
}

export function refund(order: Order): void {
  console.log(`Refunding order ${order.id}`);
}

export function expedite(order: Order): void {
  console.log(`Expediting order ${order.id}`);
}

export function processOrder(order: Order): void {
  if (order.status === 1) {
    ship(order);
  } else if (order.status === 2) {
    cancel(order);
  } else if (order.status === 3) {
    refund(order);
  }
  
  if (order.priority > 5) {
    expedite(order);
  }
}
