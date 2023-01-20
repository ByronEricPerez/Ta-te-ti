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
        alert(element0);
        resultado();

    }else{
        icon.classList.add('fa', 'fa-xmark', 'fa-3x');
        btnSelected.style.backgroundColor = '#FEC868';
        btnSelected.style.borderColor = '#473C33';
        element1.push(indiceBtn)
        alert(element1)
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

const resultado = () =>{
    let win = false;
    for(let i = 0 ; i < condicionGanadora.length; i++){
        const winGame = condicionGanadora[i]
        console.log(winGame);
    }
}

let ingreso = [1,2,5,7]

// const ganador = () => {    
//         if(indice[0] === indice[1] && indice[0] === indice[2] && indice[0]){
//             return true
//         }else if(indice[3] === indice[4] && indice[3] === indice[5] && indice[3]){
//             return true
//         }else if(indice[6] === indice[7] && indice[6] === indice[8] && indice[6]){
//             return true
//         }else if(indice[0] === indice[3] && indice[0] === indice[6] && indice[0]){
//             return true
//         }else if(indice[1] === indice[4] && indice[1] === indice[7] && indice[1]){
//             return true
//         }else if(indice[2] === indice[5] && indice[2] === indice[8] && indice[2]){
//             return true
//         }else if(indice[0] === indice[4] && indice[0] === indice[8] && indice[0]){
//             return true
//         }else if(indice[6] === indice[4] && indice[6] === indice[2] && indice[6]){
//             return true
//         }else{
//             return false
//         }
// }


btnAlls.forEach((element, i) => element.addEventListener('click', (e) =>btnActive(e,i)));
