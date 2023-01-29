import { useContext, createContext, useState, useCallback, useMemo } from "react";
import type { ReactElement, SetStateAction, Dispatch } from "react";

type Children = {
    children: ReactElement;
}

type LayoutContextType = {
    isSideMenuOpen: boolean;
    setIsSideMenuOpen: Dispatch<SetStateAction<boolean>>;
    toggleSideMenu: () => void;
}

const defaultLayoutContext = {
    isSideMenuOpen: false,
    setIsSideMenuOpen: () => {},
    toggleSideMenu: () => {},
}

export const LayoutContext = createContext<LayoutContextType>(defaultLayoutContext);

/**
 * Provider to wrap entire App Layout
 * @returns children
 */
export function LayoutProvider({ children }: Children) {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const toggleSideMenu = useCallback(() => {
        setIsSideMenuOpen(prevState => !prevState)
    }, [])

    const memoizedValue = useMemo(() => ({
        isSideMenuOpen,
        setIsSideMenuOpen,
        toggleSideMenu
    }), [isSideMenuOpen, toggleSideMenu])

    return (
        <LayoutContext.Provider value={memoizedValue}>
            {children}
        </LayoutContext.Provider>
    )
}

/**
 * A hook to get the Layout Context
 * @returns the entire Layout Context
 */
export function useLayoutContext() {
    return useContext(LayoutContext)
}