export const modifyScore = (score: string) => {
  return parseFloat(score).toFixed(1);
};

export const highlightScore = (score: string) => {
  return parseInt(score) >= 8.5;
};
