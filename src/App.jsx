import './App.css'
import { MainContext, useContext } from './context'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useEffect, useState } from 'react'

function App() {

  // const [logoText, setLogoText] = useState('random text')
  
  const [theme, setTheme] = useState('default')
  const [methods, setMethods] = useState({})

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const appendMethods = newMethods => {
    setMethods({
      ...methods,
      ...newMethods
    })
  }

  const contextData = {
    theme, setTheme,
    // logoText, setLogoText,
    appendMethods, ...methods
  }

  return (
    <MainContext.Provider value={contextData}>
      <Header />
      <Footer />
    </MainContext.Provider>
  )
}

export default App
