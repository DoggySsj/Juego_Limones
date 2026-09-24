let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
const ALTURA_SUELO=40;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
let personajeX=canvas.width/2;

let limonX=canvas.width/2;
let limonY=6;

const ANCHO_LIMON=20;
const ALTURA_LIMON=20;


function dibujarSuelo(){
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle="white";
    ctx.fillRect(personajeX,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);

}

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();

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
}
