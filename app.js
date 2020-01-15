const request = require('request')

const url = 'https://api.darksky.net/forecast/c9d243e47a7f2c924c696dd15d653ab4/37.8267,-122.4233?units=si'

request({url: url, json: true}, (error, response, body) => {
    if(error) {
        console.log('Unable to connect')
    }else if(body.error) {
        console.log('Unable to find location')
    } else {
        const temparature = body.currently.temperature
    const probabilityOfRain = body.currently.precipProbability

    console.log(body.daily.data[0].summary + ` It is currently ${temparature} degrees out here. There is a ${probabilityOfRain}% probability of rain`) 
    }
    
})

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/adamawa%20Nigeria.json?access_token=pk.eyJ1Ijoia2FzdG9uYSIsImEiOiJjazVmMGU4bnQwNHB3M2VwZjF0YTB0Y3BnIn0.J3OsJ5uiPyZx5aoKioK-rw&limit=1'
request({url: geoUrl, json:true},(error, reponse, body) => {
    
    if(error) {
        console.log('Unable to connect')
    }else if (body.features.length < 1) {
        console.log('City not known')
    } else {
        const obj = body.features[0].center
    console.log(`The latitude is ${obj[0]} and longitude is ${obj[1]}`)
    }
    
    
})