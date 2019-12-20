import CSSPlugin from "../gsap/CSSPlugin";
import CSSRulePlugin from "../gsap/CSSRulePlugin"
import DrawSVGPlugin from "../gsap/DrawSVGPlugin";
import MorphSVGPlugin from "../gsap/MorphSVGPlugin";
import MotionPathPlugin from "../gsap/MotionPathPlugin";
import { Linear, RoughEase, Back, Bounce, Sine, CubicIn, Power0, Power1, convertToPath }  from "../gsap/all";
import { gsap } from '../gsap/all';

// const plugins = [CSSPlugin, CSSRulePlugin, gsap];
// const plugin = [MorphSVGPlugin];
gsap.registerPlugin(MorphSVGPlugin, MotionPathPlugin, DrawSVGPlugin, CSSPlugin, CSSRulePlugin);

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
    catFive: document.querySelector('.cat__five'),
    catFiveHalo: document.getElementById('cat-five-halo'),
    catFiveLeftWing: document.getElementById('cat-five-left-wing'),
    catFiveRightWing: document.getElementById('cat-five-right-wing'),
    decoOuter: document.querySelectorAll('.deco-outer'),
    decoInner: document.querySelectorAll('.deco-inner'),
    decoStrokes: document.querySelectorAll('.deco-stroke'),
    decoStrokesOpposite: document.querySelectorAll('.deco-stroke-opposite'),
    decoStrokesCenter: document.querySelectorAll('.deco-stroke-center'),
    decoLineOne: document.querySelectorAll('.deco-line-1'),
    decoLineTwo: document.querySelectorAll('.deco-line-2'),
    decoLineThree: document.querySelectorAll('.deco-line-3'),
    snowflakeLine: document.querySelectorAll('.snowflake-line'),
    snowflakePolyLine: document.querySelectorAll('.snowflake-polyline'),
    snowflakeMiniLine: document.querySelectorAll('.snowflake-miniline'),
    snowflakeLetter: document.querySelectorAll('.snowflake-letter'),
    rainbowLine: document.querySelectorAll('.rainbow-line'),
    cloudHappyFace: document.querySelectorAll('.cloud-happy-face'),
    cloudSadEyeRight: document.querySelector('.cloud-sad-eye-right'),
    cloudSadEyeLeft: document.querySelector('.cloud-sad-eye-left'),
    cloudSadEyeSadRight: document.getElementById('cloud-sad-right-sad-eye'),
    cloudSadEyeSadLeft: document.getElementById('cloud-sad-left-sad-eye'),
    cloudSadSmile: document.getElementById('cloud-sad-smile'),
    cloudSadFrown: document.getElementById('cloud-sad-frown'),
    cloudSadTears: document.querySelectorAll('.cloud-sad-tears'),
    cloudSadRightTear: document.querySelectorAll('.cloud-sad-right-tear'),
    cloudSadLeftTear: document.querySelectorAll('.cloud-sad-left-tear'),
    cloudSadBody: document.getElementById('cloud-sad-body'),
    cloudSadBodyLeft: document.getElementById('cloud-sad-body-left'),
    cloudSadBodyRight: document.getElementById('cloud-sad-body-right'),
    cloudFace: document.querySelectorAll('.cloud-face'),
    cloudCheeks: document.querySelectorAll('.cloud-cheek'),
    cloudSadSmilingLeftEye: document.querySelector('.cloud-sad-left-smiling-eye'),
    cloudSadSmilingRightEye: document.querySelector('.cloud-sad-right-smiling-eye'),
    cloudHappyEye: document.querySelectorAll('.cloud-happy-eye'),
    cloudHappyLeftEye: document.querySelector('.cloud-happy-left-eye'),
    cloudHappyRightEye: document.querySelector('.cloud-happy-right-eye'),
    cloudHappySmilingLeftEye: document.querySelector('.cloud-happy-left-smiling-eye'),
    cloudHappySmilingRightEye: document.querySelector('.cloud-happy-right-smiling-eye'),
    cloudHappyMouth: document.querySelector('.cloud-happy-mouth'),
    cloudHappyMouthOpen: document.getElementById('cloud-happy-mouth-open'),
    rainbowSparkles: document.querySelectorAll('.rainbow-sparkles'),
    cloudHappy: document.getElementById('cloud-happy')
  }

  function init() {
    rainbow();
    snowflake();
    decoPattern();
    bee();
    line();
    balloon();
    catOneAnimations();
    catTwoAnimations();
    catThreeAnimations();
    catFourAnimations();
    catFiveAnimations();
  }

  let cursorX = 0;
  let cursorY = 0;
  let offsetX = 0;
  let offsetY = 0;
  let depthXY = 0;
  let square = document.querySelector('.square');
  let cloudBits = document.querySelectorAll('.cloud-piece');
  let background = document.querySelector('.square-container');
  let darkCloud = document.querySelector('.dark-cloud');

  document.addEventListener('mousemove', followMouse);

  function followMouse(event) {
    cursorX = event.clientX;
    cursorY = event.clientY;
    depthXY = 0.3;
    offsetX = ((cursorX * depthXY) / 8);
    offsetY = ((cursorY * depthXY) / 8);
    square.style.transform = 'translate3d('+offsetX+'px,'+offsetY+'px,0px)';


    // darkCloud.style.transform = 'translate('+(cursorX)+'px,'+(cursorY)+'px)';
    darkCloud.style.left = cursorX+'px';
    darkCloud.style.top = cursorY+'px';

    // if(cursorX >= (window.innerWidth/2)) {
    //   console.log('over half');
    //   background.style.backgroundColor = 'pink';
    // } else {
    //   background.style.backgroundColor = 'lightblue';
    // }

    cloudBits.forEach(function(cloud) {
      depthXY = 0.3;
      offsetX = ((cursorX * depthXY) / 16);
      offsetY = ((cursorY * depthXY) / 16);
      cloud.style.transform = 'translate3d('+offsetX+'px,'+offsetY+'px,0px)';
      
    })
  }
  

  function rainbow() {
    let rainbowTl = gsap.timeline({delay: 4});

    gsap.set(svgSelectors.rainbowLine, {
      drawSVG: '0% 0%'
    });

    rainbowTl.staggerTo(svgSelectors.cloudSadLeftTear, 1, {
      autoAlpha: 1,
      repeat: 5
    }, 0.2)
    .staggerTo(svgSelectors.cloudSadRightTear, 1, {
      autoAlpha: 1,
      repeat: 5
    }, 0.2, "-=9.6")
    .add(() => {
      moveFace();
    }, "-=6.6")
    .to(svgSelectors.cloudHappyMouth, 0.5, {
      morphSVG: svgSelectors.cloudHappyMouthOpen
    }, "-=4.6")
    .add(() => {
      startRainbow();
    },"-=3")
    .set(svgSelectors.rainbowLine, {
      opacity: 1
    },'-=1.7')
    .to(svgSelectors.rainbowLine, 1, {
      drawSVG: '0% 100%',
      ease: Linear.easeNone
    }, "-=1.6")
    .to(svgSelectors.cloudSadEyeSadLeft, 1, {
      morphSVG: svgSelectors.cloudSadEyeLeft
    })
    .to(svgSelectors.cloudSadEyeSadRight, 1, {
      morphSVG: svgSelectors.cloudSadEyeRight
    }, "-=1")
    .to(svgSelectors.cloudSadTears, 0.5, {
      opacity: 0
    })
    .to(svgSelectors.cloudSadFrown, 1, {
      morphSVG: svgSelectors.cloudSadSmile
    })
    .to(svgSelectors.cloudSadBody, 1, {
      fill: "#f2f2f2"
    }, "-=1")
    .to(svgSelectors.cloudSadBodyLeft, 1, {
      fill: "#fff"
    }, "-=1")
    .to(svgSelectors.cloudSadBodyRight, 1, {
      fill: "#9fd7ff"
    }, "-=1")
    .to(svgSelectors.cloudHappyMouth, 1, {
      morphSVG: svgSelectors.cloudHappyMouth
    }, "-=1")
    .to(svgSelectors.cloudHappyFace, 1, {
      x: 0
    })
    .add(() => {
      smilingClouds();
    })
    .add(() => {
      smilingEyes();
    })
    .add(() => {
      rainbowSparkles();
    });
  }

  function moveFace() {
    let faceMoveTl = gsap.timeline();

    faceMoveTl.to(svgSelectors.cloudHappyFace, 0.9, {
      x: 12,
      ease: 'power1.out'
    })
    .to(svgSelectors.cloudHappyFace, 0.9, {
      x: 0,
      ease: 'power1.in'
    })
    .to(svgSelectors.cloudHappyFace, 0.15, {
      x: 12,
      ease: "back.out(1.4)"
    });
  }

  function rainbowSparkles() {
    let rainbowSparklesTl = gsap.timeline({repeat: -1, ease: Linear.easeNone, yoyo: true});

    gsap.to(svgSelectors.rainbowSparkles, 1, {
      transformOrigin: '50% 50%',
      rotation: 360,
      repeat: -1,
      ease: Linear.easeNone,
    });

    rainbowSparklesTl.staggerTo(svgSelectors.rainbowSparkles, 0.3, {
      autoAlpha: 1,
    }, 0.15);
  }

  function startRainbow() {
    let rainbowBlinkTl = gsap.timeline();

    rainbowBlinkTl.to(svgSelectors.cloudHappyEye, 0.4, {
      scaleY: 0.2,
      scaleX: 1,
      transformOrigin: '50% 50%',
    })
    .to(svgSelectors.cloudHappyMouth, 0.4, {
      scaleY: 0.2,
      scaleX: 1,
      transformOrigin: '50% 50%',
    }, "-=0.4")
    .fromTo(svgSelectors.cloudHappy, 0.1, {
      x: -0.5
    }, {
      x: 0.5,
      ease: RoughEase.ease,
      repeat: 12
    }, "-=0.4")
    .to(svgSelectors.cloudHappyFace, 0.1, {
      y: -4,
    })
    .to(svgSelectors.cloudHappy, 0.1, {
      y: -4
    }, "-=0.1")
    .to(svgSelectors.cloudHappyFace, 0.1, {
      y: 0,
    })
    .to(svgSelectors.cloudHappy, 0.1, {
      y: 0
    }, "-=0.1")
    .to(svgSelectors.cloudHappyEye, 0.2, {
      scaleY: 1,
      scaleX: 1,
      transformOrigin: '50% 50%',
    }, "-=0.1")
    .to(svgSelectors.cloudHappyMouth, 0.2, {
      scaleY: 1,
      scaleX: 1,
      transformOrigin: '50% 50%',
    }, "-=0.1");
  }

  function smilingEyes() {
    let leftEye = MorphSVGPlugin.convertToPath("#cloud-happy-left-eye");
    let rightEye = MorphSVGPlugin.convertToPath("#cloud-happy-right-eye");

    let smilingEyesTl = gsap.timeline();

    smilingEyesTl.to(svgSelectors.cloudSadEyeSadLeft, 1, {
      morphSVG: svgSelectors.cloudSadSmilingLeftEye
    })
    .to(svgSelectors.cloudSadEyeSadRight, 1, {
      morphSVG: svgSelectors.cloudSadSmilingRightEye
    }, "-=1")
    .to(leftEye, 1, {
      morphSVG: svgSelectors.cloudHappySmilingLeftEye
    }, "-=1")
    .to(rightEye, 1, {
      morphSVG: svgSelectors.cloudHappySmilingRightEye
    }, "-=1")
    .to(svgSelectors.cloudCheeks, 1, {
      opacity: 1
    }, "-=1");
  }

  function smilingClouds() {
    let smilingTl = gsap.timeline({repeat: -1});

    smilingTl.to(svgSelectors.cloudFace, 0.5, {
      rotation: 10,
      transformOrigin: '50% 100%',
      ease: Power0.easeNone
    })
    .to(svgSelectors.cloudFace, 0.5, {
      rotation: 0,
      transformOrigin: '50% 100%',
      ease: Power0.easeNone
    })
    .to(svgSelectors.cloudFace, 0.5, {
      rotation: -10,
      transformOrigin: '50% 100%',
      ease: Power0.easeNone
    })
    .to(svgSelectors.cloudFace, 0.5, {
      rotation: 0,
      transformOrigin: '50% 100%',
      ease: Power0.easeNone
    })
  }

  function snowflake() {
    let snowflakeTl = gsap.timeline();

    gsap.set(svgSelectors.snowflakeLine, {
      drawSVG: '0% 0%'
    });

    gsap.set(svgSelectors.snowflakePolyLine, {
      drawSVG: '0% 0%'
    });

    gsap.set(svgSelectors.snowflakeMiniLine, {
      drawSVG: '0% 0%'
    });

    gsap.set(svgSelectors.snowflakeLetter, {
      drawSVG: '0% 0%'
    });

    gsap.to('.snowflake', 16, {
      rotation: 360,
      repeat: -1,
      ease: Linear.easeNone
    });

    snowflakeTl.to(svgSelectors.snowflakeLine, 2, {
      drawSVG: '0% 100%',
      ease: Linear.easeNone
    })
    .to(svgSelectors.snowflakePolyLine, 2, {
      drawSVG: '0% 100%',
      ease: Linear.easeNone
    }, '-=1')
    .to(svgSelectors.snowflakeMiniLine, 1, {
      drawSVG: '0% 100%',
      ease: Linear.easeNone
    }, '-=0.2')
    .to(svgSelectors.snowflakeLetter, 2, {
      drawSVG: '0% 100%'
    });
  }

  function decoPattern() {
    console.log(svgSelectors.decoStrokes);
    let decoTl = gsap.timeline();
    let decoTwo = gsap.timeline();
    let decoCenter = gsap.timeline();

    let decoLineOne = gsap.timeline();
    let decoLineTwo = gsap.timeline();
    let decoLineThree = gsap.timeline();

    let decoStagger = gsap.timeline();

    let decoOpacity = gsap.timeline({delay: 2.4, repeatDelay: 1, repeat: -1});

    gsap.set(svgSelectors.decoStrokes, {
      drawSVG: '0% 0%'
    });

    gsap.set(svgSelectors.decoStrokesOpposite, {
      drawSVG: '100% 100%'
    });

    gsap.set(svgSelectors.decoStrokesCenter, {
      drawSVG: '100% 100%'
    });

    gsap.set(svgSelectors.decoLineOne, {
      drawSVG: '0% 0%'
    });

    gsap.set(svgSelectors.decoLineTwo, {
      drawSVG: '0% 0%'
    });

    gsap.set(svgSelectors.decoLineThree, {
      drawSVG: '0% 0%'
    });

    decoTl.staggerTo(svgSelectors.decoStrokes, 2, {
      drawSVG: '0% 100%',
      ease: Linear.easeNone
    });

    decoTwo.staggerTo(svgSelectors.decoStrokesOpposite, 2, {
      drawSVG: '100% 0%',
      ease: Linear.easeNone
    });

    decoCenter.staggerTo(svgSelectors.decoStrokesCenter, 2, {
      drawSVG: '0% 100%',
      ease: Linear.easeNone
    });

    decoLineOne.staggerTo(svgSelectors.decoLineOne, 2, {
      drawSVG: '0% 100%',
      ease: Linear.easeNone
    }, '+=0.4');

    decoLineTwo.staggerTo(svgSelectors.decoLineTwo, 2, {
      drawSVG: '0% 100%',
      ease: Linear.easeNone
    }, '+=0.4');

    decoLineThree.staggerTo(svgSelectors.decoLineThree, 2, {
      drawSVG: '0% 100%',
      ease: Linear.easeNone
    },'+=0.4');

    // decoStagger.staggerTo(svgSelectors.decoOuter, 1, {
    //   scale: 0.1,
    //   y: 30,
    //   transformOrigin: '50% 100%',
    //   delay: 2.4
    // }, 0.2);

    gsap.to(svgSelectors.decoOuter, {
      duration: 0.5,
      delay: 2.4,
      scale: 0.9,
      y: -10,
      rotation: 360,
      yoyo: true,
      repeat: -1,
      repeatDelay: 1,
      transformOrigin: '50% 100%',
      ease: Power1.inOut,
      stagger: {
        grid: [7,7],
        from: "end",
        axis: 'y',
        amount: 0.5
      }
    });

    decoOpacity.staggerTo(svgSelectors.decoOuter, 0.5, {
      opacity: 0.2,
      ease: Linear.easeNone,
    })
    .staggerTo(svgSelectors.decoOuter, 0.5, {
      opacity: 1,
      ease: Linear.easeNone,
    });

    // let tl = gsap.timeline({
    //   repeat: -1
    // });
    // tl.staggerTo(allSpeedLines, 1, {
    //     drawSVG: '30% 0%',
    //     ease: Linear.easeNone
    //   }, 1)
    //   .staggerTo(allSpeedLines, 2, {
    //     drawSVG: '100% 70%',
    //     ease: Linear.easeNone
    //   }, 1, '-=3')
    //   .staggerTo(allSpeedLines, 1, {
    //     drawSVG: '100% 100%',
    //     ease: Linear.easeNone
    //   }, 1, '-=3')

    // decoTl.to(svgSelectors.decoStrokes, 5, {
    //   scale: 0,
    //   transformOrigin: '50% 100%'
    // });
  }

  function bee() {
    let select = function(s) {
      return document.querySelector(s);
    },
    selectAll = function(s) {
      return document.querySelectorAll(s);
    },

    bee = select('#bee'),
    beeGroup = select('#beeGroup'),
    movingPath = select('#movingPath'),
    waveyLine = select('#waveyLine'),
    wingL = select('#wingL'),
    wingR = select('#wingR'),
    speedLinesGroup = select('#speedLinesGroup'),
    allSpeedLines = selectAll('#speedLinesGroup line')

    gsap.set(bee, {
      yPercent: -80,
      xPercent: 30,
      transformOrigin: '0 50%'
    });

    gsap.set(speedLinesGroup, {
      transformOrigin: '50% 50%',
      x: -80,
      y: 0
    });

    gsap.set(allSpeedLines, {
      drawSVG: '0% 0%'
    });

    gsap.set(wingL, {
      transformOrigin: '100% 100%'
    });

    gsap.set(wingR, {
      transformOrigin: '0% 100%'
    });

    let beePathBezier = waveyLine.getAttribute('d');

    let tl = gsap.timeline({
      repeat: -1,
      paused: false
    });

    tl.to(bee, 6, {
      motionPath: {
        path: beePathBezier,
        type: 'cubic',
        autoRotate: false,
      },
      ease: Linear.easeNone,
    })
    // tl.to(bee, 6, {
    //   bezier: {
    //     type: "cubic",
    //     values: beePathBezier,
    //     autoRotate: false
    //   },
    //   ease: Linear.easeNone
    // })
    .to([movingPath, beeGroup], 6, {
      x: -1200,
      ease: Linear.easeNone
    }, '-=6')

    function flapWings() {
      let flapTl = gsap.timeline();

      let wl = gsap.to(wingL, 0.09, {
        scaleY: 0.25,
        delay: 0.01,
        repeat: -1,
        skewX: 40,
        yoyo: true,
        ease: Linear.easeNone,
      });

      let wr = gsap.to(wingR, 0.09, {
        scaleY: 0.25,
        skewX: -40,
        repeat: -1,
        yoyo: true,
        ease: Linear.easeNone,
      })

      flapTl.add(wl, 0);
      flapTl.add(wr, 0);

      return flapTl;
    }

    function doSpeedLines() {
      let tl = gsap.timeline({
        repeat: -1
      });
      tl.staggerTo(allSpeedLines, 1, {
          drawSVG: '30% 0%',
          ease: Linear.easeNone
        }, 1)
        .staggerTo(allSpeedLines, 2, {
          drawSVG: '100% 70%',
          ease: Linear.easeNone
        }, 1, '-=3')
        .staggerTo(allSpeedLines, 1, {
          drawSVG: '100% 100%',
          ease: Linear.easeNone
        }, 1, '-=3')

      tl.timeScale(6)
      return tl;
    }

    function blink(){
      gsap.to('#eyeGroup', 0.1, {
        scaleY: 0.2,
        yoyo: true,
        repeat: 1,
        transformOrigin: '50% 50%',
        delay: Math.random() * 5,
        onComplete:blink
      })
    }

    blink();

    let mainTl = gsap.timeline();
    mainTl.add(tl, 0);
    mainTl.add(doSpeedLines(), 0);

    mainTl.add(flapWings(), 0);

    mainTl.timeScale(1);


    gsap.set('svg', {
      visibility: 'visible'
    });
}

  function line() {
    gsap.from('#line', {
      drawSVG: "0",
      repeat: 5,
    });
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

  function catFiveAnimations() {
    console.log('cat five', svgSelectors.catFive);

    const tlCatFive = gsap.timeline({repeat: -1, yoyo: true});

    tlCatFive.fromTo(svgSelectors.catFiveLeftWing, 0.2, {
      rotation: -10,
      transformOrigin: 'right',
    }, {
      rotation: 0,
      transformOrigin: 'right',
    })
    .fromTo(svgSelectors.catFiveRightWing, 0.2, {
      rotation: 10,
      transformOrigin: 'left',
    }, {
      rotation: 0,
      transformOrigin: 'left',
    }, "-=0.2");
  }

  init();
};