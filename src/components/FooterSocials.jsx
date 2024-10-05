import React from 'react';
import LinkedIn from './ui/linkedin';
import Instagram from './ui/instagram';
import Twitter from './ui/twitter';
import Facebook from './ui/facebook';

const FooterSocials = () => {
	return (
		<div className="-mx-3 flex items-center">
			<a
				href="javascript:void(0)"
				className="px-3 text-gray-7 hover:text-white"
			>
				<Facebook />
			</a>
			<a
				href="javascript:void(0)"
				className="px-3 text-gray-7 hover:text-white"
			>
				<Twitter />
			</a>
			<a
				href="javascript:void(0)"
				className="px-3 text-gray-7 hover:text-white"
			>
				<Instagram />
			</a>
			<a
				href="javascript:void(0)"
				className="px-3 text-gray-7 hover:text-white"
			>
				<LinkedIn />
			</a>
		</div>
	);
};

export default FooterSocials;
