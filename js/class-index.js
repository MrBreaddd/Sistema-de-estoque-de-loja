class Produtos{
//A classe utilizada. Ela server de molde para os objetos.
//Ela NÃO É o que é executado.

    constructor(){
        //Define atributos para os objetos criados com a classe.

        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null;
    }


    //Todos os intens abaixo no formato "texto(){}" são métodos(funções) que serão executadas quando especificamente chamadas através de um objeto.
    //De novo, a classe NÃO os executa, o objeto sim.

    salvar(){
        //Função responsável por salvar os produtos com base nos dados de input

        let produto = this.lerDados();
        //Obs: "this.lerDados()" se refere, nesse caso, ao próprio objeto, ou seja, ele está executando a função lerDados() que ele mesmo possui.

        if(this.validaCampos(produto)){            
            if(this.editId == null){                     
                
                this.adicionar(produto);
                alert('BAM!');
            }
            else{
                this.atualizar(this.editId, produto);
            }

        }

        this.listaTabela();
        //this.limparCampos();
        
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

        produto.valorProduto = parseFloat(produto.valorProduto);
        produto.valorVendaProduto = parseFloat(produto.valorVendaProduto);

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
            imgEdit.setAttribute("onclick", "produto.preEditar("+ JSON.stringify(this.arrayProdutos[i]) +")");

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.svg';
            imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")");
            //Localiza e crias as imagens além e então adiciona o atributo para interação juntamente com o id da linha correspondente

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
            //Adiciona as imagens à tabela

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

    preEditar(dados){
        this.editId = dados.id;

        document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('estoque').value = dados.estoqueProduto;
        document.getElementById('unidade').value = dados.unidadeProduto;
        document.getElementById('valor').value = dados.valorProduto;
        document.getElementById('valorVenda').value = dados.valorVendaProduto;

        document.getElementById('btn1').innerText = 'Atualizar'

    }

    atualizar(id, novoProduto){
        for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){

                this.arrayProdutos[i].nomeProduto = novoProduto.nomeProduto
                this.arrayProdutos[i].estoqueProduto = novoProduto.estoqueProduto
                this.arrayProdutos[i].unidadeProduto = novoProduto.unidadeProduto
                this.arrayProdutos[i].valorProduto = novoProduto.valorProduto
                this.arrayProdutos[i].valorVendaProduto = novoProduto.valorVendaProduto
            }
        }

        this.editId = null
        document.getElementById('btn1').innerText = "Salvar"
    }

    deletar(id){
        //Função responsável pela funcionalidade do ícone de deletar. Ela recebe o valor de id da função que a chamou

        if(confirm('Tem certeza que deseja deledar o produto de ID ' + id + '?')){

            let tbody = document.getElementById('tbody');
            for(let i = 0; i < this.arrayProdutos.length; i++){
                //Carrega a tabela e checa os elementos da array

                if(this.arrayProdutos[i].id == id){
                    //Busca a linha da array através do id fornecido

                    this.arrayProdutos.splice(i,1);
                    tbody.deleteRow(i);
                    //Deleta respectivamente a linha da array e a linha da tabela
                }
            }
        }
    }
}

var produto = new Produtos()
//O objeto. Ele possui TUDO que está escrito dentro das chaves da classe, incluindo métodos(funções) e atributos.
//ELE é o executado e o responsável por todas as ações.