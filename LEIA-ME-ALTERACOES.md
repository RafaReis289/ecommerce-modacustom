# Moda Custom — atualização de interface

## Ajustes desta versão
- Favoritos reduzido ao ícone de coração no cabeçalho.
- Alternância claro/escuro movida para botão flutuante fixo no canto inferior direito.
- Cadastro de cliente remove o botão de cadastro do cabeçalho após concluir.
- Cadastro de vendedor abre diretamente o painel exclusivo da loja.
- Cabeçalho do vendedor passa a oferecer acesso à conta da loja.
- Formulário de conta permite editar nome do responsável, nome da loja, categoria e descrição.
- Painel de vendedor passa a ocupar a área principal enquanto o perfil vendedor está ativo.
- Personalizador troca o desenho da peça ao selecionar camiseta, moletom, baby look, regata, ecobag, calça ou shorts.
- Cor, texto, posição e imagem enviada continuam atualizando a prévia.
- Criado endpoint PUT /api/vendedores/{id} para atualizar dados da loja.

## Executar
Abra a pasta raiz do projeto no VS Code e execute no terminal Windows:

```powershell
.\mvnw.cmd spring-boot:run
```

Acesse http://localhost:8080.

## Observações importantes
O projeto utiliza localStorage para manter a sessão demonstrativa do navegador. O endpoint de edição de vendedor ainda não possui autenticação/autorização; antes de publicar o sistema na internet, implemente Spring Security e controle de acesso por usuário. A edição de dados deve ser permitida apenas ao próprio vendedor autenticado.
