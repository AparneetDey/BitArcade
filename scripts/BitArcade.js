import { trendSection , trendDetail } from "../BitArcade-carts/trend-cart.js";
import { tagGenerator , tagClicked } from "../BitArcade-carts/tag-cart.js";
import { gamesHtml , gameScroll } from "../BitArcade-carts/games-cart.js";


trendSection();
trendDetail();
gameScroll();
screenResizing();


function screenResizing(){
  tagGenerator();
  // tagClicked();
  gamesHtml();
  window.addEventListener('resize',tagGenerator);
  window.addEventListener('resize',gamesHtml);

  window.addEventListener('resize',()=>{
    let screenWidth = window.innerWidth;
    const searchIcon = document.querySelector('.right-head .fa-magnifying-glass');
    const icons = document.querySelectorAll('.right-foot i');

    if(screenWidth <= 720){
      searchIcon.style.display = "flex";
      icons.forEach((item)=>{
        item.classList.remove('fa-xl');
        item.classList.add('fa-l');
      })
    }
    else{
      searchIcon.style.display = "none";
      icons.forEach((item)=>{
        item.classList.remove('fa-l');
        item.classList.add('fa-xl');
      })
    }
  })
}
// tagClicked();

document.querySelector(".clear-button").addEventListener("click", () =>{
  let input = document.getElementById("search-section");
  input.value = '';
  input.focus();
});


const signUp = document.querySelector(".sign-up-js");
const signIn = document.querySelector(".sign-in-js");

//sign up window
document.querySelectorAll(".show-popup").forEach(button => {
   button.addEventListener("click", function() {
    signUp.classList.add('active');
    document.querySelector('.backdrop').style.display = 'block';
    document.body.style.overflow = 'hidden';
  })
});

//sign in window
document.querySelector(".form-element .sign-in").addEventListener("click",() => {
  signUp.classList.remove('active');
  signIn.classList.add('active');
  document.querySelector('.backdrop').style.display = 'block';
  document.body.style.overflow = 'hidden';
});
document.querySelector(".form-element .sign-up").addEventListener("click",() => {
  signIn.classList.remove('active');
  signUp.classList.add('active');
  document.querySelector('.backdrop').style.display = 'block';
  document.body.style.overflow = 'hidden';
});

//close pop up window
document.querySelectorAll(".pop-up .close-button").forEach(cross => {
  cross.addEventListener("click", () => {
    if (signUp.classList.contains("active")){
      signUp.classList.remove("active");
    }else if(signIn.classList.contains("active")){
      signIn.classList.remove("active");
    }
    document.querySelector('.backdrop').style.display = 'none';
    document.body.style.overflow = '';
  });
});





