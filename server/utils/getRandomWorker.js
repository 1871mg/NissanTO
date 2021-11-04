const getRandomWorker = (workers) => {
  const randomNumber = Math.floor(Math.random() * workers.length);
  return workers[randomNumber];
}

module.exports = getRandomWorker;
