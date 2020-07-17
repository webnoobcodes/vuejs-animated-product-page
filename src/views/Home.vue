<template>
  <div class="home">
    <ProductGallery :images="product.images" />
    <Appear :delay="500" :translate="['-100px', 0]">
      <h1>{{ product.title }}</h1>
    </Appear>
    <Appear :delay="700" :translate="['100px', 0]">
      <p>{{ product.description }}</p>
    </Appear>
    <div class="order">
      <Appear :delay="900" :translate="[0, '100px']">
        <div class="product-price">{{ product.price }} <sup>USD</sup></div>
      </Appear>
      <Appear :duration="800" :delay="1300">
        <button>Eat Me</button>
      </Appear>
    </div>    
  </div>
</template>

<script>
import ProductGallery from '@/components/ProductGallery';

export default {
  name: 'Home',
  data: () => {
    return {
      product: {
        images: [
          'ice01.jpg', 'ice02.jpg', 'ice03.jpg', 'ice04.jpg', 'ice05.jpg',
        ],
        title: 'Delicious Ice',
        description: 'Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from dairy milk or cream and is flavoured with a sweetener, either sugar or an alternative, and any spice, such as cocoa or vanilla. Colourings are usually added, in addition to stabilizers.',
        price: 8.99
      }
    }
  },
  components: {
    ProductGallery
  }
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Abel&family=Galada&display=swap');

  .home {
    width: 100vw;
    max-width: 768px;
    overflow: hidden;
    margin: 0 auto;
  }

  h1 { 
    padding: 16px;
    margin: 16px 0 0;
    font-family: Galada, arial;
    font-size: 3rem;
  }
  p { 
    padding: 16px; 
    margin: 0;
    font-family: Abel, arial;
    font-size: 1.3rem;
  }

  .order {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 16px;

    .product-price {
      font-family: Galada, arial;
      font-size: 2rem;
      margin-right: 32px;

      sup { font-size: 1rem; }
    }

    button {
      padding: 6px 32px 0;
      color: #fefefe;
      background-color: #2c3e50;
      font-family: Galada, arial;
      font-size: 1.3rem;
      border: 1px solid #fefefe;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  
</style>
