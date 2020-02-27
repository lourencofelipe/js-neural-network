class RedeNeural{
    
    // Input nodes, hidden nodes, output nodes.
    constructor(i_nodes, h_nodes, o_nodes){
       
        this.i_nodes = i_nodes;
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;

        // Matriz que corresponderá ao número de neurônios;
        // BIAS da entrada para a camada oculta;
        this.bias_ih = new Matrix(h_nodes, 1);
        // BIAS da camada oculta para camada de saída;
        this.bias_ho = new Matrix(o_nodes, 1);
        
    }
}