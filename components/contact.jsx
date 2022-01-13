import SectionHeader from './sectionHeader';

import { Element } from 'react-scroll';

const Contact = () => {
	return (
		<Element name="contactMe">
			<section>
				<SectionHeader text="Get In Touch" number={4} />
				<div className="flex flex-col font-main items-center justify-center mt-5 space-y-10">
					<p className="text-lg text-center">Thank you for visiting my website. My inbox is always open and look forward to our future conversations.</p>
					<a className="link font-bold" target="blank" rel="nofollow" href="mailto:skorpion19091@gmail.com">Say Hello</a>
				</div>
			</section>
		</Element>
	)
}

export default Contact
