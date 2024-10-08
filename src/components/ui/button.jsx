import React from 'react';

const Button = ({ className, children }) => {
	const btnClass =
		className ||
		'inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark';
	return <button className={btnClass}>{children}</button>;
};

export default Button;
