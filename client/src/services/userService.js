import axios from "axios";
import serverUrl from "../utilities/serverUrl";

class userService {

  get = async () => {
    let result = await axios.get(serverUrl + "/user/get");
    return result.data;
  }

  getById = async (id) => {
    let result = await axios.get(serverUrl + "/user/getById", { params: id });
    return result.data;
  }

  post = async (user) => {
    let result = await axios.post(serverUrl + "/user/post", user);
    return result.data;
  }

  put = async (user) => {
    let result = await axios.put(serverUrl + "/user/put", user);
    return result.data;
  }

  deleted = async (id) => {
    let result = await axios.delete(serverUrl + "/user/delete", id);
    return result.data;
  }

  signIn = async (email, password) => {
    let result = await axios.post(serverUrl + '/user/signIn', { email, password });
    return result.data;
  }
  signUp = async (user) => {
    let result = await axios.post(serverUrl + "/user/signUp", user);
    return result.data;
  }








}
export default new userService();