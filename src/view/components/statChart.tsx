import React from 'react'
import { useTheme } from '../../context/ThemeContext'

type Props = {}

const StatChart = (props: Props) => {
    const { textPrimary, bgPrimary, bgSecondary, textSecondary } = useTheme()

    return (
        <div className={`hidden md:block my-2 h-2/3 w-full ${bgPrimary} rounded-md`}>

        </div>
    )
}

export default StatChart