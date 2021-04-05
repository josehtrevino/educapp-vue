<template>
  <div>
    <teacher-filter @check-filter="updateDataByFilter"></teacher-filter>
    <div class="row" v-if="displayTeachers">
      <transition-group name="fade" tag="div" class="row">
        <teacher-item v-for="teacher in displayTeachers" :key="teacher.id" :teacherData="teacher"></teacher-item>
      </transition-group>
    </div>
  </div>
</template>

<script>
import TeacherFilter from '../components/TeacherFilter.vue';
import TeacherItem from '../components/TeacherItem.vue';

export default {
  name: 'Home',
  components:{
    TeacherItem,
    TeacherFilter
  },
  data(){
    return {
      filteredTeachers: ['Frontend', 'Backend', 'AI']
    }
  },
  computed: {
    displayTeachers(){
      return this.$store.getters['teachers/getTeachers'] ? this.$store.getters['teachers/getTeachers'].filter(teacher => {
        if(this.filteredTeachers.includes('Frontend') && teacher.skills.includes('Frontend')){
          return true;
        }
        if(this.filteredTeachers.includes('Backend') && teacher.skills.includes('Backend')){
          return true;
        }
        if(this.filteredTeachers.includes('AI') && teacher.skills.includes('AI')){
          return true;
        }
        return false;
      }) : '';
    }
  },
  methods: {
    updateDataByFilter(updatedOptions){
      this.filteredTeachers = updatedOptions;
    }
  },
  created(){
    this.$store.dispatch('teachers/getAllTeachers');
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-leave-to {
    opacity: 0;
    transition: opacity .5s;
  }

</style>
