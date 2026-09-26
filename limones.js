let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
let personajeX=canvas.width/2;
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);
let velocidadCaida=200;
let limonX=canvas.width/2;
let limonY=6;
let puntaje=0;
let vidas=3;
let intervaloJuego;
const ANCHO_LIMON=20;
const ALTURA_LIMON=20;


function dibujarSuelo(){
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle="white";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE);

}

function iniciar(){
    intervaloJuego = setInterval(bajarLimon, velocidadCaida);
    generarAleatorio();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
    aparecerLimon();

}

function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarCanva();
}    

function moverDerecha(){
    personajeX=personajeX+10;
    actualizarCanva();
}

function actualizarCanva(){

    limpiarCanvas();
    dibujarSuelo()
    dibujarPersonaje();
    dibujarLimon();
}


function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}


function dibujarLimon(){
    ctx.fillStyle="green";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON);
}



function bajarLimon(){
    limonY=limonY+10
    actualizarCanva();
    colision();
    perderVidas();
    detectarVelocidad();
    clearInterval(intervaloJuego);
    intervaloJuego = setInterval(bajarLimon, velocidadCaida);
}

function colision(){
    if (limonX+ANCHO_LIMON>personajeX &&
        limonX<personajeX+ANCHO_PERSONAJE &&
        limonY+ALTURA_LIMON>personajeY &&
        limonY<personajeY+ALTURA_PERSONAJE){
        ///alert("atrapado")
        aparecerLimon();
        puntaje=puntaje+1;
        let componente=document.getElementById("txtPuntaje");
        componente.textContent=puntaje;
        detectarVelocidad();

    }


}

function perderVidas(){
    if (limonY+ALTURA_LIMON==canvas.height-20){
        vidas=vidas-1;
        let componente1=document.getElementById("txtVidas");
        componente1.textContent=vidas;
        aparecerLimon()
        if (vidas<=0){
            alert("GAME OVER")
            location.reload();
        }
    }

}


function detectarVelocidad(){
    if(puntaje==3){
        velocidadCaida=150;
    } else if (puntaje==6){
        velocidadCaida=100;
    }else if (puntaje==10){
        alert("ERES EL GANADOR, si la vida te da limones...");
        location.reload();//preferi colocar esta funcion para recargar la pagina para volver a comenzar el juego y que no se pare
    }


}

function generarAleatorio(){
    let numeroEntrero= parseInt(Math.random()*(601-ANCHO_LIMON));
    return numeroEntrero;
}



function aparecerLimon(){
    limonX=generarAleatorio();
    limonY=0;
    actualizarCanva();
}