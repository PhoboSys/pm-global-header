import UNKNOWN_DARK from './UNKNOWN.DARK'
import ETH_DARK from './ETH.DARK'
import USDT_DARK from './USDT.DARK'
import USDC_DARK from './USDC.DARK'
import PARI_DARK from './PARI.DARK'

const FUNDS = {
  UNKNOWN_DARK,

  ETH_DARK,
  PARI_DARK,
  USDT_DARK,
  USDC_DARK,
}

export function factoryFunds(currency, theme = 'DARK') {
  const key = [currency, theme].join('_')
  return FUNDS[key] || UNKNOWN_DARK
}
