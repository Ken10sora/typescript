// ▪️復習や新しいテストコードを記述
test('testを使用してJapanを試す', () => {
  const result = 'Japan'
  const expected = 'Japan'
  expect(result).toBe(expected)
})

test('contains Hearthflame Mask in Ogerpon', () => {
  expect(Ogerpon).toContain('Hearthflame Mask')
})

// ▪️文字列型オブジェクトのパラメタライズドテストを作成
const Ogerpon = ['Hearthflame Mask', 'Wellspring Mask', 'Cornerstone Mask']

describe('test Ogerpon mask', () => {
  test.each([
    { mask: 'Hearthflame Mask' },
    { mask: 'Wellspring Mask' },
    { mask: 'Cornerstone Mask' },
    ]) ('Ogerpon should have the correct mask', ({ mask }) => {
    const result = Ogerpon.find(ogerponMask => ogerponMask.includes(mask))
    expect(result).toBe(mask)
  })
})

const RegiSeries = ['Regirock', 'Regice', 'Registeel']

describe('test RegiSeries', () => {
  test.each([
    { regi: 'Regirock' },
    { regi: 'Regice'},
    { regi: 'Registeel'},
  ])('RegiSeries should contain rock, ice, steel', ({ regi }) => {
    const result = RegiSeries.find(regiSeries => regiSeries.includes(regi))
    expect(result).toBe(regi)
  })
})


// 追記：2024/02/26
test('testを使用してAustraliaを試す', () => {
  const result = 'Australia'
  const expected = 'Australia'
  expect(result).toBe(expected)
})

test('contains Cornerstone Mask in Ogerpon', () => {
  expect(Australia).toContain('Sydney')
})

const Australia = ['Sydney', 'Melbourne', 'Perth']

// 追記：2024/04/06
// 非同期処理を行う関数
async function fetchData2(): Promise<string> {
  // 仮の非同期処理（ここではsetTimeoutを使用していますが、実際にはAPIからのデータ取得などが想定されます）
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data fetched successfully!');
    }, 1000); // 1秒後に解決
  });
}

// Jestのテストケース
describe('非同期処理のテスト', () => {
  // テストケース: fetchData関数が正しくデータを返すことを確認する
  test('データを取得する', async () => {
    // fetchData関数を呼び出し、結果を待機する
    const result = await fetchData2();

    // 結果を検証する
    expect(result).toBe('Data fetched successfully!');
  });

  // テストケース: fetchData関数がPromiseを返すことを確認する
  test('Promiseを返す', () => {
    // fetchData関数を呼び出す
    const result = fetchData2();

    // 結果がPromiseであることを確認する
    expect(result).toBeInstanceOf(Promise);
  });

  // 他のテストケースをここに追加できます
});


