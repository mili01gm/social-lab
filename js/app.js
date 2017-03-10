// window.addEventListener('load',function(){
//   function sesion(param){
//     if(param == undefined || param == ""){
//       window.location = 'pages/signin.html';
//       return false;
//     } else if(param != undefined){
//       param.preventDefault();
//       return true;}
//   }
//   sesion(location.search);
//
// });


//
//
//
//   btnPostea.addEventListener('click',function(){
//
//     var btnPostea = document.getElementById('post-btn');
//     var publicacion = document.getElementById('wall-post').value;
//     var muro = document.getElementsByClassName('div-wall');
//     var opciones = document.getElementsByClassName('opciones');
//     var publicos = {};
//     var privados = {};
//
//
//       function createPost(estado) {
//       var post = document.createElement('div');
//       var texto = document.createElement('p');
//       texto.innerHTML = estado;
//       var eliminar = document.createElement('a');
//       var editar = document.createElement('a');
//       eliminar.innerHTML = "Eliminar"
//       editar.innerHTML = "Editar"
//       eliminar.addEventListener('click',function(e) {
//         e.preventDefault();
//         var postParent = e.target.parent; // Devuelve el padre
//       });
//       post.appendChild(texto);
//       post.appendChild(eliminar);
//       post.appendChild(editar);
//
//       // if(opciones.value == 1){
//       //   post.push(publicos);}
//       // else if(opciones.value == 2){
//       //   post.push(privados);}
//
//     }
//     var muro = document.getElementsByClassName('resultado');
//     muro.appendChild(createPost(publicacion));
//
//     // var wallItem = "<div class='wall-item'>"+post.value+"</div>"+"<hr>";
//     // muro.innerHTML = wallItem
//     //alert("ok");
//   });
//
//   // function removePost(){
//   //   var removePost = window.confirm("¿Deseas eliminar este post?");
//   //   if(removePost == true){
//   //     deletePost();
//   //     alert("Post eliminado!");}
//   //   else{ }
//
//
// });
