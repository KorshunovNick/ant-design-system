import * as theme_tokens from './tokens';
import { parseDesignTokens } from './utils/parseDesignTokens';

const processedTokens: { [key: string]: any } = {};

for (const [key, tokens] of Object.entries(theme_tokens)) {
  processedTokens[key] = parseDesignTokens(tokens);
}

export default processedTokens;
