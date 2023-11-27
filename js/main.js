// 이미지 딜레이
   const textEls = document.querySelectorAll('.introduce .fade-in');
   textEls.forEach(function (textEl, index) {
    gsap.to(textEl, 1, {
      delay: (index+1) * .7,
      opacity: 1,
     });
   });

   const fadeEls = document.querySelectorAll('.intro_second .fade-in');
   fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
      delay: (index+1) * .7,
      opacity: 1,
     });
   });

// btn 클릭하면 스크롤 이동
function fnMove(seq){
  var offset = $("#page" + seq).offset();
  $('html, body').animate({scrollTop : offset.top}, 400);
}

// btn 클릭하면 class추가
$(document).on("click", "input", function(e) {
e.preventDefault(); // 기본으로 정의된 이벤트를 작동하지 못하게 하는 메서드
// .siblings() 객체와 동일한 위치에 있는 모든 객체 (자신을 제외한 형제요소)를 검색하는 메소드
$(this).addClass("active").siblings().removeClass("active");

fnMove($(this).data("n"));

});

// 서비스 섹션 슬라이드
new Swiper('.service .swiper-container', {
  slidesPerview: 1,
  centerdSlides: true,
  loop: true,
  autoplay:{
    delay: 2000
  },
  navigation: {
    prevEl: '.service .swiper-prev',
    nextEl: '.service .swiper-next'
  }
});
