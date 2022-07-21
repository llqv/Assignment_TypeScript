import Product from "../model/product";
import instance from "./instance";

export const createProduct = (product: Product) => {
    const url = "/products"
    return instance.post(url, product)
}
export const readProducts = (id:any) => {
    return instance.get(`/products/${id}`)
}

export const getProducts = () => {
    const url = "/products"
    return instance.get(url)
}

export const editProducts = (product : Product[]) => {
    return instance.put(`/products/${product.id}`, product)
}