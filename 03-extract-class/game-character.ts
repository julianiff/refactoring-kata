export class Character {
  name: string;
  health: number = 100;
  mana: number = 50;
  strength: number = 10;
  defense: number = 5;
  inventoryItems: Array<{name: string; weight: number}> = [];
  inventoryCapacity: number = 20;
  equippedWeapon: {name: string; damage: number} | null = null;
  equippedArmor: {name: string; defense: number} | null = null;
  
  constructor(name: string) {
    this.name = name;
  }
  
  attack(target: Character): void {
    const damage = this.strength + (this.equippedWeapon?.damage || 0);
    target.takeDamage(damage);
  }
  
  takeDamage(amount: number): void {
    const actualDamage = Math.max(0, amount - this.defense - (this.equippedArmor?.defense || 0));
    this.health -= actualDamage;
  }
  
  addToInventory(item: {name: string; weight: number}): boolean {
    const currentWeight = this.inventoryItems.reduce((sum, i) => sum + i.weight, 0);
    if (currentWeight + item.weight <= this.inventoryCapacity) {
      this.inventoryItems.push(item);
      return true;
    }
    return false;
  }
  
  equipItem(item: {name: string; damage?: number; defense?: number}): void {
    if (item.damage !== undefined) {
      this.equippedWeapon = {name: item.name, damage: item.damage};
    }
    if (item.defense !== undefined) {
      this.equippedArmor = {name: item.name, defense: item.defense};
    }
  }
}
