import axios from "axios";

const API_Name =
    "https://mhd0dshrzf.execute-api.ap-southeast-1.amazonaws.com/dev";
const API_Path = "/webhook";

export default class ApiService {
    lineNotify() {
        axios.post(`${API_Name}${API_Path}/register/linenotify`);
    }
}