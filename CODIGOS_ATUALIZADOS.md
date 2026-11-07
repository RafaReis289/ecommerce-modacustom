# Códigos completos dos arquivos alterados


## `src/main/resources/static/index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#080808">
  <title>Moda Custom — Vista sua ideia</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>

<body>
  <div class="announcement">
    <span>✦</span> SUA IDEIA, SEU ESTILO
    <i>—</i> PERSONALIZE SEM LIMITES <span>✦</span>
  </div>

  <header class="site-header">
    <div class="header-main">
      <a class="brand" href="#inicio" aria-label="Moda Custom - início">
        <img
          id="brandLogo"
          src="img/logo.png"
          alt="Logo Moda Custom"
          onerror="this.style.display='none';document.getElementById('brandPlaceholder').style.display='grid'"
        >
        <span id="brandPlaceholder" class="brand-monogram" style="display:none">MC</span>
        <span class="brand-wordmark">
          MODA<span>CUSTOM</span>
          <small>USE YOUR IMAGINATION</small>
        </span>
      </a>

      <form class="search" id="searchForm" role="search">
        <span class="search-icon">⌕</span>
        <input
          id="searchInput"
          type="search"
          placeholder="Buscar peças, estilos ou lojas..."
          aria-label="Buscar peças, estilos ou lojas"
        >
        <button type="submit">Buscar</button>
      </form>

      <div class="header-actions">
        <button class="action-button favorite-icon-only" id="favTop" aria-label="Abrir favoritos" title="Favoritos">
          <span class="action-icon">♡</span>
          <b id="favCount">0</b>
        </button>

        <button class="action-button" id="cartTop" aria-label="Abrir carrinho">
          <span class="action-icon">▱</span>
          <span class="action-label">Carrinho</span>
          <b id="cartCount">0</b>
        </button>

        <button class="action-button seller-action" id="sellerOpen">
          <span class="action-icon">✳</span>
          <span class="action-label" id="sellerActionLabel">Minha loja / Vendedor</span>
        </button>

        <button class="action-button signup-action" id="clientOpen">
          <span class="action-icon" aria-hidden="true">👤</span>
          <span class="action-label" id="clientActionLabel">Entrar / Criar conta</span>
        </button>
      </div>
    </div>

    <nav class="main-nav" aria-label="Navegação principal">
      <a class="nav-link active" href="#inicio"><span>⌂</span> Início</a>
      <a class="nav-link" href="#explorar"><span>✦</span> Explorar</a>
      <a class="nav-link" href="#lojas"><span>▦</span> Lojas independentes</a>
      <a class="nav-link" href="#personalizar"><span>✎</span> Personalize sua roupa</a>
      <a class="nav-link" href="#sobre"><span>◈</span> Sobre nós</a>
      <span class="nav-note">MODA AUTORAL · FEITA POR VOCÊ</span>
    </nav>
  </header>

  <main>
    <!-- INÍCIO -->
    <section class="hero" id="inicio">
      <div class="hero-copy">
        <p class="eyebrow"><span>✦</span> MODA AUTORAL, DO SEU JEITO</p>

        <h1>
          Vista o que você ama.<br>
          <em>Crie o que é seu.</em>
        </h1>

        <p class="hero-description">
          Camisetas de música, cultura pop, terceirão e streetwear.
          Encontre criadores independentes ou transforme sua própria
          ideia em uma peça única.
        </p>

        <div class="hero-buttons">
          <a class="button button-gold" href="#explorar">
            Explorar estampas <span>↗</span>
          </a>
          <a class="button button-outline" href="#personalizar">
            Criar minha camiseta
          </a>
        </div>

        <div class="hero-highlights">
          <span>Estampas criativas</span>
          <span>Lojas independentes</span>
          <span>Seu estilo, suas regras</span>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-photo"></div>
        <div class="hero-frame"></div>

        <div class="hero-label">
          <small>MC / ORIGINALS</small>
          <strong>BE YOUR OWN BRAND.</strong>
        </div>

        <div class="hero-stamp">
          MODA<br>
          <b>SEM LIMITES</b>
        </div>
      </div>
    </section>

    <!-- EXPLORAR -->
    <section class="section collection-section" id="explorar">
      <div class="section-heading">
        <div>
          <p class="eyebrow">ENCONTRE SUA PRÓXIMA FAVORITA</p>
          <h2>Estampas para <em>se expressar.</em></h2>
          <p class="section-subtitle">
            18 peças selecionadas para você encontrar seu estilo.
          </p>
        </div>

        <div class="section-side-note">
          <span class="gold-dot"></span>
          NOVAS IDEIAS, NOVOS CRIADORES
        </div>
      </div>

      <div class="filter-bar" id="productFilters">
        <button class="filter active" data-category="Todos">Tudo</button>
        <button class="filter" data-category="Música">Música & artistas</button>
        <button class="filter" data-category="Cultura pop">Cultura pop</button>
        <button class="filter" data-category="Terceirão">Terceirão</button>
        <button class="filter" data-category="Esporte">Esporte</button>
        <button class="filter" data-category="Streetwear">Streetwear</button>
        <button class="filter" data-category="Personalizável">Básicas para personalizar</button>
      </div>

      <div class="product-grid" id="productGrid"></div>

      <p class="empty-message hidden" id="emptyState">
        Não encontramos peças com essa busca. Experimente outra palavra ou categoria.
      </p>

      <!-- LOJAS -->
      <div class="stores-intro" id="lojas">
        <div>
          <p class="eyebrow">CONHEÇA QUEM CRIA</p>
          <h2>Lojas com <em>identidade própria.</em></h2>
          <p class="section-subtitle">
            Descubra cinco lojas independentes e suas coleções.
          </p>
        </div>

        <span class="stores-count">05 LOJAS <b>·</b> 25 PEÇAS</span>
      </div>

      <div class="filter-bar store-filter-bar" id="storeFilters">
        <button class="filter active" data-store-category="Todas">Todas as lojas</button>
        <button class="filter" data-store-category="Streetwear">Streetwear</button>
        <button class="filter" data-store-category="Música">Música & artistas</button>
        <button class="filter" data-store-category="Terceirão">Terceirão</button>
        <button class="filter" data-store-category="Personalizáveis">Personalizáveis</button>
        <button class="filter" data-store-category="Cultura pop">Cultura pop</button>
      </div>

      <div class="store-grid" id="lojasGrid"></div>
    </section>

  <!-- PERSONALIZAÇÃO -->
    <section class="custom-section" id="personalizar">
      <div class="custom-image">
        <span class="custom-image-note">IDEIA SUA.<br>PEÇA ÚNICA.</span>
      </div>

      <div class="custom-copy">
        <p class="eyebrow">SEU ESTILO COMEÇA NO PAPEL</p>
        <h2>Você imagina.<br><em>A gente dá forma.</em></h2>

        <p>
          Escolha o tipo de peça, a cor e o tema da estampa.
          Pode ser para o terceirão, uma referência musical,
          uma frase ou uma arte autoral.
        </p>

        <button class="button button-gold" id="customOpen">
          Começar personalização <span>↗</span>
        </button>

        <small>Seu próximo look começa com uma ideia.</small>
      </div>
    </section>

    <!-- PAINEL DO VENDEDOR -->
    <section class="section seller-dashboard hidden" id="sellerDashboard">
      <div class="section-heading">
        <div>
          <p class="eyebrow">PAINEL DO CRIADOR</p>
          <h2 id="dashboardStoreName">Minha <em>loja.</em></h2>
          <p class="section-subtitle" id="dashboardStoreDescription"></p>
        </div>
        <button class="button button-outline" id="sellerLogout" type="button">Voltar à tela inicial</button>
      </div>
      <div class="dashboard-grid">
        <form id="productForm" class="dashboard-form">
          <h3>Adicionar nova roupa</h3>
          <label>Nome da peça<input name="nome" required maxlength="120" placeholder="Ex.: Camiseta Oversized"></label>
          <label>Descrição<textarea name="descricao" required maxlength="2000" placeholder="Descreva tecido, modelagem e detalhes"></textarea></label>
          <div class="form-two">
            <label>Preço (R$)<input name="preco" type="number" min="0.01" step="0.01" required></label>
            <label>Estoque<input name="estoque" type="number" min="0" step="1" required></label>
          </div>
          <label>Categoria<input name="categoria" required placeholder="Streetwear, casual..."></label>
          <label>Imagem da roupa<input name="imagem" type="file" accept="image/*"></label>
          <button class="button button-gold" type="submit">Publicar roupa</button>
        </form>
        <div class="dashboard-products">
          <h3>Roupas da minha loja</h3>
          <div id="sellerProducts" class="seller-products-grid"></div>
        </div>
      </div>
    </section>

    <!-- SOBRE -->
    <section class="about-section" id="sobre">
      <div>
        <p class="eyebrow">A MODA CUSTOM</p>
        <h2>Vista uma ideia.<br><em>Conte sua história.</em></h2>
      </div>

      <div class="about-copy">
        <p>
          Conectamos clientes e vendedores independentes em uma vitrine
          de roupas personalizadas. Cada loja tem seu estilo, suas coleções
          e sua história — e você escolhe o que combina com a sua.
        </p>
        <a href="#lojas" class="text-link">Conhecer os criadores ↗</a>
      </div>
    </section>

    <!-- CONVITE PARA VENDEDORES -->
    <section class="seller-banner">
      <div>
        <p class="eyebrow">VOCÊ CRIA. A GENTE CONECTA.</p>
        <h2>Tem uma marca ou uma ideia?</h2>
        <p>Abra sua loja e apresente suas estampas para a comunidade.</p>
      </div>

      <button class="button button-gold" id="sellerOpen2">
        Abrir minha loja ↗
      </button>
    </section>
  </main>

  <footer>
    <a class="brand footer-brand" href="#inicio">
      <span class="brand-monogram">MC</span>
      <span class="brand-wordmark">MODA<span>CUSTOM</span><small>USE YOUR IMAGINATION</small></span>
    </a>

    <small>© 2026 Moda Custom · Projeto demonstrativo</small>

    <div>
      <a href="#lojas">Lojas</a>
      <a href="#sobre">Sobre nós</a>
      <a href="#personalizar">Personalização</a>
    </div>
  </footer>

  <button class="floating-theme-toggle" id="themeToggle" type="button" aria-label="Alternar tema" title="Alternar tema claro/escuro"><span id="themeIcon">☀</span></button>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>

  <!-- CADASTRO DE CLIENTES -->
  <dialog id="clientDialog">
    <button class="close" data-close="clientDialog" aria-label="Fechar">×</button>
    <p class="eyebrow">BEM-VINDO À MODA CUSTOM</p>
    <h2>Crie sua conta</h2>

    <form class="form-grid" id="clientForm">
      <label>Nome completo
        <input required name="nome" placeholder="Seu nome">
      </label>

      <label>E-mail
        <input required type="email" name="email" placeholder="voce@email.com">
      </label>

      <label>CPF (11 números)
        <input required name="cpf" class="cpf-input" inputmode="numeric"
          autocomplete="off" maxlength="11" minlength="11"
          pattern="[0-9]{11}" placeholder="Somente 11 números"
          title="Digite exatamente 11 números, sem pontos ou traço">
      </label>

      <label>Senha
        <input required type="password" minlength="8" pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}" title="Use 8 caracteres ou mais, com maiúscula, minúscula, número e símbolo" name="senha" class="strong-password"
          autocomplete="new-password" placeholder="Crie uma senha forte">
        <small class="password-hint">8+ caracteres, maiúscula, minúscula, número e símbolo.</small>
      </label>

      <label>Estilo favorito
        <select name="estilo">
          <option>Streetwear</option>
          <option>Música & artistas</option>
          <option>Terceirão</option>
          <option>Esporte</option>
          <option>Cultura pop</option>
        </select>
      </label>

      <button class="button button-gold" type="submit">Cadastrar</button>
      <p class="form-note">Após o cadastro, você será direcionado diretamente para as roupas.</p>
    </form>
  </dialog>

  <!-- CADASTRO DE VENDEDORES -->
  <dialog id="sellerDialog">
    <button class="close" data-close="sellerDialog" aria-label="Fechar">×</button>
    <p class="eyebrow">VENHA CRIAR COM A GENTE</p>
    <h2>Abra sua loja</h2>

    <form class="form-grid" id="sellerForm">
      <label>Nome do responsável
        <input required name="responsavel" placeholder="Seu nome completo">
      </label>

      <label>Nome da loja/marca
        <input required name="marca" placeholder="Nome da sua loja">
      </label>

      <label>E-mail comercial
        <input required type="email" name="email" placeholder="loja@email.com">
      </label>

      <label>CNPJ da loja (14 números)
        <input required name="cnpj" inputmode="numeric" maxlength="14" minlength="14" pattern="[0-9]{14}" placeholder="Somente números">
      </label>

      <label>Categoria principal
        <select name="categoria">
          <option>Streetwear</option>
          <option>Música & artistas</option>
          <option>Terceirão</option>
          <option>Esporte</option>
          <option>Cultura pop</option>
        </select>
      </label>

      <label>Descrição da loja
        <textarea required name="descricao" placeholder="Conte sobre suas estampas e seu estilo"></textarea>
      </label>

      <label>Senha
        <input required type="password" minlength="8" pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}" title="Use 8 caracteres ou mais, com maiúscula, minúscula, número e símbolo" name="senha" class="strong-password"
          autocomplete="new-password" placeholder="Crie uma senha forte">
        <small class="password-hint">8+ caracteres, maiúscula, minúscula, número e símbolo.</small>
      </label>

      <button class="button button-gold" type="submit">Criar loja demonstrativa</button>
      <p class="form-note">Após criar sua conta, você irá direto para o painel da sua loja.</p>
    </form>
  </dialog>

  <!-- CONTA DO VENDEDOR -->
  <dialog id="sellerAccountDialog">
    <button class="close" data-close="sellerAccountDialog" aria-label="Fechar">×</button>
    <p class="eyebrow">MINHA CONTA</p>
    <h2>Cadastro e informações da loja</h2>
    <form id="sellerAccountForm" class="form-grid">
      <label>Nome do responsável<input name="nome" required maxlength="120"></label>
      <label>Nome da loja<input name="nomeLoja" required maxlength="120"></label>
      <label>E-mail<input name="email" type="email" readonly></label>
      <label>CNPJ<input name="cnpj" inputmode="numeric" maxlength="14" minlength="14" pattern="[0-9]{14}" readonly></label>
      <label>Categoria<select name="categoriaLoja"><option>Streetwear</option><option>Música & artistas</option><option>Terceirão</option><option>Esporte</option><option>Cultura pop</option></select></label>
      <label>Descrição da loja<textarea name="descricao" maxlength="2000"></textarea></label>
      <button class="button button-gold" type="submit">Salvar alterações</button>
      <button class="button button-outline" id="goSellerDashboard" type="button">Abrir painel da minha loja</button>
      <button class="button button-outline" id="sellerAccountLogout" type="button">Sair da conta</button>
    </form>
  </dialog>

  <!-- CONTA DO CLIENTE -->
  <dialog id="clientAccountDialog">
    <button class="close" data-close="clientAccountDialog" aria-label="Fechar">×</button>
    <p class="eyebrow">ÁREA DO CLIENTE</p>
    <h2>Minha conta</h2>
    <div class="account-summary" id="clientAccountSummary"></div>
    <h3>Minhas compras</h3>
    <div id="clientPurchases" class="purchase-list"></div>
    <button class="button button-outline" id="clientLogout" type="button">Sair da conta</button>
  </dialog>

  <!-- ACOMPANHAMENTO DO PEDIDO -->
  <dialog id="trackingDialog">
    <button class="close" data-close="trackingDialog" aria-label="Fechar">×</button>
    <p class="eyebrow">ACOMPANHAMENTO</p>
    <h2>Seu pedido</h2>
    <div id="trackingContent"></div>
    <p class="form-note">Prazos e etapas são simulados para demonstração e não representam rastreamento de transportadora real.</p>
  </dialog>

  <!-- PERSONALIZAÇÃO -->
  <dialog id="customDialog">
    <button class="close" data-close="customDialog" aria-label="Fechar">×</button>
    <p class="eyebrow">LABORATÓRIO CRIATIVO</p>
    <h2>Personalize sua roupa</h2>

    <div class="custom-builder">
      <div class="shirt-stage" id="shirtStage" aria-label="Prévia da roupa">
        <svg viewBox="0 0 300 300" role="img" aria-label="Modelo de camiseta">
          <path id="shirtShape" d="M92 38 L122 22 Q150 42 178 22 L208 38 L266 92 L230 137 L205 116 L205 270 L95 270 L95 116 L70 137 L34 92 Z" fill="#202020" stroke="#b99a43" stroke-width="3"/>
        </svg>
        <img id="customArtworkPreview" class="artwork-preview hidden" alt="Arte aplicada à camiseta">
        <span id="shirtTextPreview">SUA ARTE</span>
      </div>
      <div class="builder-controls">
    <form class="form-grid" id="customForm">
      <label>Tipo de peça
        <select name="tipo" id="customType">
          <option>Camiseta</option>
          <option>Moletom</option>
          <option>Baby look</option>
          <option>Regata</option>
          <option>Ecobag</option>
        </select>
      </label>

      <label>Tema da estampa
        <select name="tema">
          <option>Música & artistas</option>
          <option>Terceirão / formatura</option>
          <option>Esporte</option>
          <option>Cultura pop</option>
          <option>Streetwear</option>
          <option>Minha própria arte</option>
        </select>
      </label>

      <label>Cor da peça
        <select name="cor">
          <option>Preta</option>
          <option>Branca</option>
          <option>Off-white</option>
          <option>Areia</option>
          <option>Verde</option>
          <option>Azul</option>
        </select>
      </label>

      <label>Texto ou ideia
        <input name="ideia" id="customIdea" maxlength="80" placeholder="Nome da turma, frase, tema...">
      </label>
      <label>Enviar sua própria imagem
        <input name="arte" id="customArtwork" type="file" accept="image/*">
      </label>
      <label>Posição da estampa
        <select name="posicao" id="customPosition"><option value="centro">Centro</option><option value="peito">Peito</option><option value="costas">Costas</option></select>
      </label>

      <label>Detalhes adicionais
        <textarea name="detalhes" placeholder="Descreva como imagina sua estampa"></textarea>
      </label>

      <button class="button button-gold" type="submit">Salvar minha ideia</button>
      <p class="form-note">Use apenas imagens e artes que você tenha autorização para reproduzir.</p>
    </form>
      </div>
    </div>
  </dialog>

  <!-- DETALHES DA LOJA -->
  <dialog id="storeDialog">
    <button class="close store-close" data-close="storeDialog" aria-label="Sair da loja">
      ×
    </button>
    <div id="storeDetails"></div>
  </dialog>

  <!-- FAVORITOS -->
  <dialog id="favoritesDialog">
    <button class="close" data-close="favoritesDialog" aria-label="Fechar">×</button>
    <p class="eyebrow">SUAS ESCOLHAS</p>
    <h2>Meus favoritos</h2>
    <div id="favoriteItems"></div>
  </dialog>

  <!-- CARRINHO -->
  <dialog id="cartDialog">
    <button class="close" data-close="cartDialog" aria-label="Fechar">×</button>
    <p class="eyebrow">SUAS ESCOLHAS</p>
    <h2>Meu carrinho</h2>
    <div id="cartItems"></div>
    <p class="cart-total">Total <strong id="cartTotal">R$ 0,00</strong></p>
    <button class="button button-gold full" id="checkout">Continuar compra</button>
  </dialog>

  <!-- FINALIZAÇÃO DE COMPRA -->
  <dialog id="checkoutDialog">
    <button class="close" data-close="checkoutDialog" aria-label="Fechar">×</button>
    <p class="eyebrow">MODA CUSTOM</p>
    <h2>Finalizar compra</h2>
    <div id="checkoutResumo"></div>

    <form id="checkoutForm" class="form-grid">
      <label>CPF do comprador
        <input name="cpf" class="cpf-input" inputmode="numeric" autocomplete="off" maxlength="11" minlength="11" pattern="[0-9]{11}" required placeholder="Somente 11 números">
      </label>
      <label>Endereço de entrega
        <input name="endereco" required placeholder="Rua, avenida e bairro">
      </label>
      <label>Número
        <input name="numeroEndereco" required maxlength="12" placeholder="Número do imóvel">
      </label>
      <label>Complemento (opcional)
        <input name="complemento" placeholder="Apto, bloco, referência">
      </label>
      <label>Forma de pagamento
        <select name="pagamento" required>
          <option value="">Selecione</option><option value="PIX">PIX</option><option value="Cartão de crédito">Cartão de crédito</option><option value="Boleto">Boleto</option>
        </select>
      </label>
      <button class="button button-gold" type="submit">Confirmar pedido</button>
      <p class="form-note">Seus dados de cadastro são reaproveitados. Não é necessário informar nome, e-mail ou cidade novamente. Pagamento demonstrativo.</p>
    </form>
  </dialog>
