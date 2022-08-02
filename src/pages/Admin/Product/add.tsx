import { getcategory } from "../../../api/category"
import { UploadFile } from "../../../api/image"
import { createProduct } from "../../../api/product"
import AdminHeader from "../../../components/Header/Admin"
import Sidebar from "../../../components/Sidebar"
// import { isEmpty, isNumber } from 'lodash'

const AddProductPage = {
  render: async () => {
    const res = await getcategory()
    const categories = res.data
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
                                <input accept=".jpg, .jpeg .png, .svg, .webp" class="relative z-10 opacity-0 h-full w-full cursor-pointer  drop-shadow-md" type="file" name="bgfile" id="image">
                                <div class="absolute  right-0 left-0 w-full h-full m-auo flex justify-center drop-shadow-md">
                                    <div class="text-center ">
                                      <svg xmlns="http://www.w3.org/2000/svg" id="plus" class="w-20 h-20 translate-y-28 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                                      </svg>
                                      <img class="w-72 max-h-[200px] my-auto"  id="preview" />
                                    </div>
                                </div>
                            </div>
                            
                          <br>
                          <div class="mt-5">
                            <textarea id="shortDescription" class="w-full rounded-md p-3" rows="5"  placeholder="Mô tả ngắn:"></textarea>
                            <div class="text-red-500 text-left" id="short-description-error"></div>
                          </div>
                        </div>
                        <div class="col-span-2 text-gray-700">
                          <h1 class="text-[16px] text-lg">Thông tin sản phẩm</h1>
                          <hr>
                          <div class="mt-5">
                            <label for="">Tên sản phẩm</label>
                            <br>
                            <input id="name" class="w-full mr-10 rounded-md h-8 p-3" type="text">
                            <div class="text-red-500" id="name-error"></div>
                          </div>
                          <div class="flex">
                            <div class="mt-5 w-1/2 mr-1">
                              <label for="">Giá gốc</label>
                              <br>
                              <input id="originalPrice" class="w-full mr-10 rounded-md h-8 p-3" type="number">
                              <div class="text-red-500" id="price-error"></div>
                            </div>
                            <div class="mt-5 w-1/2 ml-1">
                              <label for="">Giá khuyến mãi</label>
                              <br>
                              <input id="saleOffPrice" class="w-full mr-10 rounded-md h-8 p-3" type="number">
                            <div class="text-red-500" id="sale-error"></div>
                            </div>
                          </div>
                          <div class="mt-5 w-1/2">
                            <label for="">Danh mục</label>
                            <br>
                            <select class="w-full mr-10 rounded-md h-8 my-4" name="" id="category">
                              ${categories.map((item) => `
                              <option value="${item.id}">${item.name}</option>
                              `)}
                            </select>
                          </div>
                          <div class="">
                            <label for="">Đặc điểm nổi bật</label>
                            <br>
                            <textarea class="w-full rounded-md p-3" name="" id="feature" cols="30" rows="10" id="feature"></textarea>
                            <div class="text-red-500" id="feature-error"></div>
                            </div>
                          <div class="">
                            <label for="">Mô tả dài</label>
                            <br>
                            <textarea  class="w-full rounded-md p-3" name="" id="description" cols="30" rows="10"></textarea>
                            <div class="text-red-500 my-1" id="description-error"></div>
                            <br>
                            </div>
                        <button class="w-[96px] h-[34px] bg-blue-400 hover:bg-blue-500 text-white rounded-md" type="submit" id="btn-add">Thêm mới</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
        `
  },
  // afterRender: async () => {
  //       const addProductBtn = document.querySelector('#add-product-btn')
  //       console.log(addProductBtn)
  //       const inputFile = document.querySelector('#input-file')
  //       const previewImage = document.querySelector('#preview')

  //       addProductBtn?.addEventListener('click', async (e) => {
  //           const name = (document.querySelector('#name') as HTMLInputElement).value
  //           const originalPrice = (document.querySelector('#price')as HTMLInputElement).value
  //           const saleOffPrice = (document.querySelector('#sale')as HTMLInputElement).value
  //           const category = (document.querySelector('#category') as HTMLInputElement).value
  //           const feature = (document.querySelector('#feature') as HTMLInputElement).value
  //           const description = (document.querySelector('#description')as HTMLInputElement).value
  //           const shortDescription = (document.querySelector('#shortDescription')as HTMLInputElement).value
  //           const imageUrl = previewImage?.src
  //         // console.log(shortDescription);
          
  //           // const product = new Product(name, originalPrice, imageUrl, saleOffPrice, category, feature, description,shortDescription)
  //           const product:Product ={
  //             name:name,
  //             originalPrice:originalPrice ? Number(originalPrice) : 0,
  //             saleOffPrice:saleOffPrice ? Number(saleOffPrice) : 0,
  //             category:category,
  //             feature:feature,
  //             description:description,
  //             image:imageUrl,
  //             shortDescription:shortDescription
  //           } 
  //           console.log(product);
            
  //           try {
  //               const data = await createProduct(product)
  //               alert('Thêm mới thành công')
  //               location.href = "/admin"
  //           } catch (err) {
  //               console.log(err)
  //           }
  //       })

  //   // FORM
  //   const formFields = [
  //     { selector: "#short-description", key: "shortDescription" },
  //     { selector: "#name", key: "name" },
  //     { selector: "#price", key: "price" },
  //     { selector: "#sale", key: "sale" },
  //     // { selector: "#category", key: "category" },
  //     { selector: "#feature", key: "feature" },
  //     { selector: "#description", key: "description" },
  //   ]
  //   function validate() {
  //     const result = {
  //       data: {},
  //       errors: []
  //     }
  //     formFields.forEach(item => {
  //       const value = document.querySelector(item.selector)?.value
  //       const errorElement = document.querySelector(item.selector + "-error")
  //       if (!value) {
  //         // debugger
  //         errorElement.innerHTML = "Yêu cầu phải nhập"
  //         result.errors.push(item.key)
  //       } else {
  //         errorElement.innerHTML = ""
  //       }
  //       result.data[item.key] = value
  //     })
  //     return result
  //   }

  //   addProductBtn?.addEventListener('click', async (e) => {
  //     const result = validate()
  //     console.log(result)
  //     if (isEmpty(result.errors)) {
  //       try {
  //         const data = await createProduct(result.data)
  //         alert('Thêm mới thành công')
  //         location.href = "/admin"
  //       }
  //       catch (err) {
  //         console.log(err)
  //       }
  //     }
  //   })

  //   inputFile?.addEventListener('change', async (e) => {
  //     // console.log(e.target.files)
  //     const file = e.target.files[0]
  //     const reader = new FileReader()
  //     reader.readAsDataURL(file)
  //     reader.onloadend = async () => {
  //       try {
  //         const res = await UploadFile(reader.result)
  //         const data = res.data
  //         previewImage.src = data.url
  //       } catch (err) {
  //         console.log(err)
  //       }
  //     }
  //   })

  // }
  afterRender: () => {
    const addProduct = document.querySelector("#btn-add")
    const preview = document.querySelector("#preview")
    const plus = document.querySelector("#plus")
    const image = document.querySelector("#image")
    addProduct?.addEventListener('click', async function (e) {
      e.preventDefault
      const name = document.querySelector('#name')?.value
      const originalPrice = document.querySelector('#originalPrice')?.value
      const saleOffPrice = document.querySelector('#saleOffPrice')?.value
      const description = document.querySelector('#description')?.value
      const shortDescription = document.querySelector('#shortDescription')?.value
      const feature = document.querySelector('#feature')?.value
      const category = document.querySelector('#category')?.value

      const product: Products = {
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
        const data = await createProduct(product)
            alert('Thêm mới thành công')
            location.href = "/admin"
          }
          catch (err) {
            console.log(err)
          }
    })
    //Add event upload
    image?.addEventListener('change', async (e) => {
      const file = e.target.files[0]
      plus.classList = "hidden"
      const res = await UploadFile(file)
      const data = res.data
      preview.src = data.url

    })

  }
}

export default AddProductPage