<template>
    <div>
            <h3 class="mytitle">{{profile.nom}}</h3>
            <h3></h3>
            <div class="">
                <h3 class="mytitle catchphrase">{{ profile.CatchPhrase}}</h3>
                <h2 class="mytitle">Presentation</h2>

                <p class="Par" > {{profile.Presentation[0]}}</p>
                <p class="Par" > {{profile.Presentation[1]}}</p>
                <p class="Par" > {{profile.Presentation[2]}}</p>

                <h2 class="mytitle">Project</h2>
                <p class="Par" > {{profile.Project}}</p>

            </div>
           
    </div>  
</template>
<script>
import Synthfile from "../assets/Files/SynthZero.json"
import Albums from "../assets/Files/Album.json"
    export default {
        name:"BodyApp",
        data(){
            return{
                profile: Synthfile,
                SynthAlbm: Albums  
            };
        },
    
    };
</script>
<style>
.Par{
    font-style: italic;
    color:crimson;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    margin-left: 5px;
    text-align: center;
    display:inline;
}

.mydiv{
    border-radius: 10px 5px;
    background-color: black;
    text-align:center;
    display: inline-flex;
}

.mytitle
{
color: crimson;
}
.bodylist
{
    font-size: larger;
    font-style: italic;
    color:crimson;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    margin-top: 1px;
    padding: 2px;
    text-align: center;
    display:list-item; 
    list-style-type: none;;
}
.catchphrase
{
    display:none;
}
.catchphrase:hover
{
    display: flex;
}
.cards {
   
    text-align: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;
}

.card {
     background-color: black;
    border-radius: 15px 10px;
    display: grid;
    grid-template-rows: max-content 200px 1fr;
    
}

.card img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.card div :hover
{
    color: black;
    
    background-color: crimson;
    transition:0s;
    transition-delay: 0.2s;
    transition-duration: 0.2s;

}
.card p 
{
    color: crimson;
    font-size: large;
    transition:0s;
    transition-delay: 0.2s;
    transition-duration: 0.2s;

}

</style>