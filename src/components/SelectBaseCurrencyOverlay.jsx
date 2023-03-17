import React, { useContext, useState } from 'react'
import { Button, useMediaQuery } from '@mui/material';
import { AppContext } from "../App";
import ReactFlagsSelect from "react-flags-select";
import { customLabelsFill } from '../assets/SelectorCustomLabels';
import "../index.css"


const SelectBaseCurrencyOverlay = () => {
    const isSmallScreen = useMediaQuery('(max-width:640px)');
    const { selectedBaseCurrency, setSelectedBaseCurrency,
        isHiddenBaseSelector, setIsHiddenBaseSelector, setTrigger,
        isVisibleDrawer }
        = useContext(AppContext);
    return (
        <div className={`absolute top-0 left-0 h-[100vh] w-[100%] flex justify-center items-center
        bg-[rgba(0,0,0,0.4)] ${isHiddenBaseSelector && 'hidden'} z-10`}
            onClick={() => setIsHiddenBaseSelector(prev => !prev)}
        >
            <div className='flex flex-col bg-[#f5f8fa] shadow-sm rounded-xl
         px-4 py-3 min-w-[5px] w-[250px]'
                onClick={e => e.stopPropagation()}>
                <p className='font-light text-lg text-center'>
                    Select base currency
                </p>
                <ReactFlagsSelect
                    className='mb-2.5 mt-2'
                    selected={selectedBaseCurrency}
                    onSelect={(code) => {
                        setSelectedBaseCurrency(code)
                        setTrigger(prev => !prev)
                    }}
                    placeholder="Select your country"
                    searchable={isVisibleDrawer && isSmallScreen ? false : true}
                    selectedSize={18}
                    customLabels={customLabelsFill}
                    showSecondarySelectedLabel={false}
                />
                <Button variant="contained" className='w-[75%] self-center'
                    onClick={() => {
                        setIsHiddenBaseSelector(prev => !prev)
                    }}
                >Continue</Button>
            </div>
        </div >
    )
}

export default SelectBaseCurrencyOverlay