window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("voltarTopoBtn").style.display = "block";
  } else {
    document.getElementById("voltarTopoBtn").style.display = "none";
  }
}

function voltarAoTopo() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// Obter o modal
var modal = document.querySelector('.modal');

// Obter o botão que abre o modal
var btnComprar = document.querySelector('.btn-comprar');

// Obter o botão de fechar
var span = document.querySelector('.close');

// Quando o usuário clicar no botão Comprar, abrir o modal
btnComprar.onclick = function() {
modal.style.display = "block";
}

// Quando o usuário clicar no botão Fechar, fechar o modal
span.onclick = function() {
modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fechar o modal
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

const inputQuantidade = document.querySelector('#quantidade');
const precoUnitario = 99.99;
const precoTotal = document.querySelector('#preco-total');

inputQuantidade.addEventListener('change', (event) => {
  const quantidade = parseInt(event.target.value);
  const novoPrecoTotal = (precoUnitario * quantidade).toFixed(2);
  precoTotal.textContent = `R$ ${novoPrecoTotal}`;
});
