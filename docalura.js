import { Cliente } from "./docaluracliente.js";
import { ContaCorrente } from "./contaCorrente.js";
import { ContaPoupanca } from "./contaPoupanca.js";
import { Conta } from "./docaluracontas.js";

const cliente1 = new Cliente("Nico", 17567890223);
const cliente2 = new Cliente("Paulo", 14455556223);

const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500);
conta1.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
console.log(contaPoupanca);
console.log(conta1);
