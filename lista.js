const nameList = ["Eliseu", "Lelebis", "Naras", "Vara", "Pedrinho", "Batman", "Luiz"]

const listEl = document.getElementById("list");
const searchField = document.getElementById("searchField");

const filtrar = document.getElementById("filtrar");
const adicionar = document.getElementById("adicionar");
const remover = document.getElementById("remover");
const selecionar = document.getElementById("selecionar");

const saida = document.getElementById("saida");

filtrar.addEventListener("click", inputHandler);
adicionar.addEventListener("click", addNome);
remover.addEventListener("click", removerNome);
selecionar.addEventListener("click", selecionarNome);

this.fillList();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fillList(list = nameList) {
    listEl.innerHTML = "";
    for(let i = 0; i < list.length; i++) {
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
    }
}

function inputHandler() {
    saida.innerHTML = ""
    const filteredList = nameList.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord);
    })
    fillList(filteredList);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addNome(){
    nome = searchField.value;

    if(nome != ''){
        nameList.push(nome);
        saida.innerHTML = 'O nome "' + nome + '" foi adicionado!';
    }else{
        saida.innerHTML = 'Insira um nome válido';
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function removerNome(){
    nome = searchField.value; 
    var encontrar = nameList.indexOf(nome); 
    if (encontrar != -1){
        nameList.splice(encontrar, 1);  
        saida.innerHTML = 'O nome "' + nome + '" foi removido!';
    }else{
        saida.innerHTML = 'Não foi possivel encontrar o nome "' + nome + '"'
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function selecionarNome(){

    const listaNomes  = document.querySelectorAll("li")  // obtém tags h5 da página
    console.log = (listaNomes);
  
    if (listaNomes.length == 0) {
        saida.innerHTML = 'Não há tarefas para selecionar'       // se não há tarefas, exibe alerta
      return                                        // e retorna
    }
  
    let aux = -1                   // variável auxiliar para indicar linha selecionada
  
    // percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
    for (let i = 0; i < listaNomes.length; i++) {
      // se tag é da class tarefa-selecionada (está selecionada)
      if (listaNomes[i].className == "tarefa-selecionada") {
        listaNomes[i].className = "tarefa-normal"      // troca para normal
        aux = i                                     // muda valor da variável auxiliar
        break                                       // sai da repetição
      }
    }
  
    // se a linha que está selecionada é a última, irá voltar para a primeira
    if (aux == listaNomes.length - 1) {
      aux = -1
    }
  
    listaNomes[aux + 1].className = "tarefa-selecionada" // muda estilo da próxima linha
}  
