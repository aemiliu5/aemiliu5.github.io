import React from 'react';
import { league, leagueBold, dmSans } from '../../utils/fonts';
import TextDivider from './TextDivider';
import Carousel from './Carousel';
import AsSeenOn from './AsSeenOn';
import StyledButton from './StyledButton';
import SocialMediaLink from './SocialMediaLink';
import { faSteam } from '@fortawesome/free-brands-svg-icons';
import { useScrollAnimation } from './useScrollAnimation';

const AbtosCovertSection = () => {
	const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

	return (
		<div ref={ref} className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}>
			<TextDivider className="flex-row" text="ABTOS COVERT" />

			<div className="flex flex-col justify-center">
				<div className="mt-8 justify-items-center items-center">
					<Carousel />
				</div>

				<div className={`text-[16px] ${dmSans.className} sm:text-[20px] text-center mx-8 sm:mx-[25vw] my-8`}>
					Abtos Covert is a survival horror game set in the remote Greek mountains. You play as a lone soldier guarding a remote outpost.

					<br /><br />Released on Steam in <b>December 2023</b> to positive reviews.<br />
					Developed by <b>Team Abtos</b>, published by <b>Iphigames</b>.
					<br />

					<AsSeenOn />

					<br />

					<div className="flex justify-center align-items-center">
						<StyledButton
							href="https://store.steampowered.com/app/1694230/Abtos_Covert/"
							variant="withIcon"
						>
							<SocialMediaLink
								fa={faSteam}
								size="text-[15px] sm:text-[30px] hover:text-[#0ea5e9] transition-all duration-400 hover:scale-105 {league.className}"
								iconOnly={true}
							/>
							<span className={`${leagueBold.className} text-[15px] sm:text-[30px] translate-y-[4%]`}>
								STEAM PAGE
							</span>
						</StyledButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AbtosCovertSection;

