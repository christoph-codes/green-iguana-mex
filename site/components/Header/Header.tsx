import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import greenIguanaLogo from '../../assets/images/green-iguana-logo.png';
import styles from './Header.module.scss';
import Container from '../Container';
import Button from '../Button';
import { toastTabLink } from '../../util/navLinks';
// eslint-disable-next-line import/no-unresolved
import { useSideNav } from '../../providers/SideNavProvider';

export type TLink = {
	label?: string;
	path: string;
	external?: boolean;
	newTab?: boolean;
	icon?: string;
};

export type THeaderProps = {
	sticky?: boolean;
	links?: TLink[];
	className?: string;
	rest?: any[];
};

const Header: FC<THeaderProps> = ({ links, sticky, className, ...rest }) => {
	const { isOpen, toggleSideNav } = useSideNav();
	return (
		<header
			className={`${styles.Header} ${className} ${
				sticky ? styles.Header__sticky : ''
			}`}
			{...rest}
		>
			<Container className={styles.Header__container}>
				<Link href="/">
					<span className={styles.Header__container__logo}>
						<Image src={greenIguanaLogo} alt="Green Iguana Logo" />
					</span>
				</Link>
				{links && (
					<>
						<nav className={`${styles.Header__container__nav}`}>
							{links?.map((link: TLink, index: number) => (
								<li
									className={
										styles.Header__container__nav__link
									}
									key={index}
								>
									<Link
										href={link.path}
										passHref={link.newTab}
									>
										{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
										<a
											target={
												link.newTab ? '_blank' : '_self'
											}
										>
											{link.icon && link.icon}
											{link.label}
										</a>
									</Link>
								</li>
							))}
							<li
								className={
									styles[
										`Header__container__nav__link--button`
									]
								}
							>
								<Button href={toastTabLink} target="_blank">
									Order Online
								</Button>
							</li>
						</nav>
						<button
							type="button"
							onClick={() => toggleSideNav()}
							className={styles.Header__container__hamburger}
						>
							{!isOpen ? (
								<GiHamburgerMenu size={32} />
							) : (
								<IoCloseCircle size={32} />
							)}
						</button>
					</>
				)}
			</Container>
		</header>
	);
};

export default Header;
