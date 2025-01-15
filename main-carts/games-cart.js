export const gamesCart=[
  {
    gameImg: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51",
    gameName: "Hollow Knight"
  },
  {
    gameImg: "https://image.api.playstation.com/cdn/EP2120/CUSA11235_00/QIi3jKznLkAGV7iXnMhVMOw1F9tROkIC.jpg",
    gameName: "Celeste"
  },
  {
    gameImg: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg?t=1711128146",
    gameName: "Stardew Valley"
  },
  {
    gameImg: "https://store-images.s-microsoft.com/image/apps.23383.14093828725404571.e8c4fd85-da7e-4c33-9a85-c97c9f3eeb38.d4808fda-8607-464f-91cf-a9228cda620e",
    gameName: "Hades"
  },
  {
    gameImg: "https://assets1.ignimgs.com/thumbs/userUploaded/2018/8/2/img3281-1533234001155.jpg",
    gameName: "Dead Cells"
  },
  {
    gameImg: "https://assetsio.gnwcdn.com/-1576662110318.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    gameName: "Slay the Spire"
  },
  {
    gameImg: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000016330/d94d2186ef03c930392253c83c84af0c73b7e57cd902a526b09b4155a25930fe",
    gameName: "Cuphead"
  },
  {
    gameImg: "https://i.ytimg.com/vi/G8dGyXzqtCo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAZNFtKsYsHtiLSN8tuPGcjxze5vw",
    gameName: "The Messenger"
  },
  {
    gameImg: "https://assets1.ignimgs.com/2018/02/28/intothebreach-blogroll2-1519802105884_160w.jpg?width=1280",
    gameName: "Into the Breach"
  },
]

//Game section
export function gameSection(){
  let innerGame = ''
  gamesCart.forEach((game) => {
    innerGame += `
    <div class="game">
      <img src=${game.gameImg}>
      <div>${game.gameName}</div>
    </div>
    `
  });

  document.querySelector('.game-container').innerHTML = innerGame;
}

