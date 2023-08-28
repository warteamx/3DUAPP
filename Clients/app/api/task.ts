import axios from 'axios'

const baseURL = 'http://localhost:1337/api'
const token = '1336207800aabdea0c1c17f932803e0c3c451790144b7e31b920d0f017bed744f38dbd412a54a856df5bbe8d99833021e852277e59b75c6363f696bb88114356ed64858b965176220bde1dd3877ce9ebaefb3567cfcf5c3faae5088583d2aa94d6964b44401cbe797c5bd1acb6cb8a4e826705c74dde3e6a9017f3af47b9c0c4'

// Create axios instance get tasks with headers bearer token
const axiosInstance = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${token}`
    }
})
// Get tasks
export const getTasks = async () => {
    try {
        const response = await axiosInstance.get('/tasks')
        return response.data
    } catch (error) {
        console.log(error)
    }
}