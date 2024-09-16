// ▪️3犬を順番に表示
// 定義している定数の型を定義する。
type LegendOption = {
  electric: string
  fire: string
  water: string
}
type LegendNumbers = {
  electric: number,
  fire: number,
  water: number,
}

// 引数にそれぞれのパラーメーターを設定する
function jhotoLegend(legend: LegendOption, numbers: LegendNumbers) {
  Object.keys(legend).forEach((property) => {
    const pokemon = legend[property]
    const number = numbers[property]
    console.log(`${pokemon} is part of legend Pokemon in Jhoto and pokedex number is ${number}.`)
  })
}

const legendOption: LegendOption = {
  electric: 'Raikou',
  fire: 'Entei',
  water: 'Suicune',
}
const legendNumbers: LegendNumbers = {
  electric: 243,
  fire: 244,
  water: 245,
}

jhotoLegend(legendOption, legendNumbers)