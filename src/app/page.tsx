import FeaturedProducts from '@/components/home/featured-products'
import HomeHero from '@/components/home/home-hero'
import LimitedTimeOffer from '@/components/home/limited-time-offer'
import OurAttributes from '@/components/home/our-attributes'
import TopDeals from '@/components/home/top-deals'

export default function Home() {
	return (
		<>
			<HomeHero />
			<TopDeals />
			<FeaturedProducts />
			<LimitedTimeOffer />
			<OurAttributes />
		</>
	)
}
