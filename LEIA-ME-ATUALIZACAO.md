# Moda Custom — atualização de conta, checkout e pedidos

## Como executar
1. Extraia a pasta `modacustom`.
2. Abra a pasta no IntelliJ ou VS Code.
3. Execute `mvnw.cmd spring-boot:run` no Windows (ou `./mvnw spring-boot:run` no Linux/macOS, se o wrapper estiver disponível).
4. Acesse `http://localhost:8080/index.html`.
5. Não abra o HTML via `file:///` e não use o Live Server na porta 5500 para testar as APIs.

## O que foi atualizado
- Cadastro de cliente envia e armazena CPF.
- Cadastro de vendedor exige CNPJ com 14 dígitos e persiste o campo na entidade.
- Checkout reaproveita a conta e solicita somente CPF, endereço, número, complemento opcional e forma de pagamento. O CPF é preenchido automaticamente quando disponível.
- Ícone de usuário abre a área do cliente, com dados básicos e histórico de compras.
- Histórico permite abrir uma linha do tempo demonstrativa de acompanhamento do pedido.
- Cada produto permite selecionar tamanho P, M, G, GG ou XG; o tamanho acompanha o item no carrinho, resumo e histórico.
- Vendedor pode abrir as informações cadastrais da loja, editar dados, acessar o painel e sair da conta.
- O botão “Voltar à tela inicial” sai apenas do painel, mantendo a conta conectada.
- A loja cadastrada pelo vendedor é adicionada à vitrine local desta sessão e reaparece após recarregar enquanto a conta estiver salva no navegador.
- O painel do vendedor não bloqueia mais a visualização da tela inicial.

## Observações importantes
- O projeto usa H2 em memória (`jdbc:h2:mem`): os dados do banco são apagados quando o servidor reinicia. Para persistência real, configure um banco durável.
- O histórico e o rastreamento temporal desta implementação são demonstrativos e armazenados no `localStorage` do navegador; não consultam transportadora nem atualizam pedidos no banco.
- O fluxo de pagamento continua demonstrativo, sem cobrança real.
- A autenticação atual baseada em `localStorage` é apenas uma sessão de demonstração. Antes de publicar, implemente autenticação segura no backend, autorização por usuário e proteção dos endpoints.
- O CNPJ é validado quanto ao formato de 14 dígitos; a validação matemática dos dígitos verificadores ainda deve ser adicionada para uso em produção.

## Atualização adicional — login do vendedor, erros visíveis e pedidos individuais
- Adicionada tela de login para vendedor em `/api/vendedores/login`, validando senha com `PasswordEncoder`.
- Cadastro de vendedor agora oferece caminho para entrar em uma conta existente.
- Erros de cadastro/login aparecem dentro do próprio formulário aberto, sem depender de aviso flutuante na página inicial.
- Notificações geradas enquanto um diálogo está aberto aparecem dentro desse diálogo.
- Corrigido o evento de clique do carrinho: clicar no seletor de tamanho não re-renderiza o carrinho, evitando que a lista feche/suba antes da escolha.
- Novos pedidos recebem identificador `MC-{idCliente}-{timestamp}` e o rastreamento confere também o cliente conectado antes de exibir os detalhes.
- A autenticação e os pedidos ainda usam armazenamento/sessão demonstrativos no navegador. Para produção, proteger rotas com Spring Security e persistir pedidos no banco associados ao cliente autenticado.


## Atualização: pedidos por cliente e loja
- Cada pedido demonstrativo recebe um código único e guarda o ID e o e-mail do cliente.
- A conta do cliente filtra compras e rastreamento pelo ID e e-mail conectados.
- No checkout, o cliente seleciona a loja para a qual deseja enviar a solicitação.
- O painel do vendedor apresenta um sino com solicitações destinadas à loja vinculada ao vendedor.
- O vendedor pode atualizar o status do pedido; o cliente visualiza o status atualizado no acompanhamento.
- Nesta versão, pedidos e notificações ainda usam `localStorage` do navegador. Isso serve para demonstração no mesmo navegador/dispositivo; para produção e sincronização entre dispositivos, os pedidos devem ser persistidos no banco e os endpoints protegidos por autenticação/autorização no backend.
