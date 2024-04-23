# Desafio do estagiário

O desafio foi desenvolvido utilizando as tecnologias:
- Django Rest Framework API (Python)
- JavaScript
- HTML e CSS

## Requisitos

Para executar o projeto, é preciso ter o pip, python e python3 instalado em seu ambiente.
Veja documentação do Python: https://www.python.org/

## Criando a venv (Ambiente Virtural)

Na raiz do projeto, execute o seguinte comando:

```python -m venv venv``` ou ```python3 -m venv venv```

Após executar os comandos, espera-se ser criado um diretório com o nome ```venv```. Esse diretório é o nosso ambiente virutal onde será instalado as depencias do projeto.

## Executando a venv

A nossa venv será utilizada como nosso "servidor". Para que a mesma seja executada, é preciso ativa-lá.

Linux: ```source venv\bin\activate```
Windows: ```venv\Scripts\activate```

[IMPORTANTE]: Verifique se o seu Windows possui a política de segurança ativada no PowerShell. Se estiver ativada, será necessário desativá-la. Veja mais em: https://learn.microsoft.com/pt-br/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4

Comanda para desativa política de privacidade: ```Set-ExecutionPolicy Unrestricted```

## Instalando dependências

Agora com a venv ativada, instale as dependências no projeto que estão salvas no arquivo requirements.txt: ```pip install -r requirements.txt```

## Criando o banco de dados
Atualmente está sendo usado o Sqlite como DB padrão, mas é possível utilizar outros DBs.
Para criar nosso DB, temos os models do projeto configurados.
Os comandos abaixo aplicam as configurações de model no Banco de dados.

Primeiro execute:
1. ```python3 manage.py makemigrations``` ou ```python manage.py makemigrations```

Depois execute:

2. ```python3 manage.py migrate``` ou ```python manage.py migrate```

## Executando o projeto

Para rodar o projeto, execute o seguinte comando com a env ativada: 
```python3 manage.py runserver``` ou ```python manage.py runserver```


O projeto possui duas rotas:
1. Rota para o frontend: ```http://127.0.0.1:8000``` ou ```localhost:8000```
2. Rota para o backend: ```http://127.0.0.1:8000/api/``` ou ```localhost:8000/api/``` 

A porta da rota no seu computador pode ser diferente de 8000!

## Desativando a venv

Para desativar o ambiente virtual execute o comando: ```deactivate```