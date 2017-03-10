window.addEventListener('load',function(){

  var btnPostea = document.getElementById('post-btn');

  btnPostea.addEventListener('click',function(e){
    var estado = document.getElementById('wall-post');
    var muro = document.getElementById('resultado');
    muro.appendChild(createPost(estado.value));
    e.preventDefault();
    // alert(muro);
  });

    function createPost(param) {
        var post = document.createElement('div');
        var texto = document.createElement('p');
          texto.innerHTML = param;
        var editar = document.createElement('button');
        var eliminar = document.createElement('button');
          editar.innerHTML = "Editar"
          eliminar.innerHTML = "Eliminar"
        editar.addEventListener('click',function(e) {
          e.preventDefault();
          var postParent = e.target.parent; //daddy
        });
        eliminar.addEventListener('click',function(e) {
          e.preventDefault();
          var postParent = e.target.parent; //daddy
        });

        post.appendChild(texto);
        post.appendChild(eliminar);
        post.appendChild(editar);

        return post;
    }



  // function removePost(){
  //   var removePost = window.confirm("¿Deseas eliminar este post?");
  //   if(removePost == true){
  //     deletePost();
  //     alert("Post eliminado!");}
  //   else{ }


});
