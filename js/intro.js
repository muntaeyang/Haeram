// 인트로2 순차
 const fadeEls = document.querySelectorAll('.intro_second .fade-in');
 fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .7,
    opacity: 1,
   });
 });


// 인트로3,4 스크롤 및 순차
const peopleEl = document.querySelectorAll('.intro_third .peopleimg_container');
const managementextEl = document.querySelectorAll('.intro_fourth .management_of');

 window.addEventListener('scroll', _.throttle(function(){
   console.log(window.scrollY);
   if (window.scrollY > 1600 ) {
     gsap.to(peopleEl, 1.5, {
       opacity : 1,
       display: 'block'
     })
   } 
 }, 200));

window.addEventListener('scroll', _.throttle(function(){
   if (window.scrollY > 2620) {
     gsap.to(managementextEl, .8, {
       opacity : 1,
       display : 'display'
     });
   } 
  }, 200));