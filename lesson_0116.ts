// 関数の引数としての例
function exampleFunction({ browser }) {
  console.log('Browser:', browser)
}

const config = {
  browser: 'Chrome',
  environment: 'Production',
  debug: true,
}

exampleFunction(config)

// ▪オーガポンの仮面を順番に表示
type MaskOption = {
  fire: string
  water: string
  rock: string
}

function maskOgerpon(options: MaskOption) {
  // Object.keys(options): オブジェクトのキーを取得
  Object.keys(options).forEach((property) => {
    console.log(`This Ogerpon is holding ${options[property]}`)
  })
}

const maskOption: MaskOption = {
  fire: 'Hearthflame Mask.',
  water: 'Wellspring Mask.',
  rock: 'Cornerstone Mask.',
}

maskOgerpon(maskOption)