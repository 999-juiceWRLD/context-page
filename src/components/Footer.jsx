import { ThemeSwitcher } from "./ThemeSwitcher"
import { MainContext, useContext } from "../context"

export const Footer = () => {
    
    const { logoText, setLogoText } = useContext(MainContext)
    const switchLogoText = () => {
        // setLogoText('random text')
        setLogoText(logoText === 'experimental' ? 'naber' : 'experimental')
    }

    return (
        <div>
            <button onClick={switchLogoText}>switch logo text</button>
            <ThemeSwitcher />
        </div>
    )
}