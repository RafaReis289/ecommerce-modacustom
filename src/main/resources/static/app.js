"use strict";


const catalogo = [
  { id: 1, nome: "Regata de sol", marca: "Som & Estampa", lojaId: 2, categoria: "Personalizável", preco: 89.90, tag: "BÁSICA", img: "img/1.jpg", descricao: "Regata branca, leve e versátil, perfeita para dias ensolarados e looks casuais." },
  { id: 2, nome: "Camiseta Rap & Rua", marca: "Distrito 013", lojaId: 1, categoria: "Streetwear", preco: 99.90, tag: "STREET", img: "img/2.jpg", descricao: "Camiseta inspirada no rap e na cultura urbana." },
  { id: 3, nome: "Regata lisa personalizável", marca: "Formei! Camisetas", lojaId: 3, categoria: "Personalizável", preco: 74.90, tag: "PERSONALIZÁVEL", img: "img/3.jpg", descricao: "Regata lisa que pode ser personalizada com frases ou desenhos." },
  { id: 4, nome: "Camiseta Cultura Pop", marca: "PopLab Studio", lojaId: 4, categoria: "Cultura pop", preco: 94.90, tag: "POP CULTURE", img: "img/4.jpg", descricao: "Camiseta com temática de cultura pop." },
  { id: 5, nome: "Camiseta Hello Kitty", marca: "PopLab Studio", lojaId: 4, categoria: "Cultura pop", preco: 84.90, tag: "POP", img: "img/5.jpg", descricao: "Camiseta temática da Hello Kitty." },
  { id: 6, nome: "Calça Oversized", marca: "Distrito 013", lojaId: 1, categoria: "Streetwear", preco: 189.90, tag: "OVERSIZED", img: "img/6.jpg", descricao: "Calça de modelagem ampla e estilo urbano." },
  { id: 7, nome: "Calça Ídolos da Música", marca: "Som & Estampa", lojaId: 2, categoria: "Música", preco: 99.90, tag: "FÃ-CLUBE", img: "img/7.jpg", descricao: "Calça estampada com referências musicais." },
  { id: 8, nome: "Calça Personalizada", marca: "Formei! Camisetas", lojaId: 3, categoria: "Terceirão", preco: 69.90, tag: "SUA TURMA", img: "img/8.jpg", descricao: "Calça personalizável com nomes, frases ou estampas." },
  { id: 9, nome: "Calça Gamer & Pop", marca: "PopLab Studio", lojaId: 4, categoria: "Cultura pop", preco: 109.90, tag: "GEEK", img: "img/9.jpg", descricao: "Calça com estilo gamer e referências à cultura pop." },
  { id: 10, nome: "Jaqueta de caveira", marca: "Traço Livre", lojaId: 5, categoria: "Esporte", preco: 79.90, tag: "ACTIVE", img: "img/10.jpg", descricao: "Jaqueta com estampa de caveira e visual marcante." },
  { id: 11, nome: "Jaqueta Crie Sua Arte", marca: "Traço Livre", lojaId: 5, categoria: "Personalizável", preco: 64.90, tag: "PERSONALIZE", img: "img/11.jpg", descricao: "Jaqueta personalizável com desenhos ou frases." },
  { id: 12, nome: "Shorts Personalizáveis", marca: "Som & Estampa", lojaId: 2, categoria: "Cultura pop", preco: 74.90, tag: "CUSTOM", img: "img/12.jpg", descricao: "Shorts que podem receber estampas personalizadas." },
  { id: 13, nome: "Camiseta Básica", marca: "Formei! Camisetas", lojaId: 3, categoria: "Terceirão", preco: 72.90, tag: "FORMATURA", img: "img/13.jpg", descricao: "Camiseta básica para usar ou personalizar." },
  { id: 14, nome: "Jaqueta Michael Jackson", marca: "Distrito 013", lojaId: 1, categoria: "Streetwear", preco: 89.90, tag: "ARTE AUTORAL", img: "img/14.jpg", descricao: "Jaqueta inspirada em Michael Jackson." },
  { id: 15, nome: "Camiseta Bob Esponja", marca: "PopLab Studio", lojaId: 4, categoria: "Cultura pop", preco: 89.90, tag: "POP", img: "img/15.jpg", descricao: "Camiseta temática do Bob Esponja." },
  { id: 16, nome: "Camiseta Mãe e Filha", marca: "Traço Livre", lojaId: 5, categoria: "Personalizável", preco: 59.90, tag: "BÁSICA", img: "img/16.jpg", descricao: "Camisetas combinando para mães e filhas." },
  { id: 17, nome: "Camiseta do Amor", marca: "Som & Estampa", lojaId: 2, categoria: "Música", preco: 179.90, tag: "AMOR", img: "img/17.jpg", descricao: "Camiseta com tema romântico." },
  { id: 18, nome: "Camiseta de Namoro", marca: "Formei! Camisetas", lojaId: 3, categoria: "Terceirão", preco: 79.90, tag: "CASAIS", img: "img/18.jpg", descricao: "Camiseta combinando para casais." },
  { id: 19, nome: "Camiseta VELARIS", marca: "Som & Estampa", lojaId: 2, categoria: "Música", preco: 94.90, tag: "LITERATURA", img: "img/19.jpg", descricao: "Camiseta inspirada no universo literário VELARIS." },
  { id: 20, nome: "Camiseta VELARIS Urbana", marca: "Distrito 013", lojaId: 1, categoria: "Streetwear", preco: 79.90, tag: "URBANO", img: "img/20.jpg", descricao: "Camiseta de estilo urbano para leitores." },
  { id: 21, nome: "Camiseta Secreta PLL", marca: "Formei! Camisetas", lojaId: 3, categoria: "Terceirão", preco: 84.90, tag: "SERIES", img: "img/21.jpg", descricao: "Camiseta inspirada na série PLL." },
  { id: 22, nome: "Pop Style Shirt", marca: "PopLab Studio", lojaId: 4, categoria: "Cultura pop", preco: 109.90, tag: "ANIME", img: "img/22.jpg", descricao: "Camiseta de estilo pop inspirada em animes." },
  { id: 23, nome: "FRIENDS Camiseta", marca: "Traço Livre", lojaId: 5, categoria: "Esporte", preco: 89.90, tag: "FRIENDS", img: "img/23.jpg", descricao: "Camiseta temática inspirada na série FRIENDS." },
  { id: 24, nome: "Camiseta de Anime", marca: "Traço Livre", lojaId: 5, categoria: "Personalizável", preco: 99.90, tag: "CRIATIVO", img: "img/24.jpg", descricao: "Camiseta com temática de anime." },
  { id: 25, nome: "Camiseta de Recado", marca: "Distrito 013", lojaId: 1, categoria: "Streetwear", preco: 199.90, tag: "CLASSIC", img: "img/25.jpg", descricao: "Camiseta com frases ou mensagens criativas." }
];

