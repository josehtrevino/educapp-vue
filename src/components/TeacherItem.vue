<template>
    <div class="col-md-4">
        <div class="card mb-3">
            <div class="card-header">
                {{teacherName}}
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">
                        Details
                    </li>
                    <li class="list-group-item">
                        Age: {{teacherAge}}
                    </li>
                    <li class="list-group-item">
                        Specializes in:
                        <br>
                        <span class="badge bg-success m-2" v-for="(skill, index) in teacherSkills" :key="index">
                            {{skill}}
                        </span>
                    </li>
                    <li class="list-group-item">
                        About: {{aboutTeacher}}
                    </li>
                    <router-link class="btn btn-primary mt-2" :to="`/teachers/${teacherId}`">
                        Let's Start Learning!
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        props: ['teacherData'],
        computed: {
            teacherName(){
                return `${this.teacherData.firstName} ${this.teacherData.lastName}`
            },
            teacherAge(){
                return this.teacherData.age;
            },
            teacherSkills(){
                return this.teacherData.skills;
            },
            aboutTeacher(){
                return this.teacherData.about;
            },
            teacherId(){
                return this.teacherData.id;
            }
        }
    }
</script>

<style scoped>

</style>