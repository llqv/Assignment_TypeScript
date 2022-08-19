import { readProducts } from "../../api/product"
import Footer from "../../components/footer"
import header from "../../components/Header/User"
import Product from "../../model/product"

const DetailProduct = {
    render: async (id: any) => {
        const data = await readProducts(id)
        const res: Product = data.data
        return `
        ${header.render()}
        <div class="container w-[1000px] mx-auto">
        <section class="">
            <div class=" mx-auto px-5">
                <ul class="flex justify-start space-x-5 font-mono capitalize">
                    <li><a href="/">Trang chủ</a></li>
                    <li><a>Điện thoại</a></li>
                    <li><a href="/product/${res.id}"></a>${res.name}</li>
                </ul>
                <div class="capitalize font-mono ">
                    <h2>${res.name}</h2>
                    <hr>
                </div>
            </div>
        </div>
        <div class=" grid grid-cols-4 gap-5 my-5 mx-64">
            <div>
                <img src="${res.image}"
                    class=" w-[358px] h-[358px] " alt="">
                <div class="flex mt-7 text-[7px] text-center ">
                    <a class="inline-black w-12 h-12 rounded-md  border-2 border-red-600" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        Đặc điểm nổi bật
                        
                    </a>
                    <div class="w-12 h-12 mx-1 rounded-lg object-cover border-2 border-stone-400 ">
                        <img src="${res.image}" alt="">
                    </div>
                    <div class="w-12 h-12 mx-1 rounded-lg object-cover border-2 border-stone-400 ">
                        <img src="${res.image}" alt="">
                    </div>
                    <div class="w-12 h-12 mx-1 rounded-lg object-cover border-2 border-stone-400 ">
                        <img src="${res.image}" alt="">
                    </div>
                    <div class="w-12 h-12 mx-1 rounded-lg object-cover border-2 border-stone-400 ">
                        <img src="${res.image}" alt="">
                    </div>
                </div>
            </div>
            <div>
                <div class="col-span-3">
                    <div class="flex">
                        <div class="mx-1">
                            <div class="text-red-600 text-3xl">
                                <p>${res.saleOffPrice}</p>
                            </div>
                        </div>
                        <div class="mt-3 mx-2">
                            <div class="text-stone-400">
                                <p>${res.originalPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-base w-[882px] h-[157px]">
                       ${res.shortDescription}
                    </div>
                    <div class="flex mt-[194px]">
                        <a href="#" class="">
                            <div class=" inline-black bg-red-600 py-3 px-10 rounded-md text-white">
                                Mua ngay
                            </div>
                        </a>
                        <a class="mx-5" href="#" id="add-cart">
                            <div class="inline-black w-12 h-12 rounded-md border-2 border-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 text-red-600 w-8 mx-auto mt-2"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </a>
                        <a class="" href="#">Thêm vào giỏ hàng</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class=" text-center text-red-700 text-2xl mt-16">
                <h2>ĐẶC ĐIỂM NỔI BẬT</h2>
            </div>
            <section class="bg-stone-300 container max-h-50	mt-20 rounded-lg mx-auto ">
            <div class="mt-3">
                ${res.feature}
            </div>
        </section>
        <div class="mx-auto container my-10">
            ${res.description}
        </div>
        </div>
        </div>
        <hr>
        ${Footer.render()}
        `
    },
    afterRender: (id) => {


        const logout = document.querySelector("#logout")
        logout?.addEventListener('click', function () {
            localStorage.removeItem('user')
            alert("Đăng xuất thành công")
            location.href = "/signin"
        })

        const addCart = document.querySelector("#add-cart")
        addCart?.addEventListener('click', async function () {

            //get data product
            const product = await readProducts(id)
            const data = product.data


            //set data cart
            const cart = JSON.parse(localStorage.getItem("cart"))
            if (cart) {
                const index = cart.findIndex(x => x.id == data.id)
                if (index === -1) {
                    cart.push({ ...data, quality: 1 })
                }
                else {
                   console.log(cart[index]);
                   
                    cart[index] = {
                        ...data, quality: Number(cart[index].quality) + 1
                    }
                }
                localStorage.setItem("cart", JSON.stringify([...cart]))
            } else {
                localStorage.setItem("cart", JSON.stringify([data.id]))
            }
            const newCart = JSON.parse(localStorage.getItem("cart"))
            console.log(newCart, "localstorage");

            alert("Đã thêm vào giỏ hàng")
        })


    }
}

export default DetailProduct