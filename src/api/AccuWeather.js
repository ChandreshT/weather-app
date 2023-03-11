import axios from "axios";

const key = "kwW6mGrEnMJcEVcC9PWXok1CiLx6yWqA";

export default axios.create({
  baseURL: "http://dataservice.accuweather.com",
  params: {
    apikey: key,
  },
});
