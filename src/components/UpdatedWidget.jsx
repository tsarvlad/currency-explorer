import React, { useContext } from 'react'
import { AppContext } from '../App'
import { unixtimeToDate } from '../helpers'

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
