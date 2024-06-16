import { useState, useEffect, createContext } from 'react'
import { defaultCurrentRates, defaultYesterdayRates } from './assets/defaultData'
import { getYesterdayDate } from './helpers'
import { 
    MyMap,
    BaseCurrencySideBar,
    SideBar,
    SelectBaseCurrencyOverlay,
    SelectQuoteCurrencyOverlay,
    SwipeableEdgeDrawer, 
    UpdatedWidget
} from './components'
import "./index.css"
import "./App.css"

export const AppContext = createContext(null)

function App() {
  const [selectedBaseCurrency, setSelectedBaseCurrency] = useState("US")
  const [selectedQuoteCurrency, setSelectedQuoteCurrency] = useState("US")
  const [isHiddenBaseSelector, setIsHiddenBaseSelector] = useState(false)
  const [isHiddenQuoteSelector, setIsHiddenQuoteSelector] = useState(true)
  const [isVisibleDrawer, setIsVisibleDrawer] = useState(false)
  const [trigger, setTrigger] = useState(false)
  const [mapClickTrigger, setMapClickTrigger] = useState(false)

  const [rates, setRates] = useState(defaultCurrentRates)
  const [yesterdayRates, setYesterdayRates] = useState(defaultYesterdayRates)

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

  useEffect(() => {
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