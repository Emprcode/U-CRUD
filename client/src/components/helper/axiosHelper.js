import axios from 'axios';

const apiEp = 'http://localhost:8000/api/v1/home'


// create

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

// get
export const fetchUser = async() => {
    try {
        const {data} = await axios.get(apiEp)
        return data
    } catch (error) {
        return{
            status:"error",
            message: error.message
        }
    }
}

// delete
export const deleteUser = async(_id) => {
    try {
        const {data} = await axios.delete(apiEp, _id)
        return data
    } catch (error) {
        return{
            status:"error",
            message: error.message
        }
    }
}