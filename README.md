# ToDo List Challenge

Esse desafio consiste no consumo de uma Fake API, onde há uma visualização de uma To-Do List.
Este projeto foi criado com ReactJS, tendo o estilo responsivo e feito com ContextAPI, afim de evitar prop drilling e otimização do compartilhamento de estados.

## Executando o projeto

Para execução do projeto, é necessário algum gerenciador de pacotes do Node.js, como [npm](https://www.npmjs.com) ou [yarn](https://yarnpkg.com) instalado na máquina.
Uma vez que esteja instalado, é necessário clonar o repositório no terminal, utilizando o seguinte comando:

```sh
git clone https://github.com/odaairlopes/to-do-list.git
# ou
git clone git@github.com:odaairlopes/to-do-list.git
``` 

Após isso, acesse o respositório na sua máquina com o seguinte comando:

```sh
 cd to-do-list
```

Após estar dentro do repositório, baixe as dependências necessárias utilizando o comando:

```sh
npm install
# ou
yarn install
```

Após as dependências serem baixadas, será possível executar o projeto com o seguinte comando:

```sh
yarn start
```

Isso irá abrir a página [http://localhost:3000](http://localhost:3000) no seu navegador, onde poderá visualizar o resultado do projeto 🚀.

## Objetivos

1 - Utilizar a API [JSONPlaceHolder](https://jsonplaceholder.typicode.com/) para criar um TODO list; [✔️]

2 - A página inicial do TODO deve mostrar todos os usuários; [✔️]

3 - Ao clicar no usuário o site deve levar para uma página que lista os TODO (tarefas) do usuário em questão; [✔️]

4 - Deve ser possível adicionar um novo item no TODO list de um usuário específico; bem como marcar uma tarefa como concluída ou pendente; [✔️]

Ao abrir a página do inicial, o usuário irá visualizar a lista de usuários completa, fornecida pela API.

Ao clicar em um usuário em específico, será redirecionado para a lista de tarefas do usuário em questão.

Para criar uma nova tarefa, basta clicar no botão "Criar tarefa", onde será aberto um modal para criação da tarefa, contendo um único input de título da tarefa. (A visualização da resposta estará na aba "Console" do Dev Tools).

Para atualizar uma tarefa, basta clicar no status dela (Completed ou Incompleted), onde será atualizado o status da mesma. (A visualização da resposta estará na aba "Console" do Dev Tools).

## Tecnologias utilizadas

- [Axios](https://axios-http.com/ptbr/docs/intro)
- [React-Router-Dom](https://reactrouter.com)
- [styled-components](https://styled-components.com)
- [React Icons](https://react-icons.github.io/react-icons)
