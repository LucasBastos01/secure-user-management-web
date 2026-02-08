# Secure User Management Web

## Descrição

Esta é a interface web para o sistema de gerenciamento seguro de usuários, desenvolvida com React, TypeScript e Vite. A aplicação oferece uma experiência de usuário completa com autenticação JWT, dashboards diferenciados para usuários comuns e administradores, e uma arquitetura baseada em contextos e hooks para gerenciamento de estado.

## Funcionalidades

- **Autenticação Segura**: Login e logout com armazenamento criptografado de tokens JWT no localStorage.
- **Dashboards Diferenciados**: Interfaces separadas para usuários comuns e administradores.
- **Roteamento Protegido**: Rotas públicas e privadas com controle de acesso baseado em roles.
- **Gerenciamento de Estado**: Contextos para autenticação e loading global.
- **Notificações**: Sistema de toast para feedback ao usuário.
- **Responsividade**: Design adaptável para diferentes dispositivos.
- **Validação de Formulários**: Validações em tempo real nos formulários de login e registro.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Vite**: Ferramenta de build rápida para desenvolvimento moderno.
- **React Router DOM**: Roteamento declarativo para React.
- **Axios**: Cliente HTTP para fazer requisições à API.
- **React Toastify**: Biblioteca para notificações toast.
- **React Spinners**: Componentes de loading animados.
- **CryptoJS**: Biblioteca para criptografia de dados no localStorage.
- **ESLint**: Ferramenta de linting para manter a qualidade do código.

## Pré-requisitos

Antes de executar o projeto, certifique-se de que você tem os seguintes softwares instalados:

- **Node.js** (versão 16 ou superior): [Download aqui](https://nodejs.org/)
- **npm** ou **yarn**: Gerenciador de pacotes (vem com Node.js).
- **Git**: Para clonar o repositório.

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone git@github.com:LucasBastos01/secure-user-management-web.git
   cd secure-user-management-web
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   - Copie o arquivo `.env.default` para `.env`:
     ```bash
     cp .env.default .env
     ```
   - Configure a variável `VITE_URL_API` com a URL da API backend (ex: `http://localhost:3018`).

## Executando o Projeto

1. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

   O servidor será iniciado na porta 5173 (padrão do Vite). Você pode acessar a aplicação em `http://localhost:5173`.

2. **Acesse a aplicação**:
   - Abra o navegador e vá para `http://localhost:5173`.
   - Use as credenciais de login para acessar (usuário comum ou admin).

## Estrutura do Projeto

O projeto segue uma arquitetura organizada para facilitar a manutenção e escalabilidade:

```
src/
├── components/              # Componentes reutilizáveis
│   └── Loading/             # Componente de loading overlay
├── context/                 # Contextos para gerenciamento de estado global
│   ├── AuthContext.tsx      # Contexto de autenticação
│   ├── AuthProvider.tsx     # Provider de autenticação
│   ├── LoadingContext.tsx   # Contexto de loading
│   ├── PrivateRoute.tsx     # Rota protegida
│   └── PublicRoute.tsx      # Rota pública
├── errors/                  # Tratamento de erros
│   └── AppError.ts          # Classe de erro da aplicação
├── hooks/                   # Hooks customizados
│   └── useAuth.ts           # Hook para usar o contexto de auth
├── pages/                   # Páginas da aplicação
│   ├── Dashboard/           # Dashboards
│   │   ├── AdminDashboard/  # Dashboard do administrador
│   │   └── UserDashboard/   # Dashboard do usuário comum
│   ├── Login/               # Página de login
│   ├── Register/            # Página de registro
│   └── NotFound/            # Página 404
├── services/                # Serviços para comunicação com API
│   ├── api.ts               # Configuração do Axios
│   └── auth.service.ts      # Serviço de autenticação
├── utils/                   # Utilitários
│   └── crypto.ts            # Funções de criptografia
├── App.tsx                  # Componente principal da aplicação
├── main.tsx                 # Ponto de entrada da aplicação
└── index.css                # Estilos globais
```

### Separação de Responsabilidades

- **Components**: Componentes reutilizáveis como o loading overlay.
- **Context**: Gerenciamento de estado global (autenticação, loading).
- **Pages**: Páginas específicas da aplicação, organizadas por funcionalidade.
- **Services**: Comunicação com a API backend, incluindo interceptores para JWT.
- **Utils**: Funções utilitárias, como criptografia para segurança dos dados locais.
- **Hooks**: Hooks customizados para facilitar o uso dos contextos.

## Funcionalidades Principais

### Autenticação

- **Login**: Formulário de login com validação e redirecionamento baseado no tipo de usuário.
- **Registro**: Página para criação de novas contas.
- **Logout**: Limpeza dos dados de autenticação e redirecionamento.

### Dashboards

- **Dashboard do Usuário**: Interface para usuários comuns com funcionalidades básicas.
- **Dashboard do Admin**: Interface para administradores com permissões especiais.

### Segurança

- **Armazenamento Seguro**: Tokens JWT criptografados no localStorage.
- **Rotas Protegidas**: Controle de acesso baseado em roles (user/admin).
- **Interceptores**: Adição automática de tokens nas requisições HTTP.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento com hot reload.
- `npm run build`: Compila o projeto para produção.
- `npm run preview`: Visualiza a build de produção localmente.
- `npm run lint`: Executa o ESLint para verificar a qualidade do código.

## Build e Deploy

1. **Build para produção**:

   ```bash
   npm run build
   ```

   Os arquivos compilados serão gerados na pasta `dist`.

2. **Deploy**:
   - Hospede os arquivos da pasta `dist` em um servidor web (ex: Nginx, Apache, Vercel, Netlify).
   - Configure as variáveis de ambiente no servidor de produção.

## Integração com a API

A aplicação se conecta à API backend através do arquivo `src/services/api.ts`. Certifique-se de que:

- A API backend esteja rodando.
- A URL da API esteja configurada corretamente no arquivo `.env`.
- Os endpoints da API correspondam aos usados na aplicação (ex: `/auth/login`, `/auth/profile`).
