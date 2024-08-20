const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var ProjectsElem = document.querySelector('.Projects')
var fixedDiv = document.querySelector('#fixedDiv')
ProjectsElem.addEventListener('mouseenter', ()=>{
    fixedDiv.style.display = 'block'
})
ProjectsElem.addEventListener('mouseleave', ()=>{
    fixedDiv.style.display = 'none'
})
var img = document.querySelector('.projectBox1')
var a = img.getAttribute("data-image")
console.log(a);

var projectBox =  document.querySelectorAll('.projectBox')
projectBox.forEach(function(e){
    e.addEventListener('mouseenter', function(){
        var image = e.getAttribute('data-image')
        fixedDiv.style.backgroundImage = `url(${image})`
        console.log(image);
        
    })
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
  });


var menu = document.querySelector("nav h3")
 var fullScr =  document.querySelector(".fullScr")
 var navImg = document.querySelector("nav img")
 var count = 0
  menu.addEventListener('click', function(){
    if(count == 1){
        fullScr.style.top = 0
        navImg.style.opacity = 0
        count = 1
    }else{
        fullScr.style.top = "-100%"
        navImg.style.opacity = 1
        count = 0
    }
  })