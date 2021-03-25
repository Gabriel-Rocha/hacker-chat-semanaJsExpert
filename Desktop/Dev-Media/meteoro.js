let meteoros_trimestre_um     = "Alfa Centaurideos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\nPi Pupídeos começa em 25/03 e termina em 29/03";

let meteoros_trimeste_dois = "Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 02/06\nBootídeos de Junho começa em 16/06 e termina em 20/06";

let meteoros_trimestre_tres = "Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 02/06\nBootídeos de Junho começa em 16/06 e termina em 20/06";

let meteoros_trimestre_quatro = "Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\nPiscis Austrinídeos começa em 04/12 e termina em 08/12\nPerseidas começa em 27/12 e termina em 31/12";

var dataAtual = new Date();

var mesAtual = dataAtual.getMonth();

if (mesAtual == 0 || mesAtual == 1 || mesAtual == 2){
    console.log("As chuvas de meteoros do primeiro trimestre são:\n\n"+meteoros_trimestre_um);
}

else if(mesAtual == 3 || mesAtual == 4 || mesAtual == 5){
    console.log("As chuvas de meteoros do segundo trimestre são:\n\n"+meteoros_trimestre_dois);
}

else if(mesAtual == 6 || mesAtual == 7 || mesAtual == 8){
    console.log("As chuvas de meteoros do terceiro trimestre são:\n\n"+meteoros_trimestre_tres);
}

else if(mesAtual == 9 || mesAtual == 10 || mesAtual == 11 ){
    console.log("As chuvas de meteoros do quarto trimestre são:\n\n"+meteoros_trimestre_quatro);
}

else {
    console.log("Nenhuma chuva de meteoro no período informado")
}


function tituloCompleto(filme) {
    const titulo = filme.nome+ ": " + filme.ano ;
    console.log(titulo);
  }
  
  const filmes = [
    {nome: "De Volta Para O Futuro", ano: 1985},
    {nome: "Vingadores: Ultimato", ano: 2019},
  ];
  
  for (const filme of filmes) {
    tituloCompleto(filme);
  }