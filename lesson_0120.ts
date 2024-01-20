// ▪️ホウエン地方のレジ系統を番号順に表示
// 定義している定数の型を定義する
type RegiName = {
  rock: string
  ice: string
  steel: string
}
type RegiNumbers = {
  rock: number,
  ice: number,
  steel: number,
}

// 引数にそれぞれのパラメーターを設定する
function regiSet(name: RegiName, numbers: RegiNumbers) {
  Object.keys(name).forEach((property) => {
    const pokemon = name[property]
    const number = numbers[property]
    console.log(`${pokemon} is part of legend Pokemon in Hoenn region and pokedex number is ${number}`)
  })
}

// 引数に提供する情報のプロパティとキーを設定する
const regiName: RegiName = {
  rock: 'Regirock',
  ice: 'Regice',
  steel: 'Registeel',
}
const regiNumbers: RegiNumbers = {
  rock: 377,
  ice: 378,
  steel: 379.
}

regiSet(regiName, regiNumbers)