<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f2f2f2;
}
</style>
