import axios from "axios";
import serverUrl from "../utilities/serverUrl";

class productService {

  get = async () => {
    let result = await axios.get(serverUrl + "/product/get");
    return result.data;
  }
  getByUser = async (userId) => {
    let result = await axios.get(serverUrl + "/product/getByUser",{params:{userId}});
    return result.data;
  }

  getById = async (id) => {
    let result = await axios.get(serverUrl + "/product/getById",{params:{id}});
    return result.data;
  }

  post = async (product) => {
    let result = await axios.post(serverUrl + "/product/post", product);
    return result.data;
  }

  put = async (product) => {
    let result = await axios.put(serverUrl + "/product/put", product);
    return result.data;
  }

  deleted=async(id)=>{
    let result = await axios.delete(serverUrl + "/product/delete", id);
    return result.data;  }








}
export default new productService();