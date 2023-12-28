export const Alert_Error = {
    error: document.querySelector(".alert-error")
    ,
    //Remember the moment on the user didn't was writting anything and still click on the button to calculate
    // cuz   isNAN interprets   "" iqual
    notNan(value){
        console.log(isNaN(value),value ==="")
        return isNaN(value) || value === ""
        
    }
    ,
    open(){
        console.log()
        Alert_Error.error.classList.add('open');
    }
    ,
    close(){
        console.log()
        Alert_Error.error.classList.remove('open');
    }

}

