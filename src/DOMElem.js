

export   const domElementsWithDataAttribue = () =>  {
    const listOfAttributes = Array.from(document.querySelectorAll('[data-grab]')).map(item =>item.getAttribute('data-grab'));
    const domElements = {}
    for (let item of listOfAttributes){
        
        domElements[item] = document.querySelector(`[data-grab ='${item}']`);
    }
    
    return domElements
}
