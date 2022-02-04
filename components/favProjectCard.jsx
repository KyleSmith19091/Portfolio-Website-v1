import { useState, useRef, useEffect } from 'react';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';

const FavProjectCard = ({ id, title, description, date, technologies, githubLink }) => {
	const [clicked, setClicked] = useState(false);
	const coverRef = useRef(null);

	const onCardClick = (e) => {
		setClicked(!clicked);
		clicked === true ? coverRef.current.classList.add('anim') : coverRef.current.classList.remove('anim');
		console.log("Card Clicked: " + clicked);
	};

	const observerOptions = {
		threshold: 0.6,
		triggerOnce: true
	};
	const { ref, inView, entry } = useInView(observerOptions);

	useEffect(() => {
		console.log(inView);
		if (inView) {
			anime({
				targets: '.favProject .favProjectCard' + id,
				translateY: 0,
				opacity: 1,
				duration: 1000,
			});
		} else {
			anime({
				targets: '.favProject .favProjectCard' + id,
				translateY: 270,
				opacity: 0,
			});
		}
	}, [inView]);

	return (
		<article className={"flex flex-col bg-white p-5 space-y-5 thinBorder relative w-full lg:w-3/4 favProjectCard" + id} ref={ref}>
			<div className="flex font-main items-center justify-between">
				<p className="text-gray-800 text-xs">{date}</p>
				<h3 className="font-main font-bold text-lg text-black">FP</h3>
			</div>
			<div>
				<span className="inline-block bg-black p-1">
					<p className="text-white font-main text-sm">Featured Project</p>
				</span>
			</div>
			<div>
				<a className="link" target="blank" href={githubLink}>
					<h1 className="font-main font-bold text-black text-xl"><span className="link">{title}</span></h1>
				</a>
			</div>
			<div className="flex justify-between text-black">
				<ul className="flex space-x-3 text-black font-main text-sm">
					{technologies.map((tech, idx) => {
						return <li key={idx}>{tech}</li>
					})}
				</ul>
				<button className="text-xl p-2 hover:translate-x-2 transition-transform" onClick={onCardClick}>⟶</button>
			</div>
			<div ref={coverRef} className="favProjectCardCover">
				<div className="flex flex-col justify-between p-5 h-full text-white">
					<div className="flex font-main items-center justify-between">
						<a target="blank" href={githubLink}>
							<h1 className="font-main font-bold text-lg md:text-xl"><span className="link after:bg-white">{title}</span></h1>
						</a>
						<h3 className="font-main font-bold text-lg md:text-xl">FP</h3>
					</div>
					<p className="font-main text-white text-xs md:text-base">{description}</p>
					<button className="text-white text-xl text-right hover:translate-x-2 transition-transform" onClick={onCardClick}>⟶</button>
				</div>
			</div>
		</article>
	);
}

export default FavProjectCard
