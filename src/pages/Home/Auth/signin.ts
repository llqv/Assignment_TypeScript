import validator from 'validator'
import { signin } from '../../../api/auth';
import { register } from '../../../api/users';

const Signup = {
    render: async () => {
        return /*html*/`
        <div class="bg-gray-100 h-[100vh] flex justify-center items-center">
            <div class="w-[800px] bg-white flex">
            <div class="w-[500px] flex-none p-[45px]">
                <div class="">
                    <label class="block text-lg font-medium text-gray-700">Email</label>
                    <input id="email" class="block border w-full rounded-sm border-gray-200 mt-2 p-1 outline-none" type="text" >
                    <div class="text-red-500 text-sm hidden error"></div>
                </div>
                <div class="">
                    <label class="block text-md font-medium text-gray-700">Mật khẩu</label>
                    <input id="password" class="block border w-full rounded-sm border-gray-200 mt-2 p-1 outline-none" type="password" >
                    <div class="text-red-500 text-sm error"></div>
                </div>
                <button id="btn-submit" class="block mt-2 py-4 text-center bg-red-600 text-white w-full">Đăng nhập</button>
            </div>
            <div class="grow p-[55px] bg-gray-50 flex justify-center items-center">
                <img src="/images/logo.png" alt="">
            </div>
            </div>
        </div>
        `
    },
    afterRender: async () => {
        // Khai bao
        const submit = document.querySelector('#btn-submit')
        const formField = [
            "email", "phone", "password"
        ]
        const validate = function() {
            let data: any = {};
            let error = false
            const errors = document.querySelectorAll('.error')
            errors.forEach(e => {
                e.classList.add('hidden')
            })
            formField.forEach(field => {
                const element = document.getElementById(field)
                
                if(element?.value.length == 0) {
                    addError(element, "Không được để trống")
                    error = true;
                }

                if(field == "email") {
                    if(!validator.isEmail(element?.value)) {
                        addError(element, "Định dạng email sai")
                        error = true
                    }
                }
                data[field] = element?.value
            })
            return {error, data}
        }

        const addError = function(element: HTMLElement, message: string) {
            let temp = element.nextElementSibling;
            temp.classList.remove("hidden");
            temp.textContent = message;
            // element.style.borderColor = "red";
        }

        submit.onclick = async function () {
            const {error, data} = validate()
            if(!error) {
                try {
                    const res = await signin(data)
                    alert("Đăng nhập thành công")
                    localStorage.setItem('user', JSON.stringify(res.data.user))
                    if (localStorage.getItem("user")) {
                        try {
                            if (res.data.user.role == 1) {
                                location.href = "/admin"
                            }
                            else {
                                location.href = "/"
                            }
                        } catch (error) {
                            alert("Đăng nhập thất bại")
                        }

                    }
                } catch(error) {
                    alert(error.message)
                }
            }
        }
    }
}

export default Signup