// criando variavel dos produtos
// const nomeProduto = "Camisa Corinthians 2024";
// const marca = "Nike";
// const preco = 169.90;
// const nomeArquivoImagem = "camisa-2024.jpg";
import './style.css';
import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import {
  inicializarCarrinho,
  renderizarProdutosCarrinho,atualizarPrecoCarrinho
} from "./src/menuCarrinho";

renderizarProdutosCarrinho();
renderizarCatalogo();
inicializarCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();
