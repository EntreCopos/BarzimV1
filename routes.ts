/**
 * array de rotas acessiveis a todos
 * essas rotas nao demandam auth
 * @type {string[]}
 */
export const publicRoutes = ['/', '/auth/new-verification']

/**
 * array de rotas que sao usadas na autenticacao
 * essas rotas realizam criação de conta ou alteração de senhas
 * retornam usuario ao dashboard
 * @type {string[]}
 */
export const authRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/error',
  '/auth/reset',
  '/auth/new-password',
]

/**
 * prefixo da rota da api de auth (next auth)

 * @type {string}
 */
export const apiAuthPrefix = '/api/auth'

/**
 * redirect default quando login é realizado
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/dashboard'
