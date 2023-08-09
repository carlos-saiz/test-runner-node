import { describe, it } from 'node:test';
import assert from "node:assert/strict";
import { suma, resta, multiplicación, división, modulo } from "./index.js";


describe('suite de pruebas matematicas.', () => {
    it('debe sumar dos numeros: (3)(2) y devolver 5', () => {
        const numA= 3;
        const numB= 2;
      assert.strictEqual(suma(numA,numB), 5);
    });
  
    it('debe restar dos numeros: (3) (2) y devolver 1', () => {
        const numA= 3;
        const numB= 2;
      assert.strictEqual(resta(numA,numB), 1);
    });
  
    it('debe multiplicar dos numeros: (3)(2) y devolver 6', () => {
        const numA= 3;
        const numB= 2;
      assert.strictEqual(multiplicación(numA,numB), 6);
    });

    it('debe dividir dos numeros: (10)(2) y devolver 5', () => {
        const numA= 10;
        const numB= 2;
      assert.strictEqual(división(numA,numB), 5);
    });

    it('debe calcular modulo entre dos numeros: (10)(2) y devolver 0', () => {
        const numA= 10;
        const numB= 2;
      assert.strictEqual(modulo(numA,numB), 0);
    });
  }); 