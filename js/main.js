// assegno e definisco le variabili
let randomList = [];
const numberContainerEl = document.querySelector (".number-container");
let numberFoundEl = document.querySelector (".tot-numeri-trovati");
let idFoundNumEl = document.querySelector (".id-num-trovati");
let inputFirst;
let inputSecond;
let inputThird;
let inputFourth;
let inputFifth;
let foundNumbers = [];


// genero un insieme di cinque numeri casuali
function generateRandomNumber ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

function generateRandomList (x, y) {
    
    randomList = [];


    while ( randomList.length < 5 ) {

        const randomNum = generateRandomNumber( x, y );
    
        if ( !randomList.includes( randomNum ) ) {

        randomList.push( randomNum );
        }

    }

}

// invoco la funzione
generateRandomList(1, 100);

console.log(randomList);

// stampo in html il risultato di random list
numberContainerEl.innerHTML = randomList;

setTimeout(timer, 30000);

function timer () {
    numberContainerEl.innerHTML = "";

    inputFirst = prompt("inserisci il primo numero della serie");
    if (randomList.includes(parseInt(inputFirst))) {
        foundNumbers.push ( inputFirst ) ;
    } 
    console.log(foundNumbers);
    inputSecond = prompt("inserisci il secondo numero della serie");
    if (randomList.includes(parseInt(inputSecond))) {
        foundNumbers.push ( inputSecond ) ;
    } 
    console.log(foundNumbers);
    inputThird = prompt("inserisci il terzo numero della serie");
    if (randomList.includes(parseInt(inputThird))) {
        foundNumbers.push ( inputThird ) ;
    } 
    console.log(foundNumbers);
    inputFourth = prompt("inserisci il quarto numero della serie");
    if (randomList.includes(parseInt(inputFourth))) {
        foundNumbers.push ( inputFourth ) ;
    } 
    console.log(foundNumbers);
    inputFifth = prompt("inserisci il quinto89 numero della serie");
    if (randomList.includes(parseInt(inputFifth))) {
        foundNumbers.push ( inputFifth ) ;
    } 
    console.log(foundNumbers);
    
    numberFoundEl.innerHTML = foundNumbers.length;
    idFoundNumEl.innerHTML = foundNumbers;
}



