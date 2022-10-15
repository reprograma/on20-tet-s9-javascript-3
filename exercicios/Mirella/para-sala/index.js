/*
escala de IDH
muitoBaixo = 0 - 0.499
baixo .5 - 0.599
medio 0.6 - 0.699
alto .7 - .799
muitoAlto 0.8 - 1
*/

// let idh = 0.755

// if   (idh >= 0 && idh < 0.5) {
//   console.log(`IDH muito baixo`)
// } else if (idh < 0.6) {
//   console.log(`IDH baixo`)
// } else if (idh < 0.7) {
//   console.log(`IDH médio`)
// } else if (idh < 0.8) {
//   console.log(`IDH alto`)
// } else if (idh <= 1) {
//   console.log(`IDH muito alto`)
// } else {
//   console.log('IDH inválido')
// }

let data = [
  {
    nome: 'noruega',
    idh: 0.944,
  },
  {
    nome: 'qatar',
    idh: 0.850,
  },
  {
    nome: 'canadá',
    idh: 0.913,
  },
  {
    nome: 'brasil',
    idh: 0.755,
  },
  {
    nome: 'japão',
    idh: 0.891,
  },{
    nome: 'vietnã',
    idh: 0.666,
  },
  {
    nome: 'afeganistão',
    idh: 0.465,
  },
  {
    nome: 'camarões',
    idh: 0.512,
  },
];

let data2 = [
  {
    nome: 'china',
    idh: 0.844,
  },
  {
    nome: 'colombia',
    idh: 0.750,
  },
];

function classificarIdh(listaPaises) {
  for(pais of listaPaises) {
    if (pais.idh >= 0 && pais.idh < 0.5) {
      console.log(`IDH de ${pais.nome} é muito baixo`)
    } else if (pais.idh < 0.6) {
      console.log(`IDH de ${pais.nome} é baixo`)
    } else if (pais.idh < 0.7) {
      console.log(`IDH de ${pais.nome} é médio`)
    } else if (pais.idh < 0.8) {
      console.log(`IDH de ${pais.nome} é alto`)
    } else if (pais.idh <= 1) {
      console.log(`IDH de ${pais.nome} é muito alto`)
    } else {
      console.log('IDH de ${pais.nome} é inválido')
    }
  }
}

classificarIdh(data)
console.log('----------------------')
classificarIdh(data2)

