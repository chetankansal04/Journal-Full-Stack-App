import axios from "axios";

const getToken = () => {
  return localStorage.getItem("token");
};

// Create an Axios instance with default configuration
const api = axios.create({
  baseURL: "https://journalapp-xtcm.onrender.com/public",
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const createJournal = async (newJournal, userName) => {
  try {
    const response = await api.post(`/journal/${userName}`, newJournal);
    return response.data;
  } catch (error) {
    console.error("Error creating journal:", error);
    throw error;
  }
};

// Fetch all Journals (GET)
export const getAllJournals = async (usernName) => {
  try {
    const response = await api.get(`journal/${usernName}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching journals: " + error.message);
  }
};

// Fetch Journals by id (GET)
export const getJournalById = async (myId, myEntry) => {
  try {
    const response = await api.get(`id/${myId}}`);
    return response.data;
  } catch (error) {
    throw new error("Error fetching Journals:", myEntry);
  }
};

// Create a new Journal (POST)

// Update an existing Journal (PUT)
export const updateJournal = async (id, journalDetails) => {
  try {
    const response = await api.put(`journal/${id}`, journalDetails);
    return response;
  } catch (error) {
    console.error("Error updating Journal:", error);
    throw error;
  }
};

// Delete a Journal (DELETE)
export const deleteJournal = async (id) => {
  try {
    await api.delete(`/journal/${id}`);
  } catch (error) {
    console.error("Error deleting Journal:", error);
    throw error;
  }
};
