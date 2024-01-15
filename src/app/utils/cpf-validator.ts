import { AbstractControl } from '@angular/forms';

export class CpfValidator {
  static validate(control: AbstractControl) {
    const cpf = control.value;

    if (!cpf) return null;

    let sum;
    let rest;
    sum = 0;

    if (cpf === '00000000000') return { pattern: true };

    for (let i = 1; i <= 9; i++)
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(cpf.substring(9, 10))) return { pattern: true };

    sum = 0;
    for (let i = 1; i <= 10; i++)
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(cpf.substring(10, 11))) return { pattern: true };

    return null;
  }
}
