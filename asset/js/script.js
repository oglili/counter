let main = document.getElementById('main')

let valore = document.createElement('h2');
valore.innerHTML = 0;
main.appendChild(valore);

let valoreDecrementa = document.createElement('button');
valoreDecrementa.innerHTML = '-';
main.appendChild(valoreDecrementa);

let reset = document.createElement('button');
reset.innerHTML = 'reset';
main.appendChild(reset);

let valoreAumenta = document.createElement('button');
valoreAumenta.innerHTML = '+';
main.appendChild(valoreAumenta);


valoreAumenta.addEventListener('click', ()=>{
    valore.innerHTML++;
    if (valore.innerHTML >= 0) {
        valore.style.color = '';
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
    valore.style.color = '';
});