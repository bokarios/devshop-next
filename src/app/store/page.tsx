import List from '@/components/list'
import ProductsGrid from '@/components/products-grid'
import { Product } from '@/lib/definitions'
import {
	ChevronRightIcon,
	ChevronUpDownIcon,
} from '@heroicons/react/24/outline'

export default async function StoreView() {
	const products: Product[] = await getProducts()
	let currentPage = 1
	const perPage = 6
	let sort = 'new first'
	const sortDropdown = false

	const categories = [
		{ id: 1, name: 'Electronics', productsCount: 6 },
		{ id: 2, name: 'Men', productsCount: 4 },
		{ id: 3, name: 'Women', productsCount: 6 },
		{ id: 4, name: 'Jewelry', productsCount: 4 },
	]

	async function getProducts(): Promise<Product[]> {
		const res = (
			await fetch('https://fakestoreapi.com/products')
		).json()

		return res
	}

	const indexOfLastProduct = currentPage * perPage
	const indexOfFirstProduct = indexOfLastProduct - perPage
	const currentProducts = products.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	)

	return (
		<div className="w-full bg-gray-100">
			<div className="mx-auto w-full max-w-[1440px] px-16 py-20">
				<div className="flex gap-14">
					<div className="w-[375px]">
						<div className="mb-10 flex gap-2">
							<input
								type="text"
								className="h-12 w-full px-3 text-lg placeholder-gray-500 focus:outline-[#0084d6]"
								placeholder="Search products..."
							/>
							<button className="flex h-12 w-12 items-center justify-center bg-[#0084d6]">
								<ChevronRightIcon
									strokeWidth={2.5}
									className="w-5 text-white"
								/>
							</button>
						</div>
						<List title="Categories" items={categories} />
					</div>
					<div className="w-full bg-white px-28 py-16">
						<div className="mb-8 flex items-center gap-1">
							<h6 className="font-normal text-gray-500">
								Home
							</h6>
							<h6 className="font-normal text-gray-500">
								/
							</h6>
							<h6 className="font-normal text-gray-500">
								Store
							</h6>
						</div>
						<div className="mb-16 flex items-center justify-between">
							<h4 className="text-lg font-normal text-gray-500">
								{`${indexOfFirstProduct + 1} to ${
									indexOfLastProduct > products.length
										? products.length
										: indexOfLastProduct
								} of ${products.length} products`}
							</h4>
							<div className="flex gap-4">
								<button className="relative flex w-[140px] items-center justify-between text-lg font-normal capitalize text-gray-500">
									{sort}
									<span>
										<ChevronUpDownIcon className="w-5 text-gray-800" />
									</span>
									<div
										className={`ease absolute bottom-[-100px] left-0 w-[130px] transition-all duration-300 ${
											sortDropdown ? 'block' : 'hidden'
										} z-10 rounded-b border border-t-0 border-gray-200 bg-white`}
									>
										<div className="flex w-full flex-col items-start">
											<div className="w-full cursor-pointer px-4 py-2 text-left capitalize hover:bg-gray-50">
												new first
											</div>
											<div className="w-full cursor-pointer px-4 py-2 text-left capitalize hover:bg-gray-50">
												old first
											</div>
										</div>
									</div>
								</button>
							</div>
						</div>
						<ProductsGrid products={currentProducts} />
						{/* <PaginationComponent
              perPage={perPage}
              total={products.length}
              current={currentPage}
              paginate={paginate}
              prevPage={prevPage}
              nextPage={nextPage}
            /> */}
					</div>
				</div>
			</div>
		</div>
	)
}
