import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import { HiTrendingUp, HiTrendingDown, HiOutlineArrowRight } from "react-icons/hi";
import { CardChart } from './cardChart';
import '../css/card.css'
import { chartStatData } from './chartData';

type Props = {
    isTrading: boolean
}

const Card = (props: Props) => {
    const { bgPrimary, bgSecondary, textPrimary } = useTheme();

    return (
        <div className={`w-72 shrink-0 ${bgPrimary} h-40 mr-4 px-4 py-4 rounded-md card`} id='card' >
            <div className={`flex justify-between `}>
                <div className='flex'>
                    <img src="https://bit.ly/sage-adebayo" className='bg-slate-400 w-8 h-8 rounded-full ' />
                    <div className='mx-3'>
                        <p className={`font-semibold ${textPrimary} `}>PayPal</p>
                        <p className={`text-sm text-slate-400 font-medium`}>PYPL</p>
                    </div>
                </div>
                <div className='text-right'>
                    <p className={`font-semibold ${textPrimary}`}>$22052</p>
                    <div className='flex items-center justify-between'>
                        {(props.isTrading) ? <HiTrendingUp color='#06cc31' />
                            : <HiTrendingDown color='red' />}
                        <p className={`text-sm text-slate-400 font-medium`}>9.99%</p>
                    </div>
                </div>
            </div>
            <CardChart series={chartStatData.series} increase={chartStatData.increase} />
        </div>
    )
}

export default Card