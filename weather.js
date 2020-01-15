const request = require('request')

findWeather = (longitude, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/c9d243e47a7f2c924c696dd15d653ab4/${longitude},${latitude}?units=si`

    request({url: url, json: true}, (error, response, body) => {
        if(error) {
            callback('Unable to connect', undefined)
        }else if(body.error) {
            callback('unable to find location', undefined)
        } else {
            const temparature = body.currently.temperature
            const probabilityOfRain = body.currently.precipProbability

            callback(undefined,{temparature, probabilityOfRain})
        }
        
    })
}

module.exports = findWeather