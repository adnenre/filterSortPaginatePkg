interface RandomNumber {
  min: number;
  max: number;
}
export const randomInt = ({ min, max }: RandomNumber): number => {
  if (min === max) return max;
  return Math.floor(Math.random() * (max - min + 1) + min);
};
