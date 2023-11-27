import LoaderContext from "./LoaderContext";

import { useState } from 'react'

function LoaderContextProvider({ children }) {

    const [isLoading, setIsLoading] = useState(true);

    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
    )
}

export default LoaderContextProvider