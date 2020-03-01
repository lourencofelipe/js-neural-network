function setup(){
    createCanvas(500, 500);
    background(0);
    
    // Input/Hidden/Output
    var nn = new RedeNeural(2, 3, 2);
    var arr = [1,2];
    
    nn.train(arr, [0,1]);
}

// Executado 30 vezes por segundo.
function draw(){}