</body>
</html>
```


## `src/main/resources/static/style.css`

```css

:root {
  --ink: #080808;
  --ink-2: #10100f;
  --panel: #151411;
  --panel-2: #1c1a15;
  --gold: #e0bd4f;
  --gold-bright: #f5d979;
  --gold-dark: #9d7820;
  --text: #f5f0e4;
  --muted: #b4ad9d;
  --line: #4a3a16;
  --serif: "Playfair Display", Georgia, serif;
  --sans: "DM Sans", Arial, sans-serif;
  --white: #f7f2e8;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 135px;
}

body {
  margin: 0;
  background: var(--ink);
  color: var(--text);
  font-family: var(--sans);
  font-size: 13px;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  background:
    radial-gradient(ellipse at 82% 8%, #5a45151c, transparent 34%),
    radial-gradient(ellipse at 0% 52%, #a67d1410, transparent 30%);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
}

.hidden {
  display: none !important;
}

.announcement {
  min-height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 6px 12px;
  background: linear-gradient(90deg, #100e09, #28200d, #100e09);
  border-bottom: 1px solid #5e4818;
  color: var(--gold-bright);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
}

.announcement span {
  font-size: 13px;
}

.announcement i {
  color: #8b722b;
  font-style: normal;
}

/* CABEÇALHO */

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: #090908f2;
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);
}

.header-main {
  max-width: 1500px;
  margin: auto;
  padding: 17px 4.8%;
  display: grid;
  grid-template-columns: 220px minmax(180px, 1fr) auto;
  gap: 18px;
  align-items: center;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.brand img {
  width: 46px;
  height: 46px;
  object-fit: contain;
  border: 1px solid var(--gold-dark);
  background: #050505;
}

.brand-monogram {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  background: #050505;
  border: 1px solid var(--gold);
  font: 24px var(--serif);
  color: var(--gold-bright);
}

.brand-wordmark {
  font-size: 12px;
  letter-spacing: 1.8px;
  font-weight: 700;
  white-space: nowrap;
}

.brand-wordmark > span {
  color: var(--gold);
}

.brand-wordmark small {
  display: block;
  margin-top: 5px;
  font-size: 7px;
  letter-spacing: 2px;
  color: #b9a56b;
  font-weight: 500;
}

/* BUSCA */

.search {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  padding: 4px 5px 4px 14px;
  border: 1px solid #80631e;
  background: linear-gradient(120deg, #171510, #0c0c0b);
  box-shadow: inset 0 1px #ffffff09;
}

.search-icon {
  font-size: 23px;
  color: var(--gold);
}

.search input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--text);
  padding: 10px 0;
  font-size: 12px;
}

.search input::placeholder {
  color: #aaa18d;
}

.search button,
.button-gold {
  border: 1px solid #f2d46c;
  background: linear-gradient(
    135deg,
    #f7df82,
    #c69b29 70%,
    #8e6916
  );
  color: #100e08;
  font-weight: 800;
}

.search button {
  padding: 11px 18px;
  font-size: 10px;
}

/* BOTÕES DO CABEÇALHO */

.header-actions {
  display: flex;
  gap: 7px;
  align-items: center;
}

.action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-height: 42px;
  padding: 9px 10px;
  background: linear-gradient(135deg, #16140f, #0b0b0a);
  border: 1px solid #6f541b;
  color: var(--text);
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
  transition: .2s;
}

.action-button:hover {
  border-color: var(--gold-bright);
  box-shadow: 0 0 18px #d8b34a20;
  transform: translateY(-1px);
}

.action-icon {
  color: var(--gold-bright);
  font-size: 17px;
}

.action-button b {
  display: grid;
  place-items: center;
  min-width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--gold);
  color: #0b0904;
  font-size: 9px;
}

