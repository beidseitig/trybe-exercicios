let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

let infoTwo = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

// console.log('Bem-vinda ' + info.personagem);

// for (keys in info) {
//     console.log(keys);
// }

// for (keys in info) {
//     console.log(info[keys]);
// }

for (keys in info) {
    console.log(info[keys] + ' e ' + infoTwo[keys]);
}