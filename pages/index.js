import {useRef, useEffect} from 'react';
import Layout from "../components/layout";
import AboutMe from "../components/aboutMe";
import Work from "../components/work";
import FavProject from "../components/favProject";
import OtherProject from "../components/otherProject";
import Contact from "../components/contact";

import { getData as getFeaturedProjects } from './api/featuredProjects';
import { getData as getWork } from './api/work';

import { Link } from 'react-scroll';

export async function getServerSideProps() {
	const res = await fetch(`https://api.github.com/users/sKorpion19091/repos`);
	const githubRepos = await res.json();

	const featuredProjects = getFeaturedProjects();
	const workProjects = getWork();
	const otherProjects = [];

	githubRepos.forEach((repo) => {
		if(repo.stargazers_count > 0) {
			otherProjects.push(repo);
		}
	});

	return {
		props: {
			data: {
				otherProjects,
				featuredProjects,
				workProjects
			}
		}, 
	}
}

export default function Home({ data }) {
	const heroText__1 = useRef(null);
	const heroText__2 = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			heroText__1.current.classList.add("anim");
		}, 1000);
		setTimeout(() => {
			heroText__2.current.classList.add("anim");
		}, 1500);
	}, []);

	return (
		<Layout>
			<div className="flex flex-col h-full">
				<div className="flex flex-col justify-center h-4/5">
					<div className="font-main">
						<p className="text-base sm:text-lg heroIntroduction">Hi I'm Kyle Smith</p>
						<h1 className="font-bold text-3xl md:text-5xl lg:text-8xl">{'<'}
							<span ref={heroText__1} className="hero-text">Student</span> By Day and 
							<br/><span ref={heroText__2} className="hero-text after:bg-purple-600">Developer </span>By Night{'/>'}
						</h1>
					</div>
				</div>
				<Link to="aboutMe" spy={true} smooth={true} delay={300} duration={800} className="relative w-full cursor-pointer">
					<div className="heroScroll w-7 h-7 sm:h-[40px] sm:w-[40px]"></div>
				</Link>
			</div>
			<AboutMe />
			<Work projects={data.workProjects} />
			<FavProject projects={data.featuredProjects} />
			<OtherProject projects={data.otherProjects}/>
			<Contact />
		</Layout>
	)
}
