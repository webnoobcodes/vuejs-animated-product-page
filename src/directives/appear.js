export default {
  bind(el, binding) {
    let duration = typeof binding.value.duration !== 'undefined' ? binding.value.duration : 500;
    let delay = typeof binding.value.delay !== 'undefined' ? binding.value.delay : 100;

    switch(binding.arg) {
      case 'top': el.style.transform = 'translate(0,-100px)'; break;
      case 'right': el.style.transform = 'translate(100px,0)'; break;
      case 'bottom': el.style.transform = 'translate(0,100px)'; break;
      case 'left': el.style.transform = 'translate(-100px,0)'; break;
      default: el.style.transform = 'initial';
    }

    el.style.opacity = 0;    

    let transitions = 'opacity ' + duration + 'ms ease-in-out ' + delay + 'ms';
    transitions += ', transform ' + duration + 'ms ease-in-out ' + delay + 'ms';

    el.style.transition = transitions;

    /*
      Force the repaint to make sure the animation is triggered correctly, 
      then you can fire the method getComputedStyle.
      This is not necessary, but sometimes the animation may not start depending on the case.
    */
    getComputedStyle(el);
    
    /*
      With setTimeout you make sure the browser has finished the painting 
      after setting new CSS properties.
    */
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'initial';
    });
  }
}