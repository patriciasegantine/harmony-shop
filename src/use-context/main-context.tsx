import React, { useEffect, useState } from "react";

interface IMainContext {
  windowWidth: number
  setWindowWidth: React.Dispatch<number>
}

// @ts-ignore
export const MainContext = React.createContext<IMainContext>()

export const MainProvider = ({children}: any) => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return (
    <MainContext.Provider value={{
      windowWidth,
      setWindowWidth
      
    }}>
      {children}
    </MainContext.Provider>
  )
}
