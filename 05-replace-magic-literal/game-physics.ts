export class GameObject {
  position: { x: number; y: number } = { x: 0, y: 0 };
  velocity: { x: number; y: number } = { x: 0, y: 0 };
  health: number = 100;
  active: boolean = true;
  
  update(): void {
    this.velocity.y += 9.81; // gravity
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    
    if (this.position.y > 600) { // ground level
      this.position.y = 600;
      this.velocity.y = 0;
    }
    
    if (this.health <= 0) {
      this.active = false;
    }
  }
}
