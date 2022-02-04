import { useState, useEffect } from 'react';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';

const TechProgress = ({ icon, tech, progress, invert, id }) => {
	const observerOptions = {
		threshold: 0.9,
		triggerOnce: true
	};

	const { ref, inView, entry } = useInView(observerOptions);
	const [val, setVal] = useState(progress);

	useEffect(() => {
		if(inView) {
			anime({
				targets: ".inner" + id,
				width: `${progress}%`,
				delay: 300 * id,
			});

		} else {
			anime({
				targets: ".inner" + id,
				width: "0%"
			});
		}
	}, [inView]);


	return (
		<div className="flex items-center space-x-3 progressContainer" ref={ref}>
			{icon}
			<h3 className="font-mono text-sm md:text-base w-[50px] md:w-[70px]">{tech}</h3>
			<div className="techProgressBar techProgressBar__Bottom">
				<div style={{ backgroundColor: invert ? "#05F4B7" : "#371BB1"}} className={`techProgressBar inner${id}`}></div>
			</div>
		</div>
	);
};

export default TechProgress;
