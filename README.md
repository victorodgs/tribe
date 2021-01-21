## Tribe

Esse é um projeto criado para demonstrar skills com React e Storybook. Siga os passos para ter a aplicação rodando em ambiente local.

**Algumas Consideracoes**

Apesar de ter tecnologias recomendadas no corpo do teste, optei por fazer algumas adequacoes para mostrar o poder e eficiencia do React sem libs externas, como Redux e Redux Saga, fazendo um modelo bem leve e eficiente de gerenciamento de estado.

A UI nao foi totalmente clonada do Figma por questao de pouco tempo que me deram para fazer o teste :(

Entao foquei mais em qualidade estrutural, de servicos e de teste de UI com Storybook :)

**Gerenciamento de Estado**

## Store

A Store é responsável pelo gerenciamento de estados no Tribe. O gerenciamento de estado é a consistência de comportamentos, dados e mudanças da nossa aplicação, ou seja, é responsável pelas mudanças de UI, gerenciamentos de input, momentos em que se encontra um determinado dado na memoria.

No desenvolvimento da Store utilizamos duas API do React que é o [ContextApi](https://reactjs.org/docs/context.html) e o [hooks](https://reactjs.org/docs/hooks-intro.html) que está implementada no arquivo `createUseContext.tsx`. Ele é responsável por criar a nossa store. Vale ressaltar que podemos ter várias store que recebem o conceito de modulo.

Conceitualmente implementamos a arquitetura flux utilizando estas APIs.

![enter image description here](https://raw.githubusercontent.com/victorodgs/ivar/master/docs/assets/flux-ivar.png?token=AFQ5HKH6OV2RJ4VQRZME6V3ABFLDE)

Para salientar Actions e Selectors abaixo é possível ver alguns exemplos para enfatizar ainda mais os conceitos:

**Actions**

É similar ao `set`. Faz a inserção ou alteração de um dado no state, podendo ter comunicação com a camada dos serviços.

```ts
const sum = (num: number) => {
  setState(({sum}) => ({sum: sum + num}));
};
```

**Selectors**
É similar ao `get`. Pega um valor do state, podendo fazer ou não manipulação dos dados para a View. O objetivo dos selectors é fazer toda e qualquer complexidade, isolando lógica dos componentes de View. Afinal view é apenas para tratar UI e comportamentos de UI.

```ts
const sumWithFormatBrl = () => {
  return `R$ ${$state.sum},00`;
};
```

**Organização dos arquivos**

```
├── ...
├── store ---> #pasta contendo os módulos da store
│ ├── module ---> # módulo
│ │ ├── actions ---> # mutações e ações
│ │ ├── constants ---> # constantes, nada mais. Ele deve ser usado pelo selector
│ │ ├── index ---> # Criação de todo o rolê
│ │ ├── selectors ---> # computação e complexidade
│ │ ├── state ---> # initial state e interface State
├── ...
```

**Necessário ter instalado na sua máquina:**

- Node.js 6+
- Yarn. Usamos Yarn ao invés do NPM, por se integrar melhor ao React.

Clone o repositório e no terminal execute os passos a seguir

1 - Baixe as dependências

    yarn install

2 - "Starte" o servidor :)

       yarn start

Visitando `http://localhost:3000/` no browser, você irá acessar o Jokenorris!

**IMPORTANTE**

Para o app funcionar corretamente, navegue até src/backend e starte o backend com o com:

    npx json-server -p 5000 --watch db.json

**UI Testing**

Usamos Storybook para fazer testes de UI na aplicação. Assim, podemos saber como os componentes que sofrem mutação se comportam com diferentes entradas de dados.
Você pode conferir e escrever novas histórias na pasta `src/stories`

**Para acessar o Storybook, utilize o comando**

    yarn storybook

Abra o browser no endereço `http://localhost:9009/` e irá acessar uma página como essa

![enter image description here](https://i.imgur.com/6MHxQ0A.png)
