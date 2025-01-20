const newIndie = [
  {
    name: "Pepper Grinder",
    imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2076580/capsule_616x353.jpg?t=1728951730"
  },
  {
    name: "Cassette Beasts",
    imageUrl: "https://assetsio.gnwcdn.com/cassette-beasts-key-art.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
  },
  {
    name: "Tiny Thor",
    imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/541310/capsule_616x353.jpg?t=1727774558"
  },
  {
    name: "Everdream Valley",
    imageUrl: "https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000064195/cdfdc1f468edd90a5e1a491f6e6ff26d5282b2fd5ad7442fd51ba5a5db789ea6"
  },
  {
    name: "Shadows of Doubt",
    imageUrl: "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/shadows-of-doubt-file-91866c68e.jpeg.webp"
  },
  {
    name: "Elsie",
    imageUrl: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000067924/9c4efab4b82c6271e1d9a2814b746f88bf43e075fa0597d8798fa41194eb68d7"
  },
  {
    name: "Dave the Diver",
    imageUrl: "https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000060372/e77cbe3c83da8de952bce5bc0f0960092dbc2e08d377f0e082673239322301bb"
  },
  {
    name: "Super Fantasy Kingdom",
    imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2289750/95337be82185841a2e72fa7d792664101279c66f/capsule_616x353.jpg?t=1736171746"
  },
  {
    name: "Rogue AI",
    imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1790370/capsule_616x353.jpg?t=1732299016"
  },
  {
    name: "Shovel Knight Dig",
    imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1416050/capsule_616x353.jpg?t=1723577948"
  },
  {
    gameImg: "https://threeheadedblog.wordpress.com/wp-content/uploads/2012/07/super-meat-boy.jpg",
    gameName: "Super Meat Boy"
  },
  {
    gameImg: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/07/bastion.jpg",
    gameName: "Bastion"
  },
  {
    gameImg: "https://techcrunch.com/wp-content/uploads/2022/09/oxenfree-netflix.png?resize=1200,672",
    gameName: "Oxenfree"
  },
  {
    gameImg: "https://indigomusic.com/wp-content/uploads/2024/02/Limbo-cover-image-1024x576.png",
    gameName: "Limbo"
  },
  {
    gameImg: "https://cdn2.unrealengine.com/ar758-3840x2160-64466f984bef.png",
    gameName: "Risk of Rain 2"
  },
  {
    gameImg: "https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2013/11/20/1331621160494_2/hyper-light-drifter-retro-is-back",
    gameName: "Hyper Light Drifter"
  },
];

const recommendedGames = [
  {
    gameImg: "https://hb.imgix.net/b7c65e77a5f126a1024a8459ec0fd08f879860f1.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=993b7e1d9df1e22a531675612b644e59",
    gameName: "Terraria",
  },
  {
    gameImg: "https://assets1.ignimgs.com/thumbs/userUploaded/2016/1/8/undertale11280-1452305603339.jpg",
    gameName: "Undertale",
  },
  {
    gameImg: "https://assetsio.gnwcdn.com/Katana-Zero-Header-02.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    gameName: "Katana Zero",
  },
  {
    gameImg: "https://image.api.playstation.com/cdn/EP2120/CUSA11235_00/QIi3jKznLkAGV7iXnMhVMOw1F9tROkIC.jpg",
    gameName: "Celeste",
  },
  {
    gameImg: "https://image.api.playstation.com/vulcan/ap/rnd/202109/2601/8Fx5QRBdN7iPGlFMNTP10fYs.png",
    gameName: "Death's Door",
  },
  {
    gameImg: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51",
    gameName: "Hollow Knight",
  },
  {
    gameImg: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000016330/d94d2186ef03c930392253c83c84af0c73b7e57cd902a526b09b4155a25930fe",
    gameName: "Cuphead",
  },
  {
    gameImg: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg?t=1711128146",
    gameName: "Stardew Valley",
  },
  {
    gameImg: "https://store-images.s-microsoft.com/image/apps.2884.13932426078429747.3e93ffd3-45ac-4f46-825c-e742038af698.f1ec73cb-4509-4e8e-a6a9-23b7be762f8c?q=90&w=480&h=270",
    gameName: "CrossCode",
  },
  {
    gameImg: "https://i.ytimg.com/vi/JGWHXWFJyP4/maxresdefault.jpg",
    gameName: "Superbrothers: Sword & Sworcery EP",
  },
  {
    gameImg: "https://i.ytimg.com/vi/G8dGyXzqtCo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAZNFtKsYsHtiLSN8tuPGcjxze5vw",
    gameName: "The Messenger",
  },
  {
    gameImg: "https://gaming-cdn.com/images/products/5415/616x353/don-t-starve-together-pc-mac-game-steam-cover.jpg?v=1710762386",
    gameName: "Don't Starve Together",
  },
  {
    gameImg: "https://techcrunch.com/wp-content/uploads/2022/09/oxenfree-netflix.png?resize=1200,672",
    gameName: "Oxenfree",
  },
  {
    gameImg: "https://assets.altarofgaming.com/wp-content/uploads/2022/10/braid-game-cover-altar-of-gaming.jpg",
    gameName: "Braid",
  },
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
    gameImg: "https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2013/11/20/1331621160494_2/hyper-light-drifter-retro-is-back",
    gameName: "Hyper Light Drifter"
  },
  {
    gameImg: "https://assetsio.gnwcdn.com/Katana-Zero-Header-02.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    gameName: "Katana ZERO"
  },
  {
    gameImg: "https://images.alphacoders.com/619/619381.jpg",
    gameName: "Axiom Verge"
  },
  {
    gameImg: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13621373/ss_631d99cc6462cce94081032b7e600a6b87c3f7d3.jpg?quality=90&strip=all&crop=0,3.4613147178592,100,93.077370564282",
    gameName: "Gris"
  }
];

