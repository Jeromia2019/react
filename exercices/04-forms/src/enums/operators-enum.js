// Enumération des opérateurs

// Méthode 1
// export const OP_ADD = '+';
// export const OP_SUB = '-';
// export const OP_MULTI = 'x';
// export const OP_DIV = '/';

// export default {
//     OP_ADD,
//     OP_SUB,
//     OP_MULTI,
//     OP_DIV
// }

// Méthode 3
const operatorsEnum = {
    ADD: '+',
    SUB: '-',
    MULTI: 'x',
    DIV: '/'
}

// Lock les valeurs de l'object et empèche le rajout via la console
Object.freeze(operatorsEnum)

export default operatorsEnum;