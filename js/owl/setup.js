$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:8
        }
    }
})

function playAudio(url) {
    new Audio(url).play();
  }

let play = function(){
    document.getElementById("audio").play()
}