const popularGames = [
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
  {
    gameImg: "https://assets1.ignimgs.com/thumbs/userUploaded/2016/4/4/36190303gungeon1280-1459813136564.jpg",
    gameName: "Enter the Gungeon"
  },
  {
    gameImg: "https://wallpapers.com/images/featured/shovel-knight-quaphvvp16hex7mm.jpg",
    gameName: "Shovel Knight"
  },
  {
    gameImg: "https://bitchingamergrl.wordpress.com/wp-content/uploads/2015/06/img_1486.png",
    gameName: "Fez"
  },
  {
    gameImg: "https://threeheadedblog.wordpress.com/wp-content/uploads/2012/07/super-meat-boy.jpg",
    gameName: "Super Meat Boy"
  },
  {
    gameImg: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/07/bastion.jpg",
    gameName: "Bastion"
  },
  {
    gameImg: "https://techcrunch.com/wp-content/uploads/2022/09/oxenfree-netflix.png?resize=1200,672",
    gameName: "Oxenfree"
  },
  {
    gameImg: "https://indigomusic.com/wp-content/uploads/2024/02/Limbo-cover-image-1024x576.png",
    gameName: "Limbo"
  },
  {
    gameImg: "https://cdn2.unrealengine.com/ar758-3840x2160-64466f984bef.png",
    gameName: "Risk of Rain 2"
  },
  {
    gameImg: "https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2013/11/20/1331621160494_2/hyper-light-drifter-retro-is-back",
    gameName: "Hyper Light Drifter"
  },
  {
    gameImg: "https://assetsio.gnwcdn.com/Katana-Zero-Header-02.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    gameName: "Katana ZERO"
  },
  {
    gameImg: "https://images.alphacoders.com/619/619381.jpg",
    gameName: "Axiom Verge"
  },
  {
    gameImg: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13621373/ss_631d99cc6462cce94081032b7e600a6b87c3f7d3.jpg?quality=90&strip=all&crop=0,3.4613147178592,100,93.077370564282",
    gameName: "Gris"
  }
];



export function gamesHtml() {
  //HTML of new games
  let innerNewGames = '';
  newIndie.forEach((game) => {
    innerNewGames += `
        <div class="item swiper-slide">
            <img src=${game.imageUrl}>
            <div>${game.name}</div>
        </div>
        `
  });

  document.getElementById("newGames").innerHTML = innerNewGames;

  //HTML of recommended games
  let innerRecommendedGames = '';
  recommendedGames.forEach((game) => {
    innerRecommendedGames += `
        <div class="item swiper-slide">
            <img src=${game.gameImg}>
            <div>${game.gameName}</div>
        </div>
        `
  });

  document.getElementById("forYouGames").innerHTML = innerRecommendedGames;

  //HTML of popular games
  let innerPopularGames = '';
  const screenWidth = window.innerWidth;
  let numOfPopularGames = 21;

  if(screenWidth <= 1200 && screenWidth > 550){
    numOfPopularGames = 20;
  }
  else{
    numOfPopularGames = 12;
  }

  popularGames.slice(0,numOfPopularGames).forEach((game) => {
    innerPopularGames += `
        <div class="item popularItem">
            <img src=${game.gameImg}>
            <div>${game.gameName}</div>
        </div>
        `
  });

  document.getElementById("popularGames").innerHTML = innerPopularGames;
}

export function gameScroll() {
  const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: true,
    grabCursor: true,
    mousewheel: {
      forceToAxis: true, // Ensures scrolling is horizontal
      sensitivity: 0,
      thresholdDelta: 50, // Minimum delta value before triggering a slide (higher means less responsive)
      thresholdTime: 500,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        loop: true
      },
      550: {
        slidesPerView: 2,
        loop: true
      },
      1200: {
        slidesPerView: 3,
        loop: true
      }
    }
  });
}