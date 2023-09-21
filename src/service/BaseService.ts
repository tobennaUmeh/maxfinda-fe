import axios from "axios";
import {useSelector} from "react-redux";

export const BaseService = () => {
    const token = useSelector<any>((state)=> state.auth.token)
  return axios.create({
      baseURL: "https://",
      headers:{
          "Content-Type": "application/json",
          Accept:"application/json",
          Authorization: `Bearer ${token}`
      }
  })
}