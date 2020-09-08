import {getWeather} from './apiServ.js';

const domElements = {};



const eventListeners = ()=>{
    domElements['searchViewInput'].addEventListener('keydown', onEnterSubmit)
    domElements['searchViewButton'].addEventListener('click', onClickSubmit)
    domElements['resultViewButton'].addEventListener('keydown', onEnterSubmit)
    domElements['resultViewButton'].addEventListener('click', onClickSubmit)
}


function scriptDOMElem(item) {
   return domElements[item] = document.querySelector(`[data-${item}]`); 
}

const connectDOMElem = () => {
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
    scriptDOMElem('data-currentTemperetures');
    
    
    

}





const initializeWeatherApp = () => {
    connectDOMElem();
    eventListeners();
    
}


const onEnterSubmit = event => {
    if (event.key === "Enter") {
        let city = domElements['searchViewInput'].value
        getWeather(city)
    }
    
    }
    const onClickSubmit= () => {
    
    }


document.addEventListener('DOMContentLoaded',initializeWeatherApp)