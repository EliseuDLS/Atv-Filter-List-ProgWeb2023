const nameList = ["Eliseu", "Lelebis", "Naras", "Vara", "Pedrinho", "Batman", "Luiz"]

const listEl = document.getElementById("list");
const searchField = document.getElementById("searchField");

const filtrar = document.getElementById("filtrar");
const adicionar = document.getElementById("adicionar");
const remover = document.getElementById("remover");

const saida = document.getElementById("saida");

filtrar.addEventListener("click", inputHandler);
adicionar.addEventListener("click", addNome);
remover.addEventListener("click", removerNome);

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
