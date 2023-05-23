
function addUser() {

  user_name = document.getElementById("userName").value;
// Armazenado local do navegador
// Variavel que guarda o nome do usuário
  localStorage.setItem("userName", user_name);
  //Código que muda de tela
    window.location = "kwitterRoom.html";
}

