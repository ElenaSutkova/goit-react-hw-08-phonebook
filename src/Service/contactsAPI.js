import axios from 'axios';

export const backAPI = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
});

export const getContacts = async () => {
    const { data } = await backAPI.get('/contacts')
    return data
};

export const addContacts = async contact => {
    const { data } = await backAPI.post('/contacts', contact)
    return data
};

export const delContacts = async id => {
    const { data } = await backAPI.delete(`/contacts/${id}`)
    return data
};