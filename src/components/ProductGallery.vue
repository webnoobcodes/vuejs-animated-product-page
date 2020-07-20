<template>
  <div class="product-gallery">
    <div class="gallery">
      <div class="gallery-item-wrapper" v-for="(item, index) in images" :key="'img'+index" @click="activeImg = index">
        <Appear :delay="100 * (index + 1)" :translate="['-100px', 0]">
          <div class="gallery-item" :style="{'background-image': 'url('+ require('../assets/'+ item)+')'}"></div>
        </Appear>
      </div>      
    </div>
    <Appear :translate="['100px', 0]">
      <div class="image" :style="mainImage"></div>
    </Appear>
  </div>
</template>

<script>
  export default {
    props: ['images'],
    data: () => { return { 'activeImg': 0 }},
    computed: {
      mainImage() {
        return { 'background-image': 'url('+ require('../assets/'+ this.images[this.activeImg])+')' }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @mixin bg-image() {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .product-gallery {
    display: flex;
    width: 100%;

    .gallery {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      width: 20vw;
      height: 60vh;
      padding: 0 16px 100px;

      .gallery-item-wrapper {
        width: 100%;
        height: calc(10vh - 16px);
        margin-top: 16px;

        .gallery-item {
          width: 100%;
          height: 100%;
          cursor: pointer;
          @include bg-image;
        }
      }      
    }

    .image {
      width: 80vw;
      height: 60vh;
      border-bottom-left-radius: 100px;
      animation: .3s all ;
      @include bg-image;
    }
  }  
</style>