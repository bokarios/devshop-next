import { Product } from '@/lib/definitions'
import ProductCard from '../product-card'

async function FeaturedProducts() {
	const products = await getFeatured()

	async function getFeatured(): Promise<Product[]> {
		const res = (
			await fetch(
				'https://fakestoreapi.com/products?limit=5'
			)
		).json()

		return res
	}

	return (
		<div className="w-full pb-24 pt-28">
			<div className="mb-14 flex w-full justify-center">
				<div className="flex flex-col items-center gap-5">
					<h1 className="text-[42px] font-semibold capitalize text-black">
						featured products
					</h1>
					<div className="h-[2px] w-[100px] rounded-full bg-blue-500"></div>
				</div>
			</div>
			<div className="mx-auto w-full max-w-[1440px] px-16">
				<div className="grid w-full grid-cols-5 gap-5">
					{products.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default FeaturedProducts
