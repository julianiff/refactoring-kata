export interface Sale {
  date: string;
  product: string;
  amount: number;
}

export function generateReport(data: Sale[]): string {
  let report = "<html><head><title>Report</title></head><body>";
  report += "<h1>Monthly Sales Report</h1>";
  let total = 0;
  let count = 0;
  for (let sale of data) {
    report += `<p>${sale.date}: ${sale.product} - $${sale.amount}</p>`;
    total += sale.amount;
    count++;
  }
  let average = total / count;
  report += `<hr><p>Total: $${total}</p>`;
  report += `<p>Average: $${average.toFixed(2)}</p>`;
  report += "</body></html>";
  return report;
}
