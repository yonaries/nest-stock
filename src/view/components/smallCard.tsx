import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import '../css/card.css';
import DetailDrawer from '../screens/drawer';

type Props = {
    isTrading: boolean
}

const SmallCard = (props: Props) => {
    const { bgPrimary, bgSecondary, textPrimary } = useTheme();
    const [isOpen, setIsOpen] = useState<boolean>();

    function handleClick() {
        setIsOpen(true);
    }
    function onClose() {
        setIsOpen(false)
    }

    return (
        <div onBlur={onClose} onFocus={handleClick} tabIndex={0} className={`w-50 shrink-0 ${bgPrimary} h-40 mr-4 px-4 py-4 rounded-md card cursor-pointer`} id='card' >
            <div className={`flex justify-around flex-col h-full pointer-events-auto`}>
                <div>
                    <img src="https://bit.ly/sage-adebayo" className='bg-slate-400 w-8 h-8 mb-3 rounded-full ' />
                    <div className='flex items-center justify-between w-full'>
                        <p className={`font-semibold text-lg ${textPrimary} `}>PayPal</p>
                        <p className={`text-xs text-slate-400 font-medium`}>PYPL</p>
                    </div>
                </div>
                <div className='text-left'>
                    <p className={`font-semibold text-xl my-1 ${(props.isTrading) ? 'text-green-500' : 'text-red-500'}`}>$22052</p>
                    <div className='flex items-center justify-between'>
                        <p className={`text-sm text-slate-400 font-medium`}>9.99% this week</p>
                    </div>
                </div>
            </div>
            <DetailDrawer isOpen={isOpen} onClose={onClose} />
        </div>
    )
}

export default SmallCard