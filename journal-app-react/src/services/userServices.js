import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export const userLogin = async (loginDetails) => {
  console.log("Sending login details:", loginDetails, {
    Headers: {
      Authorization: ``,
    },
  });
  try {
    const response = await api.post(`public/login`, loginDetails);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(
        `Login failed: ${error.response.data.message || "Unknown error"}`
      );
    }
  }
};

export const createUser = async (user) => {
  console.log("Sending login details:", user, {
    Headers: {
      Authorization: ``,
    },
  });
  try {
    const response = await api.post(`public/`, user);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
// Update an existing user by sending the entire user object (userName and password)
export const updateUser = async (user) => {
  try {
    const response = await axios.put(`${API_URL}/users/update`, user); // Send full user entity
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// Delete a user by ID
export const deleteUser = async () => {
  try {
    const response = await axios.delete(`${API_URL}users/delete`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
