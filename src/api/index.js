import axios from 'axios';

const url="http://localhost:5000"

export const fetchItems = async () => axios.get(url);
export const createItem = (newItem) => axios.post(url,newItem);