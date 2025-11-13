import axios from "axios";

const instance=axios.create({
    baseURL:"https://carrental-server.greatstack.in"
})
export default instance