import React, { useContext } from 'react'
import { AppContext } from '../App'

function unixtimeToDate(unixTime) {
    const date = new Date(unixTime * 1000);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear().toString();
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

const UpdatedWidget = () => {
    const { rates } = useContext(AppContext)
    return (
        <div className='absolute bg-[whitesmoke] rounded-xl p-2 
        top-[1%] left-[1%] text-base
        sm:top-auto sm:left-auto sm:right-[5px] sm:bottom-[2.5%] sm:text-sm'>
            Rates for:<span className='text-[#00703c] font-bold'> {unixtimeToDate(rates.timestamp)} UTC</span>
        </div>
    )
}

export default UpdatedWidget
