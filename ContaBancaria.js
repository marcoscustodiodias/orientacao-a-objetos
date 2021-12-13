class ContaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    this._agencia = agencia;
    this._numero = numero;
    this._tipo = tipo;
    this._saldo = saldo;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(novoSaldo) {
    this._saldo = novoSaldo;
  }

  sacar(valor) {
    if (valor > this.saldo) {
      return;
    }
    this.saldo -= valor;
  }

  depositar(valor) {
    this.saldo += valor;
  }
}

module.exports = ContaBancaria;
