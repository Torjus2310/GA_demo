let product = document.querySelector('.product')



window.addEventListener ('wheel', (event) =>{

    event.deltaY
    product.style.cssText = "background-position-x: calc(1 * -730px)"    
    
})
