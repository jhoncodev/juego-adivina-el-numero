let generateNumber = 0;
let attempts = 0;
let arrayAleatNumbers = [];
let maxNumber = 10;

// Variable para maximo de juegos
let maxGames = 0;

function asignarTextoElemento(elemento, texto){
    let head = document.querySelector(elemento);
    head.innerHTML = texto;
    return;
}

function verifyNumber(){
    let numberUser = parseInt(document.getElementById('valueUser').value);
    
    if (generateNumber === numberUser){
        asignarTextoElemento('p', `Acertaste en el intento ${attempts}!`)
        // activar el boton nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //Usuario no acertó
        if(generateNumber > numberUser){
            asignarTextoElemento('p', "El número secreto es mayor")
        }else{
            asignarTextoElemento('p', "El número secreto es menor");
        }
        cleanInput();
        attempts++;
    }
    
    return;
}

function generateSecretNumber(){
    let randomNumber =  parseInt(Math.floor(Math.random()*maxNumber)+1);
    
    // Solo podemos jugar 5 veces
    if(maxGames === 5){
        asignarTextoElemento('p', `Se acabó el juego, solo puedes jugar 5 veces!`);
    }else{

        // Si el numero aleatorio esta en el array generamos otro numero sino no
        if(arrayAleatNumbers.includes(randomNumber)){
            return generateSecretNumber();
        }else{
            arrayAleatNumbers.push(randomNumber);
            return randomNumber;
        }
    }
}

function cleanInput(){
    document.getElementById('valueUser').value = "";
    return;
}

function startConditions(){
    asignarTextoElemento('h1', "Juego del número secreto");
    asignarTextoElemento('p', `Ingresa un número entre 1 y ${maxNumber}`);
    generateNumber = generateSecretNumber(); 
    attempts = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
    maxGames++;
    if (maxGames != 6) {
        alert(`Tienes 5 juegos para adivinar el número secreto, vas al ${maxGames == 5 ? "ultimo juego" : `juego ${maxGames}`}`);    
    }
    
}

function restartGame(){
    // Limpiar la caja
    cleanInput();
    // Condiciones iniciales
    startConditions();

}

startConditions();
