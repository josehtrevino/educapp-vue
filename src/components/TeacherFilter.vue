<template>
    <div>
        <div class="alert alert-info text-center">Filter teachers by:</div>
        <div class="d-flex justify-content-center mb-3">
            <div class="form-check me-3">
                <input type="checkbox" name="Frontend" class="form-check-input" @change="checkFilters($event)"  id="Frontend" checked>
                <label class="form-check-label" for="Frontend">Frontend</label>
            </div>
            <div class="form-check me-3">
                <input type="checkbox" name="Backend" class="form-check-input" @change="checkFilters($event)"  id="Backend" checked>
                <label class="form-check-label" for="Backend">Backend</label>
            </div>
            <div class="form-check">
                <input type="checkbox" name="AI" class="form-check-input" @change="checkFilters($event)" id="AI" checked>
                <label class="form-check-label" for="AI">AI</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        emits:['check-filter'],
        data(){
            return {
                checkedFilterValues: ['Frontend', 'Backend', 'AI']
            }
        },
        methods: {
            checkFilters(event){
                if(event.target.checked){
                    this.checkedFilterValues.push(event.target.id);
                } else {
                    this.checkedFilterValues.splice(this.checkedFilterValues.indexOf(event.target.id), 1);
                }

                this.$emit('check-filter', this.checkedFilterValues);
            }
        }
    }
</script>

<style scoped>

</style>