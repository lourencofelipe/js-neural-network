
// Usar a fórmula matemática da sigmóide para utilizar na função de ativação.
function sigmoid(x){
    // Math.exp() - Constante de Euler e o parâmetro é sua potência.
    return 1/(1 + Math.exp(-x)); 
}

class RedeNeural{
    
    // Input nodes, hidden nodes, output nodes.
    constructor(i_nodes, h_nodes, o_nodes){
       
        this.i_nodes = i_nodes;
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;


        // Definindo valores e "randomizando" os bias e pesos;
        // Matriz que corresponderá ao número de neurônios;
        // BIAS da entrada para a camada oculta;
        this.bias_ih = new Matrix(this.h_nodes, 1);
        this.bias_ih.randomize();
        // BIAS da camada oculta para camada de saída;
        this.bias_ho = new Matrix(this.o_nodes, 1);
        this.bias_ho.randomize();

        // Definindo pesos
        this.weights_ih = new Matrix(this.h_nodes, this.i_nodes);
        this.weights_ih.randomize();

        this.weights_ho = new Matrix(this.o_nodes, this.h_nodes);
        this.weights_ho.randomize();
        
        //this.weights_ho.print();
        //this.weights_ih.print();
    }

    feedforward(input){
     
        // -------- INPUT -> HIDDEN --------
        let input = Matrix.arrayToMatrix(input);
        
        // Multiplicando os pesos pelo input.
        let hidden = Matrix.multiply(this.weights_ih, input);

        // Adicionando o BIAS.
        hidden = Matrix.add(hidden, this.bias_ih);
    
       // Adicionado função de ativação (determinar qual tipo, ex: sigmoide).
       hidden.map(sigmoid);

        // -------- HIDDEN -> OUTPUT --------

        let output = Matrix.multiply(this.weights_ho, hidden);

        output = Matrix.add(output, this.bias_ho);

        output.map(sigmoid);
    }
}