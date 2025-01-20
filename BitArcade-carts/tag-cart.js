const indiePixelTags = [
    "Pixel Art",
    "8-Bit",
    "16-Bit",
    "Retro Aesthetic",
    "Pixel Graphics",
    "Old-School Games",
    "Classic Games",
    "Arcade Games",
    "Metroidvania",
    "Action-Adventure",
    "Roguelike",
    "Turn-Based RPG",
    "Dungeon Crawler",
    "Chiptune Soundtrack",
    "2D Pixel Platformer",
    "Retro Futuristic",
    "Fantasy Pixel World",
    "Cyberpunk Pixel Art",
    "Pixel Shooter",
    "Pixel Horror",
    "Procedural Generation",
    "Pixel RPG Mechanics",
    "Side Scrolling",
    "Pixel Combat",
    "Pixel Sandbox",
];

export function tagGenerator(){
    let innerTag = '';
    const screenWidth = window.innerWidth;
    let numOfTags = 25;

    if(screenWidth > 1200){
        numOfTags = 25;
    }
    else if(screenWidth <= 1200 && screenWidth > 920){
        numOfTags = 20;
    }
    else if(screenWidth <= 920 && screenWidth > 720){
        numOfTags = 15;
    }
    else if(screenWidth <= 720 && screenWidth > 550){
        numOfTags = 20;
    }
    else if(screenWidth <=550 && screenWidth >350){
        numOfTags = 15;
    }
    else{
        numOfTags = 12;
    }

    indiePixelTags.slice(0,numOfTags).forEach((item)=>{
        innerTag += `
        <div class="realms">${item}</div>
        `;
    });
    document.querySelector(".tags").innerHTML = innerTag;

  tagClicked();

}

export function tagClicked(){
    let tagItem = document.querySelectorAll(".realms");
    let clicked = false;

    tagItem.forEach((tag)=>{
        tag.addEventListener('click',()=>{
            if(!clicked){
                clicked = true;
                console.log("clicked");
                tag.classList.add('clicked');
            }
            else{
                clicked = false;
                tag.classList.remove('clicked');
            }
        });
    });
}