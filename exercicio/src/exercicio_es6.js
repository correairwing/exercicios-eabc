const arrayAlunos = [];

const aluno1 = {nome: "Joao", nota: 2};
const aluno2 = {nome: "Maria", nota: 7};
const aluno3 = {nome: "Jose", nota: 5};
const aluno4 = {nome: "Irwing", nota: 6};
const aluno5 = {nome: "Nicolas", nota: 8};
const aluno6 = {nome: "Brenda", nota: 6};
const aluno7 = {nome: "Diana", nota: 4};

arrayAlunos.push(aluno1, aluno2, aluno3, aluno4, aluno5, aluno6, aluno7);

console.log(arrayAlunos);

const alunosAprovados = arrayAlunos.filter(function(item) {
    return item.nota >= 6;
})

console.log(alunosAprovados)