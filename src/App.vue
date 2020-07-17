<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0; margin: 0;
    background-color: #f1eada;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    color: #2c3e50;
  }
</style>
