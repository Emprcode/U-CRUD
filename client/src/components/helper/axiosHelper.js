import axios from 'axios';

const apiEp = 'http://localhost:8000/api/v1/home'

export const postUser = async(userObj) => {
    try {
        const {data} = await axios.post(apiEp, userObj)
        return data
    } catch (error) {
        return{
            status:"error",
            message: error.message
        }
    }
}
export const fetchUser = async() => {
    try {
        const {data} = await axios.post(apiEp)
        return data
    } catch (error) {
        return{
            status:"error",
            message: error.message
        }
    }
}