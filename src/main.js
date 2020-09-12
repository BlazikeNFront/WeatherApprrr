import {getWeather} from './apiServ.js';
//import {domElementsWithDataAttribue} from './DOMElem.js'

class WeatherApp {
    constructor(){
        this.domElements = {};
       // this.connectDOMElem();
     //  this.domElementsWithDataAttribue();
    }
    
    connectDOMElem = ()=> {
       
        
        
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
   const listOfAttributes = Array.from(document.querySelectorAll('[data-grab]')).map(item =>item.getAttribute('data-grab'));
  


 //code below create object domElements with all elements that have data attribue... u can access them by their attributes values... for example domElements['weatherIcon'] u should move it to DOMElem file and see if it will work in class constructor
    const domElementsWithDataAttribue = () => {
        
    
        for (let item of listOfAttributes){
            const domElements = {}
            domElements[item] = document.querySelector(`[data-grab ='${item}']`);
        }
        console.log(domElements)
        return domElements
    }
   
    


})