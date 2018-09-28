
const inputList = document.getElementById("listComposerInput");
const buttonCreateList = document.querySelector(".list-composer__button");
const listTimeline = document.querySelector(".list-timeline");
let num = 0;

buttonCreateList.addEventListener("click", function (e) {
    e.preventDefault();

    var newInputList = inputList.value.replace(/\s\s+/g, '');
    //console.log(newInputList.length)

    if (newInputList === undefined || newInputList === null || newInputList === "" || newInputList.length === 0 ) {
        return false;
    }

    num ++
    //div q abraça tdo mundo
    const div = document.createElement("div");
    div.className = "list-timeline__box"
    div.setAttribute("draggable","true");
    div.id = num;
    div.setAttribute("ondragstart","drag(event)");
    div.setAttribute("ondragover","allowDrop(event)");
    div.setAttribute("ondrop","drop(event)");
     
    //cria um novo elemento pra lista
    const newListP = document.createElement("p");
    newListP.className = "list-timeline__p";
    //passei o conteúdo do input pro paragrafo  
    newListP.innerHTML = inputList.value;

    const buttonDel = document.createElement("div");
    buttonDel.className = "list-timeline__del";
    buttonDel.innerHTML = `<button class="list-timeline__delete-button button"><i class="far fa-trash-alt" onclick = "excluir(event)"></i></button>`

    div.appendChild(newListP);
    div.appendChild(buttonDel);

    listTimeline.insertBefore(div, listTimeline.childNodes[0]);

    inputList.value = "";
    
    const taskOk = document.querySelector(".list-timeline__p");

    taskOk.addEventListener("click", function (e) {
        e.preventDefault();
        
        if(this.className === "list-timeline__p"){
            this.className = "list-timeline__p-check"
        }else{
            this.className = "list-timeline__p"
        }
    })
       
})

const buttonAllDone = document.querySelector(".list-timeline__all-done");
const buttonAllDelete = document.querySelector(".list-timeline__all-del");

buttonAllDelete.addEventListener("click", function(e){
    e.preventDefault();
    listTimeline.innerHTML=""

    // if(listTimeline.classList.contains("list-timeline")){
    //     div.remove();
    //    }
   
})

buttonAllDone.addEventListener("click", function(e){
    e.preventDefault();
    const taskOk = document.getElementsByTagName("p");

    for (let i of taskOk){
        i.className= "list-timeline__p-check"
    }
    // if(taskOk.classList.contains("list-timeline__p-check")){
    //      taskOk.classList.remove("list-timeline__p");
    //  } else {
    //      taskOk.classList.add("list-timeline__p-check");
    //  }
})

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    var origem = document.getElementById(data);
    var destino = document.getElementById(e.target.id);
    console.log("origem",origem);
    console.log("destino",destino);
    destino.insertAdjacentHTML("afterend", origem.outerHTML);
    origem.remove();
}

function excluir(e){
    const botaoExcluir = document.getElementById(e.target.closest("div").parentNode.id);
   // console.log(e.target.closest("div").parentNode.id)
    e.preventDefault();
  // console.log(botaoExcluir)
    botaoExcluir.remove()
}





