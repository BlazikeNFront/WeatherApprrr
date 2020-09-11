
const grabDOMElem = (data) =>{
    return document.querySelector(`[data-grab = ${data}]`)
}



export const domElementsWithDataAttribue = (listOfdataInDom) => {
    const domElements = {}

    for (data of listOfdataInDom){
        domElements[data] = grabDOMElem(data);
    }
    console.log(domElements)
    return domElements
}