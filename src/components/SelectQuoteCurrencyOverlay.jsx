import React, { useContext, useState } from 'react'
import { Button, useMediaQuery } from '@mui/material';
import { AppContext } from "../App";
import ReactFlagsSelect from "react-flags-select";
import { customLabelsFill } from '../assets/SelectorCustomLabels';
import "../index.css"


const SelectQuoteCurrencyOverlay = () => {
    const isSmallScreen = useMediaQuery('(max-width:640px)');
    const { selectedQuoteCurrency, setSelectedQuoteCurrency,
        isHiddenQuoteSelector, setIsHiddenQuoteSelector,
        isVisibleDrawer } = useContext(AppContext);
    return (
        <div className={`absolute top-0 left-0 h-[100vh] w-[100%] flex justify-center items-center
        bg-[rgba(0,0,0,0.4)] ${isHiddenQuoteSelector && 'hidden'} z-10`}
            onClick={() => setIsHiddenQuoteSelector(prev => !prev)}
        >
            <div className='flex flex-col bg-[#f5f8fa] shadow-sm rounded-xl
         px-4 py-3 min-w-[5px]'
                onClick={e => e.stopPropagation()}>
                <p className='font-light text-lg text-center'>
                    Select quote currency
                </p>
                <ReactFlagsSelect
                    className='mb-2.5 mt-2'
                    selected={selectedQuoteCurrency}
                    onSelect={(code) => setSelectedQuoteCurrency(code)}
                    placeholder="Select your country"
                    searchable={isVisibleDrawer && isSmallScreen ? false : true}
                    customLabels={customLabelsFill}
                    selectedSize={18}
                />
                <Button variant="contained" className='w-[75%] self-center'
                    onClick={() => setIsHiddenQuoteSelector(prev => !prev)}
                >Continue</Button>
            </div>
        </div >
    )
}

export default SelectQuoteCurrencyOverlay

