const card = document.querySelector('.card');
const circle = document.querySelector('.circle');
const productTitle = document.querySelector('.info h1');
const productDescription = document.querySelector('.info h3');
const blackButton = document.querySelector('.black');
const redButton = document.querySelector('.red');
const blueButton = document.querySelector('.blue');
const buyButton = document.querySelector('.buy button');
const productImage = document.querySelector('.product img');
const sound = document.querySelector('.sound');
const allButtons = document.querySelectorAll('.attr');

var timeline = gsap.timeline({ delay: 0.5, onComplete: createEvents });

timeline.fromTo(card, 2,
    { opacity: 0 },
    {
        opacity: 1,
        ease: 'expo',
    }
);

timeline.fromTo(circle, 0.5,
    {
        opacity: 0,
        width: '3rem',
        height: '3rem'

    },
    {
        opacity: 1,
        width: '14rem',
        height: '14rem',
        ease: 'power1',
        clearProps: 'all'
    }
);

timeline.fromTo(productImage, 1.5,
    {
        opacity: 0,
        width: '10rem'
    },
    {
        opacity: 1,
        ease: 'bounce',
        width: '20rem',
    }
);

timeline.fromTo(productTitle, 0.5,
    {
        opacity: 0,
        y: -20
    },
    {
        opacity: 1,
        y: 0
    }
);

timeline.fromTo(productDescription, 0.5,
    {
        opacity: 0,
        y: 20
    },
    {
        opacity: 1,
        y: 0,

    }
);

timeline.fromTo(blackButton, 0.2,
    {
        opacity: 0,
        x: -40
    },
    {
        opacity: 1,
        x: 0,
        ease: 'bounce',
    }
);

timeline.fromTo(redButton, 0.3,
    {
        opacity: 0,
        y: 40
    },
    {
        opacity: 1,
        y: 0,
        ease: 'bounce',
    },

);


timeline.fromTo(blueButton, 0.4,
    {
        opacity: 0,
        x: 40
    },
    {
        opacity: 1,
        x: 0,
        ease: 'bounce',
    }
);

timeline.fromTo(buyButton, 0.5,
    {
        opacity: 0,
        y: -100,
        x: -100,
        width: '200%'
    },
    {
        opacity: 1,
        y: 0,
        x: 0,
        ease: 'bounce',
        width: '100%'
    }
);

function wiggle(element, duration) {
    gsap.fromTo(element, duration,
        {
            x: -2,
            y: 0,
            opacity: 0.99,
        },
        {
            x: 2,
            y: 0,
            opacity: 1,
            ease: RoughEase.ease.config({
                strength: 5,
                points: 10,
                template: Linear.easeNone,
                randomize: false
            }),
            clearProps: "x,y,opacity"
        });
}


function shake(element, duration) {
    gsap.fromTo(element, duration,
        {
            x: -2,
            y: 4,
            opacity: 0.99,
        },
        {
            x: 2,
            y: -4,
            opacity: 1,
            ease: RoughEase.ease.config({
                strength: 5,
                points: 20,
                template: Linear.easeNone,
                randomize: false
            }),
            clearProps: "x,y,opacity"
        });

}

function playShakeSound() {
    sound.currentTime = 0;
    sound.play();
}

function createEvents() {
    //create events after animation finished

    productImage.addEventListener('click', (event) => {

        shake(event.target, 1.8);
        playShakeSound();

    });

    productImage.addEventListener('mouseenter', (event) => {

        shake(event.target, 1.8);

    });

    buyButton.addEventListener('mouseover', (event) => {
        wiggle(event.target, 0.8);
    });


    allButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.target.classList.toggle('active');
            const buttons = document.querySelectorAll('.attr');
            buttons.forEach(other => {
                if (event.target != other) {
                    other.classList.remove('active');
                }
            });
        });
    });
}


