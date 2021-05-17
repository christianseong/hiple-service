<template>
  <div id="app">
    <Navbar/>
    <br><br>
    <div class="container">
        <Errors v-if="error" :msg="error"/>
       <router-view/>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar';
import Errors from './components/Errors'
import {mapGetters} from 'vuex'

export default {
  components : {
    Navbar,
    Errors
  },
  computed:{
    ...mapGetters(['error'])
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
  
}
</style>
