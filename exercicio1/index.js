// Calculadora

const Soma = (num1, num2) => num1 + num2;
const Subtrai = (num1, num2) => num1 - num2;
const Multiplica = (num1, num2) => num1 * num2;
const Divide = (num1, num2) => num1 / num2;

const MostraResultado = (num1, num2) => {
    console.log(`Soma entre ${num1} e ${num2}`, Soma(num1, num2));
    console.log(`Diferença entre ${num1} e ${num2}`, Subtrai(num1, num2));
    console.log(`Produto entre ${num1} e ${num2}`, Multiplica(num1, num2));
    console.log(`Quociente de ${num1} e ${num2}`, Divide(num1, num2));
}

MostraResultado(10, 2);