function setup(){
    createCanvas(500, 500);
    background(0);

    
    // Rede neural com uma camada de entrada, tres ocultas
    // e uma de saída.
    var nn = new RedeNeural(1, 3, 1);

    console.log(nn);

}

// Executado 30 vezes por segundo.
function draw(){

}