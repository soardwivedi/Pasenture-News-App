const getRandomElements = (arr, num) => {
  return arr.sort(() => 0.5 - Math.random()).slice(0, num);
};

export { getRandomElements };
