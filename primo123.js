function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}


const userInput = prompt("Digite um número para verificar se é primo:");
const number = parseInt(userInput, 10);

if (!isNaN(number)) {
    if (isPrime(number)) {
        console.log(`${number} é um número primo.`);
    } else {
        console.log(`${number} não é um número primo.`);
    }
} else {
    console.log("Por favor, insira um número válido.");
}
