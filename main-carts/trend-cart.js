const trendCart = [
  {
    gameImg: "https://hb.imgix.net/b7c65e77a5f126a1024a8459ec0fd08f879860f1.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=993b7e1d9df1e22a531675612b644e59", 
    trendNo: "1",
    gameIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCDuTnwyD9KcN-n1cx2Xs7cACz5JDU6RlzSQ&s",
    gameName: "Terraria",
    gameTag: {
      first: "Action",
      second: "Survival"
    },
  },
  {
    gameImg: "https://images6.alphacoders.com/127/1274381.jpg", 
    trendNo: "2",
    gameIcon: "https://img2.storyblok.com/fit-in/600x600/filters:format(png):quality(60)/f/93161/1534x1145/81d7575864/dig-logo.png",
    gameName: "Shovel Knight Dig",
    gameTag: {
      first: "Platformer",
      second: "Adventure"
    },
  },
  {
    gameImg: "https://store-images.s-microsoft.com/image/apps.23383.14093828725404571.e8c4fd85-da7e-4c33-9a85-c97c9f3eeb38.d4808fda-8607-464f-91cf-a9228cda620e", 
    trendNo: "3",
    gameIcon: "https://cdn2.steamgriddb.com/icon/851300ee84c2b80ed40f51ed26d866fc/32/192x192.png",
    gameName: "Hades",
    gameTag: {
      first: "Roguelike",
      second: "Action"
    },
  },
];

//trend section
export function trendSection(){
  let innerTrend = '';
  trendCart.forEach((trend) => {
    innerTrend +=`
    <div class="trend-game swiper-slide">
      <img class="game-background" src=${trend.gameImg}>
      <div class="trend-no"><span>&#35;${trend.trendNo}</span></div>
      <img class="game-icon" src=${trend.gameIcon}>
      <a class="game-name">${trend.gameName}</a>
      <div class="game-tags">
        <div>${trend.gameTag.first}</div>
        <div>${trend.gameTag.second}</div>
      </div>
    </div>
    `
  });

  document.querySelector('.trend-container').innerHTML = innerTrend;
}