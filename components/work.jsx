import SectionHeader from './sectionHeader';
import WorkCard from './workCard';

import { Element } from 'react-scroll';
import { useEffect } from 'react';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';

const Work = ({ projects }) => {
	const observerOptions = {
		threshold: 0.7,
		triggerOnce: true
	};
	const { ref, inView, _ } = useInView(observerOptions);

	useEffect(() => {
		if(inView) {
			anime({
				targets: '.work .workCard',
				translateY: 0,
				opacity: 1,
				delay: anime.stagger(300) // increase delay by 100ms for each elements.
			});
		} else {
			anime({
				targets: '.work .workCard',
				translateY: 270,
				opacity: 0,
				delay: anime.stagger(300) // increase delay by 100ms for each elements.
			});
		} 
	},[inView]);

	return (
		<Element name="work">
			<section ref={ref} className="work">
				<SectionHeader number={1} text="Work I've Done" />
				<div className="flex flex-col space-y-10 mt-5 md:pl-12 sm:pl-8">
					{projects.map((project,idx) => {
						return (
							<WorkCard key={idx} company={project.company} position={project.position} description={project.description} technologies={project.technologies} />
						)
					})}
				</div>
			</section>
		</Element>
	)
}

export default Work
