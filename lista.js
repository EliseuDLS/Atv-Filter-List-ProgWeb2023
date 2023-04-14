const nameList = ["Eliseu", "Lelebis", "Naras", "Vara", "Pedrinho", "Batman", "Luiz"]

var num_seleciona = -1;

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
        if (num_seleciona == i){
            listItems.className = "alert alert-dark";
        } else{
            listItems.className = "";
        }
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    if(encontrar != -1){
        nameList.splice(encontrar, 1);  
        saida.innerHTML = 'O nome "' + nome + '" foi removido!';
    }else{
        saida.innerHTML = 'Não foi possivel encontrar o nome "' + nome + '"'
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function selecionarNome(){
    var aux = nameList[num_seleciona]
    if(nameList.length == num_seleciona){
        num_seleciona = 0;
    }else{
    num_seleciona += 1;
    }
    console.log(num_seleciona);
    inputHandler()
}
