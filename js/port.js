 // 포트1 섹션 슬라이드
 new Swiper('.port_first .swiper-container', {
  slidesPerview: 1,
  centerdSlides: true,
  loop: true,
  autoplay:{
    delay: 2000
  },
  navigation: {
    prevEl: '.port_first .swiper-prev',
    nextEl: '.port_first .swiper-next'
  }
});

// const categoryname = document.querySelectorAll(".category .categoryname");
// categoryname.forEach(element => {

// });

// 포트폴리오 화면 전환
const category1 = document.querySelector(".category .category1");
const category2 = document.querySelector(".category .category2");
const category3 = document.querySelector(".category .category3");
const category4 = document.querySelector(".category .category4");

const homepage = document.querySelector(".portpolio__items .homepage");
const mobileapp = document.querySelector(".portpolio__items .mobileapp");
const webprogram = document.querySelector(".portpolio__items .webprogram");
const others = document.querySelector(".portpolio__items .others");
  
category1.addEventListener("click", function() {
  if (homepage.style.display = "flex") {
      mobileapp.style.display = "none";
      webprogram.style.display = "none";
      others.style.display = "none";
  } 
});

category2.addEventListener("click", function() {
  if (mobileapp.style.display = "flex") {
      homepage.style.display = "none";
      webprogram.style.display = "none";
      others.style.display = "none";
  } 
});

category3.addEventListener("click", function() {
  if (webprogram.style.display = "flex") {
      homepage.style.display = "none";
      mobileapp.style.display = "none";
      others.style.display = "none";
  } 
});

category4.addEventListener("click", function() {
  if (others.style.display = "flex") {
      homepage.style.display = "none";
      mobileapp.style.display = "none";
      webprogram.style.display = "none";
  } 
});