import axios from "axios";
import serverUrl from "../utilities/serverUrl";

class userService{

    post = async (user) => {
        let result = await axios.post(serverUrl + "/user/post", user);
        let userId=result.data;
        return userId;
      }

      get = async () => {
        let result = await axios.get(serverUrl + "/user/get");
        return result.data;
      }   


}
export default new userService();