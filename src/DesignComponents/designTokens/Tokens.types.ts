interface TokenProperty {
    $type: 'number' | 'color' | 'dimension' | string;
    $value: number | string;
    $description?: string;
}

export interface Tokens {
    [componentName: string]: {
        [propertyName: string]: TokenProperty;
    };
}