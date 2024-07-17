import { createContext, ReactElement, useState } from "react";

export const DarkModeContext = createContext<ThemeType | null>(null);

type Children = {
    children: ReactElement;
}

type ThemeType = {
    dark: boolean,
    setDark: React.Dispatch<React.SetStateAction<boolean>>
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
