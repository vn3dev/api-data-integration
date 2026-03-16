# API Data Integration

Exemplo simples de integração entre APIs usando Node.js e TypeScript.

O projeto busca usuários em uma API pública, transforma os dados para um novo formato e envia o resultado para um webhook.

## Fluxo

API pública → buscar usuários → transformar payload → enviar para webhook

### JSON que vem da API:

```js
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: [Object]
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models'
    }
  }
```

### JSON tratado enviado para o webhook:

```js
  {
    externalId: 10,
    fullName: 'Clementina DuBuque',
    login: 'Moriah.Stanton',
    emailAddress: 'Rey.Padberg@karina.biz'
  }
```


## Instalação

```bash
npm install
```

Crie um arquivo .env na raiz do projeto:

```bash
WEBHOOK_URL=https://webhook.site/seu-id
```

## Executar

```bash
npm run dev
```

## Objetivo

Demonstrar conceitos básicos de integração:
- consumo de API REST
- transformação de dados
- envio HTTP para outro serviço
- uso de variáveis de ambiente