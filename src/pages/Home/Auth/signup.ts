const signup = {
    render: async () =>{
        return /*html*/`
        <!-- Sign Up -->
        <div class="h-full p-4">
            <div class="grid grid-cols-3 w-[800px] mx-auto border border-gray my-[200px] h-[508px] bg-slate rounded-2xl">     
                <div class="col-span-2">
                    <div class="pt-36 mx-4">
                    <div class="">
                        <label class="text-xl font-semibold" for="">Email</label>
                        <br>
                        <input class="h-[40px] w-[400px] border border-black rounded-md" type="password">
                    </div>
                    <div class="mt-4">
                        <label class="text-xl font-semibold" for="">Số điện thoại</label>
                        <br>
                        <input class="h-[40px] w-[400px] border border-black rounded-md" type="text">
                    </div>
                    <div class="mt-4">
                        <label class="text-xl font-semibold" for="">Mật khẩu</label>
                        <br>
                        <input class="h-[40px] w-[400px] border border-black rounded-md" type="text">
                    </div>
                </div>
                <button class="w-[400px] h-[48px] border bg-[#FF424E] text-white rounded-md mx-4 mt-2">Đăng ký</button>
                <div class="text-lg mt-2 mx-32">
                    <label for="">Hoặc đăng nhập bằng</label>
                </div>
                </div>
                <div class="bg-gray-100">
                    <img class="w-2/4 mx-auto py-44" src="https://cdn.sforum.vn/sforum/wp-content/uploads/2021/06/logo-s.png" alt="">
                </div>
            </div>
            
            </div>
            <!-- End Sign Up -->
        `
    }
}
export default signup