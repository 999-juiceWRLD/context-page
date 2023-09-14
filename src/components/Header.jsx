import { MainContext, useContext } from "../context"
import { useEffect, useState } from "react"

export const Header = () => {
    
    // const { theme, logoText } = useContext(MainContext)
    const { theme, appendMethods } = useContext(MainContext)
    const [logoText, setLogoText] = useState('experimental')
    useEffect(() => {
        appendMethods({ logoText, setLogoText })
    }, [logoText])

    return (
        <div>
            <h2 id="header-default">header, {logoText}</h2>
            <p>current theme is {theme}</p>
        </div>
    )
}