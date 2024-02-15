'use client'
import { usePathname } from 'next/navigation'

export default function Logo({ dark }: { dark: boolean }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			viewBox="145 100 300 180"
		>
			<g
				id="dev-logo-group"
				fill={dark ? '#3d3d3d' : '#ffffff'}
				stroke="none"
				strokeWidth="1"
				strokeLinecap="butt"
				strokeLinejoin="miter"
				strokeMiterlimit="10"
				strokeDasharray=""
				strokeDashoffset="0"
				fontFamily="none"
				fontWeight="none"
				fontSize="none"
				textAnchor="none"
			>
				<g data-paper-data='{"isGlobalGroup":true,"bounds":{"x":139.85185412744516,"y":138.77906659064809,"width":270.2962917451098,"height":192.44186681870383}}'>
					<g
						data-paper-data='{"stacked":true,"isPrimaryText":true}'
						fillRule="nonzero"
					>
						<path
							d="M174.25534,228.90713c10.51927,0 19.50177,-3.72287 26.94751,-11.16861c3.76616,-3.76616 6.57995,-7.86781 8.44139,-12.30495c1.86143,-4.43714 2.79215,-9.33964 2.79215,-14.7075c0,-10.47598 -3.74451,-19.45848 -11.23354,-26.94751c-7.48903,-7.48903 -16.47153,-11.23354 -26.94751,-11.23354h-13.11662v76.3621zM174.25534,138.77907c14.28543,0 26.51462,5.08648 36.68758,15.25943c5.10812,5.10812 8.92839,10.6816 11.46081,16.72044c2.53242,6.03884 3.79863,12.69455 3.79863,19.96713c0,14.32872 -5.08648,26.57955 -15.25943,36.75251c-10.12967,10.12967 -22.35886,15.1945 -36.68758,15.1945h-19.9996c-0.95236,0 -1.85061,-0.18398 -2.69475,-0.55194c-0.84414,-0.36796 -1.58005,-0.85496 -2.20775,-1.46101c-0.62769,-0.60605 -1.12552,-1.33114 -1.49348,-2.17528c-0.36796,-0.84414 -0.55194,-1.74239 -0.55194,-2.69475v-90.12806c0,-0.95236 0.18398,-1.85061 0.55194,-2.69475c0.36796,-0.84414 0.86578,-1.56923 1.49348,-2.17528c0.62769,-0.60605 1.36361,-1.09305 2.20775,-1.46101c0.84414,-0.36796 1.74239,-0.55194 2.69475,-0.55194z"
							data-paper-data='{"glyphName":"D","glyphIndex":0,"firstGlyphOfWord":true,"word":1,"line":1,"firstGlyphOfFirstLine":true}'
							fill={dark ? '#3d3d3d' : '#ffffff'}
						/>
						<path
							d="M302.56445,138.77907c0.95236,0 1.85061,0.17316 2.69475,0.51947c0.84414,0.34631 1.58005,0.83332 2.20775,1.46101c0.62769,0.62769 1.1147,1.36361 1.46101,2.20775c0.34631,0.84414 0.51947,1.74239 0.51947,2.69475c0,0.99565 -0.17316,1.90472 -0.51947,2.72722c-0.34631,0.82249 -0.83332,1.54759 -1.46101,2.17528c-0.62769,0.62769 -1.36361,1.1147 -2.20775,1.46101c-0.84414,0.34631 -1.74239,0.51947 -2.69475,0.51947h-60.06373c-0.99565,0 -1.90472,-0.17316 -2.72722,-0.51947c-0.82249,-0.34631 -1.54759,-0.83332 -2.17528,-1.46101c-0.62769,-0.62769 -1.1147,-1.35279 -1.46101,-2.17528c-0.34631,-0.82249 -0.51947,-1.73157 -0.51947,-2.72722c0,-0.95236 0.17316,-1.85061 0.51947,-2.69475c0.34631,-0.84414 0.83332,-1.58005 1.46101,-2.20775c0.62769,-0.62769 1.35279,-1.1147 2.17528,-1.46101c0.82249,-0.34631 1.73157,-0.51947 2.72722,-0.51947zM302.56445,228.90713c0.95236,0 1.85061,0.17316 2.69475,0.51947c0.84414,0.34631 1.58005,0.83332 2.20775,1.46101c0.62769,0.62769 1.1147,1.36361 1.46101,2.20775c0.34631,0.84414 0.51947,1.74239 0.51947,2.69475c0,0.99565 -0.17316,1.90472 -0.51947,2.72722c-0.34631,0.82249 -0.83332,1.54759 -1.46101,2.17528c-0.62769,0.62769 -1.36361,1.1147 -2.20775,1.46101c-0.84414,0.34631 -1.74239,0.51947 -2.69475,0.51947h-60.06373c-0.99565,0 -1.90472,-0.17316 -2.72722,-0.51947c-0.82249,-0.34631 -1.54759,-0.83332 -2.17528,-1.46101c-0.62769,-0.62769 -1.1147,-1.35279 -1.46101,-2.17528c-0.34631,-0.82249 -0.51947,-1.73157 -0.51947,-2.72722c0,-0.95236 0.17316,-1.85061 0.51947,-2.69475c0.34631,-0.84414 0.83332,-1.58005 1.46101,-2.20775c0.62769,-0.62769 1.35279,-1.1147 2.17528,-1.46101c0.82249,-0.34631 1.73157,-0.51947 2.72722,-0.51947zM297.56455,183.8431c0.95236,0 1.85061,0.17316 2.69475,0.51947c0.84414,0.34631 1.58005,0.83332 2.20775,1.46101c0.62769,0.62769 1.1147,1.36361 1.46101,2.20775c0.34631,0.84414 0.51947,1.74239 0.51947,2.69475c0,0.99565 -0.17316,1.90472 -0.51947,2.72722c-0.34631,0.82249 -0.83332,1.54759 -1.46101,2.17528c-0.62769,0.62769 -1.36361,1.1147 -2.20775,1.46101c-0.84414,0.34631 -1.74239,0.51947 -2.69475,0.51947h-50.12886c-1.6017,-0.04329 -3.13847,-0.71427 -4.6103,-2.01295c-1.38525,-1.25539 -2.07788,-2.87873 -2.07788,-4.87003c0,-0.86578 0.17316,-1.70992 0.51947,-2.53242c0.34631,-0.82249 0.82249,-1.54759 1.42854,-2.17528c0.60605,-0.62769 1.3095,-1.13634 2.11035,-1.52594c0.80085,-0.3896 1.67746,-0.60605 2.62982,-0.64934z"
							data-paper-data='{"glyphName":"Ξ","glyphIndex":1,"word":1,"line":1}'
							fill={dark ? '#3d3d3d' : '#ffffff'}
						/>
						<path
							d="M360.7451,242.67309c-3.03024,0 -5.12977,-1.45019 -6.29857,-4.35056l-34.86943,-89.15405c-0.51947,-1.34196 -0.77921,-2.51077 -0.77921,-3.50642c0,-0.95236 0.17316,-1.85061 0.51947,-2.69475c0.34631,-0.84414 0.83332,-1.58005 1.46101,-2.20775c0.62769,-0.62769 1.35279,-1.1147 2.17528,-1.46101c0.82249,-0.34631 1.73157,-0.51947 2.72722,-0.51947c3.03024,0 5.15141,1.36361 6.36351,4.09083l28.70072,73.82969l28.70072,-73.82969c1.03894,-2.72722 3.16011,-4.09083 6.36351,-4.09083c0.95236,0 1.85061,0.17316 2.69475,0.51947c0.84414,0.34631 1.58005,0.83332 2.20775,1.46101c0.62769,0.62769 1.1147,1.36361 1.46101,2.20775c0.34631,0.84414 0.51947,1.74239 0.51947,2.69475c0,1.12552 -0.25974,2.29433 -0.77921,3.50642l-34.86943,89.15405c-1.16881,2.90037 -3.26833,4.35056 -6.29857,4.35056z"
							data-paper-data='{"glyphName":"V","glyphIndex":2,"lastGlyphOfWord":true,"word":1,"line":1,"lastGlyphOfFirstLine":true}'
							fill={dark ? '#3d3d3d' : '#ffffff'}
						/>
					</g>
				</g>
			</g>
		</svg>
	)
}
