import { VideoCardProp } from "../components/VideoCard";
import { data } from "./api";


export const filterBySearch = (searchValue:string) =>{
   
    const filteredData = data.filter((currData:VideoCardProp)=>{

        return searchValue.toLowerCase().startsWith(currData.title.toLowerCase())?currData:""
    })
        
       return filteredData;

   
}