import { genreSlider } from "../main-carts/categories-cart.js";
import { trendSection } from "../main-carts/trend-cart.js";
import { gameSection } from "../main-carts/games-cart.js";

genreSlider();

trendSection();

function iconsUpdate(){
  let iconsCart = document.querySelectorAll(".right-foot i");
  const screenSize = window.innerWidth;

  iconsCart.forEach((item)=>{
    if(screenSize <= 720){
      item.classList.remove('fa-xl');
      item.classList.add('fa-l');
    }
    else{
      item.classList.remove('fa-l');
      item.classList.add('fa-xl');
    }
  })
}

function updateOnResize(){
  gameSection();
  iconsUpdate();
  window.addEventListener('resize', gameSection);
  window.addEventListener('resize', iconsUpdate);
}

updateOnResize();

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

