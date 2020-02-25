// Classe principal para organizar as matrizes
class Matrix {
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;

        // Array 'superior' para armazenar o array multidimensional/matriz.
        this.data = [];

        for(let i=0; i < rows; i++){
            let arr = [];
            for(let j=0; j < cols; j++){
                // Incialmente adicionado valores randômicos.
                arr.push(Math.floor(Math.random() *10));
            }
            this.data.push(arr);
        }
    } 
}