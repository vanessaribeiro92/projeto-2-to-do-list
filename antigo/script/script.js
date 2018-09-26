const inputList = document.getElementById("listComposerInput")
const buttonCreateList = document.querySelector(".list-composer__button")
const listTimeline = document.querySelector(".list-timeline")
const div = document.querySelector(".list-timeline__box")


buttonCreateList.addEventListener("click", function(e){
  e.preventDefault();

  if(inputList.value === undefined || inputList.value === null || inputList.value === "" || inputList.value === " "){
    return false;
  }


  const newListP = document.createElement("p");
  newListP.className = "list-timeline__list";
  newListP.innerHTML = `${inputList.value}<button onclick="deletaTarefa(this)" class="list-timeline__delete-button button">X</button>`;
  

  div.appendChild(newListP)

  listTimeline.insertBefore(div, listTimeline.childNodes[0]);

  inputList.value = "";

  // const botaoExcluir = document.querySelector(".list-timeline__delete-button");

  // botaoExcluir.addEventListener("click", function(evento){
  //     evento.preventDefault();
  //     newListP.remove();
     
  // })

})

function deletaTarefa(e){
  console.log(e.parentNode)
  e.parentNode.remove();
}