const calculaIMC = (altura: number, peso: number): number => peso / (altura * altura);

console.log(calculaIMC(1.85, 95).toFixed(2));


const cumprimentar = (nome: string): string => "Olá, " + nome + "!";

console.log(cumprimentar("Irwing"));