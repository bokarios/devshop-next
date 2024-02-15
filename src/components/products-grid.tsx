import ProductCard from './product-card'
import { Product } from '@/lib/definitions'

export default function ProductsGrid({
	products,
}: {
	products: Product[]
}) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}
