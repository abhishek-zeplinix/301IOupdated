gsap.registerPlugin(ScrollTrigger);

// Array for Fade With Scrub animations
let fadeSrubAnimations = [
    { class: ".fade-up-1", y: 50, delay: 0.1, markers: false },
    { class: "#products", y: 50, delay: 0.1, markers: false },
    { class: "#blogs", y: 50, delay: 0.1, markers: false },
    { class: "footer", y: 50, delay: 0.1, markers: false },
];

fadeSrubAnimations.forEach(({ class: selector, x, y, delay, start, end, markers }) => {
    gsap.fromTo(
        selector,
        { x: x || 0, y: y || 0, opacity: 0 }, // Only apply x/y if defined; default to 0 if not
        {
            x: x !== undefined ? 0 : undefined,
            y: y !== undefined ? 0 : undefined,
            opacity: 1,
            duration: 0.2,
            ease: "power3.out",
            delay: delay,
            scrollTrigger: {
                trigger: selector,
                start: start || "top 80%",
                end: end || "top 20%",
                scrub: true,
                markers: markers || false,
            },
        }
    );
});

// Array for fade Inside animations
let fadeInAnimations = [
    { class: "#schedule", x: -200, delay: 0.5, markers: false },
    { class: "#partners", x: -200, delay: 0.5, markers: false },
    { class: "h2", y: 20, duration: 1, delay: 0.2, start: "top 70%", markers: false },
];

fadeInAnimations.forEach(({ class: selector, x, y, duration, delay, start, end, markers }) => {
    gsap.from(selector, {
        opacity: 0,
        x: x || undefined,
        y: y || undefined,
        duration: duration || 0.5,
        delay: delay,
        scrollTrigger: {
            trigger: selector,
            scroller: "body",
            start: start || "top 70%",
            end: end || "top 20%",
            markers: markers || false,
        },
    });
});

// // Array for Scale animations
let scaleAnimations = [
    { class: "header", y: 100, delay: 0.5, markers: false },
    { class: "#strengths", y: 100, delay: 0.5, markers: false },
    { class: "#industries", y: 100, delay: 0.5, markers: false },
    { class: "#contactUs", y: 100, delay: 0.5, markers: false },

];

scaleAnimations.forEach(({ class: selector, x, y, delay, start, end, markers }) => {
    gsap.from(selector, {
        opacity: 0,
        scale: 0.5,
        x: x || undefined,
        y: y || undefined,
        duration: 0.5,
        delay: delay,
        scrollTrigger: {
            trigger: selector,
            scroller: "body",
            start: start || "top 80%",
            end: end || "top 20%",
            markers: markers || false,
        },
    });
});


