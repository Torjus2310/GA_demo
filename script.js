let product = document.querySelector('.product')
let orderBtn = document.querySelector('#order-button')


let frame = 0;


window.addEventListener ('wheel', (event) =>{

    //event.deltaY
    product.style.cssText = "background-position-x: calc("+ Math.floor(frame) +" * -730px);";
    frame += 0.1;
    if(frame > 4) frame = 0;
    
})



orderBtn.addEventListener('mousedown',handleOrderClick);

function handleOrderClick(event) {
    console.log('knappen var trykket');
    gtag('event', 'Order Click', {
        'event_category': 'order test',
        'event_label': 'order event happened'
    });
}
