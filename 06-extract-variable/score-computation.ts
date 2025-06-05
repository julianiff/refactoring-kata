export interface Player {
  name: string;
  kills: number;
  assists: number;
  deaths: number;
  gameTime: number; // in seconds
  objectives: number;
}

export function computeScore(player: Player): number {
  return player.kills * 100 + player.assists * 50 - player.deaths * 25 + 
         (player.gameTime > 1800 ? 500 : 0) + 
         (player.objectives * 200);
}
