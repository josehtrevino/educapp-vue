<template>
    <div>
        <form action="" class="form ms-4">
            <div class="form-group">
                <input type="text" class="form-control" name="name" v-model="name" placeholder="Your name">
            </div>
            <div class="form-group">
                <textarea name="message" class="form-control" v-model="message" id="message" cols="30" rows="10" ></textarea>
            </div>
            <div class="form-group">
                <input type="button" class="btn btn-info" value="Send" @click.prevent="submitForm()">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name: '',
                message: ''
            }
        },
        props: ['id'],
        methods: {
            submitForm(){
                if(this.name !== '' && this.message !== ''){
                    this.$store.dispatch('messages/saveMessage', {
                        id: this.$route.params.id,
                        name: this.name,
                        message: this.message
                    })

                    this.$toast.success(`Your Message Was Succesfully Sent!`);
                }
            }
        }
    }
</script>

<style scoped>

</style>