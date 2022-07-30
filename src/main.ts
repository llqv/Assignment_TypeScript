import './style.css'
import Navigo from 'navigo'
import AdminPage from './pages/Admin'
import HomePage from './pages/Home/homePage'
import AddProductPage from './pages/Admin/Product/add'
import EditProductPage from './pages/Admin/Product/edit'
import signin from './pages/Home/Auth/signin'
import signup from './pages/Home/Auth/signup'
import card from './pages/Home/card'

const router = new Navigo('/', {linksSelector: "a"})

export type ComponentBase = {
  render: (id:any) => Promise<string>;
  afterRender?: () => void
}

const print = async (component: ComponentBase,id:ComponentBase, params?: any) => {
  document.getElementById('app').innerHTML = await component.render(id)
  if(component.afterRender) {
    component.afterRender(id)
  }
}

router.on({
  "/": () => {
    print(HomePage)
  },
  "/signin": () => {
    print(signin)
  },
  "/signup": () => {
    print(signup)
  },
  "/card": () => {
    print(card)
  },
  "/admin": () => {
    print(AdminPage)
  },
  "/admin/products/add": () => {
    print(AddProductPage)
  },
  "/admin/product/edit/:id": (data: any) => {
    const id = +data.data.id
    console.log(id);
    
    print(EditProductPage, id)
  },
})
router.resolve()