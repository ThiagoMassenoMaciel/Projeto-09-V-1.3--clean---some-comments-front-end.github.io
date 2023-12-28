//Separando responsabilidade para arquivos diferentes 
//Deixar o código mais fácil de atualizar
export const Modal = {
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

window.addEventListener("keydown", closeModal)

function closeModal(event){

  if(event.key == 'Escape'){
    Modal.close()
  }
  
}

Modal.btnClose.onclick = function CloseModal(){ 
    Modal.close()
}
  