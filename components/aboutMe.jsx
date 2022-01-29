import SectionHeader from './sectionHeader';
import TechProgress from './techProgress';

import { Element } from 'react-scroll';
import { useEffect } from 'react';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';

import CPPIcon from '../Icons/cppIcon';
import JSIcon from '../Icons/jsIcon';
import JavaIcon from '../Icons/javaIcon';
import PythonIcon from '../Icons/pythonIcon';

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
				delay: anime.stagger(500) // increase delay by 100ms for each elements.
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
					<div className="el flex flex-col items-center justify-center space-y-5 font-main text-center sm:text-left w-full md:w-[60%] md:py-5 text-gray-600">
						<p className="text-sm md:text-base">
							The name is Kyle and I have been inputting text into a computer so that it can do cool stuff since I was 12. I am currently a computer science student at the University of Pretoria in South Africa. Programming to me is a way of staying sane in a world which I find to be crazy and weird. My programming experience comes from the five years of Robotics Programming for our High School team. I spend most of my time solving online programming related problems and developing smaller programs ranging from bash commands to stock screeners.
						</p>
						<div className="flex flex-col justify-start w-full space-y-8">
							<TechProgress tech="C++" progress="95" icon={<CPPIcon />} id="1"/>
							<TechProgress tech="JS" progress="90" icon={<JSIcon />} invert id="2"/>
							<TechProgress tech="Java" progress="70" icon={<JavaIcon />} id="3" />
							<TechProgress tech="Python" progress="50" invert icon={<PythonIcon />} id="4" invert />
						</div>
					</div>
					<div className="el block my-0 w-full md:w-1/2">
						<img className="personalImageShadow" src="/personal.JPG" alt="Kyle Smith" />
					</div>
				</div>

				<div className="flex flex-col p-3 sm:pl-5 md:p-8">
				</div>

			</section>
		</Element>
	)
}

export default AboutMe