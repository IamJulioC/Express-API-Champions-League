# API da Champions League

Este projeto fornece uma API RESTful construída com Node.js, Express e CORS para gerenciar dados de jogadores e clubes da Champions League.

## Instalação

1. **Pré-requisitos:** Certifique-se de ter o Node.js (versão 10 ou superior) e o npm (Node Package Manager) instalados em seu sistema.

2. **Clone o Repositório:** Clone este repositório usando o Git:

    ```bash
    git clone https://github.com/IamJulioC/Express-API-Champions-League
    ```

3. **Instale as Dependências:** Defina un diretório, e instale as dependências necessárias:

    ```bash
    npm install
    ```

## Executando a API

1. **Inicie o Servidor:** Inicie o servidor da API usando o npm:

    ```bash
    npm run start:dev
    ```
    ou
    ```bash
    npm run start:watch
    ```
    <br>
    Por padrão, o servidor será iniciado na porta 3333. Você pode personalizar a porta definindo a variável de ambiente `PORT` no arquivo `.env`.
    
<br>

2. **Verifique a Inicialização:** Após o servidor iniciar, você verá uma mensagem no console indicando a porta de escuta. Você pode então fazer requisições à API usando ferramentas como Postman ou Thunder Client.

## Endpoints da API

A API oferece diversos endpoints para gerenciar informações de jogadores e clubes:

### Jogadores:

  * **GET api/players:** Obtém uma lista de todos os jogadores.
  * **GET api/players/:id:** Obtém um jogador específico pelo seu ID.
  * **POST api/players:** Cria um novo jogador. O corpo da requisição deve conter os detalhes do jogador (por exemplo, nome, clube, posição, etc.).
  * **DELETE api/players/:id:** Exclui um jogador pelo seu ID.
  * **PATCH api/players/:id:** Atualiza um jogador existente pelo seu ID. O corpo da requisição deve conter os detalhes atualizados do jogador.

### Clubes:

  * **GET /clubs:** Obtém uma lista de todos os clubes.

## Exemplo de Uso

**Obter todos os jogadores:**

```bash
curl http://localhost:3333/players
```

<br>

#### Pode contruir para este repositório =)


