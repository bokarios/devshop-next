'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLinks() {
	const pathname = usePathname()

	const links = [
		{
			id: 1,
			name: 'store',
			route: '/store',
		},
		{
			id: 2,
			name: 'men',
			route: '/men',
		},
		{
			id: 3,
			name: 'women',
			route: '/women',
		},
		{
			id: 4,
			name: 'jewelry',
			route: '/jewelry',
		},
		{
			id: 5,
			name: 'electronics',
			route: '/electronics',
		},
	]

	const trans = ['/', '/contact', '/about']

	return (
		<div
			className={`flex items-center gap-6 ${
				trans.includes(pathname)
					? 'text-gray-50'
					: 'text-gray-800'
			}`}
		>
			{links.map((link) => (
				<Link
					href={link.route}
					key={link.id}
					className={clsx(
						'ease font-normal uppercase transition-colors duration-300',
						{ 'text-brand-blue': link.route == pathname },
						{
							'hover:text-[#0084d6]':
								!trans.includes(pathname),
						}
					)}
				>
					{link.name}
				</Link>
			))}
		</div>
	)
}
