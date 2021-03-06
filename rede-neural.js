
// Usar a fórmula matemática da sigmóide para utilizar na função de ativação.
function sigmoid(x){
    // Math.exp() - Constante de Euler e o parâmetro é sua potência.
    return 1/(1 + Math.exp(-x)); 
}

// Derivada da sigmoide, utilizada para o Backpropagation.
function dSigmoid(x){
    return x * (1 - x);
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
    
        // Atribuindo o valor ao learning rate.
        this.learning_rate = 0.1;
        
    }

   // Array de entrada e um array de saída;
    Train(arr, target) {

        // -------- INPUT -> HIDDEN --------
        let input = Matrix.arrayToMatrix(arr);
                
        // Multiplicando os pesos pelo input.
        let hidden = Matrix.multiply(this.weights_ih, input);

        // Adicionando o BIAS.
        hidden = Matrix.add(hidden, this.bias_ih);

        // Adicionado função de ativação (determinar qual tipo, ex: sigmoide).
        hidden.map(sigmoid);

        // -------- HIDDEN -> OUTPUT --------
        //d(sigmoid) = Output * (1 - Output)
        let output = Matrix.multiply(this.weights_ho, hidden);

        output = Matrix.add(output, this.bias_ho);

        output.map(sigmoid);

        // BACKPROPAGATION
        
        // ---------- OUTPUT -> HIDDEN ----------
        let expected = Matrix.arrayToMatrix(target);
        
        // Erro da saída.
        let output_error = Matrix.subtract(expected, output);
        
        // Derivada da saída (sigmóide).
        let d_output = Matrix.map(output, dSigmoid);

        // Realizando a transposta da camada oculta.
        let hidden_T = Matrix.transpose(hidden);

        // Realizando o produto(hadamard) das matrizes do erro de saída e da derivada.
        let gradient = Matrix.hadamard(d_output, output_error);

        // Learning rate
        gradient = Matrix.escalar_multiply(gradient, this.learning_rate);

        // Ajuste do BIAS de acordo com o valor do erro anterior.
        this.bias_ho = Matrix.add(this.bias_ho, gradient);

        // Variação do pesos entre a camada oculta e a camada de saída.
        // (Correção dos pesos O -> H).
        let weights_ho_Deltas = Matrix.multiply(gradient, hidden_T);
        
        this.weights_ho = Matrix.add(this.weights_ho, weights_ho_Deltas);

        // ---------- HIDDEN -> INPUT ----------

        let weights_ho_T = Matrix.transpose(this.weights_ho);

        // Erro da camada oculta (matriz transposta dos pesos_ho * erro da saída).
        let hidden_error = Matrix.multiply(weights_ho_T, output_error);

        // Derivada da camada oculta.
        let d_hidden = Matrix.map(hidden, dSigmoid);

        // Entrada transposta.
        let input_T = Matrix.transpose(input);

        // Gradiente da camada oculta.
        // Erro da camada ocula * derivada da camada oculta.
        let gradient_H = Matrix.hadamard(d_hidden, hidden_error);
        gradient_H = Matrix.escalar_multiply(gradient_H, this.learning_rate);

        // Ajuste do BIAS O -> H.
        this.bias_ih = Matrix.add(this.bias_ih, gradient_H);

        // Variação dos pesos entre a camada de entrada e camda oculta.
        let weights_ih_deltas = Matrix.multiply(gradient_H, input_T);
        
        this.weights_ih = Matrix.add(this.weights_ih, weights_ih_deltas);
    }

    predict(arr) {
        let input = Matrix.arrayToMatrix(arr);
        
        // -------- INPUT -> HIDDEN --------
        // Multiplicando os pesos pelo input.
        let hidden = Matrix.multiply(this.weights_ih, input);
  
        // Adicionando o BIAS.
         hidden = Matrix.add(hidden, this.bias_ih);
  
        // Adicionado função de ativação (determinar qual tipo, ex: sigmoide).
        hidden.map(sigmoid);
  
        // -------- HIDDEN -> OUTPUT --------
        //d(sigmoid) = Output * (1 - Output)
        let output = Matrix.multiply(this.weights_ho, hidden);
  
        output = Matrix.add(output, this.bias_ho);
  
        output.map(sigmoid);

        output = Matrix.matrixToArray(output);

        return output;
    }
}