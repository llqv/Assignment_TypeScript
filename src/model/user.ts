class User {
    email: String;
    phone: number;
    password: string;
    id: number;
    role: number;
    constructor(
        phone: number,
        password: string,
        email: String, id: number,
        role: number
    )
    {
        this.id = id
        this.email = email
        this.phone = phone
        this.password = password
        this.role = role
    }
}