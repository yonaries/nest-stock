import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import { CardChart } from '../components/cardChart'
import NavBar from '../components/navbar'
import SideBar from '../components/sidebar'
import ShortTable from '../components/smallTable'
import StatChart from '../components/statChart'
import Heading_Buttons from '../components/top'
import Trending from '../components/trending'


type Props = {}

const Dashboard = (props: Props) => {
    const { bgSecondary } = useTheme();

    return (
        <div className={`flex ${bgSecondary} h-screen w-screen transition-all`}>
            <SideBar />
            <div id='body-container' className='flex-1 overflow-hidden'>
                <NavBar />
                <Heading_Buttons />
                <div className='flex w-full mx-8'>
                    <div className='block w-4/6'>
                        <Trending />
                        <StatChart />
                    </div>
                    <div className='space-y-5'>
                        <ShortTable />
                        <ShortTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard