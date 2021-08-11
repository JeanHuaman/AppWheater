import { createStore } from 'vuex'

export default createStore({
  state: {
    location : [],
    cities : [],
    dates : null,
    geoLoc : null
  },
  mutations: {
    setLocation(state,payload){
      state.location.length = 0
      state.location.push(payload)
    },
    setCities(state,payload){
      state.cities = [...payload]
    },
    setGeo(state,payload){
      state.geoLoc = payload
    },
    setDates(state,payload){
      state.dates=payload
    }
  },
  actions: {
    async searchLatLon({commit,state},datos){
      try{

        const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${datos.latitud || -12.043600},${datos.longitud || -77.021217}`,{
          mode:"cors"
        }),
        data = await res.json();
        commit("setLocation",data[0])
      } catch(err){
        console.log(err)
      }
       
    },
    async searchCity({commit,state},city){
      try{

        const data = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`,{
          mode:"cors"
        }),
        array= await data.json();
        commit("setCities",array)
        
      }catch(err){
        console.log(err)
      }      
    },
    async searchForId({commit},id){
      try{

        const data = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`,{
          mode:"cors"
        }),
        dates = await data.json();
        commit("setDates",dates)
        
      }catch(err){
        console.log(err)
      }
    },
    geo({dispatch,commit,state}){
      
      const options = {
          enableHighAccuracy :true,
          timeout : 5000,
          maximunAge :0,
      }
       const success= async (positions)=>{
         try{

           commit("setGeo",positions.coords)
           await dispatch("searchLatLon",{latitud:state.geoLoc.latitude,longitud:state.geoLoc.longitude})
           await dispatch("searchForId",state.location[0].woeid)  
           
          }catch(err){
            console.log(err)
          }
      }
      
      function error(err){
          console.log(err)
      }
      navigator.geolocation.getCurrentPosition(success,error,options)
      
  },
  async cityForName({dispatch,commit,state},cityName){
    try{
      let datos = cityName.split(",")
      await dispatch("searchLatLon",{latitud:datos[0],longitud:datos[1]})
      await dispatch("searchForId",state.location[0].woeid)
    }catch(err){
      console.log(err)
    }
  }
  },
  modules: {
  }
})
