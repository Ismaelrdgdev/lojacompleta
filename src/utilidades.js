export const catalogo = [
  {
    id: "1",
    nome: "Camisa Jogador Corinthians 2024",
    marca: "Nike",
    preco: (169.7).toFixed(2),
    imagem: "camisa-2024.jpg",
    feminino: false,
  },
  {
    id: "2",
    nome: "Camisa Torcedor Corinthians 2025",
    marca: "Nike",
    preco: (169.7).toFixed(2),
    imagem: "camisa-2025.jpg",
    feminino: false,
  },
  {
    id: "3",
    nome: "Camisa Treino Corinthians 2024",
    marca: "Nike",
    preco: (169.7).toFixed(2),
    imagem: "camisa-3.jpg",
    feminino: false,
  },
  {
    id: "4",
    nome: "Camisa Torcedor Corinthians 2024",
    marca: "Nike",
    preco: (169.7).toFixed(2),
    imagem: "camisa-preta-branca.jpg",
    feminino: false,
  },
  {
    id: "5",
    nome: "Camisa II Jogo Corinthians 2025",
    marca: "Nike",
    preco: (169.7).toFixed(2),
    imagem: "camisa-preta.jpg",
    feminino: false,
  },
  {
    id: "6",
    nome: "Camisa Treino Corinthians 2025",
    marca: "Nike",
    preco: (169.7).toFixed(2),
    imagem: "camisa-treino.jpg",
    feminino: false,
  },
  {
    id: "7",
    nome: "Casaco Treino Corinthians 2025",
    marca: "Nike",
    preco: (169.7).toFixed(2),
    imagem: "casaco-treino.jpg",
    feminino: false,
  },
  {
    id: "8",
    nome: "Blusão Corinthains Feminino",
    marca: "Nike",
    preco: (169.7).toFixed(2),
    imagem: "blusao-feminino.jpg",
    feminino: true,
  },
  {
    id: "9",
    nome: "Camisa III Torcedor Corinthains 2024",
    marca: "Nike",
    preco: (169.7).toFixed(2),
    imagem: "camisa-3-feminino.jpeg",
    feminino: true,
  },
  {
    id: "10",
    nome: "Camisa infantil Torcedor Corinthians 2024",
    marca: "Nike",
    preco: (169.7).toFixed(2),
    imagem: "infantil-2024.jpeg",
    feminino: true,
  },
  {
    id: "11",
    nome: "Camisa Retrô Feminina Corinthians",
    marca: "Nike",
    preco: (169.7).toFixed(2),
    imagem: "retro-feminino.jpg",
    feminino: true,
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage (chave){
  localStorage.removeItem(chave);
}

export function desenharProdutoNoCarrinhoSimples(
  idProduto,
  idContainerHtml,
  quantidadeDoProduto
) {
  const produto = catalogo.find((p) => p.id === idProduto); //acha o produto apartir do ID
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement("article");
  const articleClasses = [
    "flex",
    "bg-stone-300",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-90",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const cartaoProdutoCarrinho = `
        <img src="./assets/imagens-corinthians/${produto.imagem}" alt="${produto.nome}" class="h-20 w-20 rounded-lg">
        <div class="p-2 flex flex-col justify-between">
          <p class="text-slate-950 text-sm">${produto.nome}</p>
          <p class="text-slate-400 text-xs">Tamanho: M</p>
          <p class="text-green-700 text-lg">R$ ${produto.preco}</p>
        </div>
        <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
            <p class="ml-2" id="quantidade-${produto.id}"> ${quantidadeDoProduto} </p>
  </div>`;
  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}
