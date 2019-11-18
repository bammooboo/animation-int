export default () => {
  const svgSelectors = {
    catOne: document.querySelector('.cat__one'),
    catOneWeight: document.getElementById('cat-one-weight'),
    catOneEyes: document.querySelectorAll('.cat-one-eye'),
    catOneMouth: document.getElementById('cat-one-mouth'),
    catOneDroplets: document.querySelectorAll('.cat-one-droplet'),
    catOneCheeks: document.querySelectorAll('.cat-one-cheek'),
    catTwo: document.querySelector('.cat__two'),
    catTwoZs: document.querySelectorAll('.cat-two-z'),
    catTwoEar: document.getElementById('cat-two-ear'),
    catThree: document.querySelector('.cat__three'),
    catThreeMouth: document.getElementById('cat-three-mouth'),
    catThreeBulb: document.getElementById('cat-three-bulb'),
    catThreePingsContainer: document.getElementById('cat-three-bulb-pings'),
    catThreePings: document.querySelectorAll('.cat-three-ping'),
    catThreeEyes: document.querySelectorAll('.cat-three-eye'),
    catThreeLeftEar: document.getElementById('cat-three-left-ear'),
    catThreeRightEar: document.getElementById('cat-three-right-ear'),
    catFour: document.querySelector('.cat__four'),
    catFourDots: document.querySelectorAll('.cat-four-dot'),
    catFourCat: document.getElementById('cat-four-cat'),
  }

  function init() {
    catOneAnimations();
    catTwoAnimations();
    catThreeAnimations();
    catFourAnimations();
  }

  function catOneAnimations() {
    console.log('cat one', svgSelectors.catOne);

    const tlCatOne = new TimelineMax({repeat: -1, yoyo: true, ease: Linear.easeNone});

    tlCatOne.fromTo(svgSelectors.catOneWeight, 1.4, {
      rotation: 5,
      transformOrigin: 'top left',
    }, {
      rotation: -5,
      transformOrigin: 'top left',
    })
    .fromTo(svgSelectors.catOneMouth, 1.4, {
      scaleY: 1,
      transformOrigin: 'top',
    }, {
      scaleY: 1.4,
      transformOrigin: 'top',
    }, "-=1.4")
    .fromTo(svgSelectors.catOneCheeks, 1.4, {
      fill: "#FF91AB",
    }, {
      fill: "#F76D8E",
    }, "-=1.4");
  }

  function catTwoAnimations() {
    console.log('cat two', svgSelectors.catTwo);

    const tlCatTwo = new TimelineMax({repeat: -1});

    tlCatTwo.staggerTo(svgSelectors.catTwoZs, 0.8, {
      opacity: 1,
      ease: Linear.easeNone,
    }, 0.3)
    .staggerTo(svgSelectors.catTwoZs, 0.8, {
      opacity: 0,
      ease: Linear.easeNone,
    }, 0.3);

    TweenMax.fromTo(svgSelectors.catTwoEar, 0.1, {
      delay: 3,
      rotation: 4,
      transformOrigin: 'right bottom',
    }, {
      rotation: -4,
      ease: RoughEase.ease,
      repeat: -1,
      repeatDelay: 6,
      transformOrigin: 'right bottom',
    });

  }

  function catThreeAnimations() {
    console.log('cat three', svgSelectors.catThree);
    const tlCatThree = new TimelineMax();

    tlCatThree.to(svgSelectors.catThree, 0.1, {
      opacity: 1,
    })
    .fromTo(svgSelectors.catThreeMouth, 1.4, {
      opacity: 0,
      scale: 0,
      transformOrigin: 'center',
    }, {
      opacity: 1,
      scale: 1,
      transformOrigin: 'center',
    })
    .fromTo(svgSelectors.catThreeEyes, 1.4, {
      scaleX: 1,
      scaleY: 0.05,
      transformOrigin: 'center',
    }, {
      scaleX: 1,
      scaleY: 1,
      transformOrigin: 'center',
    }, '-=1.4')
    .fromTo(svgSelectors.catThreeLeftEar, 1.4, {
      rotation: -10,
      transformOrigin: 'bottom right',
    }, {
      rotation: 0,
      transformOrigin: 'bottom right',
    }, '-=1.4')
    .fromTo(svgSelectors.catThreeRightEar, 1.4, {
      rotation: 10,
      transformOrigin: 'bottom left',
    }, {
      rotation: 0,
      transformOrigin: 'bottom left',
    }, '-=1.4')
    .fromTo(svgSelectors.catThreeBulb, 0.4, {
      ease: Back.easeOut.config(1.7),
      scale: 0,
      transformOrigin: 'center',
    }, {
      ease: Back.easeOut.config(1.7),
      scale: 1,
    })
    .staggerTo(svgSelectors.catThreePings, 0.1, {
      opacity: 1,
    }, 0.1, '-=0.2')
    .to(svgSelectors.catThreePingsContainer, 0.06, {
      opacity: 0,
      scale: 0.5,
      transformOrigin: 'center',
    }, '+=0.2')
    .to(svgSelectors.catThreePingsContainer, 0.4, {
      ease: Back.easeOut.config(0.8),
      opacity: 1,
      transformOrigin: 'center',
      scale: 1,
    }, '+=0.26')
  }

  function catFourAnimations() {
    console.log('cat four', svgSelectors.catFour);

    const tlCatFour = new TimelineMax({repeat: -1});
    const tlCatFourHover = new TimelineMax({repeat: -1, ease: Linear.easeNone});

    tlCatFour.staggerTo(svgSelectors.catFourDots, 0.6, {
      opacity: 1,
      ease: Linear.easeNone,
    }, 0.3)
    .staggerTo(svgSelectors.catFourDots, 0.6, {
      opacity: 0,
      ease: Linear.easeNone,
    }, 0.3);

    tlCatFourHover.fromTo(svgSelectors.catFourCat, 0.7, {
      y: 0
    }, {
      y: -10
    })
    .fromTo(svgSelectors.catFourCat, 0.7, {
      y: -10
    }, {
      y: 0
    });
  }

  init();
};