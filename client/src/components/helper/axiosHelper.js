import axios from "axios";

const apiEp = `http://localhost:8000/api/v1/home`;

export const postUser = async (obj) => {
  try {
    const { data } = await axios.post(apiEp, obj);
    // console.log(result)
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const fetchUser = async () => {
  try {
    const { data } = await axios.get(apiEp);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: "error.message",
    };
  }
};

// delete

export const deleteUser = async (_id) => {
  try {
    const { data } = await axios.delete(apiEp, _id);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
