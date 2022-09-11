import React from 'react'
import { useTheme } from '../../context/ThemeContext'

type Props = {}

const ShortTable = (props: Props) => {
    const { textPrimary, bgPrimary, bgSecondary, textSecondary } = useTheme()
    return (
        <div className={`${textPrimary} mr-16 ml-6 rounded-md ${bgPrimary} px-4`}>
            <div className={`flex items-center justify-between h-12 ${bgPrimary}`}>
                <p className='font-semibold'>Gainers</p>
                <p className={`text-xs ${textSecondary}`} >Aug 13 2023 4:00PM</p>
            </div>
            <table className={`table-auto w-64 text-right text-sm`}>
                <thead>
                    <tr className={`${bgSecondary} ${textSecondary} h-8`}>
                        <th className='text-left' >Name</th>
                        <th>Last</th>
                        <th>Change</th>
                        <th>Chg%</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='h-10 border-t-2'>
                        <td className='text-left'>GOOGL</td>
                        <td>$5.62</td>
                        <td>+2.81</td>
                        <td>+50.24%</td>
                    </tr>
                    <tr className='h-10 border-t-2'>
                        <td className='text-left'>GOOGL</td>
                        <td>$5.62</td>
                        <td>+2.81</td>
                        <td>+50.24%</td>
                    </tr>
                    <tr className='h-10 border-t-2'>
                        <td className='text-left'>GOOGL</td>
                        <td>$5.62</td>
                        <td>+2.81</td>
                        <td>+50.24%</td>
                    </tr>
                    <tr className='h-10 border-t-2'>
                        <td className='text-left'>GOOGL</td>
                        <td>$5.62</td>
                        <td>+2.81</td>
                        <td>+50.24%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShortTable