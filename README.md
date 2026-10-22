# API REST de Clientes e Pedidos

API desenvolvida com Node.js e Express. Os dados são armazenados em memória usando arrays e objetos JavaScript.

## Como executar

```bash
npm install
npm start
```

O servidor será iniciado em `http://localhost:3000`.

## Endpoints

| Método | Endpoint | Descrição |
| --- | --- | --- |
| GET | `/clientes` | Lista todos os clientes |
| GET | `/clientes/:id` | Busca um cliente pelo ID |
| GET | `/clientes/:id/pedidos` | Lista os pedidos de um cliente |
| PUT | `/clientes/:id` | Atualiza nome, idade e/ou cidade |
| POST | `/clientes/:id/pedidos` | Adiciona pedido ao cliente |
| GET | `/clientes/cidade/:cidade` | Lista clientes por cidade |
| DELETE | `/clientes/:id` | Remove um cliente |

## Exemplos de requisição

Atualizar cliente:

```json
PUT /clientes/1
{
  "nome": "Ana Souza Silva",
  "idade": 29,
  "cidade": "Campinas"
}
```

Adicionar pedido:

```json
POST /clientes/1/pedidos
{
  "codigo": "PED003",
  "produto": "Mouse sem fio",
  "quantidade": 1
}
```

Em atualizações, exclusões e buscas de um ID inexistente, a API retorna a mensagem `Id não existente`.
