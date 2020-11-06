const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const logo = document.querySelector('.logo')
const hamburger = document.querySelector('.hamburger')
const headline = document.querySelector('.headline')

const tl = new TimelineMax();
tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(
        hero,
        1.2,
        { width: '80%' },
        { width: "100%", ease: Power2.easeInOut })
    .fromTo(
        slider,
        1.2,
        { x: "-100%" },
        { x: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(
        logo,
        0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        "-=0.5"
    )
    .fromTo(
        headline,
        1,
        { opacity: 0, y: 0 },
        { opacity: 1, y: 30 },

    )
    ;

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({ loop: true })
    .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 2500,
        delay: (el, i) => 50 * i
    }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 5000,
        easing: "easeOutExpo",
        delay: 100
    });
