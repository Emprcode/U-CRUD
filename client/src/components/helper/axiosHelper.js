import axios from "axios";

const apiEp = `http://localhost:8000/api/v1/home`;

// postUser

export const postUser = async (userObj) => {
  try {
    const { data } = await axios.post(apiEp, userObj);
    // console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// getUser

export const getUser = async () => {
  try {
    const response = await axios.get(apiEp);
    console.log(response);
    // console.log(data);
    // return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
