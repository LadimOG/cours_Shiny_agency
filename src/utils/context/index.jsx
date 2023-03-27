import {useState, createContext} from 'react'

export  const ThemeContext = createContext()

export const ThemeProvider = ({children }) => {
    const [theme, setTheme] = useState('light')
    function toggleTheme() {
        setTheme(theme === 'light'? 'dark' : 'light')
    }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
    
  )
}

export const SurveyContext = createContext()

export const SurveyProvider = ({children}) => {
  const [answers, setAnswers] = useState({})
  const saveAnswers = (newAnswers) => {
  setAnswers({ ...answers, ...newAnswers })
  }

  return (
    <SurveyContext.Provider value={{ answers, saveAnswers}}>
      {children}
    </SurveyContext.Provider>
  )
}


export const TitleContext = createContext()

export const Titleprovider = ({children}) => {
  const [title, setTitle] = useState("Bienvenue sur la page d'accueuil 🏠")
  
  return (
    <TitleContext.Provider  value={{title, setTitle}}>
      {children}
    </TitleContext.Provider>
  )
}
