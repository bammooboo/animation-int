export default () => {
  const svgSelectors = {
    catThreeMouth: document.getElementById('cat-three-mouth'),
    catThreeBulb: document.getElementById('cat-three-bulb'),
    catThreePingsContainer: document.getElementById('cat-three-bulb-pings'),
    catThreePings: document.querySelectorAll('.cat-three-ping'),
    catThreeEyes: document.querySelectorAll('.cat-three-eye'),
    catThreeLeftEar: document.getElementById('cat-three-left-ear'),
    catThreeRightEar: document.getElementById('cat-three-right-ear'),
  }
  function init() {
    catThreeAnimations();
  }

  function catThreeAnimations() {
    console.log('cat three', svgSelectors.catThreeMouth);
    const tlCatThree = new TimelineMax();

    tlCatThree.fromTo(svgSelectors.catThreeMouth, 1.4, {
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
    }, 0.1, '-=0.2');
  }

  init();
};