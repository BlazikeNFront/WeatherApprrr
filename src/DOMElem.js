



export  const domElementsWithDataAttribue = () => {
        
    
    for (let item of listOfAttributes){
        const domElements = {}
        domElements[item] = document.querySelector(`[data-grab ='${item}']`);
    }
    console.log(domElements)
    return domElements
}
