import axios from "axios";

const KEY = process.env.REACT_APP_API_KEY
//'AIzaSyCW_ZFY4nhgFJtm3EinMxudFZttX_iu6dU'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