.seller-action,
.signup-action {
  background: linear-gradient(135deg, #f4d76d, #ad811b);
  color: #110e06;
  border-color: #f7d86d;
}

.seller-action .action-icon,
.signup-action .action-icon {
  color: #161006;
}

/* NAVEGAÇÃO */

.main-nav {
  max-width: 1500px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(14px, 2vw, 30px);
  padding: 12px 4%;
  border-top: 1px solid #2a2415;
}

.nav-link {
  display: flex;
  gap: 7px;
  align-items: center;
  color: #ddd4c1;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
  position: relative;
}

.nav-link span {
  color: var(--gold);
  font-size: 15px;
}

.nav-link:hover,
.nav-link.active {
  color: var(--gold-bright);
}

.nav-link.active::after {
  content: "";
  position: absolute;
  bottom: -13px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--gold),
    transparent
  );
}

.nav-note {
  font-size: 8px;
  letter-spacing: 1.8px;
  color: #a38a45;
  border-left: 1px solid #4b3b17;
  padding-left: 18px;
  white-space: nowrap;
}

/* PÁGINA INICIAL — ARTE ABSTRATA, SEM FOTO */

.hero {
  position: relative;
  isolation: isolate;
  min-height: 560px;
  display: grid;
  grid-template-columns: 1fr .88fr;
  gap: 6%;
  align-items: center;
  padding: 65px max(7%, calc((100vw - 1300px) / 2));
  overflow: hidden;
  background:
    radial-gradient(
      ellipse at 78% 45%,
      #4c3b1635,
      transparent 45%
    ),
    linear-gradient(
      120deg,
      #090908 0%,
      #11100c 58%,
      #171207 100%
    );
  border-bottom: 1px solid #4c3915;
}

