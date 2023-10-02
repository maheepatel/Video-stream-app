import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    // process.env.REACT_APP_RAPID_API_KEY
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    // "X-RapidAPI-Key": "ee0fd1c787msh414cf1a58a2c538p10d5e6jsna13e70e0a9e5",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// expl =  /baseurl/getvideos

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
