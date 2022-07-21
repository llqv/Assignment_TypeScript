import instance from "./instance"

export const getcategory = () => {
    const url = "/category"
    return instance.get(url)
}