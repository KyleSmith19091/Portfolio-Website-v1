const SectionHeader = ({number, text}) => {
	return (
		<div className="flex items-center">
			<h1 className="font-main font-bold text-lg sm:text-4xl md:text-4xl lg:text-5xl"><span className="font-normal text-xl sm:text-2xl md:text-4xl text-[#371BB1]">0{number}. </span>{text}</h1>	
			<div className="ml-2 sm:ml-3 w-1/2 sm:w-1/4 h-[1px] bg-black opacity-50"></div>
		</div>
	)
}

export default SectionHeader
