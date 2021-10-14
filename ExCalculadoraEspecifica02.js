/**
 * Calculadora Específica: mudança da estrutura do código baseada na aula 
 * do dia 13/10/21
 *
 */
// TO DO: Código em construção
class Calc {
  constructor() {
    this.inputsArray = [];
    this.memory = new Map();
  }

  enter(input) { return this.inputsArray = [...inputsArray, input] };

  get reset() { return this.memory = new Map(); };

  get list() { 
    return this.memory;
  }
 
  equals() {
    const result = this.inputsArray.reduce(
      (acc, current) => current + acc, 0
    )
    return result
  }
}

class Somar extends Calc {
  constructor(inputsArray, memory, operator) {
    super(inputsArray, memory);
    this.operator = '+';
  }

 
}
