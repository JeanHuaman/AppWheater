<template>
  <article class="card">
      <h2 class="card__title">{{currentDay == cardDay ? "Tomorrow" : date}}</h2>
      <div class="card__img">
          <img :src="showImage" alt="Clima">
      </div>
      <p class="card__gradees">
          <span class="card__gradeeMax">{{maxDegree}}°C</span>
          <span class="card__gradeeMin">{{minDegree}}°C</span>
      </p>
  </article>
</template>

<script>
export default {
name:"Card",
props:{
    day:Object
},
computed:{
    showImage(){
        return require(`../assets/img/${this.day.weather_state_abbr}.png`)
    },
    maxDegree(){
        return this.day.max_temp.toFixed(1)
    },
    minDegree(){
        return this.day.min_temp.toFixed(1)
    },
    date(){
        let parts = this.day.applicable_date.split("-")
        let fecha = new Date(parts[0],parts[1]-1,parts[2])
        return fecha.toUTCString().slice(0,11)
    },
    currentDay(){
        return new Date().getDate() + 1
    },
    cardDay(){
        return this.day.applicable_date.slice(-2)
    }
}
}
</script>
