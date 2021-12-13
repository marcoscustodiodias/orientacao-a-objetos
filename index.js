const ContaCorrente = require("./ContaCorrente");
const ContaPoupanca = require("./ContaPoupanca");
const ContaUniversitaria = require("./ContaUniversitaria");

const contaSamuel = new ContaCorrente(255, 5100, 10000, "cartao");

console.log(contaSamuel.saldo);

contaSamuel.sacar(100);

console.log(contaSamuel.saldo);
