export interface Employee {
  name: string;
  type: 'manager' | 'salesperson' | 'engineer' | 'regular';
  hoursWorked: number;
  hourlyRate: number;
  salesMade?: number;
}

export function calculatePay(employee: Employee): number {
  let basePay = employee.hoursWorked * employee.hourlyRate;
  if (employee.type === 'manager') {
    return basePay + 1000; // manager bonus
  } else if (employee.type === 'salesperson') {
    return basePay + ((employee.salesMade || 0) * 50); // commission
  } else if (employee.type === 'engineer') {
    return basePay * 1.1; // 10% technical bonus
  }
  return basePay;
}
