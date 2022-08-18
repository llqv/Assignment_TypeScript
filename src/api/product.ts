import Product from "../model/product";
import instance from "./instance";

export const createProduct = (product: Product) => {
    const url = "/products"
    return instance.post(url, product)
}
export const readProducts = (id:string) => {
    return instance.get(`/products/${id}`)
}

export const getProducts = () => {
    const url = "/products"
    return instance.get(url)
}

export const editProducts = (product : Product[]) => {
    return instance.put(`/products/${product.id}`, product)
}

export const removeProducts = (product : Product[]) => {
    return instance.delete(`/products/${product.id}`, product)
}
export const Listbycate = (category: number) => {
    return instance.get(`/products?category=${category}`)
}