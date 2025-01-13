const trendingGames = [
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
  {
    gameImg: "https://image.api.playstation.com/cdn/EP2120/CUSA11235_00/QIi3jKznLkAGV7iXnMhVMOw1F9tROkIC.jpg", 
    trendNo: "4",
    gameIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Celeste_video_game_logo.png/2545px-Celeste_video_game_logo.png",
    gameName: "Celeste",
    gameTag: {
      first: "Platformer",
      second: "Story-driven"
    },
  },
  {
    gameImg: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51", 
    trendNo: "5",
    gameIcon: "https://cdn2.steamgriddb.com/icon/602d1305678a8d5fdb372271e980da6a.ico",
    gameName: "Hollow Knight",
    gameTag: {
      first: "Metroidvania",
      second: "Action"
    },
  }
];


export function trendSection(){
  let innerTrend = '';
  trendingGames.forEach((trend) => {
    innerTrend +=`
    <div class="game">
      <img class="background" src=${trend.gameImg}>
      <div class="trend-no"><span>&#35;${trend.trendNo}</span></div>
      <img class="icon" src=${trend.gameIcon}>
      <a class="name">${trend.gameName}</a>
      <div class="tag">
        <div>${trend.gameTag.first}</div>
        <div>${trend.gameTag.second}</div>
      </div>
    </div>
    `
  });

  document.querySelector('.trend').innerHTML = innerTrend;
};

export function trendDetail(){
  let trendItem = document.querySelectorAll(".game");
  trendItem.forEach((item)=>{
    item.addEventListener('mouseover',()=>{
      item.classList.add('hovered');    //Expanding hover item
      trendItem.forEach((item)=>{
        if(!item.classList.contains("hovered")){
          item.classList.add('not-hovered');    //Blurring other items
        }
      });
      document.querySelector('.trend').classList.add('black-background');
    })
    item.addEventListener('mouseout',()=>{
      item.classList.remove('hovered');   //Shrinking item
      trendItem.forEach((item)=>{
        if(item.classList.contains("not-hovered")){
          item.classList.remove('not-hovered');   //Removing blur
        }
      });
      document.querySelector('.trend').classList.remove('black-background');
    })
  });
};
