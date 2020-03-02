var train = true;
function setup(){
    createCanvas(500, 500);
    background(0);
    
    // Input/Hidden/Output
    nn = new RedeNeural(2, 3, 1);

    // XOR Problem
   dataset = {
    inputs:
        [[1, 1],
        [1, 0],
        [0, 1],
        [0, 0]],
    outputs:
        [[0],
        [1],
        [1],
        [0]]
    };
}


function draw() {
   
    if(train) {
        // A cada segundo, será  feito 10k treinos.
        for (var i = 0; i < 10000; i++) {
            var index = floor(random(4));
            // Será atribuído um index randomico e atruido as entradas e saídas.
            nn.Train(dataset.inputs[index], dataset.outputs[index]);
        }
        // Caso o valor de entrada de [0, 0] for menor que 0.04 e entrada de [1, 0] for menor maior que 0.98, encerra o processo.
        if (nn.predict([0, 0])[0] < 0.04 && nn.predict([1, 0])[0] > 0.98) {
            train = false;
            console.log("terminou");
        }
    }
}