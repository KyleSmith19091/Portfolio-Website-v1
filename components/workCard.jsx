const WorkCard = ({company, position, description, technologies}) => {
	return (
		<article className="workCard w-full xl:w-3/4 border-solid border-purple-600 border-2 rounded-md px-10 py-6 sm:px-20 sm:py-12 space-y-3">
			<div className="flex items-center space-x-10 mb-3">
				<h1 className="font-main font-bold text-xl">{company}</h1>
				<div className="w-[30%] lg:w-[10%] h-[1px] bg-black opacity-30"></div>
				<p className="font-mono text-cyan-400">{position}</p>
			</div>
			<ul className="font-main text-sm sm:text-base text-gray-600">
				{description.map((point,idx) => {
					return (
						<li key={idx}>→ {point}</li>
					);
				})}
			</ul>

			<ul className="font-mono flex flex-wrap justify-start items-center space-x-3 sm:justify-between text-gray-400 text-sm w-full sm:w-[70%]">
				{technologies.map((tech,idx) => {
					return (
						<li key={idx}>{tech}</li>
					)
				})}
			</ul>
		</article>
	)
}

export default WorkCard
