/* Execute no SQL Server Management Studio conectado ao servidor D9995NE769 */
IF DB_ID(N'ModaCustom') IS NULL
BEGIN
    CREATE DATABASE [ModaCustom];
END;
GO

/* Confirma o banco criado. */
SELECT name, state_desc
FROM sys.databases
WHERE name = N'ModaCustom';
GO
