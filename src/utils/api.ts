import axios from "axios"


const getDataFromApi  = async ()=>{
        
    const response =  await axios.get("https://raw.githubusercontent.com/Kushagra-Kukreti/youtube-data.json/main/data.json");


      return response.data;
}


export const data =  await getDataFromApi();