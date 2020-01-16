const yargs = require('yargs')
const geocode = require('./geocode')
const findWeather = require('./weather')



const showWeather = (location) => {
geocode(location, (error,{latitude, longitude, location}) => {
    if(error) {
        console.log(error)
    }else {
        findWeather(latitude, longitude, (error,{temparature,probabilityOfRain}) => {
            if(error) {
                console.log(error)
            } else {
                console.log(`Summary for ${location}. The temperature is ${temparature}, and there is a ${probabilityOfRain}% chances of rain`)
            }
        })

    }
    
})
}

yargs.command({
    command: 'weather',
    describe: 'shows weather for a location',
    builder: {
        location: {
            describe: 'location name',
            type: 'string',
            demandOption: true
        }
    },
    handler({argv}) {
        showWeather(argv.location)

    }
})


yargs.parse()