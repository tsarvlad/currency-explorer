import React, { useContext } from 'react'
import ReactFlagsSelect from 'react-flags-select';
import { AppContext } from "../App";
import "../App.css"

const BaseCurrencySideBar = () => {
    const { selectedBaseCurrency, setIsHiddenBaseSelector } = useContext(AppContext);
    return (
        <>
            <div className={`absolute top-[1%] right-[1%] bg-[whitesmoke] rounded-xl z-[7]`}
                id="right-bar"
                onClick={() => setIsHiddenBaseSelector(prev => !prev)}
            >
                <ReactFlagsSelect
                    selected={selectedBaseCurrency}
                    showSelectedLabel={false}
                    selectedSize={30}
                />
            </div >
        </>
    )
}

export default BaseCurrencySideBar
