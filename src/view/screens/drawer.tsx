import React from 'react'
import { CgClose } from "react-icons/cg";
import { useTheme } from '../../context/ThemeContext';

type Props = {
    isOpen: boolean | undefined;
    onClose: Function;
}

const DetailDrawer = ({ isOpen, onClose }: Props) => {
    const { bgPrimary, darkTheme } = useTheme()

    return (
        <div className={`${(isOpen) ? 'translate-x-0' : 'translate-x-full'} ${bgPrimary} absolute h-screen w-3/4 top-0 right-0 text-center transition-all duration-500`}>
            <div className='top-0 left-0 p-4 z-10'>
                <CgClose size={25} color={(darkTheme) ? 'white' : 'black'} onClick={() => onClose()} />
            </div>
            <div className=' w-full flex flex-col space-y-5 bg-white'>
                <button className='bg-yellow-500 px-4 w-20'>Click Me</button>
                <button className='bg-yellow-500 px-4 w-20'>Click Me</button>
                <button className='bg-yellow-500 px-4 w-20'>Click Me</button>
                <button className='bg-yellow-500 px-4 w-20'>Click Me</button>
                <button className='bg-yellow-500 px-4 w-20'>Click Me</button>
                <button className='bg-yellow-500 px-4 w-20'>Click Me</button>
            </div>
        </div>
    )
}





export default DetailDrawer