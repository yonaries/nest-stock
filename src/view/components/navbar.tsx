import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IconContext } from "react-icons";
import { FiBell } from "react-icons/fi";

type Props = {}

const NavBar = (props: Props) => {
    const { bgPrimary, bgSecondary, textPrimary } = useTheme();

    return (
        <div className={`flex-1 flex top-0 font-medium h-14 md:px-8 ${bgPrimary} items-center justify-between`}>
            <IconContext.Provider value={{ size: '19' }}>
                <HiOutlineMenuAlt1 size={25} color='rgba(100, 116, 139)' className='md:hidden mx-2' />
                <div className={`flex px-2 py-1 ${bgSecondary} rounded-md w-80 items-center`}>
                    <BiSearchAlt className='m-1' color='rgba(100, 116, 139)' />
                    <input type="text" placeholder='Search' className='outline-none bg-inherit w-full' />
                </div>
                <div className='flex items-center'>
                    <FiBell className='mx-6 hidden md:contents' color='rgba(100, 116, 139)' />
                    <div className='flex items-center'>
                        <img src="https://bit.ly/sage-adebayo" className='bg-slate-400 w-8 h-8 rounded-full mx-3' />
                        <div className='text-sm hidden md:block'>
                            <p className={`font-semibold ${textPrimary}`}>Gabe Lakeman</p>
                            <span className='text-xs text-slate-400'>#1784596</span>
                        </div>
                    </div>
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default NavBar;