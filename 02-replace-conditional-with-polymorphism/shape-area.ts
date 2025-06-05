export interface Shape {
  type: 'circle' | 'rectangle' | 'triangle';
}

export interface Circle extends Shape {
  type: 'circle';
  radius: number;
}

export interface Rectangle extends Shape {
  type: 'rectangle';
  width: number;
  height: number;
}

export interface Triangle extends Shape {
  type: 'triangle';
  base: number;
  height: number;
}

export type ShapeUnion = Circle | Rectangle | Triangle;

export function calculateArea(shape: ShapeUnion): number {
  if (shape.type === 'circle') {
    return Math.PI * shape.radius * shape.radius;
  } else if (shape.type === 'rectangle') {
    return shape.width * shape.height;
  } else if (shape.type === 'triangle') {
    return 0.5 * shape.base * shape.height;
  }
  throw new Error('Unknown shape type');
}
