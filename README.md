# Habit Tracker React

Este é um projeto de **Monitoramento de Hábitos** feito com React. Permite adicionar hábitos, marcar hábitos cumpridos diariamente, visualizar o progresso e remover hábitos. É armazenado no navegador usando `localStorage`.

## Funcionalidades

- Adicionar novos hábitos
- Marcar hábitos como cumpridos hoje
- Visualizar progresso de cada hábito (barra de progresso)
- Remover hábitos
- Persistência de dados usando `localStorage`

## Estrutura do Projeto

```
habit-tracker-react/
├── package.json
├── public/
│   └── index.html
└── src/
    ├── App.jsx
    ├── index.jsx
    └── components/
        ├── AddHabit.jsx
        ├── HabitItem.jsx
        └── HabitList.jsx
```

### Descrição dos Componentes

- **App.jsx**: Componente principal que gerencia o estado dos hábitos e renderiza a lista e o formulário.
- **components/AddHabit.jsx**: Formulário para adicionar novos hábitos.
- **components/HabitList.jsx**: Lista de hábitos existentes.
- **components/HabitItem.jsx**: Item individual de hábito, mostrando progresso, botão de marcar e remover.

## Pré-requisitos

- Node.js (v18+ recomendado)
- npm (vem junto com Node.js)

## Como rodar o projeto

1. **Descompacte o ZIP** em uma pasta de sua preferência.
2. Abra o terminal na pasta do projeto:

```bash
cd habit-tracker-react
```

3. **Instale as dependências**:

```bash
npm install
```

4. **Inicie o servidor de desenvolvimento**:

```bash
npm start
```

5. Abra o navegador em `http://localhost:3000` para acessar o Monitor de Hábitos.

### Observações

- Caso apareça a mensagem sobre **target browsers**, responda `Y` para adicionar os padrões ao `package.json`.
- Alterações nos arquivos são atualizadas automaticamente no navegador (hot reload).
- Para criar uma versão otimizada para produção: `npm run build`.
- Dados dos hábitos são armazenados no navegador usando `localStorage`, garantindo persistência entre sessões.

---

Desfrute do seu Monitor de Hábitos e comece a acompanhar seus objetivos diários!
