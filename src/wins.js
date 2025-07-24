const fetchRandomWin = async (winsArray) => {
  return winsArray[Math.floor(Math.random() * winsArray.length)];
};

const displayWinsQuoteWall = (winsArray) => {
  const quoteWallElement = document.getElementById('quote-wall');
  let currentWinIndex = 0;

  setInterval(async () => {
    const win = await fetchRandomWin(winsArray);
    quoteWallElement.innerHTML = `<p>${win}</p>`;
    quoteWallElement.classList.add('fade-in');
    setTimeout(() => {
      quoteWallElement.classList.remove('fade-in');
    }, 1000);
  }, 10000); // Change quote every 10 seconds
};

module.exports = { displayWinsQuoteWall };
