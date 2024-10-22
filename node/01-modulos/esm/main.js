// Para usar ESModule no node é necessário alterar o tipo no "package.json"
import { multiply, division } from './functions.mjs'; // Importando no padrão ESM

console.log(multiply(70, 7));
console.log(division(8, 5));
