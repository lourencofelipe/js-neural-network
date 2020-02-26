function setup(){
    createCanvas(500, 500);
    background(0);

    // Definindo valores para a matriz.
    let m1 = new Matrix(2, 2);
    let m2 = new Matrix(2, 2);
    Matrix.add(m1, m2);
}

// Executado 30 vezes por segundo.
function draw(){

}