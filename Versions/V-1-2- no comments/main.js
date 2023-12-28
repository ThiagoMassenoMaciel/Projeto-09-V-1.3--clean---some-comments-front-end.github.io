import { Modal } from "./modal.js"
//variables into the OBJ like property    swapping to NAME_OBJECT.variable from  consts from Modal DOM elments relateds
const form = document.querySelector("form")
const inputWeight = document.querySelector("#input-weight")
const inputHeight = document.querySelector("#input-height")

/*
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
*/

form.onsubmit = function(e){

  e.preventDefault()
  console.log(e);

  const Weight = inputWeight.value ;
  const Height = inputHeight.value ;

  console.log("Executou a função")
  console.log("getted :", Weight, Height)

  let calculating = calcIMC(Height,Weight)

  console.log(calculating);
  
  Modal.menssage.innerText = calculating;

  Modal.open()
}
/*

Modal.btnClose.onclick = function CloseModal(){ 
  Modal.close()
}

*/
const calcIMC= (h,w)=>{
  const result = (w /(h/100)**2)
  return result.toFixed(2)
}