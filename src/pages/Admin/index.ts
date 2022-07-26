import { infoUser } from "../../api/auth"
import { categorybyId, getcategory } from "../../api/category"
import { getProducts, Listbycate } from "../../api/product"
import AdminHeader from "../../components/Header/Admin"
import Sidebar from "../../components/Sidebar"
import category from "../../model/categoty"
import Product from "../../model/product"
import reRender from "../../ultilities/reRender"


const AdminPage = {
    render: async () => {
        
        var data

        const resone = await getcategory()
        const cate: category[] = resone.data
        var key
        var cateID
        const query = window.location.search
        const urlParams = new URLSearchParams(query)
        const rescategory = urlParams.get('category')
     
        if (rescategory) {
            data = await Listbycate(rescategory)
            console.log(data.data);
            
            cateID = await categorybyId(rescategory)
        } else {
            data= await getProducts()
            key = await getcategory()
        }
        const res = data.data
        let reskey = data.data
        const cates = await getcategory()
        

        if (localStorage.getItem("user")) {
            try {
                const result =JSON.parse(localStorage.getItem("user"))
                if (result.role == 0) {
                    window.location.href = "/";
                }            }
                catch (error) {
                   alert("Bạn không có quyền truy cập")
                   localStorage.removeItem("user")
                   window.location.href = "/signin"
               }
   
           
           }
           else {
               alert("Bạn không có quyền truy cập")
               localStorage.removeItem("user")
               window.location.href = "/signin"
           }
      
        
                return /*html*/`
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <div class="grow px-4">
                <div class="flex justify-between">
                    <div>
                    <h1 class="text-3xl font-semibold">Sản phẩm chung</h1>
                    </div>
                    
                    <a href="/admin/products/add">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-[50px] w-[50px] mr-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </a>
                </div>
                <div class="font-semibold mt-4 mx-auto">
                <h3 class="mx-4">Danh mục</h3>
                  <select class="w-[450px] border border-inherit rounded-md h-12 mx-4 text-xl font-semibold" id="cleanse">
                  ${cate.map((category, index) => 
                    `<option value=${index}>${category.name}</option>`
                )
                    }          
                </select>
              </div>
                <table class="w-full table-auto border mt-8">
                    <thead class="h-12">
                    <tr>
                        <th class="w-[5%] border">#</th>
                        <th class="w-[20%] border">Tên sản phẩm</th>
                        <th class="w-[10%] border">Giá</th>
                        <th class="w-[15%] border">Ảnh</th>
                        <th class="w-[30%] border">Mô tả</th>
                        <th class="w-[10%] border text-center">Ẩn hiện</th>
                        <th class="w-[10%] border">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    ${res.map((p:Product, index) => /*html*/`
                        <tr>
                            <td class="border text-center h-12">${index + 1}</td>
                            <td class="border text-center h-12">${p.name}</td>
                            <td class="border text-center h-12">${p.originalPrice}</td>
                            <td class="border text-center h-12"><img class="w-[100px] mx-auto m-1" src="${p.image}"/></td>
                            <td class="border text-center h-12">${p.description}</td>
                            <td class="border text-center h-12">
                                <svg class="mx-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 15.5C17.7849 15.5 19.2778 14.137 19.464 12.3681C19.4897 12.1245 19.4897 11.8755 19.464 11.6319C19.2778 9.86302 17.7849 8.5 16 8.5C14.2152 8.5 12.7222 9.86302 12.536 11.6319C12.5104 11.8755 12.5104 12.1245 12.536 12.3681C12.7222 14.137 14.2152 15.5 16 15.5Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9257 18.75H8.07434C4.75284 18.75 1.92497 16.3336 1.40694 13.0527C1.29681 12.3552 1.29681 11.6448 1.40694 10.9473C1.92497 7.6664 4.75285 5.25 8.07434 5.25H15.9257C19.2472 5.25 22.075 7.6664 22.5931 10.9473C22.7032 11.6448 22.7032 12.3552 22.5931 13.0527C22.075 16.3336 19.2472 18.75 15.9257 18.75ZM15.9257 17.25C18.5091 17.25 20.7085 15.3706 21.1114 12.8188C21.1971 12.2763 21.1971 11.7237 21.1114 11.1812C20.7085 8.62942 18.5091 6.75 15.9257 6.75L8.07434 6.75C5.49096 6.75 3.2915 8.62942 2.88859 11.1812C2.80293 11.7237 2.80293 12.2763 2.88858 12.8188C3.2915 15.3706 5.49095 17.25 8.07434 17.25H15.9257Z" fill="black"/>
                                </svg>
                            </td>
                            <td class="border">
                            <a href="/admin/products/edit/${p.id}">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                </a>
                            </td>
                        </tr>
                    `).join('')}
                    </tbody>
                </table>         
            </div>
        </div>
        `



    },
    afterRender : (id) => {
        const cleanse = document.getElementById('cleanse')
        cleanse?.addEventListener('change', async function(e) 
        {
        const target = e.target.value
        console.log(target);
        
        if (target == 0) {
            history.replaceState(null, null, null)
            location.href="/admin"
        }    
        else{
            history.replaceState(null, null, `?category=${e.target.value}`)
            reRender('#app', AdminPage)  
        }
        })
    }
   
}





export default AdminPage