export const generateId = () => Math.floor(Math.random() * Math.floor(10000));

export function isNumeric(str: string): boolean {
  if (typeof str != "string") return false;
  return !isNaN(str as unknown as number) && !isNaN(parseFloat(str));
}
