let valore = document.querySelector('#valore');
let valoreDecrementa = document.querySelector('#decrementa');
let valoreAumenta = document.querySelector('#aumenta');


valoreAumenta.addEventListener('click', ()=>{
    valore.innerHTML++;
    if (valore.innerHTML < 0) {
        valore.style.color = 'red'; 
    }else {
        valore.style.color = 'black';
    }    
});

valoreDecrementa.addEventListener('click', ()=>{
    valore.innerHTML--;
    if (valore.innerHTML < 0) {
        valore.style.color = 'red'; 
    }else {
        valore.style.color = 'black';
}
});