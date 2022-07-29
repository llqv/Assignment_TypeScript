import { getcategory } from '../../../api/category'
import { upload } from '../../../api/image'
import { editProducts, readProducts } from '../../../api/product'
import AdminHeader from '../../../components/Header/Admin'
import Sidebar from '../../../components/Sidebar'
import Product from '../../../model/product'
import category from '../../../model/categoty'


const EditProductPage = {
	render: async (id: any) => {
		const res = await readProducts(id)
		const data:Product = res.data
		console.log(data)

   const resone = await getcategory()
   const cate:category[] = resone.data

   console.log();
   

		return /*html*/`
		${AdminHeader.render()}
        ${Sidebar.render()}
       
		<div class="grid w-1/4 mx-auto">
        <h1 class="text-3xl font-bold mx-4">Thêm mới sản phẩm</h1>
        <div class="flex flex-col justify-center items-center border rounded-md w-[390px] h-[307px] mx-14 mt-14">
          <label htmlFor="">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clip-rule="evenodd" />
            </svg>
            <input id="input-file" type="file" class="hidden" accept="image/jpg, image/jpeg, image/png, image/webp" />
          </label>
          <div class="text-2xl font-semibold mt-4">Thêm ảnh</div>
          <img id="preview-image" />
        </div>
        <textarea class="w-[390px] h-[95px] border rounded-md mx-14 mb-64" placeholder="Mô tả ngắn" id="shortDescription">${data.shortDescription}</textarea>
      </div>
      <div class="w-full">
        <h1 class="text-xl font-semibold mx-4">Thông tin sản phẩm</h1>
        <p class="mt-4">
          <hr>
        </p>
        <div class="font-semibold mt-4">
          <h3 class="mx-4">Tên sản phẩm</h3>
          <input class="w-full border border-inherit rounded-md h-12 mx-4 mt-4 text-xl font-semibold" type="text" value="${data.name}" id="name">
        </div>
        <div class="flex">
        <div class="w-1/2 font-semibold mt-4">
          <h3 class="mx-4">Giá gốc</h3>
          <input class="border border-inherit rounded-md h-12 mx-4 text-xl font-semibold " type="number" value="${data.originalPrice}" id="originalPrice">
        </div>
        <div class="w-1/2 font-semibold mt-4">
        <h3 class="mx-4">Giá khuyến mại</h3>
          <input class="border border-inherit rounded-md h-12 mx-4 text-xl font-semibold" type="number" value="${data.saleOffPrice}" id="saleOffPrice">
        </div>
        </div>
        <div class="font-semibold mt-4 mx-auto">
          <h3 class="mx-4">Danh mục</h3>
            <select class="w-[450px] border border-inherit rounded-md h-12 mx-4 text-xl font-semibold" value="category" id="category">
            ${
             cate.map((category, index) => (
              `<option key=${index}>${category.name}</option>`
             )) 
            }             
          </select>
        </div>
        <div class="font-semibold mt-4 mx-4">
          <h3>Đặc điểm nổi bật</h3>
          <textarea class="w-full border border-inherit rounded-md h-[120px] mx-auto text-xl font-semibold" id="feature">  ${data.feature} </textarea>
        </div>
        <div class="font-semibold mt-4 mx-4">
          <h3>Mô tả dài</h3>
          <textarea class="w-full border border-inherit rounded-md h-[120px] mx-auto text-xl font-semibold" id="description"> ${data.description} </textarea>
        </div>
        <div>
          <button id="add-product-btn" class="text-sm font-semibold border rounded-md text-white bg-blue-500 h-[35px] w-[95px] mx-4 mt-4">Cập nhật</button>
        </div>
      </div>
    </div>
        `
	},
	afterRender: async (id: any) => {
		const addProductBtn = document.querySelector('#add-product-btn')
		console.log(addProductBtn)
		const inputFile = document.querySelector('#input-file')
		const previewImage = document.querySelector('#preview-image')
		console.log(id);
		const upid = id
		addProductBtn?.addEventListener('click', async (e) => {
      const name = (document.querySelector('#name') as HTMLInputElement).value
      const originalPrice = (document.querySelector('#originalPrice')as HTMLInputElement).value
      const saleOffPrice = (document.querySelector('#saleOffPrice')as HTMLInputElement).value
      const category = (document.querySelector('#category') as HTMLInputElement).value
      const feature = (document.querySelector('#feature') as HTMLInputElement).value
      const description = (document.querySelector('#description')as HTMLInputElement).value
      const shortDescription = (document.querySelector('#shortDescription')as HTMLInputElement).value
			const imageUrl = previewImage?.src
			const id = upid

			// const product = new Product(id,name, originalPrice, saleOffPrice, category, description, feature, shortDescription, imageUrl)
      const product:Product ={
        id:id,
        name:name,
        originalPrice:originalPrice ? Number(originalPrice) : 0,
        saleOffPrice:saleOffPrice ? Number(saleOffPrice) : 0,
        category:category,
        feature:feature,
        description:description,
        image:imageUrl,
        shortDescription:shortDescription
      } 
      console.log(product);
      try {
				const data = await editProducts(product)
				alert('Cập nhật thành công')
				location.href = "/admin"
			} catch (err) {
				console.log(err)
			}
		})

		inputFile?.addEventListener('change', async (e) => {
			// console.log(e.target.files)
			const file = e.target.files[0]
			const reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onloadend = async () => {
				try {
					const res = await upload(reader.result)
					const data = res.data
					previewImage.src = data.url
				} catch (err) {
					console.log(err)
				}
			}


			// console.log('xxxxx')
		})

	}
}

export default EditProductPage;