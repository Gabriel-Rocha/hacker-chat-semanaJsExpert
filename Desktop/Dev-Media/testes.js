/* const dataAtual = new Date('2020-01-11');
const dataFechamento = new Date('2020-01-10');

const tempoAtual = dataAtual.getTime();
const tempoFechamento = dataFechamento.getTime();

const diferencaTime = tempoAtual - tempoFechamento;

const milissegundosDia = 1000 * 60 * 60 * 24;

if ( diferencaTime >= milissegundosDia) {
  console.log( "Sua fatura já foi fechada!!!" );
} else {
  console.log( "Ainda não fechamos a fatura do seu cartão" );
} */

//----------------------------------------------------------------

/* const hoje = new Date();
const vencimento = new Date('2020-07-02');

let mensagem = "";

if ( hoje > vencimento ){
    mensagem = "Esta conta já venceu.";
} else {
    mensagem = "Ufa, ainda não venceu.";
}

console.log(mensagem); */

//----------------------------------------------------------------

/* const jogoDoAno = "Stronghold Crusader";
let index = 0;

do {
  console.log( jogoDoAno[index]);

  
index++;
} while(index < jogoDoAno.length  ); */

//----------------------------------------------------------------

/* let contador = 10;

do {
  console.log(contador);
  contador--;
} while (contador > 0); */

//-------------------------------------------------------------
/* 
const dataAtual = new Date();

const diaSemana = dataAtual.getDay();
const diaMes = dataAtual.getDate();

 if ( dataAtual  ) {
  console.log('Cuidado! Hoje é sexta-feira 13');
} else if (  ) {
  console.log('Sextou!!!');
} 

console.log(diaSemana)
console.log(diaMes) */


//-------------------------------------------------------------


/* const tipoUsuario = 'Supervisor';
let salario = 2500;

switch( tipoUsuario ) {
  
case 'Diretor':
    salario = salario * 1.2;
    break;
  
case 'Gerente':
    salario = salario * 1.15;
    break;
  
default:
    salario = salario * 1.1;
    break;
}

console.log(salario); */

//-------------------------------------------------------------


/* const hoje = new Date();

const ano = hoje.getFullYear();

if ( ano % 4 == 0 ) {
  console.log( 'Ano bissexto' );
} else {
  console.log( 'Não é ano bissexto' );
}

console.log(ano) */

//-------------------------------------------------------------

/* const dataHoje =  new Date();
console.log(dataHoje.toTimeString());
console.log(dataHoje.toDateString());
console.log(dataHoje.toString());
console.log(dataHoje.valueOf()); */

//-------------------------------------------------------------


/* const jogos = [
  { id: 1, nome: 'Resident Evil 7', preco: 250 },
  { id: 2, nome: 'God of War', preco: 300 },
  { id: 3, nome: 'Stronghold Warlords', preco: 280 },
];

let total = 0;

for ( let i = 0; i < jogos.length; i++ ) {
  total += jogos[i].preco;
}

console.log(total); */

//-------------------------------------------------------------


/* const totalAcertos = 4;
const primeiroAcerto = new Date('2020/10/05');

let index = 0;

do {
  console.log( primeiroAcerto.toDateString() );

  const dia = primeiroAcerto.getDate();
  digite;

  index++;
} while ( index < totalAcertos); */


//-------------------------------------------------------------


/* const jogos = [
  { id: 1, nome: 'Resident Evil 7', preco: 250 },
  { id: 2, nome: 'God of War', preco: 300 },
  { id: 3, nome: 'Stronghold Warlords', preco: 280 },
];

let total = 0;

for ( let i = 0; i < jogos.length; i++ ) {
    total += jogos[i].preco;
}

console.log(total);
 */

//-------------------------------------------------------------

/* const tecnologias = [
  { materia: "JavaScript", concluido: true },
  { materia: "React Native", concluido: false },
  { materia: "React", concluido: true },
  { materia: "Vue.js", concluido: true },
  { materia: "Angular", concluido: false },
];

for(const i in tecnologias){
  if ( tecnologias[i].concluido ) {
    console.log(tecnologias[i].materia);
  }
}
 */
//---------------------------------------------------------------


/* const serie = 7;
let mensalidade = 0;

if ( serie <= 3) {
  mensalidade = 1000;
} else if ( serie <= 6 ) {
  mensalidade = 1200;
} 
else {
  mensalidade = 1300;
}

console.log('R$ ' + mensalidade);
 */

//-------------------------------------------------------------


/*  const hoje = new Date();
const diferencaHoras = hoje.getTime()/60;

console.log('Diferença de horário: ' + diferencaHoras + ' horas');


 */
/* const dataLocal =  new Date();

console.log(dataLocal.getTimezoneOffset());

/* console.log(dataLocal.getLocaleDiff()); */


//-------------------------------------------------------------

/* const dataAtual = new Date();

const ano = dataAtual.getFullYear();

console.log(ano); */

//------------------------------------------------


/* const hora = new Date();

const diferencaHoras = hora.getTimezoneOffset();

console.log('Diferença de horário: ' + diferencaHoras + ' horas'); */


//-------------------------------------------------------------


/* const convidados = [
  { nome: 'José', cerveja: false},
  { nome: 'Augusto', cerveja: true},
  { nome: 'Tomas', cerveja: true},
  { nome: 'Joana', cerveja: false},
  { nome: 'Aline', cerveja: false},
];

let totalDeConvidados = convidados.length;
let bebemRefrigerante = 0;
let bebemCerveja = 0;

for ( const convidado of convidados) {
  if( convidado.cerveja === true) {
    bebemCerveja++;
  } else{
    bebemRefrigerante++;
  }
}

console.log('Total de convidados: ' + totalDeConvidados);
console.log('Bebem cerveja: ' + bebemCerveja);
console.log('Bebem refrigerante: ' + bebemRefrigerante); */

//-----------------------------------------------------------------


/* const av1 = 1;
const av2 = 7;
const av3 = 5;

let media = (av1 + av2 + av3) / 3;
let status;

if(media >= 6){
    status = "Parabéns você foi aprovado";
}else if( media <= 5){

    status = "Ops! Infelizmente não foi dessa vez";
    
  };


console.log(status); */

//----------------------------------------------------------------


/* const diaSemana = dataAtual.getDay();
const diaMes = dataAtual.getMonth(); //Aqui é getDate();

if ( diaSemana == 5 && diaMes == 13 ) {
console.log('Cuidado! Hoje é sexta-feira 13');
} else if ( diaSemana == 5 ) {
console.log('Sextou!!!!!');
}



const dataAtual = new Date();

const diaSemana = dataAtual.getDay();
const diaMes = dataAtual.getDate();

if ( diaSemana == 5 && diaMes == 13 ) {
  console.log('Cuidado! Hoje é sexta-feira 13');
} else if ( diaSemana == 5 ) {
  console.log('Sextou!!!');
}

 */

//----------------------------------------------------------------

/* const totalAcertos = 4;
const primeiroAcerto = new Date('2020/10/05');

let index = 0;

do {
  console.log( primeiroAcerto.toDateString() );

  const dia = primeiroAcerto.getDate();
  
  primeiroAcerto.setDate(dia + 1);

  index++;
} while ( index < totalAcertos); */

const hoje = new Date();
const diferencaHoras =  hoje.getTimezoneOffset()/60;

console.log('Diferença de horário: ' + diferencaHoras + ' horas');