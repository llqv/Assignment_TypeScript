const AdminHeader = {
	render: () => {
		return (
            /*html*/`
			<div class="flex bg-blue-300 justify-between h-[63px] w-full">
			<img class="w-[64px] p-2" src="/images/logo.png" />
			<input class="h-[35px] w-[535px] m-auto border rounded-lg ml-96" type="search" placeholder="Search">
		  </div>
            `
		)
	}
}

export default AdminHeader