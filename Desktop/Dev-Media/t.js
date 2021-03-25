const jogos = [
  {id: 200, nome: "The Last Of Us"},
  {id: 108, nome: "Marvel's Spider-Man"},
  {id: 887, nome: "God of War 4"},
];

for ( const i in jogos ) {
  if ( jogos[i].id === 108 ) {
    console.log(jogos[i].nome);
  }
}
//--------------------------------------------------------------------------------
const times = ["Flamengo", "Vasco", "Fluminense"];

for(const time of times ){
  console.log(time);
}

//-------------------------------------------------------------------------------
//const numeros = [0, 1, 2, 3, 4, 5];
//let i = numeros.length - 1;
//
//do {
//  console.log(numeros[i]);
//  i--;
//} while(i  numeros.length);

//-------------------------------------------------------------------------------

const filmes = [
  { titulo: "De Volta Para O Futuro", ano: 1985 },
  { titulo: "Vingadores: Ultimato", ano: 2019 },
];

for (const filme of filmes) {
  console.log(filme.ano);
}

//--------------------------------------------------------------------------------

const tecnologias = [
  { nome: "JavaScript", tipo: "Linguagem" },
  { nome: "React", tipo: "Biblioteca" },
];

for ( let i = 0 ; i < tecnologias.length ; i++ ) {
  console.log(tecnologias[i].nome);
  console.log(tecnologias[i].tipo);
}

//---------------------------------------------------------------------------------


function letrasMaiusculas(palavra){
  return palavra.toUpperCase();
}

const titulos = ["Operadores", "Sintaxe", "Objetos"];

for (let i = 0; i < titulos.length; i++) {
  console.log(letrasMaiusculas(titulos[i]));
}

//----------------------------------------------------------------------------------

let contador = 10;

while (contador >= 0){
  console.log(contador);
  contador --;
}

//------------------------------------------------------------------------------------


function validaLogin(login, senha) {
  return (login == "adm" && senha == "admin") && true;
}

const usuarios = [
  { login: "adm", senha: "12345" },
  { login: "adm", senha: "admin" },
  { login: "admin", senha: "admin" },
];


for(const i in usuarios){
  const verifica = validaLogin(usuarios[i].login, usuarios[i].senha);
  console.log(verifica);
}

//-----------------------------------------------------------------------------


const tags = [ "Python", "C++", "F#" ];

if (tags.length == 3) {
  for (let i = 0; i < tags.length; i++) {
    console.log(tags[i]);
  }
} else {
  console.log("Insira pelo menos 3 tags");
}

//-----------------------------------------------------------------------------


function tituloCompleto(itens) {
  
  return msgProdutos = "Seus produtos: ";
  
    
  for(const i in itens) {
      msgProdutos += "(" + itens[i] + ")";
    }
    return msgProdutos;
  }
  
  const itens = ["Controle remoto", "Pilha recarregável"];
  
  console.log(tituloCompleto(itens));


  //----------------------------------------------------------------

const despesas = [ 50, 90, 564 ];
let i = 0;

do {
  const novoValor = despesas[i] - 40;
  console.log(novoValor);

  i ++ ;
} while (i < despesas.length);

//----------------------------------------------------------------


function somarQuadrado(numeros) {
  let i = 0;
  let total = 0;

  
while(i < numeros.length) {
    total += numeros[i] * numeros[i];
    i++;
  }

  console.log(total);
}

const numeros = [ 1,2,3,4,5];
somarQuadrado(numeros)


//-------------------------------------------------------------

function tituloCompleto(fi) {
  const titulo = fi.nome+ ": " + fi.ano ;
  console.log(titulo);
}

const Filmes = [
  {nome: "De Volta Para O Futuro", ano: 1985},
  {nome: "Vingadores: Ultimato", ano: 2019},
];

for (const fi of Filmes) {
  tituloCompleto(fi);
}

//----------------------------------------------------------------


const pratos = [
  { id: 200, nome: "Talharim"},
  { id: 108, nome: "Bonoffee"},
  { id: 887, nome: "Pizza"},
];

const buscarPor = "Pizza";

for ( const i in pratos ) {
  if ( pratos[i].nome === buscarPor ) {
    console.log(pratos[i].id);
  }
}


//----------------------------------------------------------------


const produtos = [
  {id: 20, tipo: "Filme"},
  {id: 10, tipo: "Jogo"},
  {id: 8, tipo: "Música"},
];

for(const produto of produtos){
  if ( produto.id === 10 ) {
    console.log(produto.id);   
  }
}

//----------------------------------------------------------------


//const nomes = ["Largo do Machado", "Presidente Vargas", "Penha"];

//for ( let i=0; i < nomes.length; i++) {
//  console.log(nomes[i]);
//}

//for (const index in nomes) {
//  const nome = nomes[index];
//  console.log(nome);
//}

//for (const nome of nomes) {
//  console.log(nome);
//}for (const nome of nomes) {
//  console.log(nome);
//}

//----------------------------------------------------------------


const frameworks = [ "Laravel", "Agular", "Entity", "Spring" ];

for (const framework of frameworks) {
  console.log(framework);
}

//-----------------------------------------------------------------

let partida = 1;

do{
  console.log("Partida número: " + partida);
  partida++;
} while (partida <= 4);


//----------------------------------------------------------------

