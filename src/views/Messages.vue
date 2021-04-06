<template>
    <div>
        <h2 class="mb-2">Messages From Students:</h2>
        <message-item v-for="message in displayMessages"
        :key="message.id"
        :id="message.id"
        :name="message.name"
        :message="message.message"
        ></message-item>
    </div>
</template>

<script>
import MessageItem from "../components/MessageItem.vue";

    export default{
        name:'Messages',
        data(){
            return {}
        },
        components: {
             MessageItem 
        }, 
        computed: {
            displayMessages(){
                return this.$store.getters['messages/getMessages'];
            }
        },
        methods: {
            loadMessages(){
                this.$store.dispatch('messages/fetchMessages');
            }
        },
        created(){
            this.loadMessages();
        }
    }
</script>

<style scoped>

</style>