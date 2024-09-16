// ▪️回復アイテムを順番に表示
type PotionOption = {
  potion: string
  superPotion: string
  hyperPotion: string
  maxPotion: string
  fullRestore: string
}

function potionItem(potion: PotionOption) {
  Object.keys(potion).forEach((property) => {
    console.log(`${potion[property]} is one of the item to restore HP.`)
  })
}

const potionOption: PotionOption = {
  potion: 'Potion',
  superPotion: 'Super Potion',
  hyperPotion: 'Hyper Potion',
  maxPotion: 'Max Potion',
  fullRestore:  'Full Restore',
}

potionItem(potionOption)