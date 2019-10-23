const goodNames = ['U Disk', 'Headphone', 'Walkman', 'Mouse', 'T-shirt', 'Coat', 'Trousers', 'Shorts', 'Socks', 'Underwear']

const goodNamesLen = goodNames.length

const goodPrices = [49, 59, 69, 79, 89, 99, 128, 129, 149, 159, 168, 169, 179, 189, 199]

const goodPricesLen = goodPrices.length

const execTimes = 99

export default function getGoods () {
  const goods = []
  for (let i = 0; i < execTimes; i += 1) {
    // randomly pick a goodName and a goodPrice
    const goodNameIdx = parseInt(Math.random() * goodNamesLen, 10)
    const goodPriceIdx = parseInt(Math.random() * goodPricesLen, 10)
    goods.push({ id: i, name: goodNames[goodNameIdx], price: `¥${goodPrices[goodPriceIdx]}` })
  }
  return goods
}
