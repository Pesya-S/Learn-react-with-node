import axios from "axios";
import serverUrl from "../utilities/serverUrl";

class recipeService {

  get = async () => {
    let result = await axios.get(serverUrl + "/recipe/get");
    return result.data;
  }

  getById = async (id) => {
    let result = await axios.get(serverUrl + "/recipe/getById",{params:id});
    return result.data;
  }

  post = async (recipe) => {
    let result = await axios.post(serverUrl + "/recipe/post", recipe);
    return result.data;
  }

  put = async (recipe) => {
    let result = await axios.put(serverUrl + "/recipe/put", recipe);
    return result.data;
  }

  deleted=async(id)=>{
    let result = await axios.delete(serverUrl + "/recipe/delete", id);
    return result.data;  }








}
export default new recipeService();