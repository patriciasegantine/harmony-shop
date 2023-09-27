import React, { useContext, useEffect, useState } from "react";

interface IMainContext {
  windowWidth: number
  setWindowWidth: React.Dispatch<number>
}

export const MainContext = React.createContext<IMainContext | undefined>(undefined)

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

export function useMainContext() {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMainContext must be used within a MainProvider");
  }
  return context;
}
