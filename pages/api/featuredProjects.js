export function getData() {
	return [
		{
			title: "C++ Lightweight Logging",
			description: "Lightweight CPP Logging is a single header file implementation to provide a rich text logging experience and also a nifty progress bar. This library brings color to what many would say is a dull workspace ahem the terminal.",
			date: "5 Dec 2021",
			technologies: [
				"C++",
				"Make",
				"ANSI"
			],
			githubLink: "https://github.com/sKorpion19091/Lightweight-CPP-Logging" 
		},
		{
			title: "K Nearest Neighbor",
			description: "This is an implementation of the KNearest Neighbour algorithm in C++, this repo reads data from the MNIST dataset. I added a MNIST file parser to read image data and labels. The image data is wrapped in an Image object where the pixel data is stored in a Eigen Matrix to allow for effiecent calculation of the euclidian distance when using the algorithm.",
			date: "15 Jan 2021",
			technologies: [
				"C++",
				"Make",
				"MNIST",
				"Eigen"
			],
			githubLink: "https://github.com/sKorpion19091/KNearestNeighbourFromScratch" 
		},
		{
			title: "Grep Implementation",
			description: "This is a naive implementation of the GNU grep tool, it follows the same algorithm for the string matching which is the Boyer Moore string matching algorithm.",
			date: "22 Oct 2021",
			technologies: [
				"C++",
				"Make",
			],
			githubLink: "https://github.com/sKorpion19091/GREP_Implementation" 
		},
	];

}

export default function getFeaturedProjects(req, res) {
	if (req.method === 'GET' || req.method === 'POST') {
		res.status(200).json(getData());
	} else {
		res.status(403).json({ message: 'Invalid request method'});
	}
}
