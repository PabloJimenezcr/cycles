
const inputName = document.querySelector('.inputName');
const printResult = document.querySelector('.printResult');
const btnSearch = document.querySelector('.btnSearch');
const btnSearchWhile = document.querySelector('.btnSearchWhile');





function cycleFor() {

    let name = inputName.value;
    let nameOfArray = ['Pedro', 'Lucia', 'Juan', 'Mario', 'Pablo', 'Jesus'];

    for (let i = 0; i < nameOfArray.length; i++) {
        if (name === nameOfArray[i]) {
            printResult.textContent = 'El nombre buscado de la lista es: ' + name;
            printResult.classList('printResult');
            console.log('Imprimiendo a Mario desde el ciclo for');
        }
        else {
            printResult.textContent = 'No se encontro el nombre en la lista';
        }
    }
}

function cycleDoWhile() {

    let days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    let daysNumber = days.length - 1;

    let i = 0;
    while (i <= daysNumber) {
        console.log(days[i]);
        i++;
    }
}

btnSearch.addEventListener('click', cycleFor);
btnSearchWhile.addEventListener('click', cycleDoWhile);



