import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";
//estrutura for, para preencher as div automaticas
export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `
          <div class="flex flex-col p-2 justify-between w-60 m-2 group shadow-xl shadow-slate-400 rounded-lg ${produtoCatalogo.feminino ? 'feminino' : 'masculino'}"   id="card-produto-${produtoCatalogo.id}">
              <img src="./assets/imagens-corinthians/${produtoCatalogo.imagem}" class="group-hover:scale-105 duration-300 my-3 rounded-lg" alt="uniforme-corinthians-2024">
              
              <p class="text-sm">${produtoCatalogo.nome}</p>
              <p class="text-sm">${produtoCatalogo.marca}</p>
              <p class="text-sm text-green-500">R$ ${produtoCatalogo.preco}</p>
              <button id="adicionar-${produtoCatalogo.id}" class="bg-slate-950 text-slate-200 hover:bg-slate-700 rounded-sm"><i class="fa-solid fa-cart-plus"> </i></button>
              </div>`;

    document.getElementById("section-produtos").innerHTML += cartaoProduto;
  }
  //adicionando ao carrinho
  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click",() =>  adicionarAoCarrinho(produtoCatalogo.id));
  }
}
