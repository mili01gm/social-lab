window.addEventListener('load',function(){
  function sesion(param){
    var param = location.search.split('nombre=')[1];
    if(param == undefined){
      window.location = 'pages/signin.html';
    } else { continue;}
  }
  sesion(location.search);

  var btnPostea = document.getElementById('post-btn');
  var post = document.getElementById('wall-post');
  var muro = document.getElementsByClassName('div-wall');

  btnPostea.addEventListener('click',function(){
    // var wallItem = "<div class='wall-item'>"+post.value+"</div>"+"<hr>";
    // muro.innerHTML = wallItem
    alert("ok");
  });

  // function removePost(){
  //   var removePost = window.confirm("¿Deseas eliminar este post?");
  //   if(removePost == true){
  //     deletePost();
  //     alert("Post eliminado!");}
  //   else{ }




});
