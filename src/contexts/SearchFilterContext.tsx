import { ReactNode, createContext, useContext} from "react";
import { fetchData } from "../utils/api";
import { VideoCardProp } from "../components/SuggestionCard";
import { useLocalStorage } from "../hooks/useLocalStorage";


type SearchFilterProp = {
    searchValue:string,
    setSearchValue:React.Dispatch<React.SetStateAction<string>>
    data:VideoCardProp[]
}

const SearchFilterContext = createContext({} as SearchFilterProp)


export function useSearchFilter (){
    return useContext(SearchFilterContext);
}

type SearchProviderProps = {
    children:ReactNode
}

export function SearchFilterProvider ({children}:SearchProviderProps){
  const [searchValue,setSearchValue] = useLocalStorage("search","")
  const [data,setData] = useLocalStorage("data",[])
  
 if(localStorage.getItem("data") === null)fetchData().then((response)=>setData(response))


     
    return <SearchFilterContext.Provider 
    value= {
        {
            searchValue,
            setSearchValue,
            data
        }
    }>
        {children}
    </SearchFilterContext.Provider>

}