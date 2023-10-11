<template>
  <HeaderApp msg="SYNTH ZERO" />
  <RouterView></RouterView>
  <FooterApp/>
</template>

<script >

import HeaderApp from './components/HeaderApp.vue'
import FooterApp from './components/FooterApp.vue'
import { RouterView } from 'vue-router'
export default {
  name: 'App',
  components: {
  
    RouterView,HeaderApp,FooterApp
},
  created(){
    var script= [
    "https://kit.fontawesome.com/6c7449dbbc.js"
    ];
    script.forEach(script => {
      let tag =document.createElement("script");
      tag.setAttribute("src",script);
      document.head.appendChild(tag);
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  color: #2c3e50;
  margin: 0;
  text-align: center;
}
template{
  margin: 0%;
  padding: 0%;
}
</style>
