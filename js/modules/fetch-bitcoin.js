export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJSON = await bitcoinResponse.json();
      const bitCoinSpan = document.querySelector(".btc-preco");
      bitCoinSpan.innerText = (1000 / bitcoinJSON.BRL.sell).toFixed(3);
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchBitcoin("https://blockchain.info/ticker");
}
