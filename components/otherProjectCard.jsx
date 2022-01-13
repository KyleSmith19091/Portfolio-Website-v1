import File from "../Icons/file";
import Github from "../Icons/github";

const OtherProjectCard = ({ title, description, languages, githubLink }) => {
	return (
			<article className="thinBorder flex flex-col p-5 space-y-5 otherProjectCard border-[#371BB1] font-main">
				<div className="flex items-center justify-between">
					<File />
					<a target="blank" className="githubLink" href={githubLink}><Github /></a>
				</div>
				<h1 className="text-black text-lg font-bold">{title}</h1>
				<p className="text-sm text-gray-600 overflow-ellipsis">{description}</p>
				<ul className="flex text-sm text-gray-400 font-mono space-x-5">
					<li>{languages}</li>
				</ul>
			</article>
	)
}

export default OtherProjectCard
