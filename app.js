import os from "os";

const total = os.totalmem();
const libre = os.freemem();
const usada = total - libre;

const gb = (bytes) => (bytes / 1024 / 1024 / 1024).toFixed(2);

console.log("Total:", gb(total), "GB");
console.log("Libre:", gb(libre), "GB");
console.log("Usada:", gb(usada), "GB");