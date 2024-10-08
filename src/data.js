import CubeIcon from './components/ui/cube';
import GiftIcon from './components/ui/gift';
import GridIcon from './components/ui/grid';
import LayerIcon from './components/ui/layer';

export const navLinks = ['home', 'about', 'pricing', 'blog'];
export const properties = [
	{
		id: 1,
		title: 'Luxury Apartment in Manhattan',
		price: '$4,500.00',
		bedrooms: 2,
		bathrooms: 3,
		imageUrl:
			'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
	},
	{
		id: 2,
		title: 'Spacious Suburban Home',
		price: '$2,500.00',
		bedrooms: 4,
		bathrooms: 2,
		imageUrl:
			'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
	},
	{
		id: 3,
		title: 'Beachfront Condo in Miami',
		price: '$5,500.00',
		bedrooms: 3,
		bathrooms: 3,
		imageUrl:
			'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
	},
	{
		id: 4,
		title: 'Rustic Cabin in Aspen',
		price: '$1,800.00',
		bedrooms: 2,
		bathrooms: 1,
		imageUrl:
			'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
	},
	{
		id: 5,
		title: 'Penthouse Suite in Dubai',
		price: '$12,000.00',
		bedrooms: 4,
		bathrooms: 5,
		imageUrl:
			'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
	},
	{
		id: 6,
		title: 'Cozy Cottage in the Countryside',
		price: '$2,200.00',
		bedrooms: 3,
		bathrooms: 2,
		imageUrl:
			'https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
	},
	// {
	// 	id: 7,
	// 	title: 'Skyscraper Apartment in Tokyo',
	// 	price: '$7,500.00',
	// 	bedrooms: 3,
	// 	bathrooms: 2,
	// 	imageUrl:
	// 		'https://images.unsplash.com/photo-1542317730-1ec4a9ea8d1d?auto=format&fit=crop&w=500&q=60',
	// },
	// {
	// 	id: 8,
	// 	title: 'Lakehouse Retreat in Switzerland',
	// 	price: '$5,000.00',
	// 	bedrooms: 4,
	// 	bathrooms: 3,
	// 	imageUrl:
	// 		'https://images.unsplash.com/photo-1530629013299-6cb5e97f6c09?auto=format&fit=crop&w=500&q=60',
	// },
	// {
	// 	id: 9,
	// 	title: 'Minimalist Studio in San Francisco',
	// 	price: '$3,200.00',
	// 	bedrooms: 1,
	// 	bathrooms: 1,
	// 	imageUrl:
	// 		'https://images.unsplash.com/photo-1600585153887-56d84c30a1bf?auto=format&fit=crop&w=500&q=60',
	// },
];

export const faqData = [
	{
		id: 1,
		question: 'What is the process for renting a property?',
		answer:
			"The process begins by browsing available properties. Once you find a property you're interested in, you can contact the agent or owner to schedule a viewing. After that, you can submit an application, undergo a background check, and sign the lease if approved.",
	},
	{
		id: 2,
		question: 'Are pets allowed in the rental properties?',
		answer:
			'Pet policies vary depending on the property and the landlord. Some properties allow pets with an additional deposit or monthly fee, while others may have restrictions on the type or size of pets.',
	},
	{
		id: 3,
		question: 'What is included in the rent?',
		answer:
			'Typically, rent covers the cost of occupying the property. Utilities such as electricity, water, and internet may or may not be included, depending on the property. It’s important to check the lease agreement for details.',
	},
	{
		id: 4,
		question: 'How long is the lease term?',
		answer:
			'Most lease agreements are for 12 months, but some properties offer shorter-term leases, such as 6-month or month-to-month options. It’s best to check with the property owner or manager for specific lease terms.',
	},
	{
		id: 5,
		question: 'How do I pay my rent?',
		answer:
			'Rent payment methods vary by property. Common options include online payments via a property management portal, direct bank transfers, or paying by check. Be sure to clarify the preferred method with your landlord or property manager.',
	},
	{
		id: 6,
		question: 'What happens if I need to break my lease early?',
		answer:
			'Breaking a lease early usually involves penalties, such as forfeiting your security deposit or paying a fee equivalent to a few months’ rent. However, specific terms will be outlined in your lease agreement.',
	},
];

export const teamData = [
	{
		id: 1,
		name: 'Melissa Tatcher',
		role: 'Marketing Expert',
		imageUrl:
			'https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-01.png',
	},
	{
		id: 2,
		name: 'Stuard Ferrel',
		role: 'Digital Marketer',
		imageUrl:
			'https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-02.png',
	},
	{
		id: 3,
		name: 'Eva Hudson',
		role: 'Creative Designer',
		imageUrl:
			'https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-03.png',
	},
	{
		id: 4,
		name: 'Lori Smith',
		role: 'Lead Designer',
		imageUrl:
			'https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-04.png',
	},
];

export const blogData = [
	{
		id: 1,
		title: 'I think it is really important to design with planing',
		imageUrl: '/assets/images/blog/blog-footer-01.jpg',
	},
	{
		id: 2,
		title: 'Recognizing the need is the primary step to success',
		imageUrl: '/assets/images/blog/blog-footer-02.jpg',
	},
];
export const features = [
	{
		id: 1,
		icon: GiftIcon,
		title: 'Premium Property Listings',
		description:
			'Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.',
	},
	{
		id: 2,
		icon: GridIcon,
		title: 'Expert Guidance and Support',
		description:
			'Our advanced matching system pairs you with properties that align with your specific needs and desires.',
	},
	{
		id: 3,
		icon: LayerIcon,
		title: 'Expert Guidance and Support',
		description:
			'Benefit from the expertise of our dedicated team of real estate professionals.',
	},
	{
		id: 4,
		icon: CubeIcon,
		title: 'Virtual Tours',
		description:
			'Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.',
	},
];
export const aboutUsLinks = ['Home', 'Features', 'About'];
export const featuresLinks = [
	'How it works',
	'Privacy Policy',
	'Term of Service',
	'Refund policy',
];
