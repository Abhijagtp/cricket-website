var crsr = document.querySelector(".cursor");
var crsrblur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    crsrblur.style.left = dets.x  - 100 + "px"
    crsrblur.style.top = dets.y - 100 + "px"


})
 var h4 = document.querySelectorAll(".nav h4")
 h4.forEach(function(elem){
    elem.addEventListener("mouseenter",()=>{
        crsr.style.scale = 2
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor= "transparent"
    })
    elem.addEventListener("mouseleave",()=>{
        crsr.style.scale = 1
        crsr.style.border = "1px solid greenyellow"
        crsr.style.backgroundColor= "greenyellow"
    })
 })



gsap.to(".nav",{
    backgroundColor:"#000",
    height:"90px",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -40%",
        end:"top -100%",
        scrub:1
    }
})

gsap.from(".ab-me img ,.abtus",{
    y:50,
    opacity:0,
    duration:1,

    scrollTrigger :{
        trigger:".ab-me",
        scroll:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:1



    }
 }

 )

 gsap.from(".card",{
    scale:0.6,
    duration:1,
    stagger:1,
    scrollTrigger :{
        trigger:".card",
        scroll:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:1



    }
 }

 )
 gsap.from(".league h1",{
    y:50,
    duration:1,
    scrollTrigger :{
        trigger:".league h1",
        scroll:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3

    }
 }

 )