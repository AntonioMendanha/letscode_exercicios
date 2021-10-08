//Exercícios
let students = [
  { score: 10, name: 'Fulano', age: 25 },
  { score: 7, name: 'Ciclano', age: 22 },
  { score: 5, name: 'Roberto', age: 36 },
  { score: 9, name: 'Claudio', age: 41 },
  { score: 2, name: 'Maria', age: 32 },
  { score: 9, name: 'Joana', age: 17 }
];

let minimumScoreToAprove = 6;
/* -- Criação de um array de array com o nome dos aprovados--*/
let aprovedStudents = students.reduce(
    (acc, student) => 
        student.score > minimumScoreToAprove
            ? [...acc, [student.name]]
            : acc
    , []
);
console.log('---Resultado 1: Nome dos aprovados---')
console.log(aprovedStudents);

/* -- Criação de um array com todas as propriedades e valors do objeto --*/
let informationOfAprovedStudents = students.reduce(
    (acc, student) =>
        student.score > minimumScoreToAprove
            ? [...acc, student]
            : acc
    , []
);
console.log('---Resultado 2: Lista Aprovados---')
console.log(informationOfAprovedStudents);

/* -- Criação de um array com a média de idade dos aprovados --*/
let mediumAge = students.reduce(
    (acc, student) =>
        student.score > minimumScoreToAprove
            ? ({
              totalAge: acc.totalAge + student.age,
              count: acc.count + 1,
              average: (acc.totalAge + student.age) / (acc.count + 1)
            })
            : acc
    , {
        totalAge: 0,
        count: 0,
        average: 0
    }
);
console.log('---Resultado 3: Média de Idade dos aprovados---')
console.log(mediumAge);