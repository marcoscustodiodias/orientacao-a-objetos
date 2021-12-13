const ContaBancaria = require("./ContaBancaria");

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, "conta universitaria", saldo);
  }

  sacar(valor) {
    if (valor > this.saldo || valor > 500) {
      return;
    }
    this.saldo -= valor;
  }
}

module.exports = ContaUniversitaria;
