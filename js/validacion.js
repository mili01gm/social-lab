window.addEventListener('load',function(){

  var cuentas = [ {nombre : "Milagros", usuario : "mili01gm@gmail.com", password : "ArgosPeru" },
                  {nombre : "Alejandro", usuario : "alevillalobos86@gmail.com", password : "mauriat1" },
                  {nombre : "Naty", usuario : "natalydv@gmail.com", password : "mundO2711" }];

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

    function correctPassword(var1,var2){
      if(var1 < 6){
        spanPass.innerHTML = "El password debe tener mínimo 6 dígitos"
        return false;}

      //for(var i in cuentas){
      //for(var i = 0; i < cuentas.length; i++){
      cuentas.forEach(function(e){
        // if(var2 != e.usuario && var1 != e.password){
        //   spanEmail.innerHTML = "Este email no está registrado"
        //   spanPass.innerHTML = ""
        //   //console.log(e.usuario, e.password);
        //   return false;}
        if(e.usuario != var2 && e.password == var1){
          spanEmail.innerHTML = ""
          spanPass.innerHTML = "El password no coincide"
          //console.log(e.usuario, e.password);
          return false;}
        else if(e.usuario == var2 && e.password != var1){
          spanPass.innerHTML = "El password no es correcto"
          spanEmail.innerHTML = ""
          console.log(e.usuario, e.password);
          return false;}
        else if(e.usuario == var2 && e.password == var1){
          window.location = '../index.html'+ "?name=" + e.nombre; }
      });


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

    correctUser(email.value);
    correctPassword(password.value,email.value);
    //window.location = '../index.html'
  });


});
