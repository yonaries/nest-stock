import React, { useContext, useEffect, useState } from 'react'
import logoDark from '../assets/StockNestWhite.svg'
import logoLight from '../assets/StockNest.svg'

interface ThemeType {
    darkTheme: boolean,
    bgPrimary: string,
    bgSecondary: string,
    textPrimary: string,
    textSecondary: string,
    sideBarBg: string,
    logo: string,
    changeTheme: Function,
}
const initialState = {
    darkTheme: false,
    bgPrimary: '',
    bgSecondary: '',
    textPrimary: '',
    textSecondary: '',
    sideBarBg: '',
    logo: '',
    changeTheme: () => { }
}

const ThemeContext = React.createContext<ThemeType>(initialState)

export const useTheme = () => {
    return useContext(ThemeContext);
}

const ThemeProvider = ({ children }: any) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [bgPrimary, setBgPrimary] = useState<string>('')
    const [bgSecondary, setBgSecondary] = useState<string>('')
    const [textPrimary, setTextPrimary] = useState<string>('')
    const [textSecondary, setTextSecondary] = useState<string>('')
    const [sideBarBg, setSideBarBg] = useState<string>('');
    const [logo, setLogo] = useState<string>('');

    const changeTheme = (isOn: boolean) => {
        setDarkTheme(isOn)
        if (!isOn) window.localStorage.removeItem('darkTheme')
        else window.localStorage.setItem('darkTheme', `${darkTheme}`);
    }

    useEffect(() => {
        const checkTheme = () => {
            const theme = window.localStorage.getItem('darkTheme');
            if (theme) {
                setDarkTheme(true)
                setBgPrimary('bg-dark-primary')
                setBgSecondary('bg-dark-secondary')
                setTextPrimary('text-white')
                setTextSecondary('text-slate-200')
                setSideBarBg('bg-dark-primary')
                setLogo(logoDark)
            }
            else {
                setDarkTheme(false)
                setBgPrimary('bg-white')
                setBgSecondary('bg-slate-200')
                setTextPrimary('text-dark')
                setTextSecondary('text-slate-500')
                setSideBarBg('bg-black')
                setLogo(logoLight)
            }
        }
        checkTheme();
        return checkTheme;
    }, [changeTheme])

    const value = {
        darkTheme: darkTheme,
        changeTheme: changeTheme,
        bgPrimary: bgPrimary,
        bgSecondary: bgSecondary,
        textPrimary: textPrimary,
        textSecondary: textSecondary,
        sideBarBg: sideBarBg,
        logo: logo
    }

    return (
        <ThemeContext.Provider value={value} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;