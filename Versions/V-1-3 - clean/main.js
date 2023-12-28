import { Modal } from "./modal.js"
import { Alert_Error } from "./DataValidation.js"
import { calcIMC } from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#input-weight")
const inputHeight = document.querySelector("#input-height")

form.onsubmit = function(e){

  e.preventDefault()
  console.log(e);

  const Weight = inputWeight.value ;
  const Height = inputHeight.value ;


  console.log("Executou a função")
  console.log("getted :", Weight, Height)

  let verification_data = Alert_Error.notNan(Weight) || Alert_Error.notNan(Height)

  if(verification_data === true ){
    Alert_Error.open();
    return; 
  }

  Alert_Error.close(); 
  
  DisplayMenssageResult(Height,Weight)

  Modal.open()
}
// after input the data wrong how we could make possible the alert dissappear when the user delete nome word ? 

/* My way to make that 
inputHeight.addEventListener("keydown" , notSHOW_Alert_Error)
inputWeight.addEventListener("keydown" , notSHOW_Alert_Error)

function notSHOW_Alert_Error(e){
  console.log(e.key)
  if(e.key ==="Backspace"){
    Alert_Error.close();
  }
}
*/
// THe correct way 

inputHeight.oninput= () => Alert_Error.close();
inputWeight.oninput= () => Alert_Error.close();


Alert_Error.close();

function DisplayMenssageResult(h,w){

  let calculating = calcIMC(h,w)  
  console.log(calculating);
  Modal.menssage.innerText = calculating;

}