import axios from "axios";
import serverUrl from "../utilities/serverUrl";

class wordsService{

    post = async (words) => {
        let result = await axios.post(serverUrl + "/words/post", words);
        let wordsId=result.data;
        return wordsId;
      }

      get = async () => {
        let result = await axios.get(serverUrl + "/words/get");
        return result.data;
      }   


}
export default new wordsService();