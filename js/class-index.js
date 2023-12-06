class Produtos{
    //A classe utilizada. Ela server de molde para os objetos.
    //Ela NÃO É o que é executado.
    
        constructor(){
            //Define atributos para os objetos criados com a classe.
    
            this.id = 4;
            this.arrayProdutos = [
                {id:1,
                nomeProduto: "GIROFLEX AZ - COM IMA E PLUG PARA ACENDER",
                estoqueProduto: "6",
                unidadeProduto: "PC",
                valorProduto: "82.125",
                valorVendaProduto: "136.640"},
                {id:2,
                nomeProduto: "[ESTANHADO] NAR34-2N-FE TERMINAL P/CABO",
                estoqueProduto: "0",
                unidadeProduto: "PC",
                valorProduto: "245.710",
                valorVendaProduto: "400.500"},
                {id:3,
                nomeProduto: "CANTONMEIRA 2 X 1/8 (50,80 X 3,18MM)",
                estoqueProduto: "1",
                unidadeProduto: "UN",
                valorProduto: "54.675",
                valorVendaProduto: "90.210"}
            ]
            this.editId = null;
            this.ssLevel = 1;
        }
    
    
        //Todos os intens abaixo no formato "texto(){}" são métodos(funções) que serão executadas quando especificamente chamadas através de um objeto.
        //De novo, a classe NÃO os executa, o objeto sim.
    
        salvar(){

            //console.log("ssLevel =", ssLevel);
            //Função responsável por salvar os produtos com base nos dados de input
    
            let produto = this.lerDados();
            //Obs: "this.lerDados()" se refere, nesse caso, ao próprio objeto, ou seja, ele está executando a função lerDados() que ele mesmo possui.
    
            if(this.validaCampos(produto)){            
                if(this.editId == null){                     
                    
                    this.adicionar(produto);
                    //alert('BAM!');
                }
                else{
                    this.atualizar(this.editId, produto);
                }
    
            }
    
            this.listaTabela();
            this.limparCampos();
            //console.log(this.arrayProdutos);
            
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
                
                if(this.ssLevel != 3){
                td_acoes.appendChild(imgEdit);
                    if(this.ssLevel == 1){
                    td_acoes.appendChild(imgDelete);
                    //Adiciona as imagens à tabela em seus respectivos perfis
                    }
                }
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
    
            this.limparCampos();
            this.editId = null;
            document.getElementById('btn1').innerText = 'Salvar';
            document.getElementById('cadastroTitulo').innerText = 'Cadastro de Produtos';
            //alert('BOOM!')
        }
    
        preEditar(dados){
    
            this.editId = dados.id;
    
                document.getElementById('produto').value = dados.nomeProduto;
                document.getElementById('estoque').value = dados.estoqueProduto;
                document.getElementById('unidade').value = dados.unidadeProduto;
                document.getElementById('valor').value = dados.valorProduto;
                document.getElementById('valorVenda').value = dados.valorVendaProduto;
    
                document.getElementById('btn1').innerText = 'Atualizar'
                document.getElementById('cadastroTitulo').innerText = 'Edição de Estoque de Produto ' + dados.id;
        }
    
    
        atualizar(id, novoProduto){
            for(let i = 0; i < this.arrayProdutos.length; i++){
                if(this.ssLevel <= 1){
                    if(this.arrayProdutos[i].id == id){
    
                        this.arrayProdutos[i].nomeProduto = novoProduto.nomeProduto
                        this.arrayProdutos[i].estoqueProduto = novoProduto.estoqueProduto
                        this.arrayProdutos[i].unidadeProduto = novoProduto.unidadeProduto
                        this.arrayProdutos[i].valorProduto = novoProduto.valorProduto
                        this.arrayProdutos[i].valorVendaProduto = novoProduto.valorVendaProduto
                    }
                }
                else{
                    if(this.arrayProdutos[i].id == id){                    
                        this.arrayProdutos[i].estoqueProduto = novoProduto.estoqueProduto
                    }
                }
            }
    
            this.editId = null
            document.getElementById('btn1').innerText = "Salvar";
            document.getElementById('cadastroTitulo').innerText = 'Cadastro de Produtos';
    
            document.getElementById('produto').innerText = 'Número de unidades no estoque';
            document.getElementById('unidade').innerText = 'Unidade de medida utilizada';
            document.getElementById('valor').innerText = 'Valor do produto';
            document.getElementById('valorVenda').innerText = 'Valor de venda do produto';
    
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
    
    class Login{

        constructor(){
            this.ssLevel = 1;
        }
    
        validar(){

            var username = document.getElementById('username').value;
            var senha = document.getElementById('senha').value;

            if(username === adm.User || senha === adm.Senha){
                console.log(this.ssLevel)

                alert("Login bem sucedido!");
                window.open("./index.html");
                this.ssLevel = adm.sLevel;                
            }
            else if(username === cUser.User || senha === cUser.Senha){
                console.log(this.ssLevel)

                alert("Login bem sucedido!");
                window.open("./user.html");
                this.ssLevel = cUser.sLevel;                
            }
            else if(username === financeiro.User || senha === financeiro.Senha){
                console.log(this.ssLevel)

                alert("Login bem sucedido!");
                window.open("./index.html");
                this.ssLevel = financeiro.sLevel;                
            }
            else{
                alert("Login não concluído!");
            }
            console.log(this.ssLevel)
        }

        obter_ssLevel(){
            return this.ssLevel;
        }
                         
    }
    
    var login = new Login();
    
    
    const adm = {
        username: "admin",
        senha: "123456",
        sLevel: "1",
    
        get User(){
            return this.username;
        },
    
        get Senha(){
            return this.senha;
        },
    
        get sLevel(){
            return this.sLevel;
        }
        
    
    }
    
    const financeiro = {
        username: "financa",
        senha: "1234",
        sLevel: "2",
    
        get User(){
            return this.username;
        },
    
        get Senha(){
            return this.senha;
        },
    
        get sLevel(){        
            return this.sLevel;
        }
    }
    
    const cUser = {
    
        username: "user",
        senha: "123",
        sLevel: "3",
    
        get User(){
            return this.username;
        },
    
        get Senha(){
            return this.senha;
        },
    
        get sLevel(){
            return this.sLevel;
        }
    }
    
//******************************//
//Menu de navegação
//******************************//
    
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }