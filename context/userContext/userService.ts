import {base_url} from "../../utils/base_url";
import axios from "axios"
import SignUpForm from "./objects";

const registerUser = async (form:SignUpForm) => {
        const response = await axios.post(`${base_url}user/`,form);
        return response.data;
}

export const userService = {
    registerUser,
}