.hero::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 480px;
  height: 480px;
  right: 12%;
  top: 7%;
  border-radius: 50%;
  border: 1px solid #c4a13b55;
  box-shadow:
    0 0 0 22px #c4a13b12,
    0 0 0 58px #c4a13b09,
    inset 0 0 70px #c4a13b10;
}

.hero::after {
  content: "MC";
  position: absolute;
  z-index: -1;
  right: 15%;
  top: 50%;
  transform: translateY(-50%);
  color: #d9b64b12;
  font: 500 clamp(180px, 28vw, 360px) var(--serif);
  letter-spacing: -20px;
}

.hero-copy {
  max-width: 650px;
}

.eyebrow {
  font-size: 9px;
  letter-spacing: 2.2px;
  font-weight: 800;
  color: var(--gold);
  margin: 0 0 17px;
  text-transform: uppercase;
}

.eyebrow span {
  font-size: 13px;
}

.hero h1 {
  font: 500 clamp(43px, 5.1vw, 76px) / 1.02 var(--serif);
  letter-spacing: -1.7px;
  margin: 0;
  color: #f6f0e5;
  max-width: 680px;
}

.hero h1 em,
.section h2 em,
.custom-section h2 em,
.about-section h2 em {
  color: var(--gold);
  font-weight: 500;
}

.hero-description {
  max-width: 490px;
  font-size: 13px;
  color: #c4bcaa;
  line-height: 1.9;
  margin: 23px 0 25px;
}

.hero-buttons {
  display: flex;
  gap: 11px;
  flex-wrap: wrap;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid transparent;
  padding: 14px 18px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .3px;
  transition: transform .2s, box-shadow .2s, background .2s;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px #d6ad3a20;
}

.button-gold {
  background: linear-gradient(
    135deg,
    #f4d975,
    #d4ab35 55%,
    #997018
  );
  color: #100d05;
  border-color: #f4d56c;
}

.button-outline {
  background: #11100c;
  border-color: #8d6b20;
  color: var(--gold-bright);
}

.button-outline:hover {
  background: #211b0e;
}

.button-dark {
  background: #080808;
  color: white;
}

.hero-highlights {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-top: 28px;
  font-size: 9px;
  color: #c6b887;
}

.hero-highlights span::before {
  content: "✦";
  color: var(--gold);
  margin-right: 6px;
}

/* PAINEL GRÁFICO DO BANNER */

.hero-visual {
  height: 390px;
  position: relative;
  max-width: 500px;
  width: 100%;
  justify-self: end;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 50% 45%,
      #e7c75d30,
      transparent 20%
    ),
    repeating-linear-gradient(
      135deg,
      transparent 0,
      transparent 29px,
      #e4c05212 30px,
      transparent 31px
    ),
    linear-gradient(145deg, #1b170c, #080808 70%);
  border: 1px solid #c9a73f;
  box-shadow:
    16px 16px 0 #b68d2818,
    0 0 40px #c79c2c16;
}

