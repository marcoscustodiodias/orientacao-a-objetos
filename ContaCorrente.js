const ContaBancaria = require("./ContaBancaria");

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, saldo, cartaoCredito) {
    super(agencia, numero, "conta corrente", saldo);
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(cartao) {
    this._cartaoCredito = cartao;
  }
}

module.exports = ContaCorrente;
