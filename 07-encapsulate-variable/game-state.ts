// Global game state
export let playerScore = 0;
export let playerLives = 3;
export let currentLevel = 1;

export function updateScore(points: number): void {
  playerScore += points;
  if (playerScore > 1000 * currentLevel) {
    currentLevel++;
    console.log(`Level up! Now on level ${currentLevel}`);
  }
}

export function loseLife(): void {
  playerLives--;
  if (playerLives <= 0) {
    console.log('Game Over!');
  }
}

export function resetGame(): void {
  playerScore = 0;
  playerLives = 3;
  currentLevel = 1;
}
