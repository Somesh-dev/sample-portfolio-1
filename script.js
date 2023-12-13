gsap.to("#nav", {
     backgroundColor: "#000",
     duration: 0.5,
     height: "85px",
     scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: false,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
     }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroll: "body",
        markers: false,
        start: "top -25%",
        end: "top -80%",
        scrub: 2
    }
});

document.addEventListener("mousemove", function(e) {
    document.querySelector('#cursor').style.left = e.x - 6 + "px";
    document.querySelector('#cursor').style.top = e.y - 6 + "px";

    document.querySelector('#cursor_blur').style.left = e.x - 150 + "px";
    document.querySelector('#cursor_blur').style.top = e.y - 150 + "px";
});

/* let navH4All = document.querySelectorAll('#nav h4');

navH4All.forEach((e) => {
    e.addEventListener('mouseenter', function(event){
        document.querySelector('#cursor').style.scale = 3;
        document.querySelector('#cursor').style.border = "0.1px solid #fff";
        document.querySelector('#cursor').style.backgroundColor = "transparent";
    });
}); */

gsap.from("#about img, #about-in", {
    y: 90,
    opacity:0,
    duration: 1,
    scrollTrigger:{
        trigger: "#about",
        scroll: "body",
        markers: false,
        start: "top 60%",
        end: "top 55%",
        scrub: 2
    }
});

gsap.from(".card", {
    scale: 0.8,
    opacity:0,
    duration: 1,
    scrollTrigger:{
        trigger: ".card",
        scroll: "body",
        markers: false,
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
});

gsap.from("#colon-1", {
    x: -70,
    y: -70,
    opacity:0,
    scrollTrigger:{
        trigger: "#colon-1",
        scroll: "body",
        markers: false,
        start: "top 55%",
        end: "top 45%",
        scrub: 1
    }
});

gsap.from("#colon-2", {
    x: 70,
    y: 70,
    opacity:0,
    scrollTrigger:{
        trigger: "#colon-1",
        scroll: "body",
        markers: false,
        start: "top 55%",
        end: "top 45%",
        scrub: 1
    }
});

gsap.from("#page4 h1", {
    y: 30,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroll: "body",
        markers: false,
        start: "top 90%",
        end: "top 75%",
        scrub: 1
    }
});