const alunos = [
    { nome: 'Aluno 1', nota: 8 },
    { nome: 'Aluno 2', nota: 5 },
    { nome: 'Aluno 3', nota: 7 },
    { nome: 'Aluno 4', nota: 3 },
    { nome: 'Aluno 5', nota: 9 }
];

function alunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovadosArray = alunosAprovados(alunos);

console.log('Alunos Aprovados:');
console.log(alunosAprovadosArray);

