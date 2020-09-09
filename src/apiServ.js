

 export const getWeather = (city) => {
  return  fetch(`https://www.metaweather.com/api/location/search/?query=${city}`)
            .then(respone => respone.json())
            .then(data => {
              
             return fetch(`https://www.metaweather.com/api/location/${data[0][`woeid`]}`)
                   .then(respone =>respone.json())
                  .then(data => { return data})
                    })
        
    }

