const categoryCart = [
  "Arcade Classics",
  "Platformers",
  "RPGs",
  "Metrodvania",
  "Fighting",
  "Adventure",
  "Roguelike",
  "Rhythm",
  "Simulation",
]

//Genre slider
export function genreSlider(){
  let innerTag='';
  categoryCart.forEach((tag) => {
    innerTag += `
    <div class="categories">${tag}</div>
    `;
  });

  document.querySelector('.tag-slide-show').innerHTML = innerTag;

}
