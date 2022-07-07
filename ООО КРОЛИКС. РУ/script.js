let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})

/* Меняем гамбургер иконку, когда меню открыто */
.menu-btn.active span:nth-of-type(1) {
    display: none;
  }
  .menu-btn.active span:nth-of-type(2) {
    top: 50%;
    transform: translate(-50%, 0%) rotate(45deg);  
  }
  .menu-btn.active span:nth-of-type(3) {
    top: 50%;
    transform: translate(-50%, 0%) rotate(-45deg); 
  }

  let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})