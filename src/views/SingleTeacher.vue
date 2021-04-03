<template>
    <div class="row" v-if="teacher">
        <div class="col-md-6">
            <div class="card text-center">
                <div class="card-header">
                    Great Choice!
                </div>
                <div class="card-body">
                    <h5 class="card-title">Hi! This is teacher {{teacherName}}</h5>
                    <p class="card-text">
                        Please, let me know what I can do for you and I'll reply
                        as soon as possible. It will be an honor to help you! 
                    </p>
                    <router-link class="btn btn-primary" :to="`/teachers/${teacherId}/contact`">
                        Contact
                    </router-link>
                </div>
                <div class="card-footer text-muted">
                    EducApp &copy;
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                teacher: null
            }
        },
        props: ['id'],
        computed: {
            teacherName(){
                return `${this.teacher.firstName} ${this.teacher.lastName}`
            },
            teacherId(){
                return this.teacher.id;
            }
        },
        created(){
            this.$store.dispatch('teachers/getAllTeachers');
            this.teacher = this.$store.getters['teachers/getTeachers'].find(teacher => teacher.id === this.id);
        }
    }
</script>

<style scoped>

</style>