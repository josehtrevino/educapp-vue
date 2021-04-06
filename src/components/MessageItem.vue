<template>
    <div>
        <div class="card my-3 row">
            <div class="card-header">
                <h3>{{displayName}}</h3>
                <small>{{displayId}}</small>
            </div>
            <div class="card-body">
                <p>{{displayMessage}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id', 'name', 'message'],
        computed: {
            displayId(){
                return this.id;
            },
            displayName(){
                return this.name;
            },
            displayMessage(){
                return this.message;
            }
        }
    }
</script>

<style scoped>

</style>