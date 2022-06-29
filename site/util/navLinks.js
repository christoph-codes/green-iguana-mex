import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export const toastTabLink = `https://www.toasttab.com/greeniguanastg/v3?utmCampaign=website`;

export const headerLinks = [
	{ label: 'Menu', path: '/menu' },
	{ label: 'Catering', path: '/catering' },
	{ label: 'Locations', path: '/locations' },
	{
		label: 'Gift Cards',
		path: 'http://www.toasttab.com/greeniguanastg/giftcards?utmCampaign=website',
		external: true,
		newTab: true,
	},
	{
		path: 'https://www.facebook.com/greeniguana2016/',
		icon: <FaFacebookF size={32} />,
		newTab: true,
		external: true,
	},
	{
		path: 'https://www.instagram.com/greeniguanamex/',
		icon: <FaInstagram size={32} />,
		newTab: true,
		external: true,
	},
];
export const footerLinks = [
	{ label: 'Menu', path: '/menu' },
	{ label: 'Catering', path: '/catering' },
	{ label: 'Locations', path: '/locations' },
	{ label: 'Careers', path: '/careers' },
	{ label: 'Contact', path: '/contact' },
	{
		label: 'Gift Cards',
		path: 'http://www.toasttab.com/greeniguanastg/giftcards?utmCampaign=website',
		external: true,
		newTab: true,
	},
	{
		path: 'https://www.facebook.com/greeniguana2016/',
		icon: <FaFacebookF size={32} />,
		newTab: true,
		external: true,
	},
	{
		path: 'https://www.instagram.com/greeniguanamex/',
		icon: <FaInstagram size={32} />,
		newTab: true,
		external: true,
	},
];
export const mobileLinks = [{ label: 'Home', path: '/' }, ...footerLinks];

export default { headerLinks, footerLinks, mobileLinks };
