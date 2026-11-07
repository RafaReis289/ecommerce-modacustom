# Moda Custom — correções de navegação e compra

## Correções aplicadas
- A rota `/` agora redireciona para `/index.html`, pois a página está em `src/main/resources/static/index.html`. Isso evita que o Thymeleaf tente resolver `index` como template.
- O ícone de perfil só aparece como usuário depois que o cliente cria a conta. Antes disso, o botão mostra a ação de entrar/criar conta.
- O cliente pode navegar pela vitrine sem escolher medidas/tamanho.
- O tamanho (P, M, G, GG ou XG) é escolhido no carrinho, durante o processo de compra. O checkout impede avançar enquanto houver peça sem tamanho.
- A área Minha Conta mantém o histórico demonstrativo de compras e o botão de acompanhamento de cada pedido.

## Como executar no Windows
1. Extraia o ZIP.
2. Abra a pasta `modacustom` no VS Code ou IntelliJ.
3. No terminal, execute `mvnw.cmd clean spring-boot:run`.
4. Acesse `http://localhost:8080/`.

## Observação sobre dados e rastreamento
Nesta versão, o histórico e a linha do tempo de acompanhamento são demonstrativos e ficam no `localStorage` do navegador. Não há integração real com transportadora e esses dados não são persistidos em banco. A autenticação do front-end também permanece demonstrativa; antes de publicar, é necessário implementar sessão/autorização segura no backend e persistência de pedidos vinculados ao cliente.
