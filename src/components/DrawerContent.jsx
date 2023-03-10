import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from "../App";
import ReactFlagsSelect from "react-flags-select";
import { Button, TextField } from '@mui/material';

import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { customLabelsFill } from '../assets/SelectorCustomLabels';

import "../App.css"


const DrawerContent = () => {
    const { rates, selectedBaseCurrency, setIsHiddenBaseSelector, trigger,
        selectedQuoteCurrency, setSelectedQuoteCurrency, setIsHiddenQuoteSelector, mapClickTrigger } = useContext(AppContext);
    const [floatingBaseSwapper, setFloatingBaseSwapper] = useState(selectedBaseCurrency)
    const [baseNumbers, setBaseNumbers] = useState(1)
    const [quoteNumbers, setQuoteNumbers] = useState()


    const swap = () => {
        const tmp = floatingBaseSwapper
        // setBaseNumbers(quoteNumbers)
        setFloatingBaseSwapper(selectedQuoteCurrency)
        setSelectedQuoteCurrency(tmp)
    }

    useEffect(() => {
        setFloatingBaseSwapper(selectedBaseCurrency)
        setSelectedQuoteCurrency(selectedQuoteCurrency)
    }, [trigger, mapClickTrigger])

    useEffect(() => {
        const usdToQuote = rates.rates[customLabelsFill[selectedQuoteCurrency]?.primary]
        const baseToUsd = rates.rates[customLabelsFill[selectedQuoteCurrency === selectedBaseCurrency ? floatingBaseSwapper : selectedBaseCurrency]?.primary]
        const baseToQuoteExchangeRate = usdToQuote / baseToUsd
        const computed = Math.round((baseToQuoteExchangeRate * baseNumbers) * 100) / 100
        setQuoteNumbers(computed)
    }, [baseNumbers, selectedQuoteCurrency, selectedBaseCurrency, mapClickTrigger])

    return (
        <div className="bg-[whitesmoke] py-1.5 px-6 rounded-xl h-[100%] w-[100%]
    flex flex-col sm:hidden ">
            <div className="exchange-section flex justify-around p-1 mt-4 mb-2">
                <div className="currency-box flex flex-col justify-around items-center">
                    <div className='onClickWrapper'
                        onClick={() => setIsHiddenBaseSelector(prev => !prev)}>
                        <ReactFlagsSelect
                            id="selector"
                            className=" focus:outline-none"
                            selected={floatingBaseSwapper}
                            selectedSize={24}
                            customLabels={customLabelsFill}
                            showSecondarySelectedLabel={false}
                        />
                    </div>
                    <div className="amount-countainer w-[125px]">
                        <TextField
                            size='medium'
                            hiddenLabel
                            type="number"
                            className={"outline-none appearance-none"}
                            variant="filled"
                            placeholder='0.00'
                            value={baseNumbers}
                            onChange={e => setBaseNumbers(e.target.value)}
                        />
                    </div>
                </div>
                <div className="currency-box flex flex-col justify-around items-center">
                    <div className='onClickWrapper'
                        onClick={() => setIsHiddenQuoteSelector(prev => !prev)}>
                        <ReactFlagsSelect
                            id="selector2"
                            className="focus:outline-none"
                            selected={selectedQuoteCurrency}
                            selectedSize={24}
                            customLabels={customLabelsFill}
                            showSecondarySelectedLabel={false}

                        />
                    </div>
                    <div className="amount-countainer w-[125px]">
                        <TextField
                            size='medium'
                            hiddenLabel
                            type="number"
                            className={"outline-none appearance-none"}
                            variant="filled"
                            placeholder='0.00'
                            value={floatingBaseSwapper === selectedQuoteCurrency ? 1 * baseNumbers : quoteNumbers}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-2">
                <Button variant="contained" className="w-[200px]" size="large" onClick={swap}>
                    Swap
                    <SwapHorizIcon />
                </Button>
            </div>
        </div >
    )
}

export default DrawerContent

