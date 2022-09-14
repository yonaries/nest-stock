import { fetchIntraDay } from '../../api/interadayRequest'
import { useTheme } from '../../context/ThemeContext'
import NavBar from '../components/navbar'
import Popular from '../components/popular'
import SideBar from '../components/sidebar'
import ShortTable from '../components/smallTable'
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
                    <div className='block md:w-4/6 space-y-5'>
                        <Trending />
                        <Popular />
                    </div>
                    <div className='space-y-5'>
                        <ShortTable stocks={'gainers'} />
                        <ShortTable stocks={'losers'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard