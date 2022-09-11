import React, { ReactNode, useState } from 'react'
import { useTheme } from '../../context/ThemeContext';
import { IconContext } from "react-icons";
import { BiNews } from "react-icons/bi";
import { FiHelpCircle, FiSettings } from "react-icons/fi";
import { RiFolderChartLine, } from "react-icons/ri";
import { AiOutlineStock, AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineDarkMode, MdOutlineDashboard } from "react-icons/md";
import logo from '../../assets/StockNest.svg'
import '../css/toggle.css'


type Props = {
    icon: ReactNode;
    title: string;
}

const SideBarButton = (props: Props) => {
    const { textSecondary, darkTheme } = useTheme();

    return (
        <div className={`flex my-2 py-2 font-semibold ${textSecondary} items-center rounded-md cursor-pointer dark:hover:bg-opacity-10 hover:bg-opacity-100 hover:bg-yellow-200 hover:text-secondary transition-all`}>
            <IconContext.Provider value={{ className: "icon", size: '17', }}>
                <div className="px-3">
                    {props.icon}
                </div>
            </IconContext.Provider>
            <p className=''>{props.title}</p>
        </div>
    )
}

const SideBar = () => {
    const { bgPrimary, darkTheme, changeTheme } = useTheme();
    const [selected, setSelected] = useState();

    return (
        <>
            <div className={`px-4 pt-5 top-0 left-0 ${bgPrimary} h-screen hidden md:block w-56 text-sm text-slate-400 `}>
                <img src={logo} />
                <div className='h-54 py-3 mt-5'>
                    <p>General</p>
                    <SideBarButton icon={<MdOutlineDashboard />} title={"Overview"} />
                    <SideBarButton icon={<AiOutlineStock />} title={"Stocks"} />
                    <SideBarButton icon={<RiFolderChartLine />} title={"Portfolio"} />
                    <SideBarButton icon={<BiNews />} title={"News"} />
                </div>
                <div className='h-64 py-3 mt-10 '>
                    <p>Support</p>
                    <SideBarButton icon={<FiSettings strokeWidth={2} color='rgba(100, 116, 139)' />} title={"Settings"} />
                    <SideBarButton icon={<FiHelpCircle />} title={"FAQ"} />
                    <SideBarButton icon={<AiOutlineInfoCircle />} title={"About"} />
                </div>
                <div>
                    <p>Appearance</p>
                    <div className='flex my-2 items-center'>
                        <IconContext.Provider value={{ className: "icon", size: '17' }}>
                            <div className="px-3">
                                <MdOutlineDarkMode />
                            </div>
                        </IconContext.Provider>
                        <p className=' text-slate-500 '>Dark Mode</p>
                        <label className="switch ml-3">
                            <input checked={darkTheme} type="checkbox" />
                            <span className="slider round" onClick={() => changeTheme(!darkTheme)}></span>
                        </label>
                    </div>
                </div>
            </div></>
    )
}

// BiArrowToLeft

export default SideBar;