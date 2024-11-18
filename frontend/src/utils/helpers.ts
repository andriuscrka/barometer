export const reduceArrayToObject = (arr: ArrayElement) => arr.reduce((acc, [keys, icon]) => {
    keys.forEach(key => {
        acc[key] = icon;
    });
    return acc;
}, {}); 