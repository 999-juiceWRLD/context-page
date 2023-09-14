import { MainContext, useContext } from "../context"

export const ThemeSwitcher = () => {
    
    const { theme, setTheme } = useContext(MainContext)
    const switchTheme = () => {
        setTheme(theme === 'default' ? 'light' : 'default')
    }

    return (
        <button onClick={switchTheme}>Switch theme</button>
    )
}