<template>
    <div>
        <header class="myHeader">
            <div class="divplacement"> 
                    <ul >
                    <li class="logo"><a href="https://www.instagram.com/synth_zer0.exe/?hl=fr"><i class="fa-brands fa-instagram logo"></i></a></li>
                    <li class="logo"><a href="https://www.youtube.com/channel/UCXjjksGiGLqGmXmPjpCjStQ"><i class="fa-brands fa-youtube logo" ></i></a></li>
                    <li class="logo"><a href="https://open.spotify.com/artist/5DZale27fs25qWqqPDRqfg?si=hWqCtZ-JRGCnxXpn1sSuuw&utm_source=copy-link&nd=1"><i class="fa-brands fa-spotify logo"></i></a></li>
                
                </ul>
            </div>
        </header>
       <NavbarApp></NavbarApp>
    </div>
</template>
<script>
import NavbarApp from './NavbarApp.vue';
export default
{
    name:"HeaderApp",
    components:{
        NavbarApp
    }
}
</script>
<style>
.myLink{
    color:black;
    
   
    display: inline-block;
    margin: 0px 10px;
    text-align: end;
}
.myLink :hover{
    color:crimson;
    background-color: black;
    border:solid;
    border-radius: 15px 4px;
    display: block;
    transition-property:color;
    transition-duration: 0.2s;
    transition-delay: 0.2s;
}
.myHeader{
    background-color: crimson;
    font-style: var();
    margin: 0;
    padding: 0%;
    border-radius: 15px 4px; 
}
.logo {
    
    text-align: left;
    color: rgb(0, 0, 0);
    display: inline-block;
    font-size: 50px;
   
    margin: 0px 15px;
}
.logo :hover{
    
  
    color: rgb(236, 7, 7);
    background-color:black;
    font-size: 50px;
    border-radius: 15px 10px;
    margin: 0px 15px;
}
.MNavbar{
    text-align: left;
    display:inline-block;
}
.divplacement
{
    display:inline-flex;
    border-radius: 15px 4px;
    size:100px 50px;
}
a{
    color:black;
}
</style> 