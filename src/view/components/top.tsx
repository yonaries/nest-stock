import React from 'react'
import { useTheme } from '../../context/ThemeContext'

type Props = {}

const Heading_Buttons = (props: Props) => {

    const { bgPrimary, darkTheme, textPrimary, textSecondary } = useTheme();
    return (
        <div className='flex justify-between px-8 py-5 items-center'>
            <div>
                <h2 className={`${textPrimary} font-semibold text-xl`}>Overview</h2>
                <p className={`${textSecondary} text-sm`}>Let's check todays stats!</p>
            </div>
            <div className='hidden md:block'>
                <button className={`${bgPrimary} text-base mx-1 px-5 py-2 rounded-md ${darkTheme ? 'text-white' : 'text-primary'} font-semibold`}>
                    Request
                </button>
                <button className={`bg-secondary mx-1 px-5 py-2 rounded-md text-white font-semibold`}>
                    Invest Now
                </button>
            </div>
        </div>
    )
}

export default Heading_Buttons