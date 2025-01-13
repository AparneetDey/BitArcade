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
    indiePixelTags.forEach((item)=>{
        innerTag += `
        <div class="realms">${item}</div>
        `;
    });
    document.querySelector(".tags").innerHTML = innerTag;
}

export function tagClicked(){
    let tagItem = document.querySelectorAll(".realms");
    let clicked = false;

    tagItem.forEach((tag)=>{
        tag.addEventListener('click',()=>{
            if(!clicked){
                clicked = true;
                tag.classList.add('clicked');
            }
            else{
                clicked = false;
                tag.classList.remove('clicked');
            }
        });
    });
}