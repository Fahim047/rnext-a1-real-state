import Facebook from './ui/facebook';
import Instagram from './ui/instagram';
import Twitter from './ui/twitter';

const TeamSocials = () => {
	return (
		<div className="flex items-center justify-center gap-5">
			<a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
				<Facebook />
			</a>
			<a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
				<Twitter />
			</a>
			<a href="javascript:void(0)" className="text-dark-6 hover:text-primary">
				<Instagram />
			</a>
		</div>
	);
};

export default TeamSocials;
