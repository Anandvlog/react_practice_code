// import React from 'react';
import axios from 'axios';

const createApi = axios.create({
   baseURL:"https://jsonplaceholder.typicode.com",
});


export default createApi;