import Link from 'next/link'
import { Product as ProductType } from '@/lib/definitions'
import StarRating from './star-rating'

type Props = {
	product: ProductType
}

export default function ProductCard({ product }: Props) {
	const createSlug = () => {
		return product.title.replaceAll(' ', '-').toLowerCase()
	}

	return (
		<div className="mb-10 w-full">
			<Link
				href={`/product/${product.id + '-' + createSlug()}`}
			>
				<figure className="border-0.5 mb-4 w-full border-gray-300 p-4">
					<img
						src={product.image}
						alt={product.title}
						className="aspect-square w-[75%] object-contain saturate-[0.9]"
					/>
				</figure>
			</Link>
			<h1
				className="mb-0.5 cursor-pointer font-bold tracking-wide text-gray-900 hover:text-black"
				title={product.title}
			>
				{product.title.length > 16
					? product.title.slice(0, 16) + '...'
					: product.title}
			</h1>
			<h4 className="mb-1 text-sm font-normal tracking-wide text-gray-500/80">
				{product.category}
			</h4>
			<h3 className="mb-2 text-[15px] font-bold text-gray-800">
				${product.price.toFixed(2)}
			</h3>
			<div className="flex items-center gap-2">
				<StarRating rate={Math.ceil(product.rating.rate)} />
				<div className="text-xs font-normal text-gray-600">
					({product.rating.count})
				</div>
			</div>
		</div>
	)
}
