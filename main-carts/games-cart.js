export const gamesCart=[
  {
    gameImg: "Images/game-4.jpg",
    gameName: "Shovel Knight"
  },
  {
    gameImg: "Images/game-5.jpg",
    gameName: "Hollow Knight"
  },
  {
    gameImg: "Images/game-6.jpg",
    gameName: "Axiom Verge"
  },
  {
    gameImg: "Images/game-7.jpg",
    gameName: "Undertale"
  },
  {
    gameImg: "Images/game-8.jpg",
    gameName: "Stardew Valley"
  },
  {
    gameImg: "Images/game-9.jpg",
    gameName: "Doom"
  },
  {
    gameImg: "Images/game-10.jpg",
    gameName: "Diablo II"
  },
  {
    gameImg: "Images/game-11.jpg",
    gameName: "Mega Man X"
  },
  {
    gameImg: "Images/game-12.jpg",
    gameName: "Slay the Spire"
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

