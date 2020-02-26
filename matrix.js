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

    map(func){
        this.data = this.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i, j);
            });
        });
    }

    // Função para adicionar as matrizes.
    static add(A, B){
        var matrix = new Matrix(A.rows,A.cols);
        console.log(A.data);
        console.log(B.data);
        matrix.map((elem, i, j) =>{
            // Somando as matrizes
            return A.data[i][j] + B.data[i][j];
        });
        console.log(matrix.data);
    }
}