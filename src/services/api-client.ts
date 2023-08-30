import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "888deb9d19694a1a8e8f48e65ea01b5a",
    },
});
