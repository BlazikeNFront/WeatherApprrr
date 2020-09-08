

 export const getWeather = (city) => {
  return  fetch(`https://www.metaweather.com/api/location/search/?query=${city}`)
            .then(respone => respone.json())
            .then(data => {
                  console.log(data)
                    })
    
}

