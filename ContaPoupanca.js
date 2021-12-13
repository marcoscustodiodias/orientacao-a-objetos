const ContaBancaria = require("./ContaBancaria");

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, "conta poupanca", saldo);
  }
}

module.exports = ContaPoupanca;
