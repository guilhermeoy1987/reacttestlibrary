# Requisitos
## Instalar as dependências
`npm install` ou `yarn install`

## Para executar os testes
`npm run test` ou `yarn test`

## Para executar a aplicação em localhost
`npm start` ou `yarn start`

# Para o exercício
O arquivo onde o teste deve ser escrito está em src/components/PostComments/PostComments.test.tsx

## Resolução
Neste repositório existe uma branch chamada **resolucao** com o exercício resolvido, é importante que a utilize como consulta caso tenha dificuldades ou até mesmo para comparar com a abordagem que você adotou, **não faça simplesmente um copiar/colar** - confio em você ;)


Sobre o Projeto
O projeto consiste em  códigos prático de Testes de Unidade e Integração utilizando a React Testing Library (RTL) e Jest. Fiz a validar as funcionalidades de um componente de comentários, garantindo que a interação do usuário e a renderização dos dados ocorram como esperado.

🛠️ O que foi implementado:
Configuração de Seletores: Adição de atributos data-testid nos elementos de formulário (textarea e button) e nos itens da lista para facilitar a captura via RTL.

Teste de Renderização: Verificação se o componente e seus elementos principais (como o botão "Comentar") são carregados corretamente no DOM.

Teste de Fluxo de Usuário: * Simulação da digitação de múltiplos comentários.

Simulação de disparos de eventos de clique no formulário.

Ocorreu a validação da persistência e contagem dos comentários renderizados na tela.

Este repositório contém a implementação de testes automatizados para um componente de comentários em React, utilizando **Jest** e **React Testing Library**.

1. **Atributos de Teste:** Implementação de `data-testid` no componente para garantir seletores robustos e independentes da estilização CSS.
2. **Teste de Integração:** Criação de um fluxo de teste que:
   - Renderizei o componente de comentários.
   - Simulei a digitação e o envio de **dois comentários** distintos.
   - Verifiquei se ambos os comentários foram renderizados corretamente na lista após a ação do usuário.

## 🛠️ Tecnologias:
- React / TypeScript
- Jest
- React Testing Library (RTL)

🚀 Tecnologias Utilizadas:
React com TypeScript

Jest (Test Runner)

React Testing Library (Interação com o DOM)

🧪 Como rodar os testes
Certifiquei  de que as dependências estão instaladas:

Bash
npm install
Execute os testes na branch teste:

Bash
npm test
