
const form = document.querySelector("form")
const inputWeight = document.querySelector("#input-weight")
const inputHeight = document.querySelector("#input-height")

const ModalWrapper = document.querySelector(".modal-wrapper")
const ShowResult = document.querySelector(".modal .tittle span")
const buttonClose = document.querySelector(".modal button.close")

form.onsubmit = function(e){
  
 
  e.preventDefault()
  console.log(e);

  const Weight = inputWeight.value ;
  const Height = inputHeight.value ;

  console.log("Executou a função")
  console.log("getted :", Weight, Height)

  calculating = calcIMC(Height,Weight)

  console.log(calculating);
  
  ShowResult.innerText = calculating;
  ModalWrapper.classList.add("open");

}

buttonClose.onclick = CloseModal;


function CloseModal(){
  ModalWrapper.classList.remove("open");
}

const calcIMC= (h,w)=>{
  const result = (w /(h/100)**2)
  return result.toFixed(2)
}