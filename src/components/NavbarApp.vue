<template>
                <nav class="navbar ">
                    <div class="navbar navbar-expand-lg navbar-light bg-light myNavbar">
                        <ul class="navbar-nav mr-auto">
                            <li class="mynavbar nav-item active"><router-Link to="/accueil" class="nav-link">Accueil</router-Link></li>
                            <li class="mynavbar nav-item active"><router-Link to="/album" class="nav-link">Album</router-Link></li>
                            <li class="mynavbar nav-item active"><router-Link to="/concert" class="nav-link">Concert</router-Link></li>
                        </ul>
                    
                    </div>
                </nav>      
</template>
<script>
import { RouterLink } from 'vue-router';
export default
{
    name:'NavbarApp',
    components:{RouterLink}
}
</script>
<style>
.mynavbar
{
    font-size: 35px;
    justify-content: left;
    color: crimson;
}
.mynavbar:hover
{
    font-size: 40px;
   border-radius: 17%;
    color: white;
    background-color: rgb(214, 44, 44);
}
</style>