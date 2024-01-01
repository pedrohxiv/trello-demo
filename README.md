# Projeto Demo Trello

## Descrição do Projeto

O Trello Demo é um projeto completo desenvolvido do zero, proporcionando uma experiência semelhante ao Trello com funcionalidades adicionais. O projeto abrange a criação de um clone completo do Trello, incluindo espaços de trabalho, quadros, listas, cartões, logs de auditoria/atividades e funções de membros.

## Principais Funcionalidades

- **Autenticação:** Implementei um sistema de autenticação para garantir a segurança e validade das contas dos usuários, utilizando a biblioteca `@clerk/nextjs`.

- **Organizações / Workspaces:** Os usuários podem criar e gerenciar organizações ou espaços de trabalho para organizar seus quadros.

- **Criação de Quadros:** Permite aos usuários criar quadros, com a opção de utilizar imagens aleatórias da API Unsplash como capas atraentes.

- **Registro de Atividades:** Implementei um registro de atividades para toda a organização, fornecendo uma visão detalhada das ações realizadas.

- **Renomear e Excluir Quadros:** Os usuários têm a capacidade de renomear e excluir quadros conforme necessário.

- **Criação de Listas:** Permite a criação de listas dentro de quadros, com funcionalidades como renomear, excluir, reorganizar por arrastar e soltar, e copiar.

- **Criação de Cartões:** Os usuários podem criar cartões, incluindo descrições, renomear, excluir, reorganizar por arrastar e soltar, e copiar.

- **Registro de Atividades dos Cartões:** Implementei um registro de atividades para cada cartão, oferecendo insights sobre as ações realizadas.

- **Limite de Quadros por Organização:** Adicionei um limite para a quantidade de quadros permitidos em cada organização.

- **Assinatura Stripe:** Implementei a assinatura Stripe para cada organização, permitindo desbloquear quadros ilimitados mediante assinatura.

- **Página Inicial Atrativa:** Desenvolvi uma página inicial atraente para apresentar a plataforma e suas funcionalidades.

- **Banco de Dados MySQL:** Utilizei o Prisma ORM para interagir com o banco de dados MySQL.

- **Interface Moderna com shadcnUI e TailwindCSS:** A interface de usuário é construída com shadcnUI e TailwindCSS, proporcionando uma experiência visualmente agradável.

## Dependências

O projeto utiliza diversas dependências para garantir seu funcionamento suave:

- `@clerk/nextjs`: ^4.27.6
- `@hello-pangea/dnd`: ^16.5.0
- `@prisma/client`: ^5.7.0
- `@radix-ui/react-accordion`: ^1.1.2
- `@radix-ui/react-avatar`: ^1.0.4
- `@radix-ui/react-dialog`: ^1.0.4
- `@radix-ui/react-label`: ^2.0.2
- `@radix-ui/react-popover`: ^1.0.7
- `@radix-ui/react-separator`: ^1.0.3
- `@radix-ui/react-slot`: ^1.0.2
- `@radix-ui/react-tooltip`: ^1.0.7
- `@tanstack/react-query`: ^5.14.1
- `class-variance-authority`: ^0.7.0
- `clsx`: ^2.0.0
- `date-fns`: ^3.0.1
- `lodash`: ^4.17.21
- `lucide-react`: ^0.294.0
- `next`: 14.0.4
- `react`: ^18
- `react-dom`: ^18
- `sonner`: ^1.2.4
- `stripe`: ^14.9.0
- `tailwind-merge`: ^2.1.0
- `tailwindcss-animate`: ^1.0.7
- `unsplash-js`: ^7.0.19
- `usehooks-ts`: ^2.9.1
- `zod`: ^3.22.4
- `zustand`: ^4.4.7
- `@types/lodash`: ^4.14.202
- `@types/node`: ^20
- `@types/react`: ^18
- `@types/react-dom`: ^18
- `autoprefixer`: ^10.0.1
- `eslint`: ^8
- `eslint-config-next`: 14.0.4
- `postcss`: ^8
- `prisma`: ^5.7.0
- `tailwindcss`: ^3.3.0
- `typescript`: ^5

## Como Executar o Projeto

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js e o npm (ou yarn) instalados.
3. Instale as dependências do projeto utilizando o seguinte comando:

```bash
npm install
# ou
yarn install
```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes chaves e seus respectivos valores:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=seu_valor_aqui
CLERK_SECRET_KEY=seu_valor_aqui
NEXT_PUBLIC_CLERK_SIGN_IN_URL=seu_valor_aqui
NEXT_PUBLIC_CLERK_SIGN_UP_URL=seu_valor_aqui
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=seu_valor_aqui
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=seu_valor_aqui
DATABASE_URL=seu_valor_aqui
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=seu_valor_aqui
STRIPE_API_KEY=seu_valor_aqui
STRIPE_WEBHOOK_SECRET=seu_valor_aqui
NEXT_PUBLIC_APP_URL=seu_valor_aqui
```

Certifique-se de substituir `seu_valor_aqui` pelos valores corretos de cada chave.

5. Inicie o servidor de desenvolvimento com o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

6. Acesse a plataforma em `http://localhost:3000` e explore todas as funcionalidades do Trello, incluindo a criação e organização de quadros, listas e cartões.
