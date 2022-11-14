// assegno e definisco le variabili
let randomList = [];
const numberContainerEl = document.querySelector (".number-container");


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
    prompt("inserisci il primo numero della serie");
}



