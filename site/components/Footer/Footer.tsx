import Link from 'next/link';
import { FC } from 'react';
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import THeaderProps from '../Header';
import Container from '../Container';
import styles from './Footer.module.scss';

export type TFooterProps = {
	className?: string;
	links?: THeaderProps['links'][];
	copyright?: string;
	poweredbyTKC?: boolean;
	img?: string;
};

const Footer: FC<TFooterProps> = ({
	links,
	copyright = (
		<>
			2022 © Green Iguana Mexican Restaurant. <br /> 850 S. Bluff Street,
			St. George, UT 84770.
			<br /> All Rights Reserved.
		</>
	),
	poweredbyTKC = true,
	className,
	img,
}) => (
	<>
		<footer className={`${styles.Footer} ${className} 🔥bg-primary`}>
			<Container className={styles.Footer__container}>
				{img && (
					<Image
						className={styles.Footer__image}
						src={img}
						alt="Footer Icon"
					/>
				)}
				<div className={styles.Footer__content}>
					{links && (
						<nav className={styles.Footer__content__nav}>
							{links.map((link, index) => (
								<li
									key={index}
									className={
										styles.Footer__content__nav__link
									}
								>
									<Link
										href={link.path}
										target={
											link.newTab ? '_blank' : '_self'
										}
									>
										{link.label}
									</Link>
								</li>
							))}
						</nav>
					)}
					<hr />
					<p className="🔥text-center">{copyright}</p>
				</div>
			</Container>
		</footer>
		{poweredbyTKC && (
			<div className="🔥bg-grey 🔥text-center 🔥py-h">
				<p className="🔥text-white 🔥m-0">
					Site made with <FaHeart color="#FFC924" /> by{' '}
					<Link href="https://thekirkconcept.com">
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a className="🔥text-white">The Kirk Concept</a>
					</Link>
				</p>
			</div>
		)}
	</>
);

export default Footer;
