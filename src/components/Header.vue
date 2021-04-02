<template>
    <nav class="navbar navbar-expand-lg navbar-dark mb-5">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">EducApp</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/register">Add a Teacher</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/messages">Messages</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
       name: 'Header', 
    }
</script>

<style scoped>
    nav {
        background-color: #004080;
    }
</style>