import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades";
const idsProdutoCarrinhoComQuantidade =lerLocalStorage('carrinho') ?? {};

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0px]");
  document.getElementById("carrinho").classList.remove("right-[-360px]");
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]");
  document.getElementById("carrinho").classList.add("right-[-360px]");
}

// function abrirCarrinho(){
//     document.getElementById("carrinho").classList.remove("hidden");
// }

// function fecharCarrinho(){
//     document.getElementById("carrinho").classList.add("hidden")
// }

function irParaCheckout(){
  if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0){
    return;
  }
  window.location.href = "./checkout.html";
}

export function inicializarCarrinho() {
  const botaFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
  const botaoIrParaCheckout= document.getElementById("finalizar-compra");

  botaFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
  botaoIrParaCheckout.addEventListener("click", irParaCheckout);
}

function removerDoCarrinho(idProduto) {
  delete idsProdutoCarrinhoComQuantidade[idProduto];
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  renderizarProdutosCarrinho(); //remover elemento
}

function incrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  atualizarInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto) {
  if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
    removerDoCarrinho(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  atualizarInformacaoQuantidade(idProduto);
}

function atualizarInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdutoCarrinhoComQuantidade[idProduto];
}

function desenharProdutoNoCarrinho(idProduto) {
  const produto = catalogo.find((p) => p.id === idProduto); //acha o produto apartir do ID
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");

  const elementoArticle = document.createElement("article");
  const articleClasses = [
    "flex",
    "bg-slate-100",
    "rounded-lg",
    "p-1",
    "relative",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const cartaoProdutoCarrinho = `
        <button id="remover-item-${
          produto.id
        }"><i class="fa-solid fa-circle-xmark text-slate-700 hover:text-slate-800 absolute top-1 right-2"></i></button>

        <img src="./assets/imagens-corinthians/${produto.imagem}" alt="${
    produto.nome
  }" class="h-20 w-20 rounded-lg">
        <div class="p-2 flex flex-col justify-between">
          <p class="text-slate-900 text-sm">${produto.nome}</p>
          <p class="text-slate-400 text-xs">Tamanho: M</p>
          <p class="text-green-700 text-lg">R$ ${produto.preco}</p>
        </div>
        <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
            <button id="decrementar-produto-${
              produto.id
            }"><i class="fa-solid fa-minus"></i></button>
            <p class="ml-2" id="quantidade-${produto.id}"> ${
    idsProdutoCarrinhoComQuantidade[produto.id]
  } </p>
            <button id="incrementar-produto-${
              produto.id
            }" class="ml-2"><i class="fa-solid fa-plus"></i></button>
        </div>`;
  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);

  document
    .getElementById(`incrementar-produto-${produto.id}`)
    .addEventListener("click", () => incrementarQuantidadeProduto(idProduto));
  document
    .getElementById(`decrementar-produto-${produto.id}`)
    .addEventListener("click", () => decrementarQuantidadeProduto(idProduto));
  document
    .getElementById(`remover-item-${produto.id}`)
    .addEventListener("click", () => removerDoCarrinho(idProduto));
}

export function renderizarProdutosCarrinho() {
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
  containerProdutosCarrinho.innerHTML = "";

  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoNoCarrinho(idProduto);
  }
}

//...................
export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutoCarrinhoComQuantidade) {
    incrementarQuantidadeProduto(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
  desenharProdutoNoCarrinho(idProduto);
}

export function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById("preco-total");
  let precoTotalCarrinho = 0;
  for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
    precoTotalCarrinho +=
      catalogo.find((p) => p.id === idProdutoNoCarrinho).preco *
      idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
  }
  precoCarrinho.innerText = `Total: R$${precoTotalCarrinho.toFixed(2)}`;
}
