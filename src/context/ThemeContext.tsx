import React, { useContext, useEffect, useState } from 'react'


interface ThemeType {
    darkTheme: boolean,
    bgPrimary: string,
    bgSecondary: string,
    textPrimary: string,
    textSecondary: string,
    changeTheme: Function,
}
const initialState = {
    darkTheme: false,
    bgPrimary: '',
    bgSecondary: '',
    textPrimary: '',
    textSecondary: '',
    changeTheme: () => { }
}

const ThemeContext = React.createContext<ThemeType>(initialState)

export const useTheme = () => {
    return useContext(ThemeContext);
}

const ThemeProvider = ({ children }: any) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [bgPrimary, setBgPrimary] = useState('')
    const [bgSecondary, setBgSecondary] = useState('')
    const [textPrimary, setTextPrimary] = useState('')
    const [textSecondary, setTextSecondary] = useState('')

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
            }
            else {
                setDarkTheme(false)
                setBgPrimary('bg-white')
                setBgSecondary('bg-slate-200')
                setTextPrimary('text-dark')
                setTextSecondary('text-slate-500')
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
    }

    return (
        <ThemeContext.Provider value={value} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;