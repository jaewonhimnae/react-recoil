import { atom, selector } from "recoil";
import axios from 'axios';

export const currentUserIdState = atom({
    key: 'CurrentUserId',
    default: 1,
});

export const currentUserNameQuery = selector({
    key: 'CurrentUserName',
    get: async ({ get }) => {
        const path = "https://jsonplaceholder.typicode.com/users/"
        const response = await axios.get(`${path}${get(currentUserIdState)}`);
        return response.data.name;
    },
});

