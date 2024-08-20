import { parseDesignTokens } from './parseDesignTokens';
import { tokens } from './tokens';

export const theme = parseDesignTokens(tokens);