const lojas = [
  {
    id: 1,
    nome: "Distrito 013",
    categoria: "Streetwear",
    cidade: "São Paulo, SP",
    rating: "4,9",
    vendas: "320+",
    descricao: "Streetwear urbano, modelagens amplas e estampas com atitude.",
    capa: "img/19.jpg",
    slogan: "Vista a rua do seu jeito."
  },
  {
    id: 2,
    nome: "Som & Estampa",
    categoria: "Música",
    cidade: "São Paulo, SP",
    rating: "4,8",
    vendas: "280+",
    descricao: "Peças inspiradas em música, livros, shows e universos de fãs.",
    capa: "img/20.jpg",
    slogan: "Sua paixão, sua estampa."
  },
  {
    id: 3,
    nome: "Formei! Camisetas",
    categoria: "Terceirão",
    cidade: "Campinas, SP",
    rating: "4,9",
    vendas: "190+",
    descricao: "Camisetas para formaturas, terceirão e lembranças de turma.",
    capa: "img/21.jpg",
    slogan: "A turma merece uma história."
  },
  {
    id: 4,
    nome: "PopLab Studio",
    categoria: "Cultura pop",
    cidade: "Florianópolis, SC",
    rating: "4,8",
    vendas: "310+",
    descricao: "Estampas com referências a séries, games e cultura pop.",
    capa: "img/22.jpg",
    slogan: "Seu universo, seu estilo."
  },
  {
    id: 5,
    nome: "Traço Livre",
    categoria: "Personalizáveis",
    cidade: "Curitiba, PR",
    rating: "4,8",
    vendas: "210+",
    descricao: "Arte independente e peças para transformar ideias em roupas únicas.",
    capa: "img/23.jpg",
    slogan: "Ideias fora das linhas."
  }
];

/* Os 18 primeiros aparecem em Explorar. */
const catalogoExplorar = catalogo.filter(p => p.id <= 18);

const $ = seletor => document.querySelector(seletor);

const moeda = valor => Number(valor).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});

function ler(chave, padrao) {
  try {
    return JSON.parse(localStorage.getItem(chave)) ?? padrao;
  } catch {
    return padrao;
  }
}

let favoritos = ler("mc-favoritos", []);
let carrinho = ler("mc-carrinho", []);
let categoria = "Todos";
let categoriaLoja = "Todas";
let busca = "";

function toast(mensagem) {
  const dialogAberto = document.querySelector("dialog[open]");
  if (dialogAberto) {
    let aviso = dialogAberto.querySelector(":scope > .dialog-feedback");
    if (!aviso) {
      aviso = document.createElement("div");
      aviso.className = "dialog-feedback";
      aviso.setAttribute("role", "status");
      aviso.setAttribute("aria-live", "polite");
      dialogAberto.prepend(aviso);
    }
    aviso.textContent = mensagem;
    aviso.hidden = false;
    return;
  }

  const elemento = $("#toast");
  if (!elemento) return;
  elemento.textContent = mensagem;
  elemento.classList.add("show");
  clearTimeout(window.mcToastTimer);
  window.mcToastTimer = setTimeout(() => elemento.classList.remove("show"), 3200);
}

