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
			]
		},
		{
			title: "K Nearest Neighbor",
			description: "Lightweight CPP Logging is a single header file implementation to provide a rich text logging experience and also a nifty progress bar. This library brings color to what many would say is a dull workspace ahem the terminal.",
			date: "15 Jan 2021",
			technologies: [
				"C++",
				"Make",
				"MNIST",
				"Eigen"
			]
		},
		{
			title: "Pokemon Terminal Images",
			description: "This is a fun project, so please excuse the lack of file structure. This is a project that uses opencv and the terminal ANSI color system to generate pokemon images from .png files.",
			date: "22 Oct 2021",
			technologies: [
				"C++",
				"Make",
				"OpenCV",
			]
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
