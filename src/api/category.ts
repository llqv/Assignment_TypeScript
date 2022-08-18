import instance from "./instance"

export const getcategory = () => {
    const url = "/category"
    return instance.get(url)
}
export const categorybyId = (id: any) => {
    return instance.get(`/category/${id}`)
}