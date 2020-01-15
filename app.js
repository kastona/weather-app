const geocode = require('./geocode')
const findWeather = require('./weather')

geocode('jimeta adamawa', (error,data) => {

    debugger
    if(error) {
        console.log(error)
    }else {
        findWeather(data.latitude, data.longitude, (error,weatherObj) => {
            if(error) {
                console.log(error)
            } else {
                console.log(`Summary for ${data.location}. The temperature is ${weatherObj.temparature}, and there is a ${weatherObj.probabilityOfRain}% chances of rain`)
            }
        })

    }
    
})