<template>
  <div>
    <Header></Header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'App',
  data(){

  },
  components: {
    Header
  }
}
</script>


<style>


</style>
