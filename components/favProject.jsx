import SectionHeader from './sectionHeader';
import FavProjectCard from './favProjectCard';

import { Element } from 'react-scroll';

const FavProject = ({ projects }) => {
	return (
		<Element name="favProject">
			<section className="favProject">
				<SectionHeader number={2} text="What I've Built" />
				<div className="flex flex-col space-y-10 pt-5 md:pl-12 sm:pl-8">
					{projects.map((project,idx) => {
						return(
							<FavProjectCard id={idx} key={idx} title={project.title} description={project.description} date={project.date} technologies={project.technologies} />
						);
					})}
				</div>
			</section>
		</Element>
	)
}

export default FavProject
