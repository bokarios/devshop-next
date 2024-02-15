'use client'
import Logo from '@/components/logo'
import Link from 'next/link'
import {
	UserIcon,
	ShoppingBagIcon,
} from '@heroicons/react/24/solid'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import NavLinks from './nav-links'

export default function NavigationBar() {
	const pathname = usePathname()

	const trans = ['/', '/contact', '/about']

	return (
		<nav
			className={`h-28 w-full ${
				trans.includes(pathname)
					? 'absolute left-0 top-0 z-50 bg-[#00000014]'
					: 'border-b border-b-gray-200 bg-white text-gray-800'
			}`}
		>
			<div className="flex h-full w-full items-center justify-between px-10">
				<div className="flex h-full items-center gap-14">
					<Link href="/">
						<div className="w-20">
							<Logo dark={!trans.includes(pathname)} />
						</div>
					</Link>
					<NavLinks />
				</div>
				<div
					className={`flex items-center gap-8 ${
						trans.includes(pathname)
							? 'text-gray-50'
							: 'text-gray-800'
					}`}
				>
					<div className="flex items-center gap-6">
						<Link
							href="/about"
							className={clsx(
								'ease font-medium uppercase transition-colors duration-300',
								{
									'hover:text-[#0084d6]':
										!trans.includes(pathname),
								},
								{ 'text-brand-blue': pathname == '/about' }
							)}
						>
							about
						</Link>
						<Link
							href="/contact"
							className={clsx(
								'ease font-medium uppercase transition-colors duration-300',
								{
									'hover:text-[#0084d6]':
										!trans.includes(pathname),
								},
								{
									'text-brand-blue': pathname == '/contact',
								}
							)}
						>
							contact us
						</Link>
					</div>
					<div className="flex items-center gap-6">
						<button
							className={`group flex gap-1 ${
								trans.includes(pathname)
									? 'text-gray-50'
									: 'text-gray-800 hover:text-[#0084f6]'
							}`}
						>
							<div className="font-bold">$0.00</div>
							<div className="relative">
								<ShoppingBagIcon className="h-5 w-5" />
								<div
									className={`absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full ${
										trans.includes(pathname)
											? 'bg-white text-gray-800'
											: 'bg-gray-800 text-gray-50 group-hover:bg-[#0084f6]'
									}`}
								>
									<div className="text-xs">0</div>
								</div>
							</div>
						</button>
						<button>
							<UserIcon
								className={`h-5 w-5 ${
									trans.includes(pathname)
										? 'text-gray-50'
										: 'text-gray-800 hover:text-[#0084f6]'
								}`}
							/>
						</button>
					</div>
				</div>
			</div>
		</nav>
	)
}
