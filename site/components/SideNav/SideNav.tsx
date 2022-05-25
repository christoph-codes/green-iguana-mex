import { FC } from 'react';
import Link from 'next/link';
import { IoCloseCircle } from 'react-icons/io5';
import navLinks, { toastTabLink } from '../../util/navLinks';
import Button from '../Button';
import styles from './SideNav.module.scss';
import TLink from '../Header';

export type TSideNav = {
	isOpen?: boolean;
	className?: string;
	toggleSideNav: () => void;
};

const SideNav: FC<TSideNav> = ({ isOpen, toggleSideNav, className }) => (
	<aside
		className={`${styles.SideNav} ${className} ${
			isOpen ? styles.SideNav__isOpen : ''
		}`}
	>
		<button
			className={styles.SideNav__close}
			type="button"
			onClick={() => toggleSideNav()}
		>
			<IoCloseCircle size={32} />
		</button>
		{navLinks?.map((link: TLink, index: number) => (
			<li className={styles.SideNav__link} key={index}>
				<Link
					target={link.newTab ? '_blank' : '_self'}
					href={link.path}
				>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a>
						{link.icon && link.icon}
						{link.label}
					</a>
				</Link>
			</li>
		))}
		<li
			className={`${styles.SideNav__link} ${styles['SideNav__link--button']}`}
		>
			<Button href={toastTabLink}>Order Online</Button>
		</li>
	</aside>
);

export default SideNav;