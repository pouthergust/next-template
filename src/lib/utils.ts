/**
 * Soma dois números
 */
export function sum(a: number, b: number): number {
  return a + b;
}

/**
 * Multiplica dois números
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Formata um nome para Title Case
 */
export function formatName(name: string): string {
  return name
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
