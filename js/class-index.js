class Produtos{
//A classe utilizada. Ela server de molde para os objetos.
//Ela NÃO É o que é executado.

    constructor(){
        //Define atributos para os objetos criados com a classe.

        this.id = 1;
        this.arrayProdutos = [];
    }


    //Todos os intens abaixo no formato "texto(){}" são métodos(funções) que serão executadas quando especificamente chamadas através de um objeto.
    //De novo, a classe NÃO os executa, o objeto sim.

    salvar(){
        //Função responsável por salvar os produtos com base nos dados de input

        let produto = this.lerDados();
        //Obs: "this.lerDados()" se refere, nesse caso, ao próprio objeto, ou seja, ele está executando a função lerDados() que ele mesmo possui.

        if(this.validaCampos(produto)){
            alert('salvar')
            alert('BAM!');
        }

        console.log(produto);
        
    }

    lerDados(){
        //Função responsável por criar uma variável 'produto' contendo as informações de input + atributo ID e retorna-la

        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.valorProduto = document.getElementById('valor').value;

        return produto        
    }

    validaCampos(produto){
        //Função responsável por checar os dados recebidos dos campos de input em busca do conteúdo, validando a função salvar()

        let msg = '';

        if(produto.nomeProduto == ''){
            msg += ' - Informe o nome do produto \n';
        }

        if(produto.valorProduto == ''){
            msg += ' - Informe o valor do produto \n';
        }

        if(msg != ''){
            alert(msg);
            return false
        }

        return true;

    }

    cancelar(){

        alert('BOOM!')
    }
}

var produto = new Produtos()
//O objeto. Ele possui TUDO que está escrito dentro das chaves da classe, incluindo métodos(funções) e atributos.
//ELE é o executado e o responsável por todas as ações.