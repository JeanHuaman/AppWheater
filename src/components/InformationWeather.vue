<template>
  <section class="information" v-if="dates">
      <h3 class="information__title">Today's Hightlights</h3>
      <article class="information__status informationCard">
          <h3 class="information__subtitle">Wind status</h3>
          <p class="information__value">{{windStatus}}<span>mph</span></p>
          <p >
              <i class="fas fa-location-arrow information__icon"></i>
              <span>{{windDirection}}</span>
          </p>
      </article>
      <article class="information__humidity informationCard">
          <h3 class="information__subtitle">Humidity</h3>
          <p class="information__value">{{humidity}}<span>%</span></p>
          <div class="barProgress">
              <div class="barContent" :style="styleHumidity"></div>
              <span class="barValue">50</span>
          </div>
      </article>
      <article class="information__visibility informationCard">
          <h3 class="information__subtitle">Visibility</h3>
          <p class="information__value">{{visibility}} <span>miles</span></p>
      </article>
      <article class="information__air-pressure informationCard">
          <h3 class="information__subtitle">Air Pressure</h3>
          <p class="information__value">{{airPressure}} <span>mb</span> </p>
      </article>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
name:"InformationWeather",
computed:{
    ...mapState(['dates']),
    windStatus(){
        return this.dates.consolidated_weather[0].wind_speed.toFixed(1)
    },
    windDirection(){
        return this.dates.consolidated_weather[0].wind_direction_compass
    },
    humidity(){
        return this.dates.consolidated_weather[0].humidity
    },
    styleHumidity(){
        return `width:${(this.dates.consolidated_weather[0].humidity*0.2).toFixed(1)}rem`
    },
    visibility(){
        return this.dates.consolidated_weather[0].visibility.toFixed(2)
    },
    airPressure(){
        return this.dates.consolidated_weather[0].air_pressure
    }
    
}
}
</script>
