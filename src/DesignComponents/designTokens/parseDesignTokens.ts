import { colorTokens } from './colorTokens/colorTokens';
import { Tokens } from './Tokens.types';

const currentTokens: Array<string> = [];

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getColorToken(token: string): string {
  let resultValue = token;

  const colorTokenString = String(token);
  resultValue = colorTokenString
    .slice(1, colorTokenString.length - 1)
    .split('.')
    .reduce((acc, current) => acc[current], colorTokens).$value;

  return resultValue.includes('{') ? getColorToken(resultValue) : resultValue;
}

export function parseDesignTokens(tokens: Tokens) {
  const theme: Record<string, any> = {};

  Object.keys(tokens).forEach(component => {
    const componentTokens = tokens[component];
    const themeKey = capitalizeFirstLetter(component);

    theme[themeKey] = theme[themeKey] || {};

    Object.keys(componentTokens).forEach(token => {
      const objectToken = componentTokens[token];

      const tokenType = objectToken['$type'];
      const tokenValue = objectToken['$value'];
      const tokenDescription = objectToken['$description'];

      let resultValue = tokenValue;

      switch (tokenType) {
        case 'number':
          resultValue = Number(tokenValue);
          break;
        case 'string':
          resultValue = String(tokenValue);
          break;
        case 'color':
          const isColorToken = String(tokenValue).includes('{');
          if (isColorToken) {
            resultValue = getColorToken(String(tokenValue));
          } else {
            resultValue = tokenValue;
          }
          break;
        default:
          resultValue = tokenValue;
      }
      if (tokenDescription) {
        if (tokenDescription.includes('$number')) {
          resultValue = Number(parseInt(String(tokenValue)));
        }
      }
      // Вот тут можно поменять имя, а после смотреть в консоли
      if (themeKey === 'Notification') {
        currentTokens.push(`${token}: '${resultValue}' `);
      }

      Object.assign(theme[themeKey], { [token]: resultValue });
    });
  });

  console.log(currentTokens.join(',\n'));
  return theme;
}
