export const candleData = [
  {x: 1, open: 9, close: 30, high: 56, low: 7},
  {x: 2, open: 80, close: 40, high: 120, low: 10},
  {x: 3, open: 50, close: 80, high: 90, low: 20},
  {x: 4, open: 70, close: 22, high: 70, low: 5},
  {x: 5, open: 20, close: 35, high: 50, low: 10},
  {x: 6, open: 35, close: 30, high: 40, low: 3},
  {x: 7, open: 30, close: 90, high: 95, low: 30},
  {x: 8, open: 80, close: 81, high: 83, low: 75}
];

export const random = (a, b) => Math.floor(Math.random() * b) + a;
export const range = (a, b) => Array.from(Array(b), (_, i) => a + i);

export const getYFunction = () => {
  const n = random(2, 7);
  return (data) => Math.exp(-n * data.x) * Math.sin(2 * n * Math.PI * data.x);
}

export const generateRandomData = () => {
  return range(1, 7).map(() => ({x: " ", y: random(1, 10)}));
}

export const getTransitionData = () => {
  const n = random(4, 10)
    return range(n).map((i) => {
      return {
        x: i,
        y: random(2, 10)
      };
    });
}

export const getStyles = () => {
  const colors = [
    "red", "orange", "magenta",
    "gold", "blue", "purple"
  ];
  return {
    stroke: colors[random(0, 5)],
    strokeWidth: random(1,5),
  };
}
