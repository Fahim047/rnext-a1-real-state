import { aboutUsLinks, featuresLinks } from '../data';
import FooterBio from './FooterBio';
import LatestBlog from './LatestBlog';

const Footer = () => {
	return (
		<footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
			<div className="container">
				<div className="-mx-4 flex flex-wrap">
					<FooterBio />
					<div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
						<div className="mb-10 w-full">
							<h4 className="mb-9 text-lg font-semibold text-white">
								About Us
							</h4>
							<ul>
								{aboutUsLinks.map((link) => (
									<li key={link}>
										<a
											href="javascript:void(0)"
											className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
										>
											{link}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
						<div className="mb-10 w-full">
							<h4 className="mb-9 text-lg font-semibold text-white">
								Features
							</h4>
							<ul>
								{featuresLinks.map((link) => (
									<li key={link}>
										<a
											href="javascript:void(0)"
											className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
										>
											{link}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
					<LatestBlog />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
