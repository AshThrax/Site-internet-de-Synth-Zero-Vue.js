<template>
  <div class="cards" id="album">
        <h3> Album</h3>
        <div class="cards">  
                <article class="card">
                    <header>
                         <h2 class="mytitle">{{SynthAlbm[0].name}}</h2> 
                         <p>{{ SynthAlbm[0].Date }}</p>
                    </header>  
                    <img  class="" alt="Vue logo" src="../assets/images/Pochette_Album.png">      
                    <br/>             
                    <div class="content">
                         <p>{{ SynthAlbm[0].description }}</p>
                             <li class=" bodylist" v-for="item in SynthAlbm[0].set" :key="item.title" >
                             {{ item.title }}
                            </li> 
                     
                    </div>                 
                </article>                      
        </div>
        <div class="cards">  
                <article class="card">
                    <header>
                         <h2 class="mytitle">{{SynthAlbm[1].name}}</h2> 
                         <p>{{ SynthAlbm[1].Date }}</p>
                    </header>  
                    <img  class="" alt="Vue logo" src="../assets/images/grid_0.png">         
                    <br/>          
                    <div class="content">
                         <p>{{ SynthAlbm[1].description }}</p>
                             <li class=" bodylist" v-for="item in SynthAlbm[1].set" :key="item.title" >
                             {{ item.title }}
                            </li> 
                     
                    </div>                 
                </article>                      
        </div>
    </div>   
</template>
<script>
import Albums from "../assets/Files/Album.json"
    export default {
        name:"AlbumApp",
        data(){
            return{
              
                SynthAlbm: Albums
                
            };
        },
    
    };
</script>
<style>
.content{
    background-color: black;
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
.cards {

   text-align: center;
   align-items: center;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
   grid-gap: 20px;
}

.card {background-color: crimson;
    background-color: rgb(180, 73, 73);
   border-radius: 15px 10px;
   display: grid;
   grid-template-rows: max-content 200px 1fr;
   list-style-type: none
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
   font-size: 20px;
   
   transition:0s;
   transition-delay: 0.2s;
   transition-duration: 0.2s;

}

</style>