import {getWeather} from './apiServ.js';
import {domElementsWithDataAttribue} from './DOMElem.js'

class WeatherApp {
    constructor(){
       this.domElements = domElementsWithDataAttribue();
       
       this.eventListeners();

    }
    
    
    returnToSearch = () => {
        this.viewTransition();
        setTimeout(()=> {
        this.changeView();
        this.viewTransition();
            
        }, 1000)
    }


    eventListeners = ()=> {
        this.domElements['searchViewInput'].addEventListener('click',this.resetInput);
        
        this.domElements['searchViewInput'].addEventListener('keydown',this.actionSubmit);
        this.domElements['searchViewButton'].addEventListener('click', this.actionSubmit);
        this.domElements['resultViewButton'].addEventListener('click', this.returnToSearch);
    }
    resetInput = () => {
        this.domElements['searchViewInput'].value = ''
        this.domElements['searchViewInput'].style.color = 'black';
    }
    actionSubmit = () => {
        if(event.type === 'click' || event.key === 'Enter' ){
            this.onSubmit()
        }
    }

    viewTransition = () => {
        if (this.domElements['containerInterface'].style.opacity ==='1' || this.domElements['containerInterface'].style.opacity === '') {
          
            this.domElements['containerInterface'].style.opacity = '0'
        }
        else {
            this.domElements['containerInterface'].style.opacity ='1'
            
        }
    }
    changeView = () => {

    
        if( this.domElements['searchView'].style.display === 'none'){
           
            this.domElements['searchView'].style.display = 'block';
            this.domElements['resultView'].style.display = 'none';
            return
        }
        if(this.domElements['resultView'].style.display !== 'flex'){
            
            this.domElements['resultView'].style.display = 'flex';
            this.domElements['searchView'].style.display = 'none';
            return
        }
    }
    onSubmit= () => {
        this.viewTransition();
      
        let city = this.domElements['searchViewInput'].value
       
        getWeather(city).then(data =>{
            this.domElements['searchViewInput'].style.border ='2px solid black';
            this.domElements['city'].innerText = data['title'];
            this.domElements['currentTemperetures'].innerText = `Current temperature : ${data['consolidated_weather'][0]['the_temp'].toFixed(1)}°C`;
            this.domElements['weatherIcon'].src = `https://www.metaweather.com/static/img/weather/${data['consolidated_weather'][0]['weather_state_abbr']}.svg`;
            this.domElements['highestTemp'].innerText = `Highest temperature: ${data['consolidated_weather'][0]['max_temp'].toFixed(1)}°C`;
            this.domElements['lowestTemp'].innerText = `Lowest temperature: ${data['consolidated_weather'][0]['min_temp'].toFixed(1)}°C`;
            
            this.changeView();
            this.viewTransition();
        }).catch(()=>{
        this.viewTransition();
        this.domElements['searchViewInput'].style.border ='2px solid red';
        this.domElements['searchViewInput'].value = 'Incorrect city name'; });
        
        
        
       
    }
   

}











const initializeWeatherApp = () => {
    connectDOMElem();
    eventListeners();
    
}








document.addEventListener('DOMContentLoaded',()=> {
    new WeatherApp();

})