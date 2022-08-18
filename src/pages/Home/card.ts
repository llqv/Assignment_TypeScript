import header from "../../components/Header/User"
import Product from "../../model/product"
import reRender from "../../ultilities/reRender"

const card = {
    render:async () =>{
        const item = JSON.parse(localStorage.getItem('cart'))
        if (item) {
            const res = item.filter(function (prod) {
                return prod.id != undefined
            })
        return /*html*/`
        ${header.render()}
        <!-- card begin -->
        <div class="container mx-auto justify-center p-8">
            <div class="flex justify-between w-[570px] h-[60px] mx-auto pb-8">
                <label class="flex text-lg font-semibold text-red-500" for="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pt-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      Trở về</label>
                <label class="text-2xl font-bold text-red-500" for="">Giỏ hàng</label>
                <label for=""></label>
            </div>
            ${res.map((item:Product) => `
            <div class="w-[570px] h-[300px] bg-white drop-shadow-md rounded-md mx-auto">
            <button id="del" class="float-right m-4" data-id="${item.id}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            </button>
                <div class="grid grid-cols-3 gap-4 p-2">
                    <div class="mx-auto p-4">
                        <img src="${item.image}"
                            width="193px" height="193px" alt="">
                    </div>
                    <div class="col-span-2">
                        <div class="mx-2">
                            <label class="text-xl font-semibold" for="">${item.name}</label><br>
                            <label class="text-red-500 font-medium" for="">${item.saleOffPrice}</label><br>
                            <label class="font-normal" for="">
                                Chọn số lượng <input class="border border-black w-[100px] mx-4" type="number">
                            </label>
                        </div>
                        <div class="w-[345px] h-[140px] bg-gray-200 border border-solid rounded-md mx-auto mt-4 font-normal">
                            <div class="mx-4">
                            <p> - Chương trình khuyến mãi :</p>
                            <label for="">
                                Dịch vụ phòng chờ hạng thương gia tại sân bay.
                                Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)
                            </label>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
                        `)}
                    </div>
                    
                    </div>
                    
                </div>
               
                <div class="w-[570px] h-[60px] bg-red-700 border border-slate-300 rounded-md mx-auto text-center justify-center p-4 mt-2 my-1">
                    <label class="text-white text-lg font-normal" for="">TIẾN HÀNH ĐẶT HÀNG</label>
                </div>
                <div class="w-[570px] h-[60px] bg-white border border-red-600 rounded-md mx-auto text-center justify-center p-4">
                    <label class="text-red-600 text-lg font-normal" for="">CHỌN THÊM SẢN PHẨM KHÁC</label>
                </div>
            </div>
        </div>
            <!-- card end -->
        `
    } else {
        return `
        ${header.render()}
        <!-- card begin -->
        <div class="container mx-auto justify-center p-8">
            <div class="flex justify-between w-[570px] h-[60px] mx-auto pb-8">
                <label class="flex text-lg font-semibold text-red-500" for="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pt-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      Trở về</label>
                <label class="text-2xl font-bold text-red-500" for="">Giỏ hàng</label>
                <label for=""></label>
            </div>
            <div class="w-[570px] h-[250px] bg-white drop-shadow-md rounded-md mx-auto">
                <div class="grid grid-cols-3 gap-4 p-2">
                    <div class="mx-auto p-4">
                    
                            width="193px" height="193px" alt="">
                    </div>
                    <div class="col-span-2">
                        <div class="mx-2">
                        
                            <label class="font-normal" for="">
                                Chọn số lượng <input class="border border-black w-[100px] mx-4" type="number">
                            </label>
                        </div>
                        <div class="w-[345px] h-[140px] bg-gray-200 border border-solid rounded-md mx-auto mt-4 font-normal">
                            <div class="mx-4">
                            <p> - Chương trình khuyến mãi :</p>
                            <label for="">
                                Dịch vụ phòng chờ hạng thương gia tại sân bay.
                                Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)
                            </label>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="w-[570px] h-[250px] bg-white border drop-shadow-md rounded-md mx-auto mt-2">
                <div class="grid grid-cols-3 gap-4 p-2">
                    <div class="mx-auto p-4">
                       
                            width="193px" height="193px" alt="">
                    </div>
                    <div class="col-span-2">
                        <div class="mx-2">
                            <label class="text-xl font-semibold" for="">Iphone 12 chính hãng VN/A</label><br>
                            <label class="text-red-500 font-medium" for="">15.900.000đ</label><br>
                            <label class="font-normal" for="">
                                Chọn số lượng <input class="border border-black w-[100px] mx-4" type="number">
                            </label>
                        </div>
                        <div class="w-[345px] h-[140px] bg-gray-200 border border-solid rounded-md mx-auto mt-4 font-normal">
                            <div class="mx-4">
                            <p> - Chương trình khuyến mãi :</p>
                            <label for="">
                                Dịch vụ phòng chờ hạng thương gia tại sân bay.
                                Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)
                            </label>
                        </div>
                    </div>
                    
                    </div>
                </div>
                <div class="flex justify-between ">
                       <p class="font-semibold">Tổng tiền tạm tính</p>
                       <p class="text-red-500">34.800.000 đ</p>
                </div>
                <div class="w-[570px] h-[60px] bg-red-700 border border-slate-300 rounded-md mx-auto text-center justify-center p-4 mt-2 my-1">
                    <label class="text-white text-lg font-normal" for="">TIẾN HÀNH ĐẶT HÀNG</label>
                </div>
                <div class="w-[570px] h-[60px] bg-white border border-red-600 rounded-md mx-auto text-center justify-center p-4">
                    <label class="text-red-600 text-lg font-normal" for="">CHỌN THÊM SẢN PHẨM KHÁC</label>
                </div>
            </div>
        </div>
            <!-- card end -->
        
        `
    }

},
afterRender: () => {

        const logout = document.querySelector("#logout")
        logout?.addEventListener('click', function () {
          localStorage.removeItem('user')
          alert("Đăng xuất thành công")
          location.href = "/signin"
        })

    const btns = document.querySelectorAll(".container #del")

    let cart = JSON.parse(localStorage.getItem('cart'))
    // const item = cart.data
    console.log(cart);

    for (let btn of btns) {
        const id = btn.dataset.id

        // cart = cart.filter(item = item.id != id)
        btn.addEventListener('click', async function () {
            // localStorage.removeItem('cart', 'id'=>id)
            const action = window.confirm("Bạn có muốn xóa sản phẩm khỏi giỏ hàng ?")
            if (action) {
                cart = cart.filter(cart => cart.id != id)
                const newUpdate = localStorage.setItem('cart', JSON.stringify(cart))

                reRender('#app', card)
                alert("Xóa sản phẩm thành công")
            }

        })
    }

}
}
export default card