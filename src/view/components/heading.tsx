import React from 'react'
import { useTheme } from '../../context/ThemeContext'

type Props = {}

const Heading = (props: Props) => {
    const { bgPrimary, darkTheme, textPrimary, textSecondary } = useTheme();

    return (
        <div className='flex justify-between py-5 items-center'>
            <div>
                <h2 className={`${textPrimary} font-semibold text-xl`}>Popular</h2>
                <p className={`${textSecondary} text-sm`}>This week's popular stocks</p>
            </div>
        </div>
    )
}

export default Heading