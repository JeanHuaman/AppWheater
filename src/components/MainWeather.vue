<template>
  <section class="mainWeather" v-if="dates!=null">
      <header class="mainWeather__header">
          <button class="mainWeather__button" @click="showSeacher">Search for places</button>
          <span class="mainWeather__location-icon" @click="geo">
              <i class="fas fa-globe"></i>
          </span>
      </header>
      <div class="mainWeather__img">

          
          <img :src=loadImage alt="Imagen del clima">
          <!-- <img :src=loadImage alt="Imagen del clima"> -->
      </div>
      <p class="mainWeather__grade">{{degree}}<span>°c</span></p>
      <p class="mainWeather__timeName">{{timeName}}</p>
      <p class="mainWeather__date">Today - {{date}}</p>
      <p class="mainWeather__city">
          <i class="fas fa-map-marker-alt"></i>
           <span>{{dates.title}}</span>   
      </p>
      <searcher></searcher>
  </section>
</template>

<script>
import {mapActions, mapState} from "vuex"
import Searcher from '@/components/Searcher.vue'
export default {
name:"MainWeather",
components:{
    Searcher
},
computed:{
    ...mapState(['location','geoLoc','dates']),
    show(){
        return this.location[0]
    },
    loadImage(){
        return  require(`../assets/img/${this.dates.consolidated_weather[0].weather_state_abbr}.png`)
    },
    degree(){
        return this.dates.consolidated_weather[0].the_temp.toFixed(1)
    },
    timeName(){
        return  this.dates.consolidated_weather[0].weather_state_name
    },
    date(){
        let parts = this.dates.consolidated_weather[0].applicable_date.split("-")
        let fecha = new Date(parts[0],parts[1]-1,parts[2])
        return fecha.toUTCString().slice(0,11)
    }
},
methods:{
showSeacher(){
        document.querySelector(".searcher").classList.remove("no-visible")
    },
    ...mapActions(['searchLatLon','searchCity','geo'])
},
created(){
    this.geo()
    
    
}
}
</script> 
<style scoped>
.mainWeather{
    
    background-image: url(~@/assets/img/Cloud-background.png);
    background-color: rgb(0,0,0);
    
}
</style>

