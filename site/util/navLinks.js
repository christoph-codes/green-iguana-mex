import { FaFacebookF, FaTwitter } from 'react-icons/fa';

export const toastTabLink = `https://www.toasttab.com/greeniguanastg/v3?utmCampaign=website`;

export const navLinks = [
	{ label: 'Menu', path: '/menu' },
	{ label: 'Catering', path: '/catering' },
	{ label: 'Locations', path: '/locations' },
	{
		label: 'Gift Cards',
		path: 'http://www.toasttab.com/greeniguanastg/giftcards?utmCampaign=website',
		external: true,
	},
	{
		path: 'https://facebook.com/green-iguana',
		icon: <FaFacebookF size={32} />,
		newTab: true,
		external: true,
	},
	{
		path: 'https://twitter.com/green-iguana',
		icon: <FaTwitter size={32} />,
		newTab: true,
		external: true,
	},
];
export const mobileLinks = [{ label: 'Home', path: '/' }, ...navLinks];

export default navLinks;
