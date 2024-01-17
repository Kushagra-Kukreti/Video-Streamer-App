import axios from "axios";

const items = async () => {
  const response = await axios.get("https://raw.githubusercontent.com/Kushagra-Kukreti/youtube-data.json/main/data.json");
  return response.data; 
};

export const fetchData = async () => {
  const data = await items();
  return data;

};