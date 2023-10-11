<template>
<h3>Accueil page</h3>
<div Class="row">
    <br/>
       
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
</div>
</template>
<script>
import Synthfile from "../assets/Files/SynthZero.json"
import Albums from "../assets/Files/Album.json"
export default{
    name:'AccueilApp',
    
        data(){
            return{
                profile: Synthfile,
                SynthAlbm: Albums  
            };
        },
    
}
</script>
<style>
</style>