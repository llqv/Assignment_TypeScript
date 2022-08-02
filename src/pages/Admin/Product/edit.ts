import { getcategory } from '../../../api/category'
import {  UploadFile } from '../../../api/image'
import { editProducts, readProducts } from '../../../api/product'
import AdminHeader from '../../../components/Header/Admin'
import Sidebar from '../../../components/Sidebar'
import Product from '../../../model/product'
import category from '../../../model/categoty'


const EditProductPage = {
  render: async (id: any) => {
    const res = await readProducts(id)
    const data: Product = res.data
    console.log(data)

    const resone = await getcategory()
    const cate: category[] = resone.data
    console.log();


    return /*html*/`
    ${AdminHeader.render()}
    <div class="flex mt-3">
        <div class="w-[250px] flex-none">
        ${Sidebar.render()}
        </div>
        <div class="bg-gray-100 w-full ">
        <div class="mx-auto w-[87%] pb-10">
        <div class="bg-gray-100 w-full">
            <div class="mx-10">
                <div class="flex justify-between my-5">
                    <h1 class="text-xl font-bold">
                        Thêm mới sản phẩm
                    </h1>
                </div>
                <div id="formAdd" action="">
                  <div class="grid grid-cols-3 gap-4 ">                
                      <div class="bg-white text-center mb-3 w-full text-gray-700 h-[310px] drop-shadow-md">
                      <div class="text-red-500" id="error-img"></div>
                        <div class="relative w-full h-64 mb-6 flex justify-center items-center text-center ">
                            <input accept=".jpg, .jpeg .png, .svg, .webp" class="relative z-10 opacity-0 h-full w-full cursor-pointer drop-shadow-md" type="file" name="bgfile" id="image">                            <div class="absolute  right-0 left-0 w-full h-full m-auo flex justify-center drop-shadow-md">
                                <div class="text-center ">
                                  <svg xmlns="http://www.w3.org/2000/svg" id="plus" class="w-20 h-20 translate-y-28 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                                  </svg>
                                  <img class="w-72 max-h-[200px] my-auto" src="${data.image}" id="preview" />
                                </div>
                            </div>
                        </div>
                        
                      <br>
                      <div class="mt-5">
                        <textarea id="short-description" class="w-full rounded-md p-3" rows="5" placeholder="Mô tả ngắn:">${data.shortDescription}</textarea>
                        <div class="text-red-500 text-left" id="short-description-error"></div>
                      </div>
                    </div>
                    <div class="col-span-2 text-gray-700">
                      <h1 class="text-[16px] text-lg">Thông tin sản phẩm</h1>
                      <hr>
                      <div class="mt-5">
                        <label for="">Tên sản phẩm</label>
                        <br>
                        <input id="name" class="w-full mr-10 rounded-md h-8 p-3" type="text" value="${data.name}">
                        <div class="text-red-500" id="name-error"></div>
                      </div>
                      <div class="flex">
                        <div class="mt-5 w-1/2 mr-1">
                          <label for="">Giá gốc</label>
                          <br>
                          <input id="originalPrice" class="w-full mr-10 rounded-md h-8 p-3" type="number" value="${data.originalPrice}">
                          <div class="text-red-500" id="price-error"></div>
                        </div>
                        <div class="mt-5 w-1/2 ml-1">
                          <label for="">Giá khuyến mãi</label>
                          <br>
                          <input id="saleOffPrice" class="w-full mr-10 rounded-md h-8 p-3" type="number value="${data.saleOffPrice}"">
                        <div class="text-red-500" id="sale-error"></div>
                        </div>
                      </div>
                      <div class="mt-5 w-1/2">
                        <label for="">Danh mục</label>
                        <br>
                        <select class="w-full mr-10 rounded-md h-8 my-4" name="" id="category">
                          ${cate.map((item) => `
                          <option value="${item.id}">${item.name}</option>
                          `)}
                        </select>
                      </div>
                      <div class="">
                        <label for="">Đặc điểm nổi bật</label>
                        <br>
                        <textarea class="w-full rounded-md p-3" name="" id="feature" cols="30" rows="10">${data.feature}</textarea>
                        <div class="text-red-500" id="feature-error"></div>
                        </div>
                      <div class="">
                        <label for="">Mô tả dài</label>
                        <br>
                        <textarea  class="w-full rounded-md p-3" name="" id="description" cols="30" rows="10">${data.description}</textarea>
                        <div class="text-red-500 my-1" id="description-error"></div>
                        <br>
                        </div>
                    <button class="w-[96px] h-[34px] bg-blue-400 hover:bg-blue-500 text-white rounded-md" type="submit" id="btn-edit">Cập nhật</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
        `
  },
  // afterRender: (id:any) => {
  //   const editProduct = document.querySelector("#btn-edit")
  //   const preview = document.querySelector("#preview")
  //   const plus = document.querySelector("#plus")
  //   const image = document.querySelector("#image")
  //   const upid = id 
  //   editProduct?.addEventListener('click', async function (e) {
  //     e.preventDefault

  //     const name = document.querySelector('#name')?.value
  //     const originalPrice = document.querySelector('#originalPrice')?.value
  //     const saleOffPrice = document.querySelector('#saleOffPrice')?.value
  //     const description = document.querySelector('#description')?.value
  //     const shortDescription = document.querySelector('#shortDescription')?.value
  //     const feature = document.querySelector('#feature')?.value
  //     const category = document.querySelector('#category')?.value
  //     const id = upid

  //     const product: Products = {
  //       id:id,
  //       name: name,
  //       image: preview?.src,
  //       originalPrice: originalPrice,
  //       saleOffPrice: saleOffPrice,
  //       description: description,
  //       shortDescription: shortDescription,
  //       feature: feature,
  //       category: category
  //     }

  //     try {
  //       const data = await editProducts(product)
  //           alert('Cập nhật thành công')
  //           location.href = "/admin"
  //         }
  //         catch (err) {
  //           console.log(err)
  //         }
  //   })
  //   //Add event upload
  //   image?.addEventListener('change', async (e) => {
  //     const file = e.target.files[0]
  //     plus.classList = "hidden"
  //     const res = await UploadFile(file)
  //     const data = res.data
  //     preview.src = data.url

  //   })

  // }
  afterRender: (id:any) => {
    const editProduct = document.querySelector("#btn-edit")
    const preview = document.querySelector("#preview")
    const plus = document.querySelector("#plus")
    const image = document.querySelector("#image")
    const upid = id
    if (preview.src) {
      plus.classList = "hidden" 
     }
    editProduct?.addEventListener('click', async function (e) {
      e.preventDefault
      const name = document.querySelector('#name')?.value
      const originalPrice = document.querySelector('#originalPrice')?.value
      const saleOffPrice = document.querySelector('#saleOffPrice')?.value
      const description = document.querySelector('#description')?.value
      const shortDescription = document.querySelector('#shortDescription')?.value
      const feature = document.querySelector('#feature')?.value
      const category = document.querySelector('#category')?.value
      const id = upid
      const product: Products = {
        id:id,
        name: name,
        image: preview?.src,
        originalPrice: originalPrice,
        saleOffPrice: saleOffPrice,
        description: description,
        shortDescription: shortDescription,
        feature: feature,
        category: category
      }

      try {
        const data = await editProducts(product)
            alert('Cập nhật thành công')
            location.href = "/admin"
          }
          catch (err) {
            console.log(err)
          }
    })
    //Add event upload
    image?.addEventListener('change', async (e) => {
      const file = e.target.files[0]
      const res = await UploadFile(file)
      const data = res.data
      preview.src = data.url

    })

  }
}

export default EditProductPage;