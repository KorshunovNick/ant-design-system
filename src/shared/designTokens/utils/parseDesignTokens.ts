import { OverrideToken } from 'antd/es/theme/interface';
import { colorTokens } from '../colorTokens/colorTokens.ts';
import { Tokens } from '../types/Tokens.types.ts';

const currentTokens: Array<string> = [];

function capitalizeFirstLetter(str: string): keyof OverrideToken {
  if (str === 'datepicker') return 'DatePicker';

  return (str.charAt(0).toUpperCase() + str.slice(1)) as keyof OverrideToken;
}

function getColorToken(token: string): string {
  let resultValue = token;

  const colorTokenString = String(token);
  resultValue = colorTokenString
    // удаляю { } "{static.red.red-10}" -> static.red.red-10
    .slice(1, colorTokenString.length - 1)
    // преобразование static.red.red-10 -> ["static","red","red-10"]
    .split('.')
    // получение исходной переменной colorTokens['static']['red']['red-10']
    .reduce((acc, current) => acc?.[current], colorTokens)?.$value;

  // если значение токена ссылка на другой токен рекурсивно запускаем приведение к корректному цвету заново
  // если нет, то отдаем цвет
  return resultValue?.includes('{') ? getColorToken(resultValue) : resultValue;
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
        if (tokenDescription.includes('number')) {
          resultValue = Number(parseInt(String(tokenValue)));
        }
      }
      // Вот тут можно поменять имя, а после смотреть в консоли
      if (themeKey === 'Button') {
        const isNumber =
          tokenType === 'number' ||
          (tokenDescription && tokenDescription.includes('number'));
        const logValue = isNumber ? resultValue : `"${resultValue}"`;
        currentTokens.push(`${token}: ${logValue} `);
      }

      Object.assign(theme[themeKey], { [token]: resultValue });
    });
  });

  console.log(currentTokens.join(',\n'));
  return theme;
}
