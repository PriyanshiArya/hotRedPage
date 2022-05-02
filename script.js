gsap.from(".a",{
    stagger:.2,
    y:50,
    opacity:0,  
    duration:1,
    ease:Expo.easeInOut

})
gsap.from(".b",{
    stagger:.2,
    x:-50,
    opacity:0,  
    duration:.7,
    ease:Expo.easeInOut
})