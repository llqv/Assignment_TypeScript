const header = {
    render: () => {
      if (localStorage.getItem("user")) {
        try {
            const result = JSON.parse(localStorage.getItem("user"))
            if (result.role == 0) {
                window.location.href = "/";
            }            
          }catch (error) {
               alert("Bạn không có quyền truy cập")
               localStorage.removeItem("user")
               window.location.href = "/signin"
           }
        return /*html*/`
        <!-- header begin -->
        <div class="h-[64px] bg-[#D70018]">
            <div class="container mx-auto flex justify-start">
              <a href="/">
                <img class="w-[200px] -mb-2" src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL0gvRFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0d8cef178a9a6fb63857d25eaa55766d51abba78/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--ee4e4854f68df0a745312d63f6c2782b5da346cd/cellphones-logo.png" alt="">
              </a>
              <form class="my-4 mx-10" action="">
                <input type="text" class="w-[533px] h-[34px] rounded-md" name="" id="">
              </form>
              <div class="text-white flex">
                <a class="my-2 mx-6" href="#">Gọi mua hàng<br>1800.2097</a>
                <a class="flex w-[150px] my-2" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="my-1  h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>Cửa hàng <br> gần bạn
                </a>
                <a class="flex w-[150px] my-2 -mr-5" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 my-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>Tra cứu <br> đơn hàng
                </a>
                <a href="/card" class="flex w-[100px] my-2 " href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 my-1 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Giỏ hàng
                </a>
              </div>
              <button id="logout" class="flex w-[100px] my-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 my-1 mx-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              </button>
            </div>
           </div>
        <!-- header end -->
        `
      }
      else{
        return`
        <!-- header begin -->
        <div class="h-[64px] bg-[#D70018]">
            <div class="container mx-auto flex justify-start">
              <a href="/">
                <img class="w-[200px] -mb-2" src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL0gvRFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0d8cef178a9a6fb63857d25eaa55766d51abba78/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--ee4e4854f68df0a745312d63f6c2782b5da346cd/cellphones-logo.png" alt="">
              </a>
              <form class="my-4 mx-10" action="">
                <input type="text" class="w-[533px] h-[34px] rounded-md" name="" id="">
              </form>
              <div class="text-white flex">
                <a class="my-2 mx-6" href="#">Gọi mua hàng<br>1800.2097</a>
                <a class="flex w-[150px] my-2" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="my-1  h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>Cửa hàng <br> gần bạn
                </a>
                <a class="flex w-[150px] my-2 -mr-5" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 my-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>Tra cứu <br> đơn hàng
                </a>
                <a href="/card" class="flex w-[100px] my-2 " href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 my-1 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Giỏ hàng
                </a>
              </div>
              <a href="/signin">
              <div class="flex w-[100px] my-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 my-1 mx-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
            </a>
             </div>
            </div>
           </div>
        <!-- header end -->
        `
      }
    },
    afterRender : () => {
     
    }
}
export default header