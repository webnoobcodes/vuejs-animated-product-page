<template>
  <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
    <slot />
  </transition>
</template>

<script>
  export default {
    props: {
      duration: {
        type: Number,
        default: 500
      }, 
      delay: {
        type: Number,
        default: 100
      }, 
      translate: Array
    },
    methods: {
      beforeEnter(el) {
        el.style.opacity = 0;
        
        if(this.translate)
          el.style.transform = 'translate('+this.translate.join(',')+')';        
      },
      enter(el) {
        let transitions = 'opacity ' + this.duration + 'ms ease-in-out ' + this.delay + 'ms';

        if(this.translate)
          transitions += ', transform ' + this.duration + 'ms ease-in-out ' + this.delay + 'ms';

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

          if(this.translate)
            el.style.transform = 'initial';
        });
      }
    }
  }
</script>