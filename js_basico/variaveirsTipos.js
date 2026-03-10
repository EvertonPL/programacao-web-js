let nome = 'everton';
const sobrenome = 'pereira';
let templateString = `O meu nome é ${nome} ${sobrenome}`;
console.log(templateString);

let A = 2;
let B = 5.56;
let C = -3.14;
const PI = 3.14;
let potencia = A ** C;
console.log(typeof A);
console.log(typeof C);
console.log(`${A}^${C}=${potencia}`);

// Boolean
let verdadeiro = true;
let falso = false;
console.log(typeof verdadeiro);

// operadores logicos
let E = verdadeiro && false;
let OU = verdadeiro || falso;
console.log(E);
console.log(OU);

let maior_que = B > A; // Outras: >=, <, <=, ==, !=
console.log(`${B} > ${A} = ${maior_que}`);