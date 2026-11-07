# Moda Custom — conexão com Microsoft SQL Server

## Configuração incluída
- Driver JDBC Microsoft SQL Server (`mssql-jdbc`).
- Banco padrão: `ModaCustom`.
- Servidor padrão: `D9995NE769`, porta `1433`.
- Login padrão: `sa`.
- Senha lida de `DB_PASSWORD` (não gravada no projeto).
- Hibernate `ddl-auto=update` para atualizar as tabelas mapeadas pelas entidades JPA.

## 1. Criar o banco
No SSMS, conecte-se ao servidor `D9995NE769` usando autenticação do Windows, abra Nova Consulta e execute `database/01_criar_banco.sql`.

## 2. Habilitar conexão TCP/IP e autenticação SQL
No SQL Server Configuration Manager, confira se TCP/IP está habilitado para a instância MSSQLSERVER e se a porta TCP está configurada como 1433. Reinicie o serviço SQL Server depois de alterar a configuração.
No SSMS, abra Propriedades do servidor > Segurança e selecione `Modo de autenticação do SQL Server e do Windows` (modo misto). Reinicie o serviço SQL Server.
Confira em Segurança > Logons se `sa` está habilitado e defina uma senha forte. Não use a senha em arquivos versionados.

## 3. Configurar credenciais no PowerShell
Na pasta `modacustom`, execute (substitua pela senha real configurada para `sa`):

```powershell
$env:DB_URL="jdbc:sqlserver://D9995NE769:1433;databaseName=ModaCustom;encrypt=true;trustServerCertificate=true"
$env:DB_USERNAME="sa"
$env:DB_PASSWORD="COLOQUE_A_SENHA_REAL_DO_SA"
.\mvnw.cmd clean spring-boot:run
```

Se o DNS/nome do computador não resolver, use `localhost` se o SQL Server estiver instalado nesta mesma máquina. Se a porta não for 1433, confirme a porta TCP real no SQL Server Configuration Manager e ajuste `DB_URL`.

## 4. Confirmar conexão
Ao iniciar, procure no log do Spring Boot mensagens de inicialização do HikariCP e do Hibernate sem `Login failed`, `Connection refused` ou `UnknownHost`. A criação/atualização das tabelas depende das entidades JPA existentes.

## Importante — escopo desta configuração
Esta atualização troca o banco configurado no projeto para SQL Server e adiciona o driver JDBC. `ddl-auto=update` cria/atualiza somente tabelas correspondentes às entidades JPA que já existem no código. Isso, por si só, não transforma funcionalidades que ainda estejam implementadas no navegador/localStorage em operações de banco. Cadastro, autenticação, pedidos, notificações e rastreamento só podem ser considerados persistidos quando seus controllers/services/repositories gravarem e consultarem esses dados no SQL Server e forem testados de ponta a ponta.
