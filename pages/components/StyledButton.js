import React from 'react';
import Link from 'next/link';
import { leagueBold } from '../../utils/fonts';

const StyledButton = ({ href, children, className = "", variant = "default" }) => {
	const baseClasses = `text-white text-[30px] bg-gradient-to-br from-green-400 to-blue-600 hover:ring-2 hover:ring-green-200 duration-400 transition-all rounded-full ${leagueBold.className}`;
	const defaultClasses = "text-center px-12 py-2";
	const withIconClasses = "flex items-center justify-center space-x-2 px-8 py-2";

	const classes = variant === "withIcon" 
		? `${baseClasses} ${withIconClasses} ${className}`
		: `${baseClasses} ${defaultClasses} ${className}`;

	if (href) {
		return (
			<Link href={href} className={classes}>
				{children}
			</Link>
		);
	}

	return (
		<button type="button" className={classes}>
			{children}
		</button>
	);
};

export default StyledButton;

