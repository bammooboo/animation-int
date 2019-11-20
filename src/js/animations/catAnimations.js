import CSSPlugin from "../gsap/CSSPlugin";
import CSSRulePlugin from "../gsap/CSSRulePlugin"
import MorphSVGPlugin from "../gsap/MorphSVGPlugin";
import MotionPathPlugin from "../gsap/MotionPathPlugin";
import { Linear, RoughEase, Back }  from "../gsap/all";
import { gsap } from '../gsap/all';

// const plugins = [CSSPlugin, CSSRulePlugin, gsap];
// const plugin = [MorphSVGPlugin];
gsap.registerPlugin(MorphSVGPlugin, MotionPathPlugin, CSSPlugin, CSSRulePlugin);

export default () => {
  const svgSelectors = {
    catOne: document.querySelector('.cat__one'),
    catOneWeight: document.getElementById('cat-one-weight'),
    catOneEyes: document.querySelectorAll('.cat-one-eye'),
    catOneMouth: document.getElementById('cat-one-mouth'),
    catOneDropletsLeft: document.querySelectorAll('.cat-one-droplet-left'),
    catOneDropletsRight: document.querySelectorAll('.cat-one-droplet-right'),
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
    balloon();
    catOneAnimations();
    catTwoAnimations();
    catThreeAnimations();
    catFourAnimations();
  }

  function balloon() {
    gsap.set('#balloon', {
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50% 50%"
    });
    gsap.to("#balloon", {
      duration: 5, 
      repeat: 12,
      repeatDelay: 3,
      yoyo: true,
      ease: "power1.inOut",
      motionPath:{
        path: "#balloon-path",
        align: "#balloon-path",
        autoRotate: 90,
      }
    });
  }

  function catOneAnimations() {
    console.log('cat one', svgSelectors.catOne);

    const tlCatOne = gsap.timeline({repeat: -1, yoyo: true, ease: Linear.easeNone});
    
    gsap.fromTo(svgSelectors.catOneEyes, 0.1, {
      scaleX: 1,
      scaleY: 0.05,
      transformOrigin: 'center',
    }, {
      scaleX: 1,
      scaleY: 1,
      transformOrigin: 'center',
      repeat: -1,
      repeatDelay: 4,
    });

    gsap.fromTo(svgSelectors.catOneDropletsLeft, 0.6, {
      autoAlpha: 1,
      scale: 0,
      transformOrigin: 'right',
    }, {
      autoAlpha: 0,
      scale: 1,
      transformOrigin: 'right',
      repeat: -1,
      repeatDelay: 2,
    });

    gsap.fromTo(svgSelectors.catOneDropletsRight, 0.6, {
      scale: 0,
      transformOrigin: 'left',
    }, {
      autoAlpha: 0,
      scale: 1,
      transformOrigin: 'left',
      repeat: -1,
      repeatDelay: 2,
    });

    tlCatOne.fromTo(svgSelectors.catOneWeight, 1.4, {
      rotation: 5,
      transformOrigin: 'left',
    }, {
      rotation: -5,
      transformOrigin: 'left',
    })
    .fromTo(svgSelectors.catOneMouth, 1.4, {
      scaleY: 1,
    }, {
      scaleY: 1.4,
    }, "-=1.4")
    .fromTo(svgSelectors.catOneCheeks, 1.4, {
      fill: "#FF91AB",
    }, {
      fill: "#F76D8E",
    }, "-=1.4");
  }

  function catTwoAnimations() {
    console.log('cat two', svgSelectors.catTwo);

    const tlCatTwo = gsap.timeline({repeat: -1});

    tlCatTwo.staggerTo(svgSelectors.catTwoZs, 0.8, {
      opacity: 1,
      ease: Linear.easeNone,
    }, 0.3)
    .staggerTo(svgSelectors.catTwoZs, 0.8, {
      opacity: 0,
      ease: Linear.easeNone,
    }, 0.3);

    gsap.fromTo(svgSelectors.catTwoEar, 0.1, {
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
    const tlCatThree = gsap.timeline();

    tlCatThree.to(svgSelectors.catThree, 0.1, {
      opacity: 1,
    })
    .fromTo(svgSelectors.catThreeMouth, 1.4, {
      opacity: 0,
      scaleY: 0,
    }, {
      opacity: 1,
      scaleY: 1,
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
      transformOrigin: 'right',
    }, {
      rotation: 0,
      transformOrigin: 'right',
    }, '-=1.4')
    .fromTo(svgSelectors.catThreeRightEar, 1.4, {
      rotation: 10,
      transformOrigin: 'left',
    }, {
      rotation: 0,
      transformOrigin: 'left',
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
    }, '+=0.26');
  }

  function catFourAnimations() {
    console.log('cat four', svgSelectors.catFour);

    const tlCatFour = gsap.timeline({repeat: -1});
    const tlCatFourHover = gsap.timeline({repeat: -1, ease: Linear.easeNone});

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