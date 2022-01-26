let valore = document.querySelector('#valore');
let valoreDecrementa = document.querySelector('#decrementa');
let valoreAumenta = document.querySelector('#aumenta');
let reset = document.querySelector('#reset');


valoreAumenta.addEventListener('click', ()=>{
    valore.innerHTML++;
    if (valore.innerHTML >= 0) {
        valore.style.color = 'black';
    }    
});

valoreDecrementa.addEventListener('click', ()=>{
    valore.innerHTML--;
    if (valore.innerHTML < 0) {
        valore.style.color = 'red'; 
    }
});

reset.addEventListener('click', ()=>{
    valore.innerHTML = 0;
});