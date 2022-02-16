
function example1() {
    anime({
        targets: ".square1",
        keyframes: [
            { translateX: -350 },
            { translateX: 0 },

        ],
        duration: 2000,

    });

}
let jsSelector = document.getElementById("square2");
function example2() {
    anime({
        targets: jsSelector,
        keyframes: [
            { translateX: -350 },
            { translateX: 0 },

        ],
        duration: 2000,

    });

}
function example3() {
    anime({
        targets: "#square3",
        keyframes: [
            { translateX: -350, rotate: 270 },
            { translateX: 0, rotate: 0 },

        ],
        duration: 5000,

    });

}
function mainSquare() {
    anime({
        targets: ".pulse",
        keyframes: [
            { translateX: 100, rotate: 180, scale: 1.3 },
            { translateX: 0, rotate: 0, scale: 1 },

        ],
        loop: true,
        duration: 3000,

    });
}
function animateGrid() {
    anime({
        targets: ".dot",
        keyframes: [
            { translateY: -10, translateX: 10, scale: 0.6, backgroundColor: "#fff" },
            { translateY: 0, translateX: 0, scale: 1, backgroundColor: "#FF0000" },

        ],
        delay: anime.stagger(1),
        loop: true,
        duration: 1000
    });
}
function cssExample() {
    anime({
        targets: "#cssExample",
        keyframes: [
            { opacity: '0.5', backgroundColor: '#4e148c', width: '200px' },
            { opacity: '1', backgroundColor: "#FF0000", width: '50px' }
        ],
        duration: 5000,
        loop: true
    })
}
function cssExample2() {
    anime({
        targets: "#cssExample2",
        keyframes: [
            { translateX: 100, scale: 1.25, rotate: 90 },
            { translateX: -100, scale: .5, rotate: 180 },
            { translateX: 0, scale: 1, rotate: 0 }
        ],
        loop: true,
        duration: 5000,

    })
}
function cssExample3() {
    anime({
        targets: "#cssExample3",
        keyframes: [
            { translateX: 100, width: '100px' },
            { translateX: -100, width: '25px' },
            { translateX: 0, width: '50px' }
        ],
        loop: true,
        duration: 5000
    })
}
function cssExample4() {
    var timeline = anime.timeline({
        duration: 833.3333333333333,
        loop: true
    });
    timeline.add({
        targets: '#example41',
        translateX: 100
    }).add({
        targets: '#example42',
        translateX: 100
    }).add({
        targets: '#example43',
        translateX: 100
    }).add({
        targets: '#example41',
        translateX: 0
    }).add({
        targets: '#example42',
        translateX: 0
    }).add({
        targets: '#example43',
        translateX: 0
    });
}

function initAnimations() {
    mainSquare();
    animateGrid();
    cssExample();
    cssExample2();
    cssExample3();
    cssExample4();
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
window.onload = initAnimations();
