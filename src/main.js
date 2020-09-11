import {getWeather} from './apiServ.js';
import {domElementsWithDataAttribue} from './DOMElem.js'

class WeatherApp {
    constructor(){
        this.domElements = {};
        this.connectDOMElem();
        //this.eventListeners();
        
    }
    // u need to grab by data not by id
    connectDOMElem = ()=> {
       
        const listOfdataInDom = document.dataset;
        console.log(listOfdataInDom)
        this.domElements = domElementsWithDataAttribue(listOfdataInDom);
    }
    returnToSearch = () => {
        this.viewTransition();
        this.setTimeout(()=> {
            this.changeView();
            this.viewTransition();
            
        }, 1000)
    }


    eventListeners = ()=> {
        this.domElements['searchViewInput'].addEventListener('keydown',this.actionSubmit);
        this.domElements['searchViewButton'].addEventListener('click', this.actionSubmit);
        this.domElements['resultViewButton'].addEventListener('click', this.returnToSearch);
    }

    actionSubmit = () => {
        if(event.type === 'click' || event.key === 'Enter' ){
            this.onSubmit()
        }
    }

    viewTransition = () => {
        if (domElements['containerInterface'].style.opacity ==='1' || domElements['containerInterface'].style.opacity === '') {
          
            domElements['containerInterface'].style.opacity = '0'
        }
        else {
            domElements['containerInterface'].style.opacity ='1'
            
        }
    }
    changeView = () => {

    
        if( domElements['searchView'].style.display === 'none'){
           
            domElements['searchView'].style.display = 'block';
            domElements['resultView'].style.display = 'none';
            return
        }
        if(domElements['resultView'].style.display !== 'flex'){
            
            domElements['resultView'].style.display = 'flex';
            domElements['searchView'].style.display = 'none';
            return
        }
    }
    onSubmit= () => {
        this.viewTransition();
      
        let city = domElements['searchViewInput'].value
       
        getWeather(city).then(data =>{
           
            domElements['city'].innerText = data['title'];
            domElements['currentTemperetures'].innerText = `Current temperature : ${data['consolidated_weather'][0]['the_temp'].toFixed(1)}°C`;
            domElements['weatherIcon'].src = `https://www.metaweather.com/static/img/weather/${data['consolidated_weather'][0]['weather_state_abbr']}.svg`;
            domElements['highestTemp'].innerText = `Highest temperature: ${data['consolidated_weather'][0]['max_temp'].toFixed(1)}°C`;
            domElements['lowestTemp'].innerText = `Lowest temperature: ${data['consolidated_weather'][0]['min_temp'].toFixed(1)}°C`;
            
            this.changeView();
            this.viewTransition();
        });
        
        
       
    }
   

}

// u need to do list of data grab properties - document dataset and then grab in for loop elements and select DOM elements using backticks ` ` and passing  variable into it 
console.log(document.querySelector(`[data-grab = 'resultViewButton'`))


/*const eventListeners = ()=>{
    domElements['searchViewInput'].addEventListener('keydown', onEnterSubmit)
    domElements['searchViewButton'].addEventListener('click', onClickSubmit)
   
    domElements['resultViewButton'].addEventListener('click', returnToSearch)
}*/


/*function scriptDOMElem(item) {
   return domElements[item] = document.querySelector(`[data-${item}]`); 
}
*/
/*const connectDOMElem = () => {
    scriptDOMElem('containerInterface');
    scriptDOMElem('searchView');
    scriptDOMElem('searchViewInput');
    scriptDOMElem('searchViewButton');
    scriptDOMElem('resultView');
    scriptDOMElem('resultViewButton');
    scriptDOMElem('city');
    scriptDOMElem('weatherIcon');
    scriptDOMElem('highestTemp');
    scriptDOMElem('lowestTemp');
    scriptDOMElem('resultInfo');
    scriptDOMElem('currentTemperetures');
    
    
    

}*/





const initializeWeatherApp = () => {
    connectDOMElem();
    eventListeners();
    
}


const onEnterSubmit = event => {
    if (event.key === "Enter") {
        viewTransition();
        let city = domElements['searchViewInput'].value
        getWeather(city).then(data =>{console.log(data)
        
            domElements['city'].innerText = data['title'];
            domElements['currentTemperetures'].innerText = `Current temperature : ${data['consolidated_weather'][0]['the_temp'].toFixed(1)}°C`;
            domElements['weatherIcon'].src = `https://www.metaweather.com/static/img/weather/${data['consolidated_weather'][0]['weather_state_abbr']}.svg`;
            domElements['highestTemp'].innerText = `Highest temperature: ${data['consolidated_weather'][0]['max_temp'].toFixed(1)}°C`;
            domElements['lowestTemp'].innerText = `Lowest temperature: ${data['consolidated_weather'][0]['min_temp'].toFixed(1)}°C`;
            console.log(data)
            changeView();
            viewTransition();
        })
        
    }
    
    }
    const onClickSubmit= () => {
        viewTransition();
      
        let city = domElements['searchViewInput'].value
       
        getWeather(city).then(data =>{
           
            domElements['city'].innerText = data['title'];
            domElements['currentTemperetures'].innerText = `Current temperature : ${data['consolidated_weather'][0]['the_temp'].toFixed(1)}°C`;
            domElements['weatherIcon'].src = `https://www.metaweather.com/static/img/weather/${data['consolidated_weather'][0]['weather_state_abbr']}.svg`;
            domElements['highestTemp'].innerText = `Highest temperature: ${data['consolidated_weather'][0]['max_temp'].toFixed(1)}°C`;
            domElements['lowestTemp'].innerText = `Lowest temperature: ${data['consolidated_weather'][0]['min_temp'].toFixed(1)}°C`;
            console.log(data)
            changeView();
            viewTransition();
        });
        
        
        
    }


/*const viewTransition = () => {
    if (domElements['containerInterface'].style.opacity ==='1' || domElements['containerInterface'].style.opacity === '') {
      
        domElements['containerInterface'].style.opacity = '0'
    }
    else {
        domElements['containerInterface'].style.opacity ='1'
        
    }
}*/
/*const returnToSearch = () => {
    viewTransition();
    setTimeout(()=> {
        changeView();
        viewTransition();
        
    }, 1000)
}*/

/*const changeView = () => {

    
    if( domElements['searchView'].style.display === 'none'){
       
        domElements['searchView'].style.display = 'block';
        domElements['resultView'].style.display = 'none';
        return
    }
    if(domElements['resultView'].style.display !== 'flex'){
        
        domElements['resultView'].style.display = 'flex';
        domElements['searchView'].style.display = 'none';
        return
    }
}*/


document.addEventListener('DOMContentLoaded',()=> {
    new WeatherApp();
    


})