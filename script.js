let product = document.querySelector('.product')

let frame = 0;


window.addEventListener ('wheel', (event) =>{

    //event.deltaY
    product.style.cssText = "background-position-x: calc("+ Math.floor(frame) +" * -730px);";
    frame += 0.1;
    if(frame > 4) frame = 0;
    
})
