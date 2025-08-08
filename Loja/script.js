let produtos;

window.onload = function () {
  var storeduser = localStorage.getItem("usuario");
  var user = JSON.parse(storeduser);

  var dataEntrada = new Date(user.dataEntrada);
  var dataFormatada = dataEntrada.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  document.getElementById("perfil").innerText = dataFormatada;
  document.getElementById("user").innerText = user.name;
  document.getElementById("idPerfil").innerText = user.id;
};

document.addEventListener("DOMContentLoaded", function(){
  //busca dos produtos e armazenamento dos dados na variavel global
  fetch('../Dados/mock.json').then((response) => response.json())
                             .then((data) => {
                              produtos = data
                              console.log(data)
                             }).catch((error) => console.error('Erro ao carregar os dados', error))
});
