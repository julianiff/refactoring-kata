export interface ApplicationData {
  age: number;
  income: number;
  score: number; // credit score
}

export function validateInput(data: ApplicationData): boolean {
  if (data.age < 18 || data.age > 65) {
    return false;
  }
  if (data.income < 25000) {
    return false;
  }
  if (data.score < 600) { // credit score
    return false;
  }
  return true;
}