function mostrarErroFormulario(formulario, mensagem) {
  if (!formulario) return;
  let aviso = formulario.querySelector(".form-error");
  if (!aviso) {
    aviso = document.createElement("div");
    aviso.className = "form-error";
    aviso.setAttribute("role", "alert");
    aviso.setAttribute("aria-live", "assertive");
    formulario.prepend(aviso);
  }
  aviso.textContent = mensagem;
  aviso.hidden = false;
  aviso.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function limparErroFormulario(formulario) {
  const aviso = formulario?.querySelector(".form-error");
  if (aviso) { aviso.textContent = ""; aviso.hidden = true; }
}

function salvarEstado() {
  localStorage.setItem("mc-favoritos", JSON.stringify(favoritos));
  localStorage.setItem("mc-carrinho", JSON.stringify(carrinho));
  atualizarContadores();
}

function atualizarContadores() {
  $("#favCount").textContent = favoritos.length;

  $("#cartCount").textContent = carrinho.reduce(
    (total, item) => total + item.qtd,
    0
  );
}

function abrirDialog(id) {
  const dialog = $("#" + id);

  if (dialog && !dialog.open) {
    dialog.showModal();
  }
}

/* Imagens que falharem não serão substituídas por outras fotos. */
function tratarErroImagem(img) {
  img.onerror = null;
  img.classList.add("image-missing");
  img.alt = "Imagem indisponível. Confira o arquivo na pasta img.";
}

/* GRADE DE PRODUTOS */

function renderProdutos() {
  const grade = $("#productGrid");

  const produtos = catalogoExplorar.filter(produto => {
    const correspondeCategoria =
      categoria === "Todos" || produto.categoria === categoria;

    const texto = (
      produto.nome + " " +
      produto.marca + " " +
      produto.categoria + " " +
      produto.descricao
    ).toLocaleLowerCase("pt-BR");

    return correspondeCategoria &&
      texto.includes(busca.toLocaleLowerCase("pt-BR"));
  });

  grade.innerHTML = produtos.map(produto => `
    <article class="product">
      <div class="product-image">
        <img
          src="${produto.img}"
          alt="${produto.nome}"
          loading="lazy"
          onerror="tratarErroImagem(this)"
        >

        <span class="tag">${produto.tag}</span>

        <button
          class="heart ${favoritos.includes(produto.id) ? "on" : ""}"
          data-fav="${produto.id}"
          aria-label="Alternar favorito"
        >
          ${favoritos.includes(produto.id) ? "♥" : "♡"}
        </button>
      </div>

      <div class="product-info">
        <span class="product-brand">${produto.marca}</span>
        <h3>${produto.nome}</h3>

        <div class="product-bottom">
          <span class="price">${moeda(produto.preco)}</span>
          <span>★ 4,8</span>
        </div>

        <button class="add" data-add="${produto.id}">
          ＋ ADICIONAR AO CARRINHO
        </button>
      </div>
    </article>
  `).join("");

  $("#emptyState").classList.toggle("hidden", produtos.length > 0);
}

/* Lojas cadastradas por vendedores são adicionadas à vitrine pública. */
function incluirLojaDoVendedor(vendedor){
  if(!vendedor?.id)return;
  const id=100000+Number(vendedor.id);
  const existente=lojas.find(l=>l.id===id);
  const dados={id,vendedorId:Number(vendedor.id),nome:vendedor.nomeLoja||"Minha loja",categoria:vendedor.categoriaLoja||"Personalizáveis",cidade:"Loja independente",rating:"Nova",vendas:"0",descricao:vendedor.descricao||"Loja independente da comunidade Moda Custom.",capa:"img/logo.png",slogan:"Criada na Moda Custom."};
  if(existente)Object.assign(existente,dados);else lojas.push(dados);
}

/* CINCO LOJAS + LOJAS CADASTRADAS */

function renderLojas() {
  const grade = $("#lojasGrid");

  const lista = lojas.filter(loja => {
    const correspondeCategoria =
      categoriaLoja === "Todas" ||
      loja.categoria === categoriaLoja;

    const texto = (
      loja.nome + " " +
      loja.categoria + " " +
      loja.cidade + " " +
      loja.descricao
    ).toLocaleLowerCase("pt-BR");

    return correspondeCategoria &&
      texto.includes(busca.toLocaleLowerCase("pt-BR"));
  });

  grade.innerHTML = lista.map(loja => `
    <article class="store-card">
      <div
        class="store-cover"
        style="background-image:linear-gradient(135deg,#d9b54b44,#070707cc),url('${loja.capa}')"
      >
        <span class="store-category">${loja.categoria.toUpperCase()}</span>
      </div>

      <div class="store-body">
        <h3>${loja.nome}</h3>
        <p>${loja.descricao}</p>

        <div class="store-meta">
          <span>★ ${loja.rating} · ${loja.vendas} vendas</span>
          <span>${loja.cidade}</span>
        </div>

        <button class="button button-outline" data-store="${loja.id}">
          Conhecer loja ↗
        </button>
      </div>
    </article>
  `).join("");

  if (!lista.length) {
    grade.innerHTML = `
      <p class="section-subtitle">
        Nenhuma loja encontrada com esse filtro.
      </p>
    `;
  }
}

/* CARRINHO */

function adicionarCarrinho(id) {
  const produto = catalogo.find(p => p.id === id);
  if (!produto) return;

  // O tamanho só é solicitado dentro do carrinho, durante a compra.
  const item = carrinho.find(i => i.id === id && !i.tamanho);
  if (item) item.qtd++;
  else carrinho.push({ id, qtd: 1, tamanho: "" });

  salvarEstado();
  renderCarrinho();
  toast("Produto adicionado. Escolha o tamanho no carrinho para continuar.");
}

function renderCarrinho() {
  const lista = $("#cartItems");
  let total = 0;

  carrinho = carrinho.filter(item =>
    catalogo.some(produto => produto.id === item.id)
  );

  if (!carrinho.length) {
    lista.innerHTML = `
      <p class="empty-message">
        Seu carrinho está vazio. Explore as estampas e adicione sua primeira peça.
      </p>
    `;
  } else {
    lista.innerHTML = carrinho.map((item, indice) => {
      const produto = catalogo.find(p => p.id === item.id);
      if (!produto) return "";

      total += produto.preco * item.qtd;

      return `
        <div class="cart-row">
          <img
            src="${produto.img}"
            alt="${produto.nome}"
            onerror="tratarErroImagem(this)"
          >

          <div class="item-text">
            <strong>${produto.nome}</strong>
            <label class="size-label" for="cart-size-${indice}">Tamanho da peça</label>
            <select class="size-select cart-size-select" id="cart-size-${indice}" data-cart-size="${indice}" required aria-label="Escolha o tamanho de ${escapeHtml(produto.nome)}">
              <option value="">Selecione o tamanho</option>
              ${["P","M","G","GG","XG"].map(t => `<option value="${t}" ${item.tamanho===t?"selected":""}>${t}</option>`).join("")}
            </select>
            <small>${moeda(produto.preco)} cada</small>
          </div>

          <div class="quantity">
            <button data-minus="${indice}" aria-label="Diminuir">−</button>
            <span>${item.qtd}</span>
            <button data-plus="${indice}" aria-label="Aumentar">+</button>
          </div>

          <button
            class="remove"
            data-remove-cart="${indice}"
            aria-label="Remover produto"
          >×</button>
        </div>
      `;
    }).join("");
  }

  $("#cartTotal").textContent = moeda(total);
  salvarEstado();
}

/* FAVORITOS */

function renderFavoritos() {
  const lista = $("#favoriteItems");

  const produtos = catalogo.filter(produto =>
    favoritos.includes(produto.id)
  );

  lista.innerHTML = produtos.length
    ? produtos.map(produto => `
        <div class="favorite-row">
          <img
            src="${produto.img}"
            alt="${produto.nome}"
            onerror="tratarErroImagem(this)"
          >

          <div class="item-text">
            <strong>${produto.nome}</strong>
            <small>${moeda(produto.preco)}</small>
          </div>

          <button class="button button-outline" data-go-product="${produto.id}">
            Ver peça
          </button>

          <button class="remove" data-unfav="${produto.id}">×</button>
        </div>
      `).join("")
    : `<p class="empty-message">Você ainda não favoritou nenhuma peça.</p>`;
}

/* DETALHE DA LOJA */

function renderDetalheLoja(id) {
  const loja = lojas.find(l => l.id === id);
  if (!loja) return;

  const produtos = catalogo.filter(p => p.lojaId === id);

  $("#storeDetails").innerHTML = `
    <div
      class="store-detail-hero"
      style="background-image:linear-gradient(135deg,#d9b54b44,#070707cc),url('${loja.capa}')"
    >
      <span class="store-detail-category">${loja.categoria.toUpperCase()}</span>
    </div>

    <div class="store-detail-heading">
      <div>
        <p class="eyebrow">LOJA INDEPENDENTE · ${loja.cidade.toUpperCase()}</p>
        <h2>${loja.nome}</h2>
      </div>
    </div>

    <p><em>${loja.slogan}</em></p>
    <p class="section-subtitle">${loja.descricao}</p>

    <div class="store-meta">
      <span>★ ${loja.rating} avaliação demonstrativa</span>
      <span>${loja.vendas} vendas demonstrativas</span>
      <span>${produtos.length} peças na vitrine</span>
    </div>

    <div class="store-detail-actions">
      <button class="button button-outline" id="backToStores">
        ← Voltar para todas as lojas
      </button>

      <button class="button button-gold" id="storeCartShortcut">
        Ver carrinho ▱
      </button>
    </div>

    <h3>Conheça as peças desta loja</h3>

    <div class="store-products">
      ${produtos.map(produto => `
        <div class="store-product">
          <img
            src="${produto.img}"
            alt="${produto.nome}"
            loading="lazy"
            onerror="tratarErroImagem(this)"
          >

          <strong>${produto.nome}</strong>
          <small>${moeda(produto.preco)}</small>
          <button class="add" data-add="${produto.id}">
            ＋ Adicionar ao carrinho
          </button>
        </div>
      `).join("")}
    </div>

    <p class="form-note">
      Preços e avaliações são demonstrativos. A loja real será administrada
      pelo vendedor após integração ao backend.
    </p>
  `;

  $("#backToStores").addEventListener("click", () => {
    $("#storeDialog").close();
    $("#lojas").scrollIntoView({ behavior: "smooth" });
  });

  $("#storeCartShortcut").addEventListener("click", () => {
    $("#storeDialog").close();
    renderCarrinho();
    abrirDialog("cartDialog");
  });

  abrirDialog("storeDialog");
}

/* RESUMO DA COMPRA */

function renderResumoPedido() {
  let total = 0;

  const itens = carrinho.map(item => {
    const produto = catalogo.find(p => p.id === item.id);
    if (!produto) return "";

    const subtotal = produto.preco * item.qtd;
    total += subtotal;

    return `
      <div class="cart-row">
        <img
          src="${produto.img}"
          alt="${produto.nome}"
          onerror="tratarErroImagem(this)"
        >

        <div class="item-text">
          <strong>${produto.nome}</strong>
          <small>Tamanho ${escapeHtml(item.tamanho || "Não selecionado")} · ${item.qtd} unidade(s) · ${moeda(subtotal)}</small>
        </div>
      </div>
    `;
  }).join("");

  $("#checkoutResumo").innerHTML = `
    <h3>Resumo do pedido</h3>
    ${itens}
    <p class="cart-total">
      Total do pedido <strong>${moeda(total)}</strong>
    </p>
  `;
}

/* CPF: SOMENTE 11 NÚMEROS */

function configurarCPF() {
  document.querySelectorAll(".cpf-input").forEach(input => {
    input.inputMode = "numeric";
    input.maxLength = 11;
    input.minLength = 11;
    input.pattern = "[0-9]{11}";

    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "").slice(0, 11);

      input.setCustomValidity(
        input.value.length === 11
          ? ""
          : "O CPF deve conter exatamente 11 números."
      );
    });

    input.addEventListener("invalid", () => {
      input.setCustomValidity(
        "Digite exatamente 11 números no CPF, sem pontos ou traço."
      );
    });
  });
}

