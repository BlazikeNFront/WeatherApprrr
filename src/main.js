import {getWeather} from './apiServ.js';

const domElements = {};



const eventListeners = ()=>{
    domElements['searchViewInput'].addEventListener('keydown', onEnterSubmit)
    domElements['searchViewButton'].addEventListener('click', onClickSubmit)
   
    domElements['resultViewButton'].addEventListener('click', returnToSearch)
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
        getWeather(city).then(data =>{console.log(data)})
        
    }
    
    }
    const onClickSubmit= () => {
        viewTransition();

        let city = domElements['searchViewInput'].value
       
        getWeather(city).then(data =>{
            console.log(data)
            changeView();
            viewTransition();
        });
        
        
        
    }


const viewTransition = () => {
    if (domElements['containerInterface'].style.opacity ==='1' || domElements['containerInterface'].style.opacity === '') {
      
        domElements['containerInterface'].style.opacity = '0'
    }
    else {
        domElements['containerInterface'].style.opacity ='1'
        
    }
}
const returnToSearch = () => {
    viewTransition();
    setTimeout(()=> {
        changeView();
        viewTransition();
        
    }, 1000)
}

const changeView = () => {

    
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


document.addEventListener('DOMContentLoaded',()=> {
    initializeWeatherApp();
    


})