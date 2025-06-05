export class Order {
  items: Array<{name: string; price: number}> = [];
  customerName: string = '';
  customerEmail: string = '';
  customerAddress: string = '';
  customerPhone: string = '';
  shippingMethod: string = '';
  shippingCost: number = 0;
  taxRate: number = 0;
  
  addItem(item: {name: string; price: number}): void {
    this.items.push(item);
  }
  
  calculateTotal(): number {
    const subtotal = this.items.reduce((sum, item) => sum + item.price, 0);
    const tax = subtotal * this.taxRate;
    return subtotal + tax + this.shippingCost;
  }
  
  validateCustomerInfo(): boolean {
    return !!(this.customerName && this.customerEmail && 
             this.customerAddress && this.customerPhone);
  }
  
  calculateShipping(): number {
    if (this.shippingMethod === 'express') {
      return 20;
    } else if (this.shippingMethod === 'standard') {
      return 10;
    }
    return 0;
  }
}
