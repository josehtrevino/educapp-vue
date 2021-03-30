<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/messages">Messages</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/register">Add Teacher</router-link>
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