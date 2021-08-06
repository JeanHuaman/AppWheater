<template>
<div class="body">
  <main-weather></main-weather>
  <main class="main">
    <cards-weather></cards-weather>
    <information-weather></information-weather>
    <footer class="footer">create by <span class="author">Jean Huaman</span> - devChallenges.io</footer>
  </main>
</div>
</template>

<script>
import CardsWeather from './components/CardsWeather.vue'
import MainWeather from './components/MainWeather.vue'
import InformationWeather from '@/components/InformationWeather'

export default {
  name: 'App',
  components: {
    MainWeather,
    CardsWeather,
    InformationWeather
    
  }
}
</script>


