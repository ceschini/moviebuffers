<template>
     <div class="hero-container">
         <div class="hero-banner">
             <p>Welcome to...</p>
             <h1>MovieBuffers</h1>
             <div class="hero-links">
             <router-link to="/register" class="nav-link">Sign Up</router-link>
             <router-link to="/login" class="nav-link">Login</router-link>
             </div>
         </div>
     </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
    name: 'Home',
    data() {
        return {
            content: ''
        };
    },
    mounted() {
        UserService.getPublicContent().then(
            response => {
                console.log(response.data);
            },
            error => {
                this.content = 
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
        );
    }
};
</script>

<style scoped>
.hero-banner {
    height: 600px;
    width: 100%;
    text-align:center;
    padding: 5%;
    background-position: center;
    background-size: 70%;
    background-repeat: no-repeat;
    color: white;
    background-image: url("https://cdn.dribbble.com/users/1826055/screenshots/14352838/media/3703d18030d01f77b1663b5312d53086.jpg");
}
.hero-links {
    width: 100%;
    display: flex;
    justify-content: center;
}
.hero-links a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
}
</style>