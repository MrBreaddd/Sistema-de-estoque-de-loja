class Users{
    
        constructor(){
            
    
            this.code = 3;
            this.arrayUsers = [
                {code: 1, username: 'admin', senha: '123456', sLevel: '0'},
                {code: 2, username: 'user', senha: '123', sLevel: '1'}
            ]
            

            this.editCode = null;
        }
    
    
        salvar(){
            //Função responsável por salvar os produtos com base nos dados de input
    
            let newUser = this.lerDados();
            //Obs: "this.lerDados()" se refere, nesse caso, ao próprio objeto, ou seja, ele está executando a função lerDados() que ele mesmo possui.
    
            if(this.validaCampos(newUser)){            
                if(this.editCode == null){                     
                    
                    this.adicionar(newUser);
                    //alert('BAM!');
                }
                else{
                    this.atualizar(this.editCode, newUser);
                }    
            }
    
            this.listaTabela();
            this.limparCampos();
            console.log(this.arrayUsers);
            
        }
    
        lerDados(){
            //Função responsável por criar uma variável 'produto' contendo as informações de input + atributo ID e retorna-la
    
            let newUser = {}
    
            newUser.code = this.code;
            newUser.username = document.getElementById('username').value;
            newUser.senha = document.getElementById('senha').value;
            newUser.sLevel = document.getElementById('sLevel').value;
    
            return newUser        
        }
    
        validaCampos(newUser){
            //Função responsável por checar os dados recebidos dos campos de input em busca do conteúdo, validando a função salvar()
    
            let msg = '';
    
            if(newUser.username == ''){
                msg += ' - Informe o nome do usuário \n';
            }
    
            if(newUser.senha == ''){
                msg += ' - Informe a senha do usuário \n';
            }

            if(newUser.sLevel == ''){
                msg += ' - Informe o nível de segurança do usuário (0 ou 1)\n';
            }

            if(newUser.sLevel != '1' && '0'){
                
            }
    
            if(msg != ''){
                alert(msg);
                return false
            }
    
            return true;
        }
    
        adicionar(newUser){
            //Função responsável por adicionar a variável 'produto' e seus valores à 'arrayProdutos' linha por linha
    
            this.arrayUsers.push(newUser);
            this.code++;
        }
    
        listaTabela(){
            //Função responsável por criar a tabela dentro do elemento tbdoy no html
    
            let tbody = document.getElementById('tbody');
    
            tbody.innerText = '';
            //Limpa a tabela cada atualização, impede duplicação automática
    
    
            for(let i = 0; i < this.arrayUsers.length; i++){
    
                    //Nota:
                    //tr = linha
                    //td = coluna
    
                let tr = tbody.insertRow();
    
                let td_codigo = tr.insertCell();
                let td_nome = tr.insertCell();
                let td_senha = tr.insertCell();
                let td_slevel = tr.insertCell();
                let td_acoes = tr.insertCell();
                //Cria linhas e colunas
    
                td_codigo.innerText = this.arrayUsers[i].code;
                td_nome.innerText = this.arrayUsers[i].username;
                td_senha.innerText = this.arrayUsers[i].senha;
                td_slevel.innerText = this.arrayUsers[i].sLevel;
                //Atribui texto às linhas e colunas com base nos valores da array
                
                td_codigo.classList.add('center');
                //Utiliza a classe center no css e a aplica ao 'td_codigo'
    
                let imgEdit = document.createElement('img');
                imgEdit.src = 'img/edit.svg';
                imgEdit.setAttribute("onclick", "user.preEditar("+ JSON.stringify(this.arrayUsers[i]) +")");
    
                let imgDelete = document.createElement('img');
                imgDelete.src = 'img/delete.svg';
                imgDelete.setAttribute("onclick", "user.deletar("+ this.arrayUsers[i].code +")");
                //Localiza e crias as imagens além e então adiciona o atributo para interação juntamente com o id da linha correspondente
    
                td_acoes.appendChild(imgEdit);
                td_acoes.appendChild(imgDelete);
                //Adiciona as imagens à tabela
    
            }
        }
    
        limparCampos(){
            //Função responsáve por limpar os campos de input
    
            user.username = document.getElementById('username').value = '';
            user.senha = document.getElementById('senha').value = '';
            user.sLevel = document.getElementById('sLevel').value = '';


        }
    
        cancelar(){

            this.limparCampos();
            this.editId = null;
            document.getElementById('btn1').innerText = 'Salvar';
            document.getElementById('cadastroTitulo').innerText = 'Cadastro de Usuários';
            //alert('BOOM!')
        }
    
        preEditar(dados){
            this.editCode = dados.code;
    
            document.getElementById('username').value = dados.username;
            document.getElementById('senha').value = dados.senha;
            document.getElementById('sLevel').value = dados.sLevel;
    
            document.getElementById('btn1').innerText = 'Atualizar'
            document.getElementById('cadastroTitulo').innerText = 'Edição de Usuário ' + dados.code;
    
        }
    
        atualizar(code, novoUsuario){
                for(let i = 0; i < this.arrayUsers.length; i++){
                    if(this.arrayUsers[i].code == code){
        
                        this.arrayUsers[i].username = novoUsuario.username
                        this.arrayUsers[i].senha = novoUsuario.senha
                        this.arrayUsers[i].sLevel = novoUsuario.sLevel
                    }
        
                this.editCode = null
                document.getElementById('btn1').innerText = "Salvar"
                document.getElementById('cadastroTitulo').innerText = 'Cadastro de Usuários'
            }
        }
    
        deletar(code){
            //Função responsável pela funcionalidade do ícone de deletar. Ela recebe o valor de id da função que a chamou
    
            if(confirm('Tem certeza que deseja deledar o usuário de ID ' + code + '?')){
    
                let tbody = document.getElementById('tbody');
                for(let i = 0; i < this.arrayUsers.length; i++){
                    //Carrega a tabela e checa os elementos da array
    
                    if(this.arrayUsers[i].code == code){
                        //Busca a linha da array através do id fornecido
    
                        this.arrayUsers.splice(i,1);
                        tbody.deleteRow(i);
                        //Deleta respectivamente a linha da array e a linha da tabela
                    }
                }
            }
        }
    }
    
    var user = new Users()
    //O objeto. Ele possui TUDO que está escrito dentro das chaves da classe, incluindo métodos(funções) e atributos.
    //ELE é o executado e o responsável por todas as ações.

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }