import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID f1e10e15763395c5ff52531046ec6e834983f765c08ff296bac84c822e000710'
  }
});
