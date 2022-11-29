import React, { createContext, useState } from 'react'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en')
    const changeLanguage = e => setLanguage(e.target.value)

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}