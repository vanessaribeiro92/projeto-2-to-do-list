const inputList = document.getElementById("listComposerInput")
const buttonCreateList = document.querySelector(".list-composer__button")
const listTimeline = document.querySelector(".list-timeline")

buttonCreateList.addEventListener("click", function(e){
  e.preventDefault();

  if(inputList.value === undefined || inputList.value === null || inputList.value === "" || inputList.value === " "){
    return false;
  }

  const buttonDelete = document.createElement("div");
  buttonDelete.className = "list-timeline__box";
  buttonDelete.innerHTML = `<button class="list-timeline__delete-button button">X</button>`

  const div = document.createElement("div")
  div.className = "list-timeline__box";

 
  const newListP = document.createElement("p");
  newListP.className = "list-timeline__list";
  newListP.innerHTML = inputList.value;

 
  div.appendChild(newListP)
  div.appendChild(buttonDelete)

  listTimeline.insertBefore(div, listTimeline.childNodes[0]);

  inputList.value = "";

  const botaoExcluir = document.querySelector(".list-timeline__delete-button");

  botaoExcluir.addEventListener("click", function(evento){
      evento.preventDefault();
      div.remove();
     
  })

})