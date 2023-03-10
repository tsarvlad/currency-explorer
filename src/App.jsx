import { useState, useEffect, createContext } from 'react'
import reactLogo from './assets/react.svg'
import "./index.css"
import MyMap from './components/Map'
import BaseCurrencySideBar from './components/BaseCurrencySideBar'
import SideBar from './components/SideBar'

import SelectBaseCurrencyOverlay from './components/SelectBaseCurrencyOverlay'
import SelectQuoteCurrencyOverlay from './components/SelectQuoteCurrencyOverlay'

import "./App.css"
import SwipeableEdgeDrawer from './components/SwipableEdgeDrawer'
import UpdatedWidget from './components/updatedWidget'

export const AppContext = createContext(null)

function getYesterdayDate() {
  const today = new Date();
  const oneDayAgo = new Date(today);
  oneDayAgo.setDate(today.getDate() - 2);
  const year = oneDayAgo.getFullYear();
  const month = (oneDayAgo.getMonth() + 1).toString().padStart(2, "0");
  const day = oneDayAgo.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function App() {

  const [selectedBaseCurrency, setSelectedBaseCurrency] = useState("US")
  const [selectedQuoteCurrency, setSelectedQuoteCurrency] = useState("US")
  const [isHiddenBaseSelector, setIsHiddenBaseSelector] = useState(false)
  const [isHiddenQuoteSelector, setIsHiddenQuoteSelector] = useState(true)
  const [isVisibleDrawer, setIsVisibleDrawer] = useState(false)
  const [trigger, setTrigger] = useState(false)
  const [mapClickTrigger, setMapClickTrigger] = useState(false)
  const [rates, setRates] = useState({
    "disclaimer": "Default currencies",
    "license": "https://openexchangerates.org/license",
    "timestamp": 1677830400,
    "base": "USD",
    "rates": {
      "AED": 3.67287,
      "AFN": 88.955292,
      "ALL": 108.466558,
      "AMD": 390.798142,
      "ANG": 1.805011,
      "AOA": 506.263333,
      "ARS": 197.8707,
      "AUD": 1.4814,
      "AWG": 1.8,
      "AZN": 1.7,
      "BAM": 1.843575,
      "BBD": 2,
      "BDT": 107.164454,
      "BGN": 1.84215,
      "BHD": 0.377072,
      "BIF": 2081.266732,
      "BMD": 1,
      "BND": 1.349823,
      "BOB": 6.920575,
      "BRL": 5.2013,
      "BSD": 1,
      "BTC": 0.00004471653,
      "BTN": 82.716138,
      "BWP": 13.24787,
      "BYN": 2.527984,
      "BZD": 2.018805,
      "CAD": 1.357804,
      "CDF": 2088.188357,
      "CHF": 0.93987,
      "CLF": 0.02946,
      "CLP": 812.88,
      "CNH": 6.908189,
      "CNY": 6.9023,
      "COP": 4836.633887,
      "CRC": 559.215384,
      "CUC": 1,
      "CUP": 25.75,
      "CVE": 103.937272,
      "CZK": 22.12238,
      "DJF": 178.324487,
      "DKK": 7.01432,
      "DOP": 55.584988,
      "DZD": 136.628661,
      "EGP": 30.7709,
      "ERN": 15,
      "ETB": 53.88432,
      "EUR": 0.942472,
      "FJD": 2.21245,
      "FKP": 0.835219,
      "GBP": 0.835219,
      "GEL": 2.6,
      "GGP": 0.835219,
      "GHS": 12.769588,
      "GIP": 0.835219,
      "GMD": 61.04,
      "GNF": 8622.270813,
      "GTQ": 7.821997,
      "GYD": 211.32448,
      "HKD": 7.84945,
      "HNL": 24.696479,
      "HRK": 7.100086,
      "HTG": 151.233385,
      "HUF": 355.589129,
      "IDR": 15307.453321,
      "ILS": 3.66475,
      "IMP": 0.835219,
      "INR": 82.125503,
      "IQD": 1461.745594,
      "IRR": 42250,
      "ISK": 142.41,
      "JEP": 0.835219,
      "JMD": 154.237061,
      "JOD": 0.7094,
      "JPY": 136.41801923,
      "KES": 127.7,
      "KGS": 87.419,
      "KHR": 4071.319878,
      "KMF": 464.950099,
      "KPW": 900,
      "KRW": 1303.057257,
      "KWD": 0.307073,
      "KYD": 0.834594,
      "KZT": 436.465927,
      "LAK": 16887.912753,
      "LBP": 15033.092972,
      "LKR": 346.213754,
      "LRD": 159.250022,
      "LSL": 18.219129,
      "LYD": 4.83893,
      "MAD": 10.397123,
      "MDL": 18.850222,
      "MGA": 4299.947887,
      "MKD": 58.073454,
      "MMK": 2103.22914,
      "MNT": 3406.965265,
      "MOP": 8.097523,
      "MRU": 36.415995,
      "MUR": 46.698145,
      "MVR": 15.36,
      "MWK": 1028.688288,
      "MXN": 18.093655,
      "MYR": 4.476,
      "MZN": 63.850001,
      "NAD": 18.23,
      "NGN": 460.702464,
      "NIO": 36.630566,
      "NOK": 10.436047,
      "NPR": 132.345804,
      "NZD": 1.606748,
      "OMR": 0.384984,
      "PAB": 1,
      "PEN": 3.773,
      "PGK": 3.529745,
      "PHP": 54.827504,
      "PKR": 278.927961,
      "PLN": 4.427619,
      "PYG": 7226.358976,
      "QAR": 3.654608,
      "RON": 4.6387,
      "RSD": 110.585,
      "RUB": 75.642965,
      "RWF": 1092.678472,
      "SAR": 3.753002,
      "SBD": 8.246265,
      "SCR": 13.162632,
      "SDG": 591,
      "SEK": 10.505319,
      "SGD": 1.346596,
      "SHP": 0.835219,
      "SLL": 17665,
      "SOS": 569.338838,
      "SRD": 33.933,
      "SSP": 130.26,
      "STD": 22823.990504,
      "STN": 23.094035,
      "SVC": 8.763521,
      "SYP": 2512.53,
      "SZL": 18.217989,
      "THB": 34.794667,
      "TJS": 10.013467,
      "TMT": 3.51,
      "TND": 3.1325,
      "TOP": 2.35725,
      "TRY": 18.896,
      "TTD": 6.794987,
      "TWD": 30.626498,
      "TZS": 2340,
      "UAH": 36.988255,
      "UGX": 3721.741081,
      "USD": 1,
      "UYU": 38.916922,
      "UZS": 11381.32438,
      "VES": 24.326565,
      "VND": 23721.981417,
      "VUV": 118.044,
      "WST": 2.69755,
      "XAF": 618.220878,
      "XAG": 0.04755451,
      "XAU": 0.00054265,
      "XCD": 2.70255,
      "XDR": 0.750792,
      "XOF": 618.220878,
      "XPD": 0.00068747,
      "XPF": 112.466784,
      "XPT": 0.00103208,
      "YER": 250.249998,
      "ZAR": 18.179556,
      "ZMW": 20.005749,
      "ZWL": 322
    }
  })
  const [yesterdayRates, setYesterdayRates] = useState({
    "disclaimer": "historicalDefaultCurrencies",
    "license": "https://openexchangerates.org/license",
    "timestamp": 1677628799,
    "base": "USD",
    "rates": {
      "AED": 3.67286,
      "AFN": 88.978998,
      "ALL": 108.421111,
      "AMD": 389.122617,
      "ANG": 1.801836,
      "AOA": 503.4275,
      "ARS": 197.1457,
      "AUD": 1.485857,
      "AWG": 1.8,
      "AZN": 1.7,
      "BAM": 1.84314,
      "BBD": 2,
      "BDT": 104.481736,
      "BGN": 1.848705,
      "BHD": 0.377028,
      "BIF": 2070.604083,
      "BMD": 1,
      "BND": 1.348494,
      "BOB": 6.908608,
      "BRL": 5.2374,
      "BSD": 1,
      "BTC": 0.000043235138,
      "BTN": 82.651144,
      "BWP": 13.32171,
      "BYN": 2.523607,
      "BZD": 2.015286,
      "CAD": 1.364605,
      "CDF": 2062.785869,
      "CHF": 0.942073,
      "CLF": 0.029988,
      "CLP": 826.446281,
      "CNH": 6.954123,
      "CNY": 6.9334,
      "COP": 4775.675998,
      "CRC": 559.784556,
      "CUC": 1,
      "CUP": 25.75,
      "CVE": 104.127383,
      "CZK": 22.226286,
      "DJF": 177.862377,
      "DKK": 7.037015,
      "DOP": 55.588333,
      "DZD": 136.432,
      "EGP": 30.6336,
      "ERN": 15,
      "ETB": 53.786464,
      "EUR": 0.945479,
      "FJD": 2.2169,
      "FKP": 0.831049,
      "GBP": 0.831049,
      "GEL": 2.63,
      "GGP": 0.831049,
      "GHS": 12.747388,
      "GIP": 0.831049,
      "GMD": 61.1,
      "GNF": 8693.387693,
      "GTQ": 7.808395,
      "GYD": 210.952273,
      "HKD": 7.849216,
      "HNL": 24.653674,
      "HRK": 7.123216,
      "HTG": 149.968872,
      "HUF": 357.602904,
      "IDR": 15249,
      "ILS": 3.656755,
      "IMP": 0.831049,
      "INR": 82.635649,
      "IQD": 1459.196822,
      "IRR": 42300,
      "ISK": 143.99,
      "JEP": 0.831049,
      "JMD": 153.667383,
      "JOD": 0.7094,
      "JPY": 136.351,
      "KES": 127.074195,
      "KGS": 87.42,
      "KHR": 4046.96497,
      "KMF": 464.849849,
      "KPW": 900,
      "KRW": 1322,
      "KWD": 0.307012,
      "KYD": 0.833255,
      "KZT": 445.014137,
      "LAK": 16896.351002,
      "LBP": 15214.454253,
      "LKR": 361.930413,
      "LRD": 159.000024,
      "LSL": 18.432482,
      "LYD": 4.847805,
      "MAD": 10.39646,
      "MDL": 18.880482,
      "MGA": 4285.997347,
      "MKD": 58.24109,
      "MMK": 2099.743474,
      "MNT": 3406.965265,
      "MOP": 8.083973,
      "MRU": 36.352414,
      "MUR": 46.350001,
      "MVR": 15.36,
      "MWK": 1026.902629,
      "MXN": 18.304458,
      "MYR": 4.4875,
      "MZN": 63.949992,
      "NAD": 18.42,
      "NGN": 460.130274,
      "NIO": 36.532409,
      "NOK": 10.387818,
      "NPR": 132.234806,
      "NZD": 1.616501,
      "OMR": 0.385036,
      "PAB": 1,
      "PEN": 3.803315,
      "PGK": 3.524622,
      "PHP": 55.459999,
      "PKR": 261.499636,
      "PLN": 4.450838,
      "PYG": 7285.973186,
      "QAR": 3.649283,
      "RON": 4.658,
      "RSD": 110.883279,
      "RUB": 75.046915,
      "RWF": 1089.555063,
      "SAR": 3.751855,
      "SBD": 8.232683,
      "SCR": 13.030202,
      "SDG": 589.5,
      "SEK": 10.470628,
      "SGD": 1.348392,
      "SHP": 0.831049,
      "SLL": 17665,
      "SOS": 568.350977,
      "SRD": 33.415,
      "SSP": 130.26,
      "STD": 22823.990504,
      "STN": 23.088485,
      "SVC": 8.749081,
      "SYP": 2512.53,
      "SZL": 18.454964,
      "THB": 35.24,
      "TJS": 10.013467,
      "TMT": 3.51,
      "TND": 3.151,
      "TOP": 2.360065,
      "TRY": 18.885945,
      "TTD": 6.781669,
      "TWD": 30.660799,
      "TZS": 2332,
      "UAH": 36.926324,
      "UGX": 3724.202345,
      "USD": 1,
      "UYU": 39.053732,
      "UZS": 11333.577035,
      "VES": 24.385805,
      "VND": 23765,
      "VUV": 118.044,
      "WST": 2.69755,
      "XAF": 620.19354,
      "XAG": 0.04787782,
      "XAU": 0.00054774,
      "XCD": 2.70255,
      "XDR": 0.75384,
      "XOF": 620.19354,
      "XPD": 0.00070281,
      "XPF": 112.825651,
      "XPT": 0.00104014,
      "YER": 250.349961,
      "ZAR": 18.3433,
      "ZMW": 19.795973,
      "ZWL": 322
    }
  })

  const API_VALUES = {
    rates, setRates,
    trigger, setTrigger,
    mapClickTrigger, setMapClickTrigger,
    yesterdayRates, setYesterdayRates,
    selectedBaseCurrency, setSelectedBaseCurrency,
    selectedQuoteCurrency, setSelectedQuoteCurrency,
    isHiddenBaseSelector, setIsHiddenBaseSelector,
    isHiddenQuoteSelector, setIsHiddenQuoteSelector,
    isVisibleDrawer, setIsVisibleDrawer
  }

  useEffect(() => {
    async function fetchRates() {
      try {
        const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=${import.meta.env.VITE_CURRENCY_EXCHANGE_ACCESS_TOKEN}`)
        const data = await response.json()
        if (typeof data === 'object' && data.hasOwnProperty('rates')) {
          setRates(data)
        } else {
          console.error('Invalid data received from API')
        }
      } catch (error) {
        console.error('Error fetching data from API:', error)

      }

    }
    async function fetchHistoricRates() {
      try {
        const response = await fetch(`https://openexchangerates.org/api/historical/${getYesterdayDate()}.json?app_id=${import.meta.env.VITE_CURRENCY_EXCHANGE_ACCESS_TOKEN}`)
        const data = await response.json()
        if (typeof data === 'object' && data.hasOwnProperty('rates')) {
          setYesterdayRates(data)
        } else {
          console.error('Invalid data received from API')
        }
      } catch (error) {
        console.error('Error fetching data from API:', error)
      }
    }
    fetchRates()
    fetchHistoricRates()
  }, [])

  return (
    <AppContext.Provider value={API_VALUES}>
      <MyMap />

      <BaseCurrencySideBar />
      <SideBar />

      <SwipeableEdgeDrawer />
      <SelectBaseCurrencyOverlay />
      <SelectQuoteCurrencyOverlay />
      <UpdatedWidget />

    </AppContext.Provider >
  )
}

export default App