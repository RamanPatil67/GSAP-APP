var initial = `M 40 100 Q 500 100 1150 100`;

var string = document.querySelector("#string");
var curser = document.querySelector("#cursor")

string.addEventListener("mousemove", function (dets) {
  path = `M 40 100 Q ${dets.x} ${dets.y} 1150 100`;
  console.log(dets.y);

  gsap.to(curser,{
    x:dets.x,
    y:dets.y,
    ease:"back.out"
  })

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: initial },
    duration:0.5,
    ease:"elastic(2,0,2)"
  });
});

function breakTheText(){
  var h2 = document.querySelector("#nav h2")
  var h2text = h2.textContent
  var splith2 = h2text.split('')
  var newtext = ""
  
  splith2.forEach(function(elem){
    newtext += `<span>${elem}<span/>`
  })
  h2.innerHTML = newtext
}

breakTheText()

gsap.from("#nav h2 span",{
  y:-70,
  opacity:0,
  duration:1,
  repeat:-1,
  stagger:0.24
})

gsap.from("#services h2",{
  y:-40,
  opacity:0,
  duration:1,
  stagger:0.5
})

gsap.from("#nav i",{
  y:-40,
  opacity:0,
  duration:1,
})

var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")
var tl = gsap.timeline();

tl.to("#full",{
  right:"0",
  duration:1
})

tl.from("#full h4",{
  x:250,
  stagger:0.3,
  duration:0.9,
  opacity:0
})

tl.pause()

menu.addEventListener("click",function(){
  tl.play()
})

cross.addEventListener("click",function(){
  tl.reverse()
})

window.addEventListener("wheel", function(det){
  if(det.deltaY > 0){

    gsap.to(".move",{
      transform:"translateX(-200%)",
      repeat:-1,
      duration:4,
      ease:"none"
    })

    gsap.to(".move img",{
      rotate:180,
    })

  }else{
    gsap.to(".move",{
      transform:"translateX(0%)",
      repeat:-1,
      duration:4,
      ease:"none"
    })

    gsap.to(".move img",{
      rotate:0,
    })
  }
})