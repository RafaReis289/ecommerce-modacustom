# Moda Custom — versão com login e painel da loja

## Executar no Windows
1. Extraia a pasta `modacustom`.
2. Abra a pasta `modacustom` no VS Code ou IntelliJ.
3. Execute `mvnw.cmd spring-boot:run` no terminal.
4. Acesse `http://localhost:8080/`.

## Alterações desta versão
- Incluída tela de login de cliente com e-mail e senha.
- Incluído caminho entre login e cadastro, nos dois sentidos.
- Criada rota `POST /api/clientes/login`, que procura o cadastro existente e valida a senha BCrypt já armazenada.
- O botão de conta abre o login quando não há cliente conectado.
- O checkout também encaminha para o login quando o cliente ainda não entrou.
- Mantida a seleção de tamanho no carrinho, antes da finalização da compra.
- Corrigido o botão do vendedor para abrir e rolar até a seção `Minha loja` (`#sellerDashboard`).
- Mantida a página inicial em `src/main/resources/static/index.html` para evitar resolução incorreta de template Thymeleaf.

## Observações
- O projeto usa H2 em memória conforme `application.yaml`; os registros do banco são perdidos ao reiniciar o servidor.
- Histórico e acompanhamento de pedidos continuam demonstrativos e guardados no navegador (`localStorage`), não são rastreamento real de transportadora.
- A autenticação nesta versão valida a senha no backend, mas o estado de login ainda é mantido no `localStorage`. Antes de produção, implemente Spring Security com sessão/token e autorização por usuário em todas as rotas privadas.
- O build Maven não pôde ser executado neste ambiente porque o Maven Wrapper precisaria baixar uma distribuição da internet, e o download falhou. O JavaScript passou na verificação sintática com `node --check`.
