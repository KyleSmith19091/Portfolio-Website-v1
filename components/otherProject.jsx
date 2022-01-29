import SectionHeader from './sectionHeader';
import OtherProjectCard from './otherProjectCard';

import { Element } from 'react-scroll';
import { useEffect } from 'react';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';

const OtherProject = ({projects}) => {
	const observerOptions = {
		triggerOnce: true
	};
	const { ref, inView, _ } = useInView(observerOptions);

	useEffect(() => {
		if (inView) {
			anime({
				targets: '.otherProjectContainer .otherProjectCard',
				translateY: 0,
				opacity: 1,
				delay: anime.stagger(300),
			});
		} else {
			anime({
				targets: '.otherProjectContainer .otherProjectCard',
				translateY: 270,
				opacity: 0,
				delay: anime.stagger(100) // increase delay by 100ms for each elements.
			});
		}
	}, [inView]);	

	return (
		<Element name="otherProject">
			<section ref={ref}>
				<SectionHeader text="Other Projects" number={3} />
				<div className="otherProjectContainer w-full pt-5 md:pl-12 sm:pl-8">
					{projects.map((project,idx) => {
						return (
							<OtherProjectCard key={idx} title={project.name} description={project.description} languages={project.language} githubLink={project.svn_url}/>
						);
					})}
				</div>
			</section>
		</Element>
	)
}

export default OtherProject

