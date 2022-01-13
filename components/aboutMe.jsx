import SectionHeader from './sectionHeader';

import { Element } from 'react-scroll';
import { useEffect } from 'react';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
	const observerOptions = {
		threshold: 0.9,
		triggerOnce: true
	};

	const { ref, inView, entry } = useInView(observerOptions);

	useEffect(() => {
		if (inView) {
			anime({
				targets: '.aboutMe .el',
				translateY: 0,
				opacity: 1,
				delay: anime.stagger(300) // increase delay by 100ms for each elements.
			});
		} else {
			anime({
				targets: '.aboutMe .el',
				translateY: 270,
				opacity: 0,
				delay: anime.stagger(300) // increase delay by 100ms for each elements.
			});
		}
	}, [inView]);


	return (
		<Element name="aboutMe">
			<section className="aboutMe" ref={ref}>
				<SectionHeader number={0} text="About Me" />
				<div className="w-full flex flex-col md:flex-row p-3 sm:pl-5 md:p-8 md:justify-between space-x-0 space-y-10 md:space-y-10 md:space-x-10 ">
					<div className="el flex items-center font-main text-center sm:text-left w-full md:w-[60%] md:py-5 text-gray-600">
						<p className="text-sm md:text-base">
							The name is Kyle and I have been inputting text into a computer so that it can do cool stuff since I was 12. I am currently a computer science student at the University of Pretoria in South Africa. Programming to me is a way of staying sane in a world which I find to be crazy and weird. My programming experience comes from the five years of Robotics Programming for our High School team. I spend most of my time solving online programming related problems and developing smaller programs ranging from bash commands to stock screeners.
						</p>
					</div>
					<div className="el block my-0 w-full md:w-1/2">
						<img className="personalImageShadow" src="/personal.JPG" alt="Kyle Smith" />
					</div>
				</div>
			</section>

		</Element>
	)
}

export default AboutMe