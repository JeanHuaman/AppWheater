<template>
  <section class="cards" v-if="dates">
    <Card v-for="(card,index) in daysWeather" :day="card" :key="index" ></Card>
  </section>
</template>

<script>
import Card from '@/components/Card'
import { mapState } from 'vuex'
export default {
name:"CardsWeather",
data(){
  return{
    nextDays:[]
  }
},
components:{
    Card
},
computed:{
  ...mapState(['dates']),
  daysWeather(){
    this.nextDays = [...this.dates.consolidated_weather]
    this.nextDays.shift()
    return this.nextDays
  }
}
}
</script>

<style>

</style>