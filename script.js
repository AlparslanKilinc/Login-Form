
let check = function(){
    const psw= document.getElementById("password");
    const psw2= document.getElementById("confirmpsw");
    let error = document.getElementById("psw-error")

    if(psw.value!=psw2.value){
        error.style.display="block";
    }
    else{
        error.style.display="none";
        psw2.classList.add("check");
    }
    if(psw2.value==""){
        psw2.classList.remove("check");
    }

}
let checkReq = function(){
    let count =0;
    const password = document.getElementById("password");
    let error1= document.getElementById("psw-error1");
    let error2 = document.getElementById("psw-error2");
    let error3 = document.getElementById("psw-error3");
    /// Check 1 
        if(password.value.length < 8){
            error1.style.color="red";
            
        }
        else{
            error1.style.color="green";
            count++;
        }
    /// Check 2 
        error2.style.color="red";
      for(const e of password.value){
        if(e.toUpperCase()==e && !isNumeric(e)){
            error2.style.color="green";
            count++;
        }
      }
    //// Check 3 
    error3.style.color="red";
    for(const e of password.value){
      if(isNumeric(e)){
          error3.style.color="green";
          count++;
      }
    }
///// adding check mark 
    if(count>=3){
        password.classList.add("check");
    }else{
        password.classList.remove("check");
    }
}

/// Checking if number is included
function isNumeric(val) {
    return /^-?\d+$/.test(val);
}



