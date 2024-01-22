let numeroMaximo = 10;
let numeroSecreto = 0;
let intentosMaximo = 4;
let intentos = 0;
let numerosUsados = [];

function generarNumeroSecreto(numeroMaximo) {
    numeroEscogido = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numerosUsados);
    console.log(numeroSecreto);

    if (numerosUsados.length == numeroMaximo) {
        asignarTextoElemento('p', "Ya no me quedan números papu :'v");
        document.querySelector('#intentar').setAttribute('disabled', true);
        document.getElementById('numeroUsuario').setAttribute('disabled', true);
    } else {
        if (numerosUsados.includes(numeroEscogido)) {
            return generarNumeroSecreto(numeroMaximo);
        } else {
            numerosUsados.push(numeroEscogido);
            return numeroEscogido;
        }
    }
    
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;    
}

function limpiarCaja() {
    document.querySelector('#numeroUsuario').value = '';
}

function verificaIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);
    intentos += 1;
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        limpiarCaja();
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }    
    }
    verificarNumeroIntentos(intentos, intentosMaximo);
    return;
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'JUEGO DEL NÚMERO SECRETO');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    document.querySelector('#intentar').removeAttribute('disabled');
    document.getElementById('numeroUsuario').removeAttribute('disabled');
    numeroSecreto = generarNumeroSecreto(numeroMaximo);
    intentos = 0;    
}

function reiniciarJuego() {
    //Limpiar Caja
    limpiarCaja();

    //Setear condiciones iniciales
    condicionesIniciales();

    //Deshabilitar boton reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function verificarNumeroIntentos (numeroIntentos, intentosMaximo) {
    if (numeroIntentos == intentosMaximo) {
        asignarTextoElemento('p', "Ya no te quedan intentos papu :'v");
        document.querySelector('#reiniciar').removeAttribute('disabled');
        document.querySelector('#intentar').setAttribute('disabled', true);
        document.getElementById('numeroUsuario').setAttribute('disabled', true);
    }
}

condicionesIniciales();
