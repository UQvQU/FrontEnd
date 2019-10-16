<template>
  <div id="app">
    <HelloWorld/>
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>products</h2>
    <ProductList/>
    <br>
    <ShoppingCart/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ProductList from './components/productList'
import ShoppingCart from './components/ShoppingCart'
export default {
  name: 'App',
  components: {
    HelloWorld,
    ProductList,
    ShoppingCart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
