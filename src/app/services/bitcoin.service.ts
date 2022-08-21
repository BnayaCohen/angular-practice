import axios from 'axios'

export const BitcoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions,
}

async function getRate(coins: number) {
  const { data } = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
  return data
}

async function getMarketPrice() {
  let res: any = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
  const { name, description, values } = res.data
  const bitcoinValues: number[] = values.map((value: { x: number, y: number }) => value.y)
  const resDetails = {
    name,
    description,
    values: bitcoinValues,
  }
  return resDetails
}

async function getConfirmedTransactions() {
  const res: any = await axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true`)
  const { name, description, values } = res.data
  const bitcoinValues: number[] = values.map((value: { x: number, y: number }) => value.y)
  const resDetails = {
    name,
    description,
    values: bitcoinValues,
  }
  return resDetails
}