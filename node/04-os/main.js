const os = require("node:os");

const plataform = os.platform();
const arch = os.arch();
const cpu = os.cpus();
const totalMem = os.totalmem();

console.log(`A plataforma deste Sistema Operacional é: ${plataform}`);
console.log(`A arquiteura deste Sistema Operacional é: ${arch}`);
console.log(cpu[0]);
console.log(`O total de mémoria RAM é: ${totalMem / 1024**3 } bytes`);
