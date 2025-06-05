export interface Animal {
  type: 'dog' | 'cat' | 'cow' | 'bird';
  name: string;
}

export function makeSound(animal: Animal): string {
  switch(animal.type) {
    case 'dog':
      return 'Woof!';
    case 'cat':
      return 'Meow!';
    case 'cow':
      return 'Moo!';
    case 'bird':
      return 'Tweet!';
    default:
      return 'Unknown sound';
  }
}
