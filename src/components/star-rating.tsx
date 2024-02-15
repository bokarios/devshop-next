import { StarIcon } from '@heroicons/react/24/solid'

export default function StarRating({
	rate,
}: {
	rate: number
}) {
	const renderRate = () => {
		return [1, 2, 3, 4, 5].map((star) => (
			<StarIcon
				key={star}
				className={`w-[18px] aspect-square ${
					rate - star >= 0
						? 'text-yellow-500/75'
						: 'text-gray-400/60'
				}`}
			/>
		))
	}

	return <div className="flex gap-1">{renderRate()}</div>
}
