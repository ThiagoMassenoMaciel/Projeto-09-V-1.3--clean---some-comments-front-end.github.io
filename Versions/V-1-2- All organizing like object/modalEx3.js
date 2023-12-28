//variables into the OBJ like property    swapping to NAME_OBJECT.variable from  consts from Modal DOM elments relateds
const form = document.querySelector("form")
const inputWeight = document.querySelector("#input-weight")
const inputHeight = document.querySelector("#input-height")

/*
const ModalWrapper = document.querySelector(".modal-wrapper")
const ShowResult = document.querySelector(".modal .tittle span")
const buttonClose = document.querySelector(".modal button.close")
*/

//I am putting responsabilities from functions go to into the object Modal

const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  menssage: document.querySelector(".modal .tittle span"),
  btnClose:  document.querySelector(".modal button.close"),
  open(){
    console.log("Used Open");
    Modal.wrapper.classList.add("open");
  }
  ,
  close(){
    console.log("Used close")
    Modal.wrapper.classList.remove("open");
  }
}

//.on events
form.onsubmit = function(e){

  e.preventDefault()
  console.log(e);

  const Weight = inputWeight.value ;
  const Height = inputHeight.value ;

  console.log("Executou a função")
  console.log("getted :", Weight, Height)

  calculating = calcIMC(Height,Weight)

  console.log(calculating);
  
  Modal.menssage.innerText = calculating;

  //ModalWrapper.classList.add("open");
  Modal.open()
}

Modal.btnClose.onclick = function CloseModal(){
 // ModalWrapper.classList.remove("open");
  Modal.close()
}

const calcIMC= (h,w)=>{
  const result = (w /(h/100)**2)
  return result.toFixed(2)
}