import { Tokens } from "./Tokens.types";


function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
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
            const resultValue =
                tokenType === 'number' ? Number(tokenValue) : String(tokenValue);

            Object.assign(theme[themeKey], { [token]: resultValue });
        });
    });

    return theme;
}
