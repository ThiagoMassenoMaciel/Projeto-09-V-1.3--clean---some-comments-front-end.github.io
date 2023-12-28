//Structuring data into the object whith properties and Functions swapping with some execute DOM manipulation  
const form = document.querySelector("form")
const inputWeight = document.querySelector("#input-weight")
const inputHeight = document.querySelector("#input-height")

const ModalWrapper = document.querySelector(".modal-wrapper")
const ShowResult = document.querySelector(".modal .tittle span")
const buttonClose = document.querySelector(".modal button.close")

//I am putting responsabilities from functions go to into the object Modal

const Modal = {
  open(){
    console.log("Used Open");
    ModalWrapper.classList.add("open");
  }
  ,
  close(){
    console.log("Used close")
    ModalWrapper.classList.remove("open");
  }
}
Modal.open()

Modal.close()

//.on events
form.onsubmit = function(e){
  
  //when this event happens the pattern's to submit the form and update the page. 
  //When the button is clicked automatcly will submit the form 
  //BREAK that ------> evitar Padrão      event.preventDefault()
  e.preventDefault()
  console.log(e);

  const Weight = inputWeight.value ;
  const Height = inputHeight.value ;

  console.log("Executou a função")
  console.log("getted :", Weight, Height)

  calculating = calcIMC(Height,Weight)

  console.log(calculating);
  
  ShowResult.innerText = calculating;

  //ModalWrapper.classList.add("open");
    Modal.open()
}

buttonClose.onclick = function CloseModal(){
 // ModalWrapper.classList.remove("open");
    Modal.close()
}

const calcIMC= (h,w)=>{
  const result = (w /(h/100)**2)
  return result.toFixed(2)
}