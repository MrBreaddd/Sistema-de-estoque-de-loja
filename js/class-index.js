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
            this.adicionar(produto);

            alert('BAM!');
        }

        this.listaTabela();
        this.limparCampos();
        
    }

    lerDados(){
        //Função responsável por criar uma variável 'produto' contendo as informações de input + atributo ID e retorna-la

        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.estoqueProduto = document.getElementById('estoque').value;
        produto.unidadeProduto = document.getElementById('unidade').value;
        produto.valorProduto = document.getElementById('valor').value;
        produto.valorVendaProduto = document.getElementById('valorVenda').value;

        return produto        
    }

    validaCampos(produto){
        //Função responsável por checar os dados recebidos dos campos de input em busca do conteúdo, validando a função salvar()

        let msg = '';

        if(produto.nomeProduto == ''){
            msg += ' - Informe o nome do produto \n';
        }

        if(produto.estoqueProduto == ''){
            msg += ' - Informe o estoque do produto \n';
        }

        if(produto.unidadeProduto == ''){
            msg += ' - Informe a unidade do produto \n';
        }

        if(produto.valorProduto == ''){
            msg += ' - Informe o valor do produto \n';
        }

        if(produto.valorVendaProduto == ''){
            msg += ' - Informe o valor de venda do produto \n';
        }

        if(msg != ''){
            alert(msg);
            return false
        }

        return true;
    }

    adicionar(produto){
        //Função responsável por adicionar a variável 'produto' e seus valores à 'arrayProdutos' linha por linha

        this.arrayProdutos.push(produto);
        this.id++;
    }

    listaTabela(){
        //Função responsável por criar a tabela dentro do elemento tbdoy no html

        let tbody = document.getElementById('tbody');

        tbody.innerText = '';
        //Limpa a tabela cada atualização, impede duplicação automática


        for(let i = 0; i < this.arrayProdutos.length; i++){

                //Nota:
                //tr = linha
                //td = coluna

            let tr = tbody.insertRow();

            let td_codigo = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_estoque = tr.insertCell();
            let td_unidade = tr.insertCell();
            let td_custo = tr.insertCell();
            let td_valorVenda = tr.insertCell();
            let td_acoes = tr.insertCell();
            //Cria linhas e colunas

            td_codigo.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;
            td_estoque.innerText = this.arrayProdutos[i].estoqueProduto;
            td_unidade.innerText = this.arrayProdutos[i].unidadeProduto;
            td_custo.innerText = this.arrayProdutos[i].valorProduto;
            td_valorVenda.innerText = this.arrayProdutos[i].valorVendaProduto;
            //Atribui texto às linhas e colunas com base nos valores da array
            
            td_codigo.classList.add('center');
            //Utiliza a classe center no css e a aplica ao 'td_codigo'

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.svg';

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.svg';

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
            //Cria, localiza e adiciona as imagens

        }
    }

    limparCampos(){
        //Função responsáve por limpar os campos de input

        produto.nomeProduto = document.getElementById('produto').value = '';
        produto.estoqueProduto = document.getElementById('estoque').value = '';
        produto.unidadeProduto = document.getElementById('unidade').value = '';
        produto.valorProduto = document.getElementById('valor').value = '';
        produto.valorVendaProduto = document.getElementById('valorVenda').value = '';
    }

    cancelar(){        
        alert('BOOM!')
    }
}

var produto = new Produtos()
//O objeto. Ele possui TUDO que está escrito dentro das chaves da classe, incluindo métodos(funções) e atributos.
//ELE é o executado e o responsável por todas as ações.