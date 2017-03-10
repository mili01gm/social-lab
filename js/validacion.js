window.addEventListener('load',function(){

  var cuentas = [{usuario: "mili01gm@gmail.com", password: "ArgosPeru"},
                 {usuario: "alejvillaobos86@gmail.com", password: "mauriat1"},
                 {usuario: "natalydv@gmail.com", password: "mundO2711"}];

  var boton = document.getElementById('ingresa');
  boton.addEventListener('click',function(){
    var email = document.getElementById('user-mail');
    var password = document.getElementById('user-contra');
    var spanEmail = document.getElementById('msg-user');
    var spanPass = document.getElementById('msg-contra');
    var rightEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    function correctUser(param){
      if(param == ""){
        //alert("a");}
        spanEmail.innerHTML = "El campo de usuario no puede estar en blanco"
        return false;}
      else if(!rightEmail.test(param)){
        spanEmail.innerHTML = "Ingrese un usuario válido"
        return false;}

      correctPassword(password.value);
    }

    function correctPassword(param){
      if(param == ""){
        spanPass.innerHTML = "El campo de password no puede estar en blanco"
        return false;}
      else if(param < 6){
        spanPass.innerHTML = "Ingrese un password válido"
        return false;}

    }
    // if(email.value ){
    //   //alert("a");}
    //   spanEmail.innerHTML = "El campo de usuario no puede estar en blanco"}
    // else if(password.value.length == 0){
    //   //alert("b");}
    //   spanPass.innerHTML ="El campo de password no puede estar en blanco"}
    //
    // if(email.value.search(rightEmail)){
    //    spanEmail.innerHTML = "Ingrese un email válido"}
    // else if(password.value.search(rightPass){
    //    spanPass.innerHTML = "Ingrese el password correcto"}

    function correctos(val1,val2){
      cuentas.forEach(function(e){
        if(val1=="mili01gm@gmail.com"){
          alert("ok");
        }
      });
    }

    correctUser(email.value);
    correctPassword(password.value);
    //function correctos(email.value,password.value);
  });



});
