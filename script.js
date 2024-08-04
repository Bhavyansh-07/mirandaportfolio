const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var tl = gsap.timeline()
tl.to(".gsap", {
    y: "100vh",
    scale: 0.6,
    duration: 0,
})
tl.to("gsap", {
    y: "20vh",
    duration: 1,
    delay: 0,
})
tl.to(".gsap", {
    y: "0vh",
    rotate: -360,
    scale: 1,
    duration: 0.5,
})