import { backAPI } from "./contactsAPI";

export const token = {
    set: token => {
        backAPI.defaults.headers.Authorization = `Bearer ${token}`
    },
    unSet: token => {
        backAPI.defaults.headers.Authorization = '';
    }
};

export const signUpUser = async credentials => {
    const { data } = await backAPI.post('users/signup', credentials)
    return data
};

export const loginUser = async credentials => {
    const { data } = await backAPI.post('users/login', credentials)
    return data
};

export const logoutUser = async () => {
    return backAPI.post('users/logout')
};

export const currentUser = async () => {
    const data = await backAPI.get('users/current')
    return data
};