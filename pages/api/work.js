export function getData() {
	return [
		{
			company: 'STEMEY',
			position: 'Lead Web Developer',
			description: [
				"Worked with a technical team where I worked on redesigning their website.",
				"Performed Technical Interviews"
			],
			technologies: [
				"React",
				"Html",
				"CSS",
				"Figma",
				"Heroku",
				"Git"
			]
		},
		{
			company: 'Carrus',
			position: 'Technical Intern',
			description: [
				"Performed Data analytics on Fuel monitoring System",
			],
			technologies: [
				"Python",
				"Excel",
				"Pandas"
			]
		},
	];

}

export default function getWork(req, res) {
	if (req.method === 'GET' || req.method === 'POST') {
		res.status(200).json(getData());
	} else {
		res.status(403).json({ message: 'Invalid request method' });
	}
}