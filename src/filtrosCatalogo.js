const catalogoProdutos = document.getElementById("section-produtos");

function exibirTodos(){
   const produtosEscondidos= Array.from(catalogoProdutos.getElementsByClassName("hidden"));

   for(const produto of produtosEscondidos){
    produto.classList.remove("hidden");
   }
}

function esconderMasculino() {
    exibirTodos();
  const produtosMasculino = Array.from(
    catalogoProdutos.getElementsByClassName("masculino")
  );

  for (const produto of produtosMasculino) {
    produto.classList.add("hidden");
  }
}

function esconderFeminino() {
    exibirTodos();
    const produtosFeminino = Array.from(
      catalogoProdutos.getElementsByClassName("feminino")
    );
  
    for (const produto of produtosFeminino) {
      produto.classList.add("hidden");
    }
  }

export function inicializarFiltros() {
    document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
  document
    .getElementById("exibir-feminino")
    .addEventListener("click", esconderMasculino);
    document
    .getElementById("exibir-masculino")
    .addEventListener("click", esconderFeminino);
}
