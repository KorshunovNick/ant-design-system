import { parseDesignTokens } from './parseDesignTokens';
import { crmTokens } from './crmTokens';

export const theme = parseDesignTokens(crmTokens);
