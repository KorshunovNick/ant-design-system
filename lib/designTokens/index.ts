import * as theme_tokens from './tokens';
import { Tokens } from './types/Tokens.types';
import { parseDesignTokens } from './utils/parseDesignTokens';

type TokensName = 'crmTokens' | 'legalTokens' | 'joyDeckTokens';
type ThemeTokensType = Record<TokensName, Tokens>;

export const ThemeTokens: ThemeTokensType = {} as ThemeTokensType;

for (const [key, tokens] of Object.entries(theme_tokens)) {
  ThemeTokens[key as TokensName] = parseDesignTokens(tokens);
}
