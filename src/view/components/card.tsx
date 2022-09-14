import React, { useEffect, useState } from 'react'
import { useTheme } from '../../context/ThemeContext';
import { HiTrendingUp, HiTrendingDown, HiOutlineArrowRight } from "react-icons/hi";
import { CardChart } from './cardChart';
import '../css/card.css'
import { chartStatData } from './chartData';
import { fetchIntraDay } from '../../api/interadayRequest';
import { StatDataType } from '../../model/statDataModel';

type Props = {
    statData: StatDataType
}

const Card = (props: Props) => {
    const { bgPrimary, textPrimary } = useTheme()
    const length = props.statData?.series[0].data.length
    const currentPrice = props.statData?.series[0].data[length - 1].y

    return (
        <div className={`w-72 shrink-0 ${bgPrimary} h-40 mr-4 px-4 py-4 rounded-md card`} id='card' >
            <div className={`flex justify-between `}>
                <div className='flex'>
                    <img src="https://bit.ly/sage-adebayo" className='bg-slate-400 w-8 h-8 rounded-full ' />
                    <div className='mx-3'>
                        <p className={`font-semibold ${textPrimary} `}>{props.statData.series[0].name}</p>
                        <p className={`text-sm text-slate-400 font-medium`}>PYPL</p>
                    </div>
                </div>
                <div className='text-right'>
                    <p className={`font-semibold ${textPrimary}`}>${props.statData.currentPrice}</p>
                    <div className='flex items-center justify-between'>
                        {(props.statData.increase) ? <HiTrendingUp color='#06cc31' />
                            : <HiTrendingDown color='red' />}
                        <p className={`text-sm text-slate-400 font-medium`}>{props.statData.changePercent}%</p>
                    </div>
                </div>
            </div>
            <CardChart series={props.statData?.series} increase={props.statData?.increase} />
        </div>
    )
}

export default Card