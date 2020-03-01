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
                arr.push(0);
            }
            this.data.push(arr);
        }
    } 

    // Funções diversas

    static arrayToMatrix(arr){
       // Recupera o array e transforma em um objeto.
       let matrix = new Matrix(arr.length, 1);
        matrix.map((elem, i, j) => {
            return arr[i];
        });
        return matrix;
    }

    static matrixToArray(obj){
        let arr = [];
        obj.map((elem, i, j) => {
            arr.push(elem);
        });
        return arr;
     }

    print(){
        console.table(this.data);
    }

    randomize(){
        this.map((elem, i, j) => {
           return Math.random() * 2 - 1;
        });
    }

    // Mapeamento usado para função de ativação.
    static map(A, func) {
        let matrix = new Matrix(A.rows, A.cols);

        matrix.data = A.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i, j);
            })
        })

        return matrix;
    }

    map(func){
        this.data = this.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i, j);
            });
        });

        return this;
    }

    // Mariz transposta.
    static transpose(A) {
        var matrix  = new Matrix(A.cols, A.rows);
        matrix.map((num, i, j) => {
            return A.data[j][i];
        });
        return matrix;
    }

    // Operações estáticas matriz x escalar.
     
    static escalar_multiply(A, escalar){
        var matrix = new Matrix(A.rows, A.cols);
        matrix.map((elem, i, j) => {
            return A.data[i][j] * escalar;
        });
        return matrix;
    }


    // Operações estáticas matriz x matriz.

    static hadamard(A, B){
       
        // Porduto de matrizes de mesma dimensão.
        var matrix = new Matrix(A.rows, A.cols);
        matrix.map((elem, i, j) => {
            // Multiplicação elemento por elemento.
            return A.data[i][j] * B.data[i][j]; 
        });
        return matrix;
    }

    // Adição de matrizes.
    static add(A, B){
        var matrix = new Matrix(A.rows, A.cols);
        matrix.map((elem, i, j) =>{
            return A.data[i][j] + B.data[i][j];
        });
        return matrix;
    }
    
    // Subtração de matrizes.
    static subtract(A, B){
        var matrix = new Matrix(A.rows, A.cols);
        matrix.map((elem, i, j) =>{
            return A.data[i][j] - B.data[i][j];
        });
        return matrix;
    }

    // Produto entre matrizes.
    static multiply(A, B){
        var matrix = new Matrix(A.rows, B.cols);

        matrix.map((num, i, j) => {
            let sum = 0;

            for(let k=0; k<A.cols; k++){
                let elem1 = A.data[i][k]; // Segue em direcao a coluna.
                let elem2 = B.data[k][j]; // Segue em direcao a linha.

                sum += elem1 * elem2; // Multiplica e soma uma linha por uma coluna.
            }
            return sum;
        });
        return matrix;
    }
}