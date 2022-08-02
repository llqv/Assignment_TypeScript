import instance from "./instance";

class User {
    email: string;
    phone: string;
    password: string;
    constructor(email: string, phone: string, password: string) {
        this.email = email
        this.phone = phone
        this.password = password
    }
}

export const register = (user: User) => {
    const url = "/register"
    return instance.post(url, user)
}