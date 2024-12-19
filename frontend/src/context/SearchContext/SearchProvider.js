import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchContext from "./SearchContext";

export default function SearchContextProvider({ children }) {

    const [searchParams,setSearchParams] = useSearchParams();


    return (
        <SearchContext.Provider value={{searchParams, setSearchParams}}>
            {children}
        </SearchContext.Provider>
    )
}