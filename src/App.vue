<template>
  <div>
    <Header></Header>
    <div class="container">
      <div class="mb-4">
        <h1 class="text-center">Get Help From The Best Of The Best!</h1>
        <p>In EducApp, we're worried about your professional 
          development. Tha's why here you can find experienced
          teachers who are willing to solve your doubts
          in regards to different programming areas.
        </p>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'App',
  data(){
    return {}
  },
  components: {
    Header
  }
}
</script>


<style>

  #app {
    background-color: #f2f2f2;
  }

</style>
