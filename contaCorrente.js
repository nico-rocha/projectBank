import { Conta } from "./docaluracontas.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;
  constructor(cliente, agencia) {
    super(0, cliente, agencia);
    ContaCorrente.numeroDeContas += 1;
  }
}
