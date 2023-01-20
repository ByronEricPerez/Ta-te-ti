let contadorClick = 0;
let element1 = [];
let element0 = [];
let indiceBtn;

const btnAlls = document.querySelectorAll('.btn');      

const btnActive = function(e, i){
    contadorClick++;
    const btnSelected = (e.target);
    const icon = btnSelected.querySelector('i');
    indiceBtn = i;
    if(contadorClick % 2 === 0){
        icon.classList.add('fa-regular', 'fa-circle', 'fa-3x');
        btnSelected.style.backgroundColor = '#FDA769';
        btnSelected.style.borderColor = '#473C33';
        element0.push(indiceBtn);
        resultado1(element0);

    }else{
        icon.classList.add('fa', 'fa-xmark', 'fa-3x');
        btnSelected.style.backgroundColor = '#FEC868';
        btnSelected.style.borderColor = '#473C33';
        element1.push(indiceBtn)
        resultado2(element1);
    }
}

const condicionGanadora = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
];

const resultado1 = (element0) =>{
    for (let i = 0; i < condicionGanadora.length; i++) {
        let win = true;
        for (let j = 0; j < condicionGanadora[i].length; j++) {
            if (!element0.includes(condicionGanadora[i][j])) {
                win = false;
                break;
            }
        }
        if (win) {
            console.log("ganaste");
            return;
        }
    }
}

const resultado2 = (element1) =>{
    for (let i = 0; i < condicionGanadora.length; i++) {
        let win = true;
        for (let j = 0; j < condicionGanadora[i].length; j++) {
            if (!element1.includes(condicionGanadora[i][j])) {
                win = false;
                break;
            }
        }
        if (win) {
            console.log("ganaste");
            return;
        }
    }
}

btnAlls.forEach((element, i) => element.addEventListener('click', (e) =>btnActive(e,i)));