/* EVENTOS DO CATÁLOGO */

function configurarEventos() {
  $("#productGrid").addEventListener("click", e => {
    const favorito = e.target.closest("[data-fav]");
    const adicionar = e.target.closest("[data-add]");

    if (favorito) {
      const id = Number(favorito.dataset.fav);

      favoritos = favoritos.includes(id)
        ? favoritos.filter(x => x !== id)
        : [...favoritos, id];

      salvarEstado();
      renderProdutos();
      renderFavoritos();

      toast(
        favoritos.includes(id)
          ? "Adicionado aos favoritos."
          : "Removido dos favoritos."
      );
    }

    if (adicionar) {
      adicionarCarrinho(Number(adicionar.dataset.add));
    }
  });

  $("#lojasGrid").addEventListener("click", e => {
    const botao = e.target.closest("[data-store]");

    if (botao) {
      renderDetalheLoja(Number(botao.dataset.store));
    }
  });

  $("#storeDetails").addEventListener("click", e => {
    const botao = e.target.closest("[data-add]");

    if (botao) {
      adicionarCarrinho(Number(botao.dataset.add));
    }
  });

  document.querySelectorAll("#productFilters .filter").forEach(botao => {
    botao.addEventListener("click", () => {
      document.querySelectorAll("#productFilters .filter")
        .forEach(b => b.classList.remove("active"));

      botao.classList.add("active");
      categoria = botao.dataset.category;
      renderProdutos();
    });
  });

  document.querySelectorAll("#storeFilters .filter").forEach(botao => {
    botao.addEventListener("click", () => {
      document.querySelectorAll("#storeFilters .filter")
        .forEach(b => b.classList.remove("active"));

      botao.classList.add("active");
      categoriaLoja = botao.dataset.storeCategory;
      renderLojas();
    });
  });

  $("#searchForm").addEventListener("submit", e => {
    e.preventDefault();

    busca = $("#searchInput").value.trim();
    categoria = "Todos";
    categoriaLoja = "Todas";

    document.querySelectorAll("#productFilters .filter")
      .forEach(b => b.classList.toggle(
        "active",
        b.dataset.category === "Todos"
      ));

    document.querySelectorAll("#storeFilters .filter")
      .forEach(b => b.classList.toggle(
        "active",
        b.dataset.storeCategory === "Todas"
      ));

    renderProdutos();
    renderLojas();

    $("#explorar").scrollIntoView({ behavior: "smooth" });
  });

  const abrirPainelOuCadastro = () => {
    const vendedor = ler("mc-vendedor", null);
    if (vendedor?.id) {
      preencherContaVendedor();
      abrirDialog("sellerAccountDialog");
    } else abrirDialog("sellerDialog");
  };
  $("#sellerOpen").addEventListener("click", abrirPainelOuCadastro);
  $("#sellerOpen2").addEventListener("click", abrirPainelOuCadastro);
  $("#clientOpen").addEventListener("contextmenu", e => e.preventDefault());
  $("#clientOpen").addEventListener("click", () => {
    const client=ler("mc-cliente",null);
    if(client?.id){renderContaCliente();abrirDialog("clientAccountDialog");}
    else abrirDialog("clientLoginDialog");
  });
  $("#openRegisterFromLogin")?.addEventListener("click", () => {
    $("#clientLoginDialog").close();
    abrirDialog("clientDialog");
  });
  $("#openLoginFromRegister")?.addEventListener("click", () => {
    $("#clientDialog").close();
    abrirDialog("clientLoginDialog");
  });
  $("#clientLoginForm")?.addEventListener("submit", async e => {
    e.preventDefault();
    const form=e.currentTarget;
    if(!form.reportValidity()) return;
    const button=form.querySelector('button[type="submit"]');
    button.disabled=true; button.textContent="Entrando...";
    try {
      const response=await fetch("/api/clientes/login",{
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email:form.elements.email.value.trim().toLowerCase(),senha:form.elements.senha.value})
      });
      const result=await response.json().catch(()=>({}));
      if(!response.ok) throw new Error(result.message||"E-mail ou senha incorretos.");
      localStorage.setItem("mc-cliente",JSON.stringify({id:result.id,nome:result.nome,email:result.email,cpf:result.cpf||""}));
      form.reset(); $("#clientLoginDialog").close();
      document.body.classList.remove("seller-mode");
      atualizarBotoesConta(); renderContaCliente();
      toast("Login realizado com sucesso!");
      abrirDialog("clientAccountDialog");
    } catch(err) { mostrarErroFormulario(form, err.message||"Não foi possível entrar."); }
    finally { button.disabled=false; button.textContent="Entrar"; }
  });
  $("#clientLoginForm")?.addEventListener("input", e => limparErroFormulario(e.currentTarget));
  $("#openSellerLogin")?.addEventListener("click", () => {
    $("#sellerDialog").close();
    abrirDialog("sellerLoginDialog");
  });
  $("#openSellerRegister")?.addEventListener("click", () => {
    $("#sellerLoginDialog").close();
    abrirDialog("sellerDialog");
  });
  $("#sellerLoginForm")?.addEventListener("submit", async e => {
    e.preventDefault();
    const form=e.currentTarget;
    if(!form.reportValidity()) return;
    const button=form.querySelector('button[type="submit"]');
    button.disabled=true; button.textContent="Entrando...";
    try {
      const response=await fetch("/api/vendedores/login", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email:form.elements.email.value.trim().toLowerCase(), senha:form.elements.senha.value})
      });
      const result=await response.json().catch(()=>({}));
      if(!response.ok) throw new Error(result.message||"E-mail ou senha do vendedor incorretos.");
      localStorage.setItem("mc-vendedor", JSON.stringify(result));
      incluirLojaDoVendedor(result); renderLojas();
      form.reset(); $("#sellerLoginDialog").close();
      atualizarBotoesConta();
      document.body.classList.add("seller-mode");
      const painel=$("#sellerDashboard"); painel.classList.remove("hidden");
      $("#dashboardStoreName").textContent=result.nomeLoja||"Minha loja";
      $("#dashboardStoreDescription").textContent=result.descricao||"Gerencie suas roupas e sua vitrine.";
      await carregarProdutosVendedor(result.id);
      renderNotificacoesVendedor();
      requestAnimationFrame(()=>painel.scrollIntoView({behavior:"smooth",block:"start"}));
    } catch(err) { mostrarErroFormulario(form, err.message||"Não foi possível entrar na conta da loja."); }
    finally { button.disabled=false; button.textContent="Entrar na minha loja"; }
  });
  $("#sellerLoginForm")?.addEventListener("input", e => limparErroFormulario(e.currentTarget));

  $("#goSellerDashboard")?.addEventListener("click", async () => {
    const vendedor=ler("mc-vendedor",null);
    if(!vendedor?.id) { toast("Entre na conta da sua loja para continuar."); return; }
    $("#sellerAccountDialog").close();
    document.body.classList.add("seller-mode");
    const painel=$("#sellerDashboard");
    painel?.classList.remove("hidden");
    if(vendedor.id) await carregarProdutosVendedor(vendedor.id);
    renderNotificacoesVendedor();
    $("#dashboardStoreName").textContent=vendedor.nomeLoja||"Minha loja";
    $("#dashboardStoreDescription").textContent=vendedor.descricao||"";
    requestAnimationFrame(()=>painel?.scrollIntoView({behavior:"smooth",block:"start"}));
  });
  $("#sellerAccountLogout")?.addEventListener("click",()=>{localStorage.removeItem("mc-vendedor");$("#sellerAccountDialog").close();$("#sellerDashboard").classList.add("hidden");document.body.classList.remove("seller-mode");atualizarBotoesConta();toast("Você saiu da conta do vendedor.");});
  $("#clientLogout")?.addEventListener("click",()=>{localStorage.removeItem("mc-cliente");$("#clientAccountDialog").close();atualizarBotoesConta();toast("Você saiu da sua conta.");});
  $("#clientAccountDialog")?.addEventListener("click",e=>{const b=e.target.closest("[data-track]");if(b)mostrarRastreamento(b.dataset.track);});
  $("#sellerAccountForm")?.addEventListener("submit", async e => {
    e.preventDefault();
    const form=e.currentTarget, seller=ler("mc-vendedor",null);
    if(!seller?.id) return;
    const data={nome:form.elements.nome.value.trim(),nomeLoja:form.elements.nomeLoja.value.trim(),email:seller.email,cnpj:seller.cnpj,categoriaLoja:form.elements.categoriaLoja.value,descricao:form.elements.descricao.value.trim()};
    try {
      const response=await fetch(`/api/vendedores/${seller.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
      const updated=await response.json().catch(()=>({}));
      if(!response.ok) throw new Error(updated.message||updated.error||"Não foi possível atualizar a conta.");
      localStorage.setItem("mc-vendedor",JSON.stringify(updated));
      incluirLojaDoVendedor(updated); renderLojas();
      $("#dashboardStoreName").textContent=updated.nomeLoja||"Minha loja";
      $("#dashboardStoreDescription").textContent=updated.descricao||"";
      $("#sellerAccountDialog").close();
      toast("Dados da loja atualizados!");
    } catch(err){ toast(err.message); }
  });
  $("#customOpen").addEventListener("click", () => abrirDialog("customDialog"));

  $("#favTop").addEventListener("click", () => {
    renderFavoritos();
    abrirDialog("favoritesDialog");
  });

  $("#cartTop").addEventListener("click", () => {
    renderCarrinho();
    abrirDialog("cartDialog");
  });

  document.querySelectorAll("[data-close]").forEach(botao => {
    botao.addEventListener("click", () => {
      const dialog = $("#" + botao.dataset.close);
      if (dialog) dialog.close();
    });
  });

  $("#cartItems").addEventListener("change", e => {
    const seletor = e.target.closest("[data-cart-size]");
    if (!seletor) return;
    const item = carrinho[Number(seletor.dataset.cartSize)];
    if (item) { item.tamanho = seletor.value; salvarEstado(); }
  });

  $("#cartItems").addEventListener("click", e => {
    const mais = e.target.closest("[data-plus]");
    const menos = e.target.closest("[data-minus]");
    const remover = e.target.closest("[data-remove-cart]");
    if (!mais && !menos && !remover) return;
    if (mais) { const item = carrinho[Number(mais.dataset.plus)]; if (item) item.qtd++; }
    if (menos) { const item = carrinho[Number(menos.dataset.minus)]; if (item) item.qtd = Math.max(1, item.qtd - 1); }
    if (remover) carrinho.splice(Number(remover.dataset.removeCart), 1);
    salvarEstado();
    renderCarrinho();
  });

  $("#favoriteItems").addEventListener("click", e => {
    const remover = e.target.closest("[data-unfav]");
    const ver = e.target.closest("[data-go-product]");

    if (remover) {
      favoritos = favoritos.filter(
        id => id !== Number(remover.dataset.unfav)
      );

      salvarEstado();
      renderProdutos();
      renderFavoritos();
    }

    if (ver) {
      $("#favoritesDialog").close();
      busca = "";
      $("#searchInput").value = "";
      categoria = "Todos";
      renderProdutos();
      $("#explorar").scrollIntoView({ behavior: "smooth" });
    }
  });

  function preencherLojasCheckout() {
    const select = $("#checkoutStore");
    if (!select) return;
    const ids = [...new Set(carrinho.map(item => {
      const produto = catalogo.find(p => String(p.id) === String(item.id));
      return produto?.lojaId;
    }).filter(id => id !== undefined && id !== null))];
    const disponiveis = lojas.filter(loja => ids.some(id => String(id) === String(loja.id)));
    select.innerHTML = '<option value="">Selecione a loja</option>' +
      disponiveis.map(loja => `<option value="${loja.id}">${escapeHtml(loja.nome)}</option>`).join("");
    if (disponiveis.length === 1) select.value = String(disponiveis[0].id);
  }

  function renderNotificacoesVendedor() {
    const vendedor = ler("mc-vendedor", null);
    const badge = $("#sellerNotificationBadge");
    const area = $("#sellerNotificationsList");
    if (!vendedor?.id || !badge || !area) return;
    const pedidos = ler("mc-pedidos", []).filter(p =>
      String(p.vendedorId) === String(vendedor.id) ||
      String(p.lojaId) === String(100000 + Number(vendedor.id))
    ).sort((a,b) => new Date(b.dataISO) - new Date(a.dataISO));
    const naoLidas = pedidos.filter(p => !p.vendedorLeu).length;
    badge.textContent = String(naoLidas);
    badge.classList.toggle("hidden", naoLidas === 0);
    area.innerHTML = pedidos.length ? pedidos.map(p => `
      <article class="seller-notification ${p.vendedorLeu ? "read" : "unread"}">
        <div><strong>Pedido ${escapeHtml(p.numero)}</strong> · ${escapeHtml(p.cliente || "Cliente")}</div>
        <p>${escapeHtml(p.email || "")} · ${escapeHtml(p.data || "")}</p>
        <p><strong>Loja:</strong> ${escapeHtml(p.lojaNome || "Minha loja")} · <strong>Total:</strong> ${moeda(p.total || 0)}</p>
        <p>${(p.itens || []).map(i => `${escapeHtml(i.nome || "Produto")} (${escapeHtml(i.tamanho || "—")}) × ${i.qtd}`).join("; ")}</p>
        <label>Status do pedido
          <select data-order-status="${escapeHtml(p.numero)}">
            ${["Pedido recebido","Pagamento confirmado","Em preparação","Enviado","Saiu para entrega","Entregue","Cancelado"].map(st => `<option ${p.status === st ? "selected" : ""}>${st}</option>`).join("")}
          </select>
        </label>
      </article>`).join("") : '<p class="form-note">Nenhuma solicitação de pedido para esta loja ainda.</p>';
  }

  function salvarStatusPedido(numero, status) {
    const vendedor = ler("mc-vendedor", null);
    if (!vendedor?.id) return;
    const pedidos = ler("mc-pedidos", []);
    const pedido = pedidos.find(p => String(p.numero) === String(numero) && String(p.vendedorId) === String(vendedor.id));
    if (!pedido) { toast("Pedido não encontrado para esta loja."); return; }
    pedido.status = status;
    pedido.atualizadoEm = new Date().toISOString();
    pedido.vendedorLeu = true;
    localStorage.setItem("mc-pedidos", JSON.stringify(pedidos));
    renderNotificacoesVendedor();
    toast("Status do pedido atualizado.");
  }

  $("#sellerNotificationsToggle")?.addEventListener("click", () => {
    const panel = $("#sellerNotificationsPanel");
    const aberto = panel.classList.toggle("hidden") === false;
    $("#sellerNotificationsToggle").setAttribute("aria-expanded", String(aberto));
    if (aberto) {
      const vendedor = ler("mc-vendedor", null);
      const pedidos = ler("mc-pedidos", []);
      pedidos.forEach(p => { if (String(p.vendedorId) === String(vendedor?.id)) p.vendedorLeu = true; });
      localStorage.setItem("mc-pedidos", JSON.stringify(pedidos));
      renderNotificacoesVendedor();
    }
  });
  $("#sellerNotificationsList")?.addEventListener("change", e => {
    const select = e.target.closest("[data-order-status]");
    if (select) salvarStatusPedido(select.dataset.orderStatus, select.value);
  });
  if (ler("mc-vendedor", null)?.id) renderNotificacoesVendedor();

  $("#checkout").addEventListener("click", () => {
    if (!carrinho.length) {
      toast("Adicione produtos antes de continuar.");
      return;
    }
    if (carrinho.some(item => !item.tamanho)) {
      toast("Escolha o tamanho de cada peça no carrinho.");
      return;
    }

    preencherLojasCheckout();
    $("#cartDialog").close();
    renderResumoPedido();
    const cliente=ler("mc-cliente",null);
    if(!cliente?.id){toast("Faça login ou cadastre-se para comprar.");abrirDialog("clientLoginDialog");return;}
    $("#checkoutForm").elements.cpf.value=cliente.cpf||"";
    abrirDialog("checkoutDialog");
  });

  $("#checkoutForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!carrinho.length) { toast("Seu carrinho está vazio."); return; }
    if (carrinho.some(item => !item.tamanho)) { toast("Selecione o tamanho de todas as peças no carrinho."); $("#checkoutDialog").close(); abrirDialog("cartDialog"); return; }
    if (!this.reportValidity()) return;
    const cliente = ler("mc-cliente", null);
    if (!cliente?.id) { toast("Entre ou crie sua conta antes de finalizar a compra."); abrirDialog("clientLoginDialog"); return; }
    const cpf = this.elements.cpf.value.replace(/\D/g, "");
    if (!/^\d{11}$/.test(cpf)) { toast("Informe um CPF com 11 números."); this.elements.cpf.focus(); return; }
    const total = carrinho.reduce((soma,item)=>{const produto=catalogo.find(p=>p.id===item.id);return soma+(produto?produto.preco*item.qtd:0);},0);
    const lojaSelecionada = lojas.find(l => String(l.id) === String(this.elements.lojaId.value));
    if (!lojaSelecionada) { this.elements.lojaId.focus(); toast("Escolha a loja para enviar sua solicitação."); return; }
    const vendedorId = lojaSelecionada.vendedorId || (Number(lojaSelecionada.id) >= 100000 ? Number(lojaSelecionada.id) - 100000 : null);
    const pedido = {
      numero: `MC-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,
      clienteId: cliente.id, clienteEmail: String(cliente.email || "").trim().toLowerCase(),
      dataISO: new Date().toISOString(), data: new Date().toLocaleString("pt-BR"),
      cliente: cliente.nome, email: cliente.email, cpf,
      endereco: this.elements.endereco.value.trim(), numeroEndereco: this.elements.numeroEndereco.value.trim(),
      complemento: this.elements.complemento.value.trim(), pagamento: this.elements.pagamento.value,
      lojaId: lojaSelecionada.id, lojaNome: lojaSelecionada.nome, vendedorId,
      itens: carrinho.map(item => { const produto = catalogo.find(p => String(p.id) === String(item.id)); return {...item, nome: produto?.nome || "Produto", lojaId: produto?.lojaId}; }),
      total, status: "Pedido recebido", vendedorLeu: false
    };
    const pedidos=ler("mc-pedidos",[]); pedidos.push(pedido); localStorage.setItem("mc-pedidos",JSON.stringify(pedidos));
    carrinho=[]; salvarEstado(); renderCarrinho(); $("#checkoutDialog").close(); this.reset();
    toast("Pedido registrado! Acompanhe o andamento na sua conta.");
    renderContaCliente();
  });

$("#clientForm").addEventListener("submit", async e => {
    e.preventDefault();
    const form = e.target;
    if (!form.reportValidity()) return;
    const data = {
      nome: form.elements.nome.value.trim(),
      email: form.elements.email.value.trim().toLowerCase(),
      cpf: form.elements.cpf.value.replace(/\D/g, ""),
      senha: form.elements.senha.value
    };
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = "Criando conta...";
    try {
      const response = await fetch("/api/clientes", {
        method: "POST", headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || result.error || "Não foi possível criar a conta.");
      localStorage.setItem("mc-cliente", JSON.stringify({id:result.id,nome:result.nome,email:result.email,cpf:data.cpf}));
      $("#clientDialog").close();
      form.reset();
      toast("Conta criada! Sua área do cliente já está disponível.");
      document.body.classList.remove("seller-mode");
      atualizarBotoesConta();
      $("#explorar").scrollIntoView({behavior:"smooth"});
    } catch (error) {
      mostrarErroFormulario(form, error.message || "Falha ao conectar ao servidor.");
    } finally {
      button.disabled = false;
      button.textContent = "Cadastrar";
    }
  });

  $("#clientForm")?.addEventListener("input", e => limparErroFormulario(e.currentTarget));

  $("#sellerForm").addEventListener("submit", async e => {
    e.preventDefault();
    const form = e.target;
    if (!form.reportValidity()) return;
    const data = {
      nome: form.elements.responsavel.value.trim(),
      nomeLoja: form.elements.marca.value.trim(),
      categoriaLoja: form.elements.categoria.value,
      email: form.elements.email.value.trim().toLowerCase(),
      cnpj: form.elements.cnpj.value.replace(/\D/g, ""),
      descricao: form.elements.descricao.value.trim(),
      senha: form.elements.senha.value
    };
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = "Criando loja...";
    try {
      const response = await fetch("/api/vendedores", {
        method: "POST", headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || result.error || "Não foi possível criar a loja.");
      localStorage.setItem("mc-vendedor", JSON.stringify(result));
      incluirLojaDoVendedor(result);
      renderLojas();
      form.reset();
      $("#sellerDialog").close();
      $("#sellerDashboard").classList.remove("hidden");
      document.body.classList.add("seller-mode");
      atualizarBotoesConta();
      $("#dashboardStoreName").innerHTML = `${escapeHtml(result.nomeLoja || "Minha loja")} <em>— painel.</em>`;
      $("#dashboardStoreDescription").textContent = result.descricao || "Gerencie suas roupas e sua vitrine.";
      await carregarProdutosVendedor(result.id);
      $("#sellerDashboard").scrollIntoView({behavior:"smooth"});
      toast("Loja criada! Adicione sua primeira roupa.");
    } catch (error) {
      mostrarErroFormulario(form, error.message || "Falha ao conectar ao servidor.");
    } finally {
      button.disabled = false;
      button.textContent = "Criar minha loja";
    }
  });

  $("#sellerForm")?.addEventListener("input", e => limparErroFormulario(e.currentTarget));

  $("#productForm").addEventListener("submit", async e => {
    e.preventDefault();
    const seller = ler("mc-vendedor", null);
    if (!seller?.id) { toast("Cadastre sua loja novamente para continuar."); return; }
    const form = e.target;
    if (!form.reportValidity()) return;
    const file = form.elements.imagem.files[0];
    const publish = async imageUrl => {
      const data = {
        nome: form.elements.nome.value.trim(),
        descricao: form.elements.descricao.value.trim(),
        preco: Number(form.elements.preco.value),
        estoque: Number(form.elements.estoque.value),
        categoria: form.elements.categoria.value.trim(),
        imagemUrl: imageUrl || ""
      };
      const response = await fetch(`/api/produtos/vendedor/${seller.id}`, {
        method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || result.error || "Erro ao publicar roupa.");
      form.reset();
      await carregarProdutosVendedor(seller.id);
      toast("Roupa publicada na sua loja!");
    };
    try {
      if (file) {
        if (!file.type.startsWith("image/")) throw new Error("Selecione um arquivo de imagem válido.");
        if (file.size > 3 * 1024 * 1024) throw new Error("A imagem deve ter no máximo 3 MB.");
        const reader = new FileReader();
        reader.onload = () => publish(reader.result).catch(err => toast(err.message));
        reader.readAsDataURL(file);
      } else {
        await publish("");
      }
    } catch (error) { toast(error.message); }
  });

  $("#sellerLogout").addEventListener("click", () => {
    document.body.classList.remove("seller-mode");
    toast("Você voltou à tela inicial. Sua conta continua conectada.");
    $("#inicio").scrollIntoView({behavior:"smooth"});
  });

  $("#customForm").addEventListener("submit", e => {
    e.preventDefault();
    const form = e.target;
    const idea = Object.fromEntries(new FormData(form).entries());
    delete idea.arte;
    const file = form.elements.arte.files[0];
    const save = image => {
      const ideas = ler("mc-personalizacoes", []);
      ideas.push({...idea, imagem: image || null, criadaEm:new Date().toISOString()});
      localStorage.setItem("mc-personalizacoes", JSON.stringify(ideas));
      $("#customDialog").close();
      form.reset();
      atualizarPreviaPersonalizacao();
      toast("Sua criação foi salva!");
    };
    if (file) {
      if (!file.type.startsWith("image/")) { toast("Escolha um arquivo de imagem."); return; }
      if (file.size > 3*1024*1024) { toast("A imagem deve ter no máximo 3 MB."); return; }
      const reader = new FileReader();
      reader.onload = () => save(reader.result);
      reader.readAsDataURL(file);
    } else save(null);
  });

}


function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
async function carregarProdutosVendedor(id) {
  const area = $("#sellerProducts");
  try {
    const response = await fetch(`/api/produtos/vendedor/${id}`);
    if (!response.ok) throw new Error("Não foi possível carregar os produtos.");
    const products = await response.json();
    area.innerHTML = products.length ? products.map(p => `
      <article class="seller-product-card">
        ${p.imagemUrl ? `<img src="${p.imagemUrl}" alt="${escapeHtml(p.nome)}">` : ""}
        <h4>${escapeHtml(p.nome)}</h4>
        <p>${escapeHtml(p.descricao || "")}</p>
        <strong>${moeda(p.preco)}</strong>
        <small>Estoque: ${p.estoque ?? 0}</small>
      </article>`).join("") : "<p class='section-subtitle'>Você ainda não publicou roupas.</p>";
  } catch (error) { area.textContent = error.message; }
}
function atualizarPreviaPersonalizacao() {
  const form=$("#customForm"); if(!form) return;
  const tipo=form.elements.tipo.value, cor=form.elements.cor.value;
  const colors={"Preta":"#202020","Branca":"#f4f1e9","Off-white":"#e8dfcc","Areia":"#c7ad83","Verde":"#315c43","Azul":"#315b91"};
  const shapes={
    "Camiseta":"M92 38 L122 22 Q150 42 178 22 L208 38 L266 92 L230 137 L205 116 L205 270 L95 270 L95 116 L70 137 L34 92 Z",
    "Moletom":"M88 42 L120 22 Q150 42 180 22 L212 42 L270 92 L238 145 L213 126 L213 274 L87 274 L87 126 L62 145 L30 92 Z M120 23 Q112 75 150 88 Q188 75 180 23",
    "Baby look":"M96 40 L124 24 Q150 40 176 24 L204 40 L250 88 L225 126 L203 110 L203 270 L97 270 L97 110 L75 126 L50 88 Z",
    "Regata":"M105 32 L130 24 Q150 39 170 24 L195 32 L250 100 L222 130 L200 112 L200 270 L100 270 L100 112 L78 130 L50 100 Z",
    "Ecobag":"M75 95 L225 95 L215 270 L85 270 Z M105 95 Q105 25 150 25 Q195 25 195 95",
    "Calça":"M78 25 L222 25 L212 125 L205 275 L150 275 L145 130 L140 275 L85 275 L88 125 Z",
    "Shorts":"M72 35 L228 35 L218 265 L155 265 L145 145 L135 265 L82 265 Z"
  };
  const path=$("#shirtShape");
  path.setAttribute("d",shapes[tipo]||shapes.Camiseta);
  path.setAttribute("fill",colors[cor]||"#202020");
  path.setAttribute("stroke-linejoin","round");
  const label=$("#shirtTextPreview");
  label.textContent=$("#customIdea")?.value||"SUA ARTE";
  label.style.top=(tipo==="Calça"||tipo==="Shorts")?"57%":"48%";
  label.style.color=(cor==="Branca"||cor==="Off-white"||cor==="Areia")?"#252018":"#fff";
  const pos=$("#customPosition")?.value||"centro";
  label.style.top=pos==="peito"?"35%":pos==="costas"?"65%":((tipo==="Calça"||tipo==="Shorts")?"57%":"48%");
  const preview=$("#customArtworkPreview"), file=$("#customArtwork")?.files?.[0];
  if(file){const reader=new FileReader();reader.onload=()=>{preview.src=reader.result;preview.classList.remove("hidden");};reader.readAsDataURL(file);} else preview?.classList.add("hidden");
  const stage=$("#shirtStage"); if(stage) stage.setAttribute("aria-label",`Prévia de ${tipo.toLowerCase()}`);
}

function configurarTema() {
  const saved = localStorage.getItem("mc-tema") || "escuro";
  const aplicar = tema => {
    const claro = tema === "claro";
    document.body.classList.toggle("light-mode", claro);
    const icon = $("#themeIcon");
    if(icon) icon.textContent = claro ? "☾" : "☀";
    const button=$("#themeToggle");
    if(button) button.title = claro ? "Ativar tema escuro" : "Ativar tema claro";
  };
  aplicar(saved);
  $("#themeToggle")?.addEventListener("click", () => {
    const next=document.body.classList.contains("light-mode") ? "escuro" : "claro";
    localStorage.setItem("mc-tema",next);
    aplicar(next);
  });
}

function atualizarBotoesConta(){
  const client=ler("mc-cliente",null), seller=ler("mc-vendedor",null);
  const clientBtn=$("#clientOpen"), clientLabel=$("#clientActionLabel"), sellerLabel=$("#sellerActionLabel");
  if(clientBtn){clientBtn.classList.remove("hidden");if(clientLabel)clientLabel.textContent=client?.id?"Minha conta":"Entrar / Criar conta";const icon=clientBtn.querySelector(".action-icon");if(icon)icon.textContent=client?.id?"👤":"＋";}
  if(sellerLabel)sellerLabel.textContent=seller?.id?"Minha loja / Conta":"Minha loja / Vendedor";
  $("#sellerOpen")?.classList.remove("hidden");
  if(seller?.id) $("#clientOpen")?.classList.add("hidden");
}
function renderContaCliente(){
  const client=ler("mc-cliente",null); if(!client)return;
  $("#clientAccountSummary").innerHTML=`<strong>${escapeHtml(client.nome||"Cliente")}</strong><p>${escapeHtml(client.email||"")}</p><small>CPF: ${escapeHtml(client.cpf||"Cadastrado")}</small>`;
  const emailCliente=String(client.email||"").trim().toLowerCase();
  const pedidos=ler("mc-pedidos",[]).filter(p=>String(p.clienteId)===String(client.id) && String(p.clienteEmail || p.email || "").trim().toLowerCase()===emailCliente);
  $("#clientPurchases").innerHTML=pedidos.length?pedidos.slice().reverse().map(p=>`<article class="purchase-card"><h4>Pedido #${p.numero}</h4><p>${escapeHtml(p.data||"")} · ${moeda(p.total||0)}</p><div class="purchase-items">${(p.itens||[]).map(i=>{const prod=catalogo.find(x=>x.id===i.id);return `${escapeHtml(prod?.nome||"Produto")} (${escapeHtml(i.tamanho||"—")}) × ${i.qtd}`;}).join("<br>")}</div><p><strong>Status:</strong> ${escapeHtml(p.status||"Pedido recebido")}</p><button class="button button-outline" data-track="${escapeHtml(p.numero)}">Acompanhar pedido</button></article>`).join(""):`<p class="form-note">Você ainda não realizou compras nesta conta.</p>`;
}
function mostrarRastreamento(numero){
  const cliente=ler("mc-cliente",null);
  const emailCliente=String(cliente?.email||"").trim().toLowerCase();
  const pedido=ler("mc-pedidos",[]).find(p=>String(p.numero)===String(numero) && cliente && String(p.clienteId)===String(cliente.id) && String(p.clienteEmail || p.email || "").trim().toLowerCase()===emailCliente);
  if(!pedido){toast("Este pedido não pertence à conta conectada.");return;}
  const etapas=["Pedido recebido","Pagamento confirmado","Em preparação","Enviado","Saiu para entrega","Entregue"];
  const etapa=Math.max(0, etapas.indexOf(pedido.status));
  const inicio=new Date(pedido.dataISO||Date.now()).getTime();
  $("#trackingContent").innerHTML=`<div class="tracking-card"><strong>Pedido #${escapeHtml(pedido.numero)}</strong><p><strong>Loja:</strong> ${escapeHtml(pedido.lojaNome || "Loja selecionada")}</p><p><strong>Status atual:</strong> ${escapeHtml(pedido.status || "Pedido recebido")}</p><p>Solicitado em: ${new Date(inicio).toLocaleString("pt-BR")}</p><ol class="tracking-steps">${etapas.map((e,i)=>`<li class="${i<=etapa?"done":""}"><strong>${e}</strong><br><small>${i<etapa?"Concluído":i===etapa?"Etapa atual":"Aguardando atualização da loja"}</small></li>`).join("")}</ol></div>`;
  abrirDialog("trackingDialog");
}
function preencherContaVendedor(){
  const seller=ler("mc-vendedor",null), form=$("#sellerAccountForm");
  if(!seller||!form) return;
  ["nome","nomeLoja","email","cnpj","categoriaLoja","descricao"].forEach(k=>{if(form.elements[k]) form.elements[k].value=seller[k]||"";});
}

/* INICIALIZAÇÃO */

function iniciarModaCustom() {
  configurarEventos();
  configurarCPF();
  configurarTema();
  ["customIdea","customPosition","customArtwork"].forEach(id => {
    const el = $("#"+id);
    el?.addEventListener(id === "customArtwork" ? "change" : "input", atualizarPreviaPersonalizacao);
  });
  $("#customForm")?.elements.cor?.addEventListener("change", atualizarPreviaPersonalizacao);
  $("#customType")?.addEventListener("change", atualizarPreviaPersonalizacao);
  atualizarPreviaPersonalizacao();
  const savedClient = ler("mc-cliente", null);
  const savedSeller = ler("mc-vendedor", null);
  atualizarBotoesConta();
  if (savedSeller?.id) {
    incluirLojaDoVendedor(savedSeller);
    $("#sellerDashboard").classList.remove("hidden");
    document.body.classList.add("seller-mode");
    $("#dashboardStoreName").textContent = savedSeller.nomeLoja || "Minha loja";
    $("#dashboardStoreDescription").textContent = savedSeller.descricao || "";
    carregarProdutosVendedor(savedSeller.id);
  }

  renderProdutos();
  renderLojas();
  renderCarrinho();
  renderFavoritos();
  atualizarContadores();

  window.catalogoModaCustom = catalogo;
  window.catalogoExplorar = catalogoExplorar;
  window.lojasModaCustom = lojas;

  console.info("Moda Custom carregada.");
  console.info("Produtos:", catalogo.length);
  console.info("Produtos em Explorar:", catalogoExplorar.length);
  console.info("Lojas:", lojas.length);

  if (new Set(catalogo.map(p => p.img)).size !== 25) {
    console.error("Existem caminhos de imagem repetidos.");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarModaCustom);
} else {
  iniciarModaCustom();
}