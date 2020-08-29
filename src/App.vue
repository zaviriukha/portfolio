<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <p>Test</p>-->
<!--    </div>-->
<!--    <Nav/>-->
    <router-view/>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  components: {Nav}
}
</script>

<style >
@import 'assets/index.css';

/*#app {*/
/*  background: linear-gradient(#e66465, #9198e5)!important;*/
/*}*/
</style>