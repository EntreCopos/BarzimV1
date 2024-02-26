# Barzim - WebApp de Avaliação de Cervejas

barzim.tech

Bem-vindo ao Barzim, o seu espaço online para avaliação de cervejas! Este webapp interativo foi projetado para os amantes de cervejas compartilharem suas experiências, explorarem novos sabores e se conectarem com outros entusiastas.

## Sumário

- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Dependências](#dependências)
- [Ambiente (.env)](#ambiente-env)
- [Scripts](#scripts)
- [Desenvolvimento](#desenvolvimento)
- [Configurações Adicionais](#configurações-adicionais)
  - [Arquivos de Configuração](#arquivos-de-configuração)
- [Contribuindo](#contribuindo)

## Instalação

Para executar o projeto localmente, siga estas etapas:

    1. Clone este repositório: `git clone https://github.com/seu-usuario/barzim.git`
    2. Instale as dependências: `npm install`
    3. Inicie o servidor local: `npm start`

- **Certifique-se de ter o Node.js instalado em seu ambiente antes de prosseguir com as etapas acima.**

## Estrutura do Projeto
O projeto segue uma estrutura organizada para facilitar o desenvolvimento e a manutenção. Aqui está uma visão geral da estrutura do projeto:

- **auth**: Contém arquivos relacionados à autenticação, como o auth.ts que utiliza o NextAuth.
- **components**: Reúne componentes reutilizáveis utilizados no projeto.
- **data**: Lida com operações relacionadas a dados, como consultas ao banco de dados.
- **lib**: Contém bibliotecas ou utilitários utilizados no projeto.
- **pages**: Cada arquivo nesta pasta representa uma rota no aplicativo.
- **public**: Armazena ativos estáticos, como imagens ou fontes.
- **styles**: Contém arquivos de estilos globais ou configuráveis.
- **schemas**: Define esquemas para validação de dados.
- **tests**: Inclui testes automatizados para o projeto.

## Dependências

O projeto utiliza diversas dependências para garantir seu funcionamento. Aqui estão algumas das principais:

- **@auth/prisma-adapter**: `^1.0.12` - Adaptador Prisma para autenticação.
- **@headlessui/react**: `^1.7.18` - Componentes acessíveis para React.
- **@hookform/resolvers**: `^3.3.3` - Resolvedores para React Hook Form.
- **@prisma/client**: `^5.7.1` - Cliente Prisma para interação com o banco de dados.
- **@radix-ui/react-alert-dialog**: `^1.0.5` - Componente de diálogo acessível.
- **@radix-ui/react-avatar**: `^1.0.4` - Componente de avatar acessível.
- **@radix-ui/react-dropdown-menu**: `^2.0.6` - Menu dropdown acessível.
- **@radix-ui/react-icons**: `^1.3.0` - Ícones acessíveis para React.
- **@radix-ui/react-label**: `^2.0.2` - Componente de rótulo acessível.
- **@radix-ui/react-select**: `^2.0.0` - Componente de seleção acessível.
- **@radix-ui/react-slot**: `^1.0.2` - Componente de slot acessível.
- **@vercel/analytics**: `^1.2.2` - Analytics para projetos Vercel.
- **@vercel/blob**: `^0.22.1` - Manipulação de blobs para projetos Vercel.
- **@vercel/speed-insights**: `^1.0.10` - Insights de velocidade para projetos Vercel.
- **bcrypt**: `^5.1.1` - Biblioteca de hashing de senhas.
- **bcryptjs**: `^2.4.3` - Implementação pura do bcrypt em JavaScript.
- **class-variance-authority**: `^0.7.0` - Autoridade de variância de classe.
- **cloudinary**: `^2.0.1` - API para o serviço de hospedagem de imagens Cloudinary.
- **clsx**: `^2.0.0` - Utilitário para gerar nomes de classe condicionais.
- **date-fns**: `^3.3.1` - Biblioteca de utilitários de data para JavaScript.
- **embla-carousel-react**: `^8.0.0-rc22` - Componente de carrossel React.
- **formidable**: `^3.5.1` - Parser para dados de formulário.
- **next**: `14.0.4` - Framework React para desenvolvimento web.
- **next-auth**: `^5.0.0-beta.4` - Biblioteca de autenticação para projetos Next.js.
- **next-themes**: `^0.2.1` - Controle de temas para projetos Next.js.
- **posthog-js**: `^1.105.9` - Biblioteca para integração com o PostHog.
- **posthog-node**: `^3.6.2` - Cliente Node.js para PostHog.
- **prop-types**: `^15.8.1` - Verificação de tipos para props em React.
- **react**: `^18` - Biblioteca principal do React.
- **react-confetti**: `^6.1.0` - Componente de confetes para React.
- **react-dom**: `^18` - Renderizador do React para a web.
- **react-hook-form**: `^7.49.2` - Biblioteca para gerenciamento de formulários React.
- **react-icons**: `^4.12.0` - Ícones para React.
- **react-interactions**: `^0.0.8` - Biblioteca para gestos e interações em React.
- **react-ratings-declarative**: `^3.4.1` - Componente de classificação declarativo para React.
- **react-spinners**: `^0.13.8` - Componentes de spinner animados para React.
- **react-use**: `^17.5.0` - Hooks para React.
- **reactjs-popup**: `^2.0.6` - Biblioteca para criar modais e pop-ups em React.
- **resend**: `^2.1.0` - Utilitário para reenvio de requisições.
- **shadcn-ui**: `^0.8.0` - Biblioteca de UI Shadowcraft.
- **sonner**: `^1.4.0` - Utilitário para manipulação de áudio em Node.js.
- **streamifier**: `^0.1.1` - Utilitário para streaming de dados.
- **tailwind-merge**: `^2.2.0` - Plugin Tailwind CSS para mesclar classes de forma inteligente.
- **tailwindcss-animate**: `^1.0.7` - Plugin Tailwind CSS para animações.
- **unique-username-generator**: `^1.3.0` - Gerador de nomes de usuário únicos.
- **uuid**: `^9.0.1` - Biblioteca para geração de identificadores únicos.
- **zod**: `^3.22.4` - Esquemas de validação para TypeScript.

## Ambiente (.env)
.env: Contém variáveis de ambiente utilizadas para configurar o ambiente de execução do projeto.

## Scripts
Alguns scripts úteis estão configurados no arquivo package.json. Aqui estão alguns deles:

- **dev**: Inicia o ambiente de desenvolvimento do Next.js.
- **build**: Realiza a construção do projeto para produção.
- **postinstall**: Gera os artefatos necessários após a instalação das dependências.
- **start**: Inicia o aplicativo em um ambiente de produção.
- **lint**: Executa a verificação de linting usando o Next.js lint.


## Desenvolvimento

O projeto também utiliza várias dependências de desenvolvimento para ferramentas como ESLint, Prettier, TypeScript, entre outras. Algumas das principais são:

- **@types/bcrypt**: `^5.0.2` - Tipos para a biblioteca bcrypt.
- **@types/bcryptjs**: `^2.4.6` - Tipos para a biblioteca bcryptjs.
- **@types/formidable**: `^3.4.5` - Tipos para a biblioteca formidable.
- **@types/node**: `^20` - Tipos para o ambiente Node.js.
- **@types/react**: `^18` - Tipos para a biblioteca React.
- **@types/react-dom**: `^18` - Tipos para o renderizador React para a web.
- **@types/uuid**: `^9.0.7` - Tipos para a biblioteca uuid.
- **@typescript-eslint/eslint-plugin**: `^6.20.0` - Plugin ESLint para TypeScript.
- **autoprefixer**: `^10.0.1` - Adiciona automaticamente prefixos de navegador aos estilos.
- **eslint**: `^8` - Linter de código JavaScript/TypeScript.
- **eslint-config-next**: `14.0.4` - Configuração do ESLint para projetos Next.js.
- **postcss**: `^8` - Ferramenta para transformar estilos com JavaScript plugins.
- **prettier**: `^3.2.4` - Ferramenta de formatação de código.
- **prettier-plugin-tailwindcss**: `^0.5.11` - Plugin Prettier para Tailwind CSS.
- **prisma**: `^5.7.1` - ORM para Node.js e TypeScript.
- **tailwindcss**: `^3.4.1` - Framework CSS.
- **typescript**: `^5` - Superset de JavaScript que adiciona tipagem estática.

Lembre-se de verificar a documentação oficial de cada dependência para obter informações detalhadas sobre suas funcionalidades e configurações.


## Configurações Adicionais

# Arquivos de Configuração

 **`next.config.js`**
   - Contém configurações específicas para o Next.js, incluindo a ignorância de erros de tipo em builds de produção e definições de padrões remotos para imagens.

**`next-auth.d.ts`**
   - Define tipos estendidos para o NextAuth, proporcionando uma melhor integração com o Prisma e a definição de roles.

**`middleware.ts`**
   - Implementa um middleware personalizado utilizado no NextAuth, executando ações com base no contexto da autenticação.

**`componentes.json`**
   - Configura o uso de componentes no projeto, definindo padrões de estilo, suporte a TypeScript, integração com o Tailwind CSS e aliases para caminhos.

**`.gitignore`**
   - Especifica os arquivos e diretórios que devem ser ignorados pelo sistema de controle de versão Git.

**`.eslintrc.js`**
   - Contém as configurações do ESLint, uma ferramenta de linting para JavaScript e TypeScript.

**`prettier.config.mjs`**
   - Configurações para o Prettier, garantindo uma formatação consistente do código.

**`postcss.config.js`**
   - Configura o PostCSS para processamento de estilos, integrando o Tailwind CSS e o autoprefixer.

**`tailwind.config.js`**
   - Configurações personalizadas do Tailwind CSS.

**`routes.js`**
- Define diferentes tipos de rotas, incluindo rotas públicas, rotas de autenticação e configurações relacionadas a redirecionamento e prefixo da API de autenticação.

**`.vercel.json`**
- Configurações relacionadas a tarefas cron no Vercel.

**`tsconfig.json`**
- Configurações do TypeScript para o projeto.

Se precisar de mais alguma coisa ou se houver ajustes necessários, me avise!

## Contribuindo

Se deseja contribuir para o desenvolvimento do Barzim, siga estas etapas:

    1. Fork este repositório.
    2. Crie um branch para suas alterações: `git checkout -b feature/nova-funcionalidade`.
    3. Faça suas modificações e commit: `git commit -m 'Adiciona nova funcionalidade'`.
    4. Envie suas alterações: `git push origin feature/nova-funcionalidade`.
    5. Abra uma solicitação pull para revisão.

Esperamos que você desfrute da experiência do Barzim e contribua para torná-lo ainda melhor!

## Used By

This project is used by the following companies:

- Company 1
- Company 2

# Barzim - WebApp de Avaliação de Cervejas

barzim.tech

Bem-vindo ao Barzim, o seu espaço online para avaliação de cervejas! Este webapp interativo foi projetado para os amantes de cervejas compartilharem suas experiências, explorarem novos sabores e se conectarem com outros entusiastas.

## Sumário

- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Dependências](#dependências)
- [Ambiente (.env)](#ambiente-env)
- [Scripts](#scripts)
- [Desenvolvimento](#desenvolvimento)
- [Configurações Adicionais](#configurações-adicionais)
  - [Arquivos de Configuração](#arquivos-de-configuração)
- [Contribuindo](#contribuindo)

## Instalação

Para executar o projeto localmente, siga estas etapas:

    1. Clone este repositório: `git clone https://github.com/seu-usuario/barzim.git`
    2. Instale as dependências: `npm install`
    3. Inicie o servidor local: `npm start`

- **Certifique-se de ter o Node.js instalado em seu ambiente antes de prosseguir com as etapas acima.**

## Estrutura do Projeto
O projeto segue uma estrutura organizada para facilitar o desenvolvimento e a manutenção. Aqui está uma visão geral da estrutura do projeto:

- **auth**: Contém arquivos relacionados à autenticação, como o auth.ts que utiliza o NextAuth.
- **components**: Reúne componentes reutilizáveis utilizados no projeto.
- **data**: Lida com operações relacionadas a dados, como consultas ao banco de dados.
- **lib**: Contém bibliotecas ou utilitários utilizados no projeto.
- **pages**: Cada arquivo nesta pasta representa uma rota no aplicativo.
- **public**: Armazena ativos estáticos, como imagens ou fontes.
- **styles**: Contém arquivos de estilos globais ou configuráveis.
- **schemas**: Define esquemas para validação de dados.
- **tests**: Inclui testes automatizados para o projeto.

## Dependências

O projeto utiliza diversas dependências para garantir seu funcionamento. Aqui estão algumas das principais:

- **@auth/prisma-adapter**: `^1.0.12` - Adaptador Prisma para autenticação.
- **@headlessui/react**: `^1.7.18` - Componentes acessíveis para React.
- **@hookform/resolvers**: `^3.3.3` - Resolvedores para React Hook Form.
- **@prisma/client**: `^5.7.1` - Cliente Prisma para interação com o banco de dados.
- **@radix-ui/react-alert-dialog**: `^1.0.5` - Componente de diálogo acessível.
- **@radix-ui/react-avatar**: `^1.0.4` - Componente de avatar acessível.
- **@radix-ui/react-dropdown-menu**: `^2.0.6` - Menu dropdown acessível.
- **@radix-ui/react-icons**: `^1.3.0` - Ícones acessíveis para React.
- **@radix-ui/react-label**: `^2.0.2` - Componente de rótulo acessível.
- **@radix-ui/react-select**: `^2.0.0` - Componente de seleção acessível.
- **@radix-ui/react-slot**: `^1.0.2` - Componente de slot acessível.
- **@vercel/analytics**: `^1.2.2` - Analytics para projetos Vercel.
- **@vercel/blob**: `^0.22.1` - Manipulação de blobs para projetos Vercel.
- **@vercel/speed-insights**: `^1.0.10` - Insights de velocidade para projetos Vercel.
- **bcrypt**: `^5.1.1` - Biblioteca de hashing de senhas.
- **bcryptjs**: `^2.4.3` - Implementação pura do bcrypt em JavaScript.
- **class-variance-authority**: `^0.7.0` - Autoridade de variância de classe.
- **cloudinary**: `^2.0.1` - API para o serviço de hospedagem de imagens Cloudinary.
- **clsx**: `^2.0.0` - Utilitário para gerar nomes de classe condicionais.
- **date-fns**: `^3.3.1` - Biblioteca de utilitários de data para JavaScript.
- **embla-carousel-react**: `^8.0.0-rc22` - Componente de carrossel React.
- **formidable**: `^3.5.1` - Parser para dados de formulário.
- **next**: `14.0.4` - Framework React para desenvolvimento web.
- **next-auth**: `^5.0.0-beta.4` - Biblioteca de autenticação para projetos Next.js.
- **next-themes**: `^0.2.1` - Controle de temas para projetos Next.js.
- **posthog-js**: `^1.105.9` - Biblioteca para integração com o PostHog.
- **posthog-node**: `^3.6.2` - Cliente Node.js para PostHog.
- **prop-types**: `^15.8.1` - Verificação de tipos para props em React.
- **react**: `^18` - Biblioteca principal do React.
- **react-confetti**: `^6.1.0` - Componente de confetes para React.
- **react-dom**: `^18` - Renderizador do React para a web.
- **react-hook-form**: `^7.49.2` - Biblioteca para gerenciamento de formulários React.
- **react-icons**: `^4.12.0` - Ícones para React.
- **react-interactions**: `^0.0.8` - Biblioteca para gestos e interações em React.
- **react-ratings-declarative**: `^3.4.1` - Componente de classificação declarativo para React.
- **react-spinners**: `^0.13.8` - Componentes de spinner animados para React.
- **react-use**: `^17.5.0` - Hooks para React.
- **reactjs-popup**: `^2.0.6` - Biblioteca para criar modais e pop-ups em React.
- **resend**: `^2.1.0` - Utilitário para reenvio de requisições.
- **shadcn-ui**: `^0.8.0` - Biblioteca de UI Shadowcraft.
- **sonner**: `^1.4.0` - Utilitário para manipulação de áudio em Node.js.
- **streamifier**: `^0.1.1` - Utilitário para streaming de dados.
- **tailwind-merge**: `^2.2.0` - Plugin Tailwind CSS para mesclar classes de forma inteligente.
- **tailwindcss-animate**: `^1.0.7` - Plugin Tailwind CSS para animações.
- **unique-username-generator**: `^1.3.0` - Gerador de nomes de usuário únicos.
- **uuid**: `^9.0.1` - Biblioteca para geração de identificadores únicos.
- **zod**: `^3.22.4` - Esquemas de validação para TypeScript.

## Ambiente (.env)
.env: Contém variáveis de ambiente utilizadas para configurar o ambiente de execução do projeto.

## Scripts
Alguns scripts úteis estão configurados no arquivo package.json. Aqui estão alguns deles:

- **dev**: Inicia o ambiente de desenvolvimento do Next.js.
- **build**: Realiza a construção do projeto para produção.
- **postinstall**: Gera os artefatos necessários após a instalação das dependências.
- **start**: Inicia o aplicativo em um ambiente de produção.
- **lint**: Executa a verificação de linting usando o Next.js lint.


## Desenvolvimento

O projeto também utiliza várias dependências de desenvolvimento para ferramentas como ESLint, Prettier, TypeScript, entre outras. Algumas das principais são:

- **@types/bcrypt**: `^5.0.2` - Tipos para a biblioteca bcrypt.
- **@types/bcryptjs**: `^2.4.6` - Tipos para a biblioteca bcryptjs.
- **@types/formidable**: `^3.4.5` - Tipos para a biblioteca formidable.
- **@types/node**: `^20` - Tipos para o ambiente Node.js.
- **@types/react**: `^18` - Tipos para a biblioteca React.
- **@types/react-dom**: `^18` - Tipos para o renderizador React para a web.
- **@types/uuid**: `^9.0.7` - Tipos para a biblioteca uuid.
- **@typescript-eslint/eslint-plugin**: `^6.20.0` - Plugin ESLint para TypeScript.
- **autoprefixer**: `^10.0.1` - Adiciona automaticamente prefixos de navegador aos estilos.
- **eslint**: `^8` - Linter de código JavaScript/TypeScript.
- **eslint-config-next**: `14.0.4` - Configuração do ESLint para projetos Next.js.
- **postcss**: `^8` - Ferramenta para transformar estilos com JavaScript plugins.
- **prettier**: `^3.2.4` - Ferramenta de formatação de código.
- **prettier-plugin-tailwindcss**: `^0.5.11` - Plugin Prettier para Tailwind CSS.
- **prisma**: `^5.7.1` - ORM para Node.js e TypeScript.
- **tailwindcss**: `^3.4.1` - Framework CSS.
- **typescript**: `^5` - Superset de JavaScript que adiciona tipagem estática.

Lembre-se de verificar a documentação oficial de cada dependência para obter informações detalhadas sobre suas funcionalidades e configurações.


## Configurações Adicionais

# Arquivos de Configuração

 **`next.config.js`**
   - Contém configurações específicas para o Next.js, incluindo a ignorância de erros de tipo em builds de produção e definições de padrões remotos para imagens.

**`next-auth.d.ts`**
   - Define tipos estendidos para o NextAuth, proporcionando uma melhor integração com o Prisma e a definição de roles.

**`middleware.ts`**
   - Implementa um middleware personalizado utilizado no NextAuth, executando ações com base no contexto da autenticação.

**`componentes.json`**
   - Configura o uso de componentes no projeto, definindo padrões de estilo, suporte a TypeScript, integração com o Tailwind CSS e aliases para caminhos.

**`.gitignore`**
   - Especifica os arquivos e diretórios que devem ser ignorados pelo sistema de controle de versão Git.

**`.eslintrc.js`**
   - Contém as configurações do ESLint, uma ferramenta de linting para JavaScript e TypeScript.

**`prettier.config.mjs`**
   - Configurações para o Prettier, garantindo uma formatação consistente do código.

**`postcss.config.js`**
   - Configura o PostCSS para processamento de estilos, integrando o Tailwind CSS e o autoprefixer.

**`tailwind.config.js`**
   - Configurações personalizadas do Tailwind CSS.

**`routes.js`**
- Define diferentes tipos de rotas, incluindo rotas públicas, rotas de autenticação e configurações relacionadas a redirecionamento e prefixo da API de autenticação.

**`.vercel.json`**
- Configurações relacionadas a tarefas cron no Vercel.

**`tsconfig.json`**
- Configurações do TypeScript para o projeto.

Se precisar de mais alguma coisa ou se houver ajustes necessários, me avise!

## Contribuindo

Se deseja contribuir para o desenvolvimento do Barzim, siga estas etapas:

    1. Fork este repositório.
    2. Crie um branch para suas alterações: `git checkout -b feature/nova-funcionalidade`.
    3. Faça suas modificações e commit: `git commit -m 'Adiciona nova funcionalidade'`.
    4. Envie suas alterações: `git push origin feature/nova-funcionalidade`.
    5. Abra uma solicitação pull para revisão.

Esperamos que você desfrute da experiência do Barzim e contribua para torná-lo ainda melhor!

## Autores

[<img src="https://www.github.com/ANACNETO.png" width="50" height="50" alt="ANACNETO" style="border-radius:50%">](https://www.github.com/ANACNETO)  [<img src="https://www.github.com/ahzorek.png" width="50" height="50" alt="ahzorek" style="border-radius:50%">](https://www.github.com/ahzorek)  [<img src="https://www.github.com/elianoliver.png" width="50" height="50" alt="elianoliver" style="border-radius:50%">](https://www.github.com/elianoliver)  [<img src="https://www.github.com/evandroreichert.png" width="50" height="50" alt="evandroreichert" style="border-radius:50%">](https://www.github.com/evandroreichert)  [<img src="https://www.github.com/laraberns.png" width="50" height="50" alt="laraberns" style="border-radius:50%">](https://www.github.com/laraberns)