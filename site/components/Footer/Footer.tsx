import Link from 'next/link';
import { FC } from 'react';
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import THeaderProps, { TLink } from '../Header';
import Container from '../Container';
import styles from './Footer.module.scss';
import { mobileLinks } from '../../util/navLinks';
import Nobr from '../Nobr';
import { address } from '../../util/content';

export type TFooterProps = {
	className?: string;
	links?: THeaderProps['links'][];
	copyright?: string;
	poweredbyTKC?: boolean;
	img?: string;
	rest?: any[];
};

const Footer: FC<TFooterProps> = ({
	links,
	copyright = (
		<>
			{new Date().getFullYear()} © Green Iguana Mexican Restaurant. All
			Rights Reserved.
			<br /> {address}
		</>
	),
	poweredbyTKC = true,
	className,
	img,
	...rest
}) => (
	<>
		<footer
			className={`${styles.Footer} ${className} 🔥bg-primary`}
			{...rest}
		>
			<Container className={styles.Footer__container}>
				{img && (
					<Image
						className={styles.Footer__image}
						src={img}
						alt="Footer Icon"
					/>
				)}
				<div className={styles.Footer__content}>
					<nav className={styles.Footer__content__nav}>
						{mobileLinks
							.slice(0, 5)
							.map((link: TLink, index: number) => (
								<li
									key={index}
									className={
										styles.Footer__content__nav__link
									}
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
					</nav>
					<nav className={styles.Footer__content__nav}>
						{mobileLinks
							.slice(5)
							.map((link: TLink, index: number) => (
								<li
									key={index}
									className={
										styles.Footer__content__nav__link
									}
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
					</nav>
					<hr />
					<p className="🔥text-center">{copyright}</p>
				</div>
			</Container>
		</footer>
		{poweredbyTKC && (
			<div className="🔥bg-grey 🔥text-center 🔥py-h">
				<p className="🔥text-white 🔥m-0">
					Site made with <FaHeart color="#FFC924" /> by{' '}
					<Link target="_blank" href="https://thekirkconcept.com">
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a className="🔥text-white">
							<Nobr>The Kirk Concept</Nobr>
						</a>
					</Link>
				</p>
			</div>
		)}
	</>
);

export default Footer;
