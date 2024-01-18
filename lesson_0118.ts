// ▪️オシャボを順番に表示
type BallOption = {
  love: string
  moon: string
  dream: string
}

function rareBall(ball: BallOption) {
  // Object.keys(ball): オブジェクトのキーを取得
  Object.keys(ball).forEach((property) => {
    console.log(`${ball[property]} is kind of fashionable ball.`)
  })
}

const ballOption: BallOption = {
  love: 'Love Ball',
  moon: 'Moon Ball',
  dream: 'Dream Ball',
}

rareBall(ballOption)