import instance from "./instance";

export const signup = (user: User) => {
    return instance.post('/signup', user);
};
export const signin = (user: User) => {
    return instance.post(`/signin`, user);
};
export const infoUser = (token: string) => {
    const url = `/infoUser/${token}`
    return instance.get(url)
}