import ptBrMessages from 'ra-language-pt-br'
import polyglotI18nProvider from 'ra-i18n-polyglot'

const messages = { 'pt-br': ptBrMessages }
export const localizationPtBr = polyglotI18nProvider(
  //@ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  (locale) => messages[locale],
  'pt-br'
)
