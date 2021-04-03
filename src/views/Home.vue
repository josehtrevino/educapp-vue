<template>
  <div>
    <div class="row" v-if="displayTeachers">
      <teacher-item v-for="teacher in displayTeachers" :key="teacher.id" :teacherData="teacher"></teacher-item>
    </div>
  </div>
</template>

<script>
import TeacherItem from '../components/TeacherItem.vue';
export default {
  name: 'Home',
  components:{
    TeacherItem
  },
  data(){
    return {

    }
  },
  computed: {
    displayTeachers(){
      return this.$store.getters['teachers/getTeachers'];
    }
  },
  created(){
    this.$store.dispatch('teachers/getAllTeachers');
  }
}
</script>
