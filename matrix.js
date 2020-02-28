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
                arr.push(0);
            }
            this.data.push(arr);
        }
    } 

    print(){
        console.table(this.data);
    }

    randomize(){
        this.map((elem, i, j) => {
            return Math.random() * 2 - 1;
        });
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
        matrix.map((elem, i, j) =>{
            // Somando as matrizes
            return A.data[i][j] + B.data[i][j];
        });
        return matrix;
    }

    // Função para multiplicar as matrizes.
    static multiply(A, B){
        var matrix = new Matrix(A.rows, B.cols);

        matrix.map((num, i, j) => {
            let sum = 0;

            for(let k=0; k<B.rows; k++){
                let elem1 = A.data[i][k]; // Segue em direcao a coluna.
                let elem2 = B.data[k][j]; // Segue em direcao a linha.

                sum += elem1 * elem2; // Multiplica e soma uma linha por uma coluna.
            }
            return sum;
        });
        return matrix;
    }
}