.hero-photo {
  position: absolute;
  inset: 12px 20px 12px 12px;
  background:
    radial-gradient(
      circle at 50% 45%,
      #e7c75d18,
      transparent 25%
    ),
    linear-gradient(145deg, #17130a, #080808 65%);
  border: 1px solid #e9cd7b66;
}

.hero-photo::before {
  content: "MC";
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: #e0bd4f;
  font: 500 clamp(100px, 13vw, 190px) var(--serif);
  letter-spacing: -8px;
  text-shadow: 0 0 40px #d4a93622;
}

.hero-photo::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(0deg, #080807b8, transparent 60%),
    linear-gradient(135deg, #e5c24c24, transparent 45%);
}

.hero-frame {
  position: absolute;
  inset: 0 8px 0 12px;
  border: 1px solid #e9cd7b66;
  pointer-events: none;
}

.hero-label {
  position: absolute;
  right: 12px;
  bottom: 28px;
  background: linear-gradient(135deg, #242016, #080807);
  border: 1px solid #927222;
  color: #fff3cc;
  padding: 17px 20px;
  display: grid;
  gap: 6px;
  box-shadow: 0 10px 30px #0008;
}

.hero-label small {
  color: var(--gold);
  font-size: 8px;
  letter-spacing: 1.7px;
}

.hero-label strong {
  font-size: 10px;
  letter-spacing: 1.3px;
}

.hero-stamp {
  position: absolute;
  left: 12px;
  top: 27px;
  background: linear-gradient(135deg, #f6dd7c, #b88c20);
  color: #171106;
  padding: 13px 16px;
  font-size: 9px;
  letter-spacing: 1px;
  line-height: 1.5;
  box-shadow: 0 8px 24px #0005;
}

.hero-stamp b {
  font-size: 13px;
}

/* SEÇÕES */

.section {
  padding: 75px 5.2%;
  max-width: 1600px;
  margin: auto;
}

.section-heading,
.stores-intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 25px;
  margin-bottom: 27px;
}

.section h2,
.custom-section h2,
.about-section h2 {
  font: 500 clamp(32px, 3.8vw, 48px) / 1.12 var(--serif);
  letter-spacing: -1px;
  margin: 0;
  color: #f4eee2;
}

.section-subtitle {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.8;
  margin: 12px 0 0;
}

.section-side-note,
.stores-count {
  font-size: 8px;
  letter-spacing: 1.5px;
  color: #c0a354;
  white-space: nowrap;
  background: #17140d;
  border: 1px solid #4d3a13;
  padding: 13px 15px;
}

.gold-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  background: var(--gold);
  border-radius: 50%;
  margin-right: 7px;
  box-shadow: 0 0 12px #e0bd4f;
}

/* FILTROS */

.filter-bar {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 24px 0 27px;
}

.filter {
  padding: 11px 15px;
  background: #11100d;
  color: #d4cbb7;
  border: 1px solid #4d3b17;
  font-size: 10px;
  transition: .2s;
}

.filter:hover,
.filter.active {
  background: linear-gradient(135deg, #f0d36c, #b58b24);
  border-color: #f2d36c;
  color: #0c0a05;
}

/* PRODUTOS */

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.product {
  min-width: 0;
  background: linear-gradient(145deg, #171612, #0e0e0c);
  border: 1px solid #453514;
  position: relative;
  overflow: hidden;
  transition: transform .25s, border-color .25s, box-shadow .25s;
}

.product:hover {
  transform: translateY(-5px);
  border-color: #c6a03b;
  box-shadow: 0 15px 35px #0007, 0 0 18px #d6ad3a12;
}

.product-image {
  height: 290px;
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 50% 30%, #29251a, #0a0a09 72%);
  padding: 10px;
}

.product-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  border: 1px solid #ffffff10;
  transition: transform .5s;
  filter: saturate(.92);
}

.product:hover .product-image img {
  transform: scale(1.035);
}

.tag {
  position: absolute;
  left: 18px;
  top: 18px;
  background: #0b0b09e8;
  border: 1px solid #8b6c20;
  color: #e8c65d;
  padding: 7px 9px;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 1px;
}

.heart {
  position: absolute;
  right: 17px;
  top: 16px;
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid #d4b34f;
  background: #0b0b0bd9;
  color: #f1d16a;
  font-size: 20px;
}

.heart.on {
  background: #d6b343;
  color: #100d04;
}

.product-info {
  padding: 17px;
}

.product-brand {
  font-size: 8px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: #c3a44c;
}

.product-info h3 {
  font: 500 19px / 1.3 var(--serif);
  margin: 8px 0 12px;
  color: #f6f0e4;
  min-height: 48px;
}

.product-category {
  font-size: 10px;
  color: #a9a18e;
}

.product-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin: 15px 0;
  color: #e4d8b7;
  font-size: 10px;
}

.price {
  font-size: 17px;
  font-weight: 800;
  color: var(--gold-bright);
}

.add {
  width: 100%;
  padding: 12px 10px;
  background: linear-gradient(110deg, #e8c958, #b68b24);
  border: 1px solid #f4d975;
  color: #100d05;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: .8px;
}

.add:hover {
  filter: brightness(1.1);
}

.empty-message {
  padding: 25px;
  border: 1px dashed #5b4519;
  color: #c8bea7;
  background: #11100c;
  font-size: 12px;
}

.stores-intro {
  margin-top: 86px;
  margin-bottom: 23px;
  scroll-margin-top: 150px;
}

.stores-count {
  color: var(--gold-bright);
}

.stores-count b {
  color: #fff;
  padding: 0 4px;
}

.store-filter-bar {
  margin-bottom: 20px;
}

/* LOJAS */

.store-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 15px;
}

.store-card {
  min-width: 0;
  background: linear-gradient(145deg, #191711, #0d0d0b);
  border: 1px solid #493715;
  transition: transform .2s, box-shadow .2s;
  overflow: hidden;
}

.store-card:hover {
  transform: translateY(-4px);
  border-color: #c7a13d;
  box-shadow: 0 12px 25px #0007;
}

.store-cover {
  height: 150px;
  position: relative;
  background-size: cover;
  background-position: center;
  isolation: isolate;
}

.store-cover::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #d9b54b44, #070707cc);
}

.store-cover::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid #d8b64b55;
}

.store-category {
  position: absolute;
  z-index: 1;
  left: 10px;
  bottom: 10px;
  background: #090908e8;
  border: 1px solid #b68c2b;
  color: #f0d06b;
  padding: 6px 8px;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .8px;
}

.store-body {
  padding: 15px;
}

.store-body h3 {
  font: 500 20px var(--serif);
  margin: 0 0 8px;
  color: #f6eddb;
}

.store-body p {
  font-size: 10px;
  line-height: 1.7;
  color: #b4ad9d;
  min-height: 58px;
  margin: 0 0 14px;
}

.store-meta {
  display: flex;
  justify-content: space-between;
  gap: 6px;
  flex-wrap: wrap;
  font-size: 8px;
  color: #c8b77d;
  margin-bottom: 14px;
}

.store-body .button {
  width: 100%;
  padding: 11px 6px;
}

/* PERSONALIZAÇÃO — SEM FOTO REPETIDA */

.custom-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8%;
  align-items: center;
  padding: 80px 10%;
  background: linear-gradient(110deg, #17140c, #0a0a09 60%);
  border-top: 1px solid #4a3815;
  border-bottom: 1px solid #4a3815;
}

.custom-image {
  min-height: 390px;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 40%, #e0bd4f35, transparent 22%),
    repeating-linear-gradient(
      135deg,
      transparent 0,
      transparent 24px,
      #c49a2c18 25px,
      transparent 26px
    ),
    linear-gradient(145deg, #1c180e, #080808 72%);
  border: 1px solid #b79431;
  box-shadow: 15px 15px 0 #c49a2c16;
}

.custom-image::after {
  content: "YOUR IDEA";
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: #e0bd4f;
  font: italic 500 clamp(34px, 5vw, 62px) var(--serif);
  text-shadow: 0 0 25px #c49a2c33;
}

.custom-image::before {
  content: "";
  position: absolute;
  inset: 12px;
  border: 1px solid #f1d57b88;
  z-index: 1;
}

.custom-image-note {
  position: absolute;
  z-index: 2;
  right: -1px;
  bottom: 25px;
  background: linear-gradient(135deg, #f0d46e, #b58a24);
  color: #171106;
  padding: 17px 20px;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 1.3px;
  line-height: 1.8;
}

.custom-copy > p:not(.eyebrow) {
  color: #c4bcaa;
  font-size: 12px;
  line-height: 1.9;
  max-width: 470px;
  margin: 20px 0;
}

.custom-copy small {
  display: block;
  margin-top: 15px;
  color: #9e906c;
  font-size: 9px;
}

/* SOBRE NÓS */

.about-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8%;
  align-items: center;
  padding: 75px 10%;
  background: #0b0b09;
}

.about-copy p {
  color: #bcb4a2;
  font-size: 12px;
  line-height: 2;
  margin: 0 0 20px;
}

.text-link {
  display: inline-block;
  color: var(--gold-bright);
  font-size: 11px;
  font-weight: 800;
  border-bottom: 1px solid #80631e;
  padding-bottom: 7px;
}

/* CONVITE AOS VENDEDORES */

.seller-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 48px 9%;
  background: linear-gradient(115deg, #f0d36a, #c39a2c 68%, #8b6719);
  color: #171106;
}

.seller-banner .eyebrow {
  color: #3d2b08;
}

.seller-banner h2 {
  font: 500 clamp(28px, 3.3vw, 42px) / 1.1 var(--serif);
  margin: 0 0 9px;
}

.seller-banner p:not(.eyebrow) {
  font-size: 11px;
  color: #49370c;
}

.seller-banner .button {
  background: #080807;
  color: #f4d56a;
  border-color: #080807;
  white-space: nowrap;
}

/* RODAPÉ */

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 25px 5%;
  background: #f1eadb;
  color: #20190b;
}

footer .brand-wordmark {
  color: #18130a;
}

footer .brand-wordmark small {
  color: #8c712a;
}

footer .brand-monogram {
  background: #090908;
}

footer > small {
  font-size: 9px;
  color: #82765e;
}

footer > div {
  display: flex;
  gap: 18px;
}

footer > div a {
  font-size: 10px;
  color: #625638;
}

/* NOTIFICAÇÕES */

.toast {
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 100;
  background: #e4c052;
  color: #120e04;
  padding: 14px 18px;
  font-weight: 800;
  font-size: 12px;
  border: 1px solid #fff0a5;
  box-shadow: 0 8px 35px #0008;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition: .2s;
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}

/* MODAIS */

dialog {
  width: min(560px, calc(100% - 28px));
  max-height: 88vh;
  overflow: auto;
  background: #11100d;
  color: var(--text);
  border: 1px solid #9c7924;
  padding: 30px;
  box-shadow: 0 30px 100px #000b;
}

dialog::backdrop {
  background: #000b;
  backdrop-filter: blur(5px);
}

dialog h2 {
  font: 500 34px var(--serif);
  margin: 0 0 22px;
}

dialog .close {
  position: sticky;
  float: right;
  top: 0;
  border: 1px solid #75591c;
  background: #0b0b09;
  color: #f3d36b;
  font-size: 24px;
  width: 34px;
  height: 34px;
  line-height: 1;
}

/* FORMULÁRIOS */

.form-grid {
  display: grid;
  gap: 15px;
}

.form-grid label {
  display: grid;
  gap: 7px;
  color: #d6c9a9;
  font-size: 11px;
}

.form-grid input,
.form-grid select,
.form-grid textarea {
  width: 100%;
  background: #090908;
  border: 1px solid #5a451b;
  color: #f7f0df;
  padding: 12px;
  outline: none;
}

.form-grid input:focus,
.form-grid select:focus,
.form-grid textarea:focus {
  border-color: #e2c04e;
  box-shadow: 0 0 0 2px #d6b34822;
}

.form-grid textarea {
  min-height: 90px;
  resize: vertical;
}

.form-note {
  font-size: 10px;
  line-height: 1.6;
  color: #9d9279;
}

.full {
  width: 100%;
}

/* CARRINHO E FAVORITOS */

.cart-row,
.favorite-row {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 12px 0;
  border-bottom: 1px solid #3d3015;
}

.cart-row img,
.favorite-row img {
  width: 66px;
  height: 78px;
  object-fit: cover;
  border: 1px solid #4b3916;
}

.item-text {
  display: grid;
  gap: 6px;
  flex: 1;
  min-width: 0;
}

.item-text strong {
  font: 500 16px var(--serif);
}

.item-text small {
  font-size: 10px;
  color: #c3b58d;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 9px;
}

.quantity button,
.remove {
  background: #1c190f;
  color: #f2d36b;
  border: 1px solid #6d531c;
  padding: 6px 9px;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  font-size: 13px;
}

.cart-total strong {
  font-size: 19px;
  color: var(--gold-bright);
}

/* DETALHE DA LOJA */

.store-detail-hero {
  height: 130px;
  border: 1px solid #8b6c24;
  margin: 10px 0 20px;
  background-size: cover;
  background-position: center;
}

.store-detail-category {
  display: inline-block;
  margin: 15px;
  background: #090908;
  color: #f3d46b;
  border: 1px solid #a58228;
  padding: 8px;
  font-size: 9px;
  letter-spacing: 1px;
}

.store-detail-heading h2 {
  margin: 0;
}

.store-detail-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 20px 0;
}

