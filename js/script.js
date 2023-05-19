
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (window.innerWidth >= 768) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("voltarTopoBtn").style.display = "block";
    } else {
      document.getElementById("voltarTopoBtn").style.display = "none";
    }
  } else {
    document.getElementById("voltarTopoBtn").style.display = "none";
  }
}

function voltarAoTopo() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Neste código, utilizamos a propriedade window.innerWidth para verificar a largura da tela. Se a largura for maior ou igual a 768 pixels, a função scrollFunction() é executada normalmente, verificando o scroll e exibindo ou ocultando o botão "Voltar ao Topo" de acordo. Caso a largura seja menor que 768 pixels, o botão é sempre ocultado, independentemente do scroll.




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
