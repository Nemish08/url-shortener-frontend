import axios from 'axios';

const API_URL = 'http://localhost:8000/';

// Create an instance of axios with default headers
const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTION',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
});

// Function to make a POST request
const postData = async (data,setId) => {
  try {
    if(data['url'].length == 0)return;
    const response = await instance.post('/api/', data);
    console.log(response.data);
    setId(response.data.id);
    return response.data;

  } catch (error) {
    console.error('Error:', error);
  }
};

// Example usage
// postData({ name: 'John Doe', age: 30 })
//   .then(response => {
//     console.log('Success:', response);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

export default postData;