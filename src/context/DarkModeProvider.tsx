import { createContext, ReactElement, useState } from "react";

export const DarkModeContext = createContext(null);

type Children = {
    children: ReactElement;
}

export default function DarkModeProvider({children}: Children)
{
    const [dark, setDark] = useState(false);
    return (
        <DarkModeContext.Provider value={{dark, setDark}}>
            {children}
        </DarkModeContext.Provider>
    )
}

