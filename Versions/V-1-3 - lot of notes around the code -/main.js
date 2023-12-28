import { Modal } from "./modal.js"
/*      import { isNotANumber } from "./isNaN.js"    My way to use it           */
import { Alert_Error } from "./DataValidation.js"

//variables into the OBJ like property    swapping to NAME_OBJECT.variable from  consts from Modal DOM elments relateds
const form = document.querySelector("form")
const inputWeight = document.querySelector("#input-weight")
const inputHeight = document.querySelector("#input-height")


/* i export this function to other file to make Design Paterns 
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
//Remember the moment on the user didn't was writting anything and still click on the button to calculate
  let verification_data = Alert_Error.notNan(Weight) || Alert_Error.notNan(Height)

/* My way to use it 



const ERRORnan = document.querySelector(".alert-error")

  if (verification_data == true){
    console.log(verification_data)
    // will display the open to that element from html collor red ERROR
    ERRORnan.classList.add('open')
    return;

  }
*/

  if(verification_data === true){
    Alert_Error.open();
    return; // For to end the program cuz the user inpu wrong value i am waitting for 
  }

  Alert_Error.close();   // If the next try the user submit corret value dont need anymore display that red collor error just the modal
  

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