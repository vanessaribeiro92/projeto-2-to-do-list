
const inputList = document.getElementById("listComposerInput");
const buttonCreateList = document.querySelector(".list-composer__button");
const listTimeline = document.querySelector(".list-timeline");


buttonCreateList.addEventListener("click", function (e) {
    e.preventDefault();

    var newInputList = inputList.value.replace(/\s\s+/g, '');
    //console.log(newInputList.length)

    if (newInputList === undefined || newInputList === null || newInputList === "" || newInputList.length === 0 ) {
        return false;
    }

    //div q abraça tdo mundo
    const div = document.createElement("div");
    div.className = "list-timeline__box"

    // div.addEventListener("drag", drag, drop, allowDrop) {

    // }


    //cria um novo elemento pra lista
    const newListP = document.createElement("p");
    newListP.className = "list-timeline__p";
    //passei o conteúdo do input pro paragrafo  
    newListP.innerHTML = inputList.value;

    const buttonDel = document.createElement("div");
    buttonDel.className = "list-timeline__del";
    buttonDel.innerHTML = `<button class="list-timeline__delete-button button">X</button>`

    div.appendChild(newListP);
    div.appendChild(buttonDel);

    listTimeline.insertBefore(div, listTimeline.childNodes[0]);

    inputList.value = "";
    

    const botaoExcluir = document.querySelector(".list-timeline__delete-button");

    botaoExcluir.addEventListener("click", function (evento) {
        evento.preventDefault();
        div.remove();
    })

    const taskOk = document.querySelector(".list-timeline__p");

    taskOk.addEventListener("click", function (e) {
        e.preventDefault();
        
        if(this.className === "list-timeline__p"){
            this.className = "list-timeline__p-check"
        }else{
            this.className = "list-timeline__p"
        }
    
    })
       
    const buttonAllDone = document.querySelector(".list-timeline__all-done");
    const buttonAllDelete = document.querySelector(".list-timeline__all-del");

    buttonAllDone.addEventListener("click", function(e){
        e.preventDefault();
        if(taskOk.classList.contains("list-timeline__p-check")){
            taskOk.classList.remove("list-timeline__p");
        } else {
            taskOk.classList.add("list-timeline__p-check");
        }
    })

    buttonAllDelete.addEventListener("click", function(e){
        e.preventDefault();
        if(listTimeline.classList.contains("list-timeline")){
         div.remove();
        }
    })


    // function allowDrop(e) {
    //     e.preventDefault();
    // }
    
    // function drag(e) {
    //     ev.dataTransfer.setData("text", ev.target.id);
    // }
    
    // function drop(e) {
    //     e.preventDefault();
    //     var data = ev.dataTransfer.getData("text");
    //     e.target.appendChild(document.getElementById(data));
    // }


})






