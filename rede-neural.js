class RedeNeural{
    
    // Input nodes, hidden nodes, output nodes.
    constructor(i_nodes, h_nodes, o_nodes){
       
        this.i_nodes = i_nodes;
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;


        // Definindo valores e "randomizando" os bias e pesos
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
        
        this.weights_ho.print();
        this.weights_ih.print();
    }
}