import axios from 'axios';


export const friendAcount = async(friend) => {
    try {
        const {data} = await axios.post("http://localhost:4000/auth/fiend",friend)
        return data;
    } catch (error) {
        alert("Something went wrong")
    }
}