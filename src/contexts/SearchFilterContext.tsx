import { ReactNode, createContext, useContext, useState } from "react";


type SearchFilterProp = {
    searchValue:string,
    setSearchValue:React.Dispatch<React.SetStateAction<string>>
}

const SearchFilterContext = createContext({} as SearchFilterProp)


export function useSearchFilter (){
    return useContext(SearchFilterContext);
}

type SearchProviderProps = {
    children:ReactNode
}

export function SearchFilterProvider ({children}:SearchProviderProps){
  const [searchValue,setSearchValue] = useState("")
    return <SearchFilterContext.Provider 
    value= {
        {
            searchValue,
            setSearchValue
        }
    }>
        {children}
    </SearchFilterContext.Provider>

}