.store-products {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.store-product {
  display: grid;
  gap: 8px;
  background: #19170f;
  border: 1px solid #4b3917;
  padding: 10px;
  min-width: 0;
}

.store-product img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.store-product strong {
  font: 500 15px var(--serif);
}

.store-product small {
  color: var(--gold-bright);
}

.store-product .add {
  font-size: 8px;
}

/* RESPONSIVIDADE */

@media (max-width: 1100px) {
  .header-main {
    grid-template-columns: 180px minmax(140px, 1fr);
    gap: 12px;
  }

  .header-actions {
    grid-column: 1 / -1;
    justify-content: flex-end;
  }

  .main-nav {
    justify-content: flex-start;
    overflow-x: auto;
    white-space: nowrap;
  }

  .nav-note {
    display: none;
  }

  .product-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .store-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .hero {
    padding: 55px 6%;
  }

  .hero-visual {
    height: 340px;
  }
}

@media (max-width: 700px) {
  .announcement {
    font-size: 7px;
    letter-spacing: 1px;
  }

  .header-main {
    padding: 12px 4%;
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .brand {
    justify-content: center;
  }

  .search {
    order: 2;
  }

  .header-actions {
    order: 3;
    grid-column: auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px;
  }

  .action-button {
    padding: 8px 4px;
    gap: 4px;
    flex-wrap: wrap;
    font-size: 8px;
    min-width: 0;
  }

  .action-label {
    white-space: normal;
    text-align: center;
  }

  .action-icon {
    font-size: 15px;
  }

  .main-nav {
    padding: 11px 4%;
    gap: 18px;
  }

  .nav-link {
    font-size: 9px;
  }

  .hero {
    grid-template-columns: 1fr;
    padding: 48px 6% 38px;
    gap: 32px;
  }

  .hero h1 {
    font-size: clamp(42px, 12vw, 62px);
  }

  .hero-visual {
    justify-self: center;
    height: 310px;
    width: 90%;
  }

  .hero-description {
    font-size: 12px;
  }

  .hero-highlights {
    gap: 10px;
  }

  .section {
    padding: 53px 4%;
  }

  .section-heading,
  .stores-intro {
    align-items: flex-start;
    flex-direction: column;
    gap: 13px;
  }

  .section h2,
  .custom-section h2,
  .about-section h2 {
    font-size: 34px;
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .product-image {
    height: 220px;
    padding: 6px;
  }

  .product-info {
    padding: 11px;
  }

  .product-info h3 {
    font-size: 16px;
    min-height: 42px;
  }

  .price {
    font-size: 14px;
  }

  .product-bottom {
    font-size: 9px;
  }

  .add {
    font-size: 8px;
    padding: 11px 4px;
  }

  .filter {
    padding: 9px 10px;
    font-size: 9px;
  }

  .store-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .store-cover {
    height: 120px;
  }

  .store-body {
    padding: 11px;
  }

  .store-body h3 {
    font-size: 17px;
  }

  .store-body p {
    font-size: 9px;
    min-height: 68px;
  }

  .store-meta {
    font-size: 7px;
  }

  .custom-section,
  .about-section {
    grid-template-columns: 1fr;
    padding: 48px 7%;
    gap: 30px;
  }

  .custom-image {
    min-height: 290px;
    margin-right: 10px;
  }

  .custom-image-note {
    right: 0;
  }

  .seller-banner {
    padding: 36px 6%;
    align-items: flex-start;
    flex-direction: column;
  }

  .seller-banner .button {
    white-space: normal;
  }

  footer {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  footer > div {
    width: 100%;
    justify-content: center;
  }

  .store-products {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cart-row,
  .favorite-row {
    gap: 8px;
  }

  .cart-row img,
  .favorite-row img {
    width: 52px;
    height: 62px;
  }

  .item-text strong {
    font-size: 13px;
  }

  .quantity {
    gap: 5px;
  }

  .quantity button {
    padding: 4px 7px;
  }
}

@media (max-width: 380px) {
  .product-grid,
  .store-grid {
    grid-template-columns: 1fr;
  }

  .product-image {
    height: 300px;
  }

  .header-actions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero-visual {
    height: 260px;
  }

  .store-body p {
    min-height: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
    animation-duration: .01ms !important;
  }
}

/* ===== Aprimoramentos Moda Custom ===== */
#themeToggle { min-width: 44px; font-size: 19px; }
.password-hint { color: var(--gold); font-size: 11px; line-height: 1.5; }
.seller-dashboard { border-top: 1px solid var(--gold-dark); }
.dashboard-grid { display:grid; grid-template-columns:minmax(260px, .8fr) 1.2fr; gap:28px; align-items:start; }
.dashboard-form, .dashboard-products { background:var(--panel); border:1px solid var(--line); padding:24px; }
.dashboard-form { display:grid; gap:14px; }
.dashboard-form h3, .dashboard-products h3 { margin:0 0 8px; font: 500 24px var(--serif); }
.dashboard-form label { display:grid; gap:7px; color:var(--muted); font-size:11px; }
.dashboard-form input, .dashboard-form textarea { width:100%; padding:12px; background:var(--ink-2); border:1px solid var(--line); color:var(--text); }
.dashboard-form textarea { min-height:90px; resize:vertical; }
.form-two { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
.seller-products-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(155px,1fr)); gap:14px; }
.seller-product-card { background:var(--panel-2); border:1px solid var(--line); padding:10px; }
.seller-product-card img { width:100%; height:150px; object-fit:cover; background:#333; }
.seller-product-card h4 { margin:8px 0 4px; }
.seller-product-card p { color:var(--muted); line-height:1.5; }
.custom-builder { display:grid; grid-template-columns:minmax(220px,.9fr) 1.1fr; gap:22px; align-items:start; }
.shirt-stage { position:relative; min-height:300px; display:grid; place-items:center; background:var(--panel-2); border:1px solid var(--line); overflow:hidden; }
.shirt-stage svg { width:min(100%,280px); height:280px; }
.shirt-stage #shirtTextPreview { position:absolute; top:48%; left:50%; transform:translate(-50%,-50%); color:white; font-weight:800; text-align:center; max-width:120px; overflow-wrap:anywhere; text-shadow:0 2px 5px #000; }
.artwork-preview { position:absolute; width:74px; height:74px; object-fit:contain; top:42%; left:50%; transform:translate(-50%,-50%); }
.artwork-preview.hidden { display:none; }
body.light-mode { --ink:#f5f2eb; --ink-2:#fff; --panel:#fff; --panel-2:#eee9df; --text:#211e18; --muted:#625d52; --line:#d7c89e; --white:#211e18; background:#f5f2eb; color:#211e18; }
body.light-mode .site-header { background:#fffffff2; }
body.light-mode .nav-link { color:#39352d; }
body.light-mode .hero { background:radial-gradient(ellipse at 78% 45%,#e0bd4f33,transparent 45%),linear-gradient(120deg,#f7f3e9,#eee7d6); }
body.light-mode .hero h1, body.light-mode .section h2, body.light-mode .custom-section h2, body.light-mode .about-section h2 { color:#211e18; }
body.light-mode .hero-description { color:#514b40; }
body.light-mode .search, body.light-mode .action-button, body.light-mode .filter, body.light-mode .product, body.light-mode .store-card { background:#fff; color:#211e18; }
body.light-mode .search input { color:#211e18; }
body.light-mode .main-nav { border-color:#e0d5bb; }
body.light-mode .announcement { background:#e9dfc5; color:#5c4614; }
body.light-mode .section-subtitle, body.light-mode .about-copy { color:#625d52; }
body.light-mode .hero-visual { background:linear-gradient(145deg,#e8dfc9,#fff); }
body.light-mode .hero-photo { background:linear-gradient(145deg,#eee4ca,#fff); }
body.light-mode .hero-photo::before { color:#a27a1e; }
body.light-mode .custom-section, body.light-mode .seller-banner { background:#eee8d9; color:#211e18; }
@media(max-width:900px){ .dashboard-grid,.custom-builder{grid-template-columns:1fr;} }
@media(max-width:600px){ .form-two{grid-template-columns:1fr;} #themeToggle{min-width:38px;} }

/* Ajustes de navegação e experiência por perfil */
.favorite-icon-only { width:46px; min-width:46px; padding:8px; position:relative; }
.favorite-icon-only .action-label { display:none; }
.favorite-icon-only .action-icon { font-size:25px; line-height:1; }
.favorite-icon-only b { position:absolute; top:-6px; right:-5px; min-width:17px; height:17px; border-radius:50%; font-size:9px; }
.floating-theme-toggle { position:fixed; z-index:9999; right:24px; bottom:24px; width:58px; height:58px; border-radius:50%; border:1px solid var(--gold-bright); background:linear-gradient(145deg,#17140c,#050505); color:#f3ce58; box-shadow:0 8px 28px #0008,0 0 0 5px #d8b34a20; font-size:27px; cursor:pointer; display:grid; place-items:center; transition:transform .2s,box-shadow .2s; }
.floating-theme-toggle:hover { transform:translateY(-3px) rotate(-8deg); box-shadow:0 10px 32px #0009,0 0 0 7px #d8b34a28; }
body.light-mode .floating-theme-toggle { background:linear-gradient(145deg,#fff,#e9dfc5); color:#8a6818; }
body.seller-mode .seller-dashboard { display:block !important; min-height:calc(100vh - 190px); padding-top:55px; }
#sellerAccountDialog { max-width:620px; }
#sellerAccountForm textarea { min-height:100px; }
@media(max-width:900px){ .floating-theme-toggle{width:52px;height:52px;right:16px;bottom:16px;} }
@media(max-width:600px){ .favorite-icon-only{width:38px;min-width:38px;} .favorite-icon-only .action-icon{font-size:22px;} }


/* Conta, compras e rastreio demonstrativo */
.account-summary,.purchase-card,.tracking-card{background:var(--panel-2);border:1px solid var(--line);padding:16px;margin:12px 0;border-radius:10px}
.purchase-card h4{margin:0 0 8px}.purchase-card p,.tracking-card p{color:var(--muted);line-height:1.5}
.purchase-items{font-size:.9rem;color:var(--muted);margin:8px 0}
.tracking-steps{list-style:none;padding:0;margin:18px 0}.tracking-steps li{position:relative;padding:0 0 18px 30px;border-left:2px solid var(--line);margin-left:8px;color:var(--muted)}
.tracking-steps li::before{content:"";position:absolute;left:-7px;top:2px;width:12px;height:12px;border-radius:50%;background:var(--line)}
.tracking-steps li.done{color:var(--text)}.tracking-steps li.done::before{background:#c9a43b}.tracking-steps li:last-child{border-left-color:transparent}
.size-select{width:100%;margin:8px 0;padding:9px;background:var(--panel-2);color:var(--text);border:1px solid var(--line)}
.product-info .size-select{font-size:.85rem}

```


## `src/main/resources/static/app.js`

```javascript
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
  const elemento = $("#toast");
  if (!elemento) return;

  elemento.textContent = mensagem;
  elemento.classList.add("show");

  clearTimeout(window.mcToastTimer);

  window.mcToastTimer = setTimeout(() => {
    elemento.classList.remove("show");
  }, 2600);
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

        <label class="size-label" for="size-${produto.id}">Tamanho</label>
        <select class="size-select" id="size-${produto.id}" data-size-for="${produto.id}" aria-label="Tamanho de ${produto.nome}">
          <option value="P">P</option><option value="M" selected>M</option><option value="G">G</option><option value="GG">GG</option><option value="XG">XG</option>
        </select>
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
  const dados={id,nome:vendedor.nomeLoja||"Minha loja",categoria:vendedor.categoriaLoja||"Personalizáveis",cidade:"Loja independente",rating:"Nova",vendas:"0",descricao:vendedor.descricao||"Loja independente da comunidade Moda Custom.",capa:"img/logo.png",slogan:"Criada na Moda Custom."};
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

  const sizeSelect = [...document.querySelectorAll(`[data-size-for="${id}"]`)].find(el => el.closest("#storeDetails"))
    || document.querySelector(`[data-size-for="${id}"]`);
  const tamanho = sizeSelect?.value || "M";
  const item = carrinho.find(i => i.id === id && i.tamanho === tamanho);

  if (item) item.qtd++;
  else carrinho.push({ id, qtd: 1, tamanho });

  salvarEstado();
  renderCarrinho();
  toast("Produto adicionado ao carrinho.");
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
    lista.innerHTML = carrinho.map(item => {
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
            <small>Tamanho: ${escapeHtml(item.tamanho || "M")} · ${moeda(produto.preco)} cada</small>
          </div>

          <div class="quantity">
            <button data-minus="${produto.id}" aria-label="Diminuir">−</button>
            <span>${item.qtd}</span>
            <button data-plus="${produto.id}" aria-label="Aumentar">+</button>
          </div>

          <button
            class="remove"
            data-remove-cart="${produto.id}"
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
          <select class="size-select" data-size-for="${produto.id}" aria-label="Tamanho de ${escapeHtml(produto.nome)}"><option>P</option><option selected>M</option><option>G</option><option>GG</option><option>XG</option></select>
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
          <small>Tamanho ${escapeHtml(item.tamanho || "M")} · ${item.qtd} unidade(s) · ${moeda(subtotal)}</small>
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
    else abrirDialog("clientDialog");
  });
  $("#goSellerDashboard")?.addEventListener("click", () => {
    $("#sellerAccountDialog").close();
    document.body.classList.add("seller-mode");
    const vendedor = ler("mc-vendedor", null);
    if (vendedor?.id) carregarProdutosVendedor(vendedor.id);
    window.scrollTo({top:0,behavior:"smooth"});
  });
  $("#sellerAccountLogout")?.addEventListener("click",()=>{localStorage.removeItem("mc-vendedor");$("#sellerAccountDialog").close();$("#sellerDashboard").classList.add("hidden");document.body.classList.remove("seller-mode");atualizarBotoesConta();toast("Você saiu da conta do vendedor.");});
  $("#clientLogout")?.addEventListener("click",()=>{localStorage.removeItem("mc-cliente");$("#clientAccountDialog").close();atualizarBotoesConta();toast("Você saiu da sua conta.");});
  $("#clientAccountDialog")?.addEventListener("click",e=>{const b=e.target.closest("[data-track]");if(b)mostrarRastreamento(Number(b.dataset.track));});
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

  $("#cartItems").addEventListener("click", e => {
    const mais = e.target.closest("[data-plus]");
    const menos = e.target.closest("[data-minus]");
    const remover = e.target.closest("[data-remove-cart]");

    if (mais) {
      const item = carrinho.find(i => i.id === Number(mais.dataset.plus));
      if (item) item.qtd++;
    }

    if (menos) {
      const item = carrinho.find(i => i.id === Number(menos.dataset.minus));
      if (item) item.qtd = Math.max(1, item.qtd - 1);
    }

    if (remover) {
      carrinho = carrinho.filter(
        i => i.id !== Number(remover.dataset.removeCart)
      );
    }

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

  $("#checkout").addEventListener("click", () => {
    if (!carrinho.length) {
      toast("Adicione produtos antes de continuar.");
      return;
    }

    $("#cartDialog").close();
    renderResumoPedido();
    const cliente=ler("mc-cliente",null);
    if(!cliente?.id){toast("Faça login ou cadastre-se para comprar.");abrirDialog("clientDialog");return;}
    $("#checkoutForm").elements.cpf.value=cliente.cpf||"";
    abrirDialog("checkoutDialog");
  });

  $("#checkoutForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!carrinho.length) { toast("Seu carrinho está vazio."); return; }
    if (!this.reportValidity()) return;
    const cliente = ler("mc-cliente", null);
    if (!cliente?.id) { toast("Entre ou crie sua conta antes de finalizar a compra."); abrirDialog("clientDialog"); return; }
    const cpf = this.elements.cpf.value.replace(/\D/g, "");
    if (!/^\d{11}$/.test(cpf)) { toast("Informe um CPF com 11 números."); this.elements.cpf.focus(); return; }
    const total = carrinho.reduce((soma,item)=>{const produto=catalogo.find(p=>p.id===item.id);return soma+(produto?produto.preco*item.qtd:0);},0);
    const pedido = {
      numero: Date.now(), clienteId: cliente.id, dataISO: new Date().toISOString(),
      data: new Date().toLocaleString("pt-BR"), cliente: cliente.nome, email: cliente.email,
      cpf, endereco: this.elements.endereco.value.trim(), numeroEndereco: this.elements.numeroEndereco.value.trim(),
      complemento: this.elements.complemento.value.trim(), pagamento: this.elements.pagamento.value,
      itens: carrinho.map(item => ({...item})), total, status: "Pedido recebido"
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
      $("#clientOpen").classList.add("hidden");
      toast("Conta criada! Vamos às roupas.");
      document.body.classList.remove("seller-mode");
      atualizarBotoesConta();
      $("#explorar").scrollIntoView({behavior:"smooth"});
    } catch (error) {
      toast(error.message || "Falha ao conectar ao servidor.");
    } finally {
      button.disabled = false;
      button.textContent = "Cadastrar";
    }
  });

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
      toast(error.message || "Falha ao conectar ao servidor.");
    } finally {
      button.disabled = false;
      button.textContent = "Criar minha loja";
    }
  });

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
  if(clientBtn){clientBtn.classList.remove("hidden");if(clientLabel)clientLabel.textContent=client?.id?"Minha conta":"Entrar / Criar conta";}
  if(sellerLabel)sellerLabel.textContent=seller?.id?"Minha loja / Conta":"Minha loja / Vendedor";
  $("#sellerOpen")?.classList.remove("hidden");
  if(seller?.id) $("#clientOpen")?.classList.add("hidden");
}
function renderContaCliente(){
  const client=ler("mc-cliente",null); if(!client)return;
  $("#clientAccountSummary").innerHTML=`<strong>${escapeHtml(client.nome||"Cliente")}</strong><p>${escapeHtml(client.email||"")}</p><small>CPF: ${escapeHtml(client.cpf||"Cadastrado")}</small>`;
  const pedidos=ler("mc-pedidos",[]).filter(p=>String(p.clienteId)===String(client.id));
  $("#clientPurchases").innerHTML=pedidos.length?pedidos.slice().reverse().map(p=>`<article class="purchase-card"><h4>Pedido #${p.numero}</h4><p>${escapeHtml(p.data||"")} · ${moeda(p.total||0)}</p><div class="purchase-items">${(p.itens||[]).map(i=>{const prod=catalogo.find(x=>x.id===i.id);return `${escapeHtml(prod?.nome||"Produto")} (${escapeHtml(i.tamanho||"M")}) × ${i.qtd}`;}).join("<br>")}</div><p><strong>Status:</strong> ${escapeHtml(p.status||"Pedido recebido")}</p><button class="button button-outline" data-track="${p.numero}">Acompanhar pedido</button></article>`).join(""):`<p class="form-note">Você ainda não realizou compras nesta conta.</p>`;
}
function mostrarRastreamento(numero){
  const pedido=ler("mc-pedidos",[]).find(p=>Number(p.numero)===Number(numero));if(!pedido)return;
  const etapas=["Pedido recebido","Pagamento confirmado","Em preparação","Enviado","Saiu para entrega","Entregue"];
  const inicio=new Date(pedido.dataISO||Date.now()).getTime();
  const minutos=Math.max(0,Math.floor((Date.now()-inicio)/60000));
  const etapa=Math.min(etapas.length-1,Math.floor(minutos/2));
  $("#trackingContent").innerHTML=`<div class="tracking-card"><strong>Pedido #${pedido.numero}</strong><p>Previsão demonstrativa: ${new Date(inicio+12*60*60*1000).toLocaleString("pt-BR")}</p><ol class="tracking-steps">${etapas.map((e,i)=>`<li class="${i<=etapa?"done":""}"><strong>${e}</strong><br><small>${i<etapa?"Concluído":i===etapa?"Etapa atual":"Aguardando"}</small></li>`).join("")}</ol></div>`;
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
```


## `src/main/java/com/example/modacustom/entity/Cliente.java`

```java
package com.example.modacustom.entity;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "clientes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false, unique = true)
    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(nullable = false)
    private String senha;

    private String telefone;

    @Column(length = 11, unique = true)
    private String cpf;

    private String endereco;
}

```


## `src/main/java/com/example/modacustom/entity/Vendedor.java`

```java
package com.example.modacustom.entity;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "vendedores")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Vendedor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false, unique = true)
    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(nullable = false)
    private String senha;

    @Column(length = 14, unique = true)
    private String cnpj;

    private String nomeLoja;

    private String categoriaLoja;

    @Column(length = 2000)
    private String descricao;
}
```


## `src/main/java/com/example/modacustom/service/VendedorService.java`

```java

package com.example.modacustom.service;

import com.example.modacustom.entity.Vendedor;
import com.example.modacustom.repository.VendedorRepository;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.modacustom.repository.ClienteRepository;
import com.example.modacustom.utils.SenhaValidator;

import java.util.List;
import java.util.Optional;

@Service
public class VendedorService {

    private final VendedorRepository vendedorRepository;
    private final ClienteRepository clienteRepository;
    private final PasswordEncoder passwordEncoder;

    public VendedorService(VendedorRepository vendedorRepository, ClienteRepository clienteRepository,
                           PasswordEncoder passwordEncoder) {
        this.vendedorRepository = vendedorRepository;
        this.clienteRepository = clienteRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Vendedor cadastrar(Vendedor vendedor) {

        vendedor.setEmail(vendedor.getEmail().trim().toLowerCase());
        if (vendedorRepository.existsByEmail(vendedor.getEmail()) || clienteRepository.existsByEmail(vendedor.getEmail())) {
            throw new IllegalArgumentException("E-mail já cadastrado.");
        }
        if (vendedor.getCnpj() == null || !vendedor.getCnpj().matches("\\d{14}")) {
            throw new IllegalArgumentException("O CNPJ deve conter 14 números.");
        }
        SenhaValidator.validar(vendedor.getSenha());
        vendedor.setSenha(passwordEncoder.encode(vendedor.getSenha()));
        return vendedorRepository.save(vendedor);
    }

    public List<Vendedor> listar() {
        return vendedorRepository.findAll();
    }

    public Vendedor atualizar(Long id, Vendedor dados) {
        Vendedor atual = buscar(id);
        atual.setNome(dados.getNome());
        atual.setNomeLoja(dados.getNomeLoja());
        atual.setCategoriaLoja(dados.getCategoriaLoja());
        atual.setDescricao(dados.getDescricao());
        atual.setCnpj(dados.getCnpj());
        return vendedorRepository.save(atual);
    }

    public Vendedor buscar(Long id) {

        Optional<Vendedor> resultado = vendedorRepository.findById(id);

        if (resultado.isEmpty()) {
            throw new IllegalArgumentException( "Vendedor não encontrado.");
        } return resultado.get();
    }
}

```
