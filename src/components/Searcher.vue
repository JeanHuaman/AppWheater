<template>
  <aside class="searcher no-visible">
          <button class="closed" @click="hiddenSeacher">x</button>
          <form class="searcher__form">
              <div class="searcher__container">
                <i class="fas fa-search searcher__icon"></i>
                <input type="text" class="searcher__search" placeholder="search location" v-model="citySearch">
              </div>
              <button class="searcher__button" @click.prevent="searchCity(citySearch)">Search</button>
          </form>
          <ul class="listCity">
              <li class="listCity__item" v-for="(city,index) in cities" :key="index" @click="cityForName(city.latt_long)">{{city.title}}<span class="cityArrow">></span></li>              
          </ul>
      </aside>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
name:"Searcher",
data(){
    return{
        citySearch : ""
    }
},
computed:{
    ...mapState(['cities'])
},
methods:{
    ...mapActions(['searchCity','cityForName']),
    hiddenSeacher(){
        document.querySelector(".searcher").classList.add("no-visible")
    }
}
}
</script>

<style>

</style>