import { StaticImageData } from 'next/image';
import { FC, ReactNode } from 'react';
import Container from '../Container';
import styles from './Section.module.scss';

export type ISectionProps = {
	children?: ReactNode;
	className?: string[];
	hideContainer?: boolean;
	bgColor?: 'primary' | 'secondary' | 'tertiary' | 'grey' | 'offwhite';
	bgImg?: StaticImageData;
	title?: string;
	description?: string;
};

const Section: FC<ISectionProps> = ({
	children,
	className,
	hideContainer,
	bgColor,
	bgImg,
	title,
	description,
}) => {
	const content = (
		<>
			{title && <h2 className={styles.Section__title}>{title}</h2>}
			{description && (
				<p className={styles.Section__description}>{description}</p>
			)}
			{children}
		</>
	);
	return (
		<section
			className={`${styles.Section} ${className} ${
				bgColor ? `🔥bg-${bgColor}` : ''
			}`}
			style={
				bgImg
					? {
							backgroundImage: `url(${bgImg.src})`,
							backgroundColor: 'unset',
					  }
					: {}
			}
		>
			{!hideContainer ? <Container>{content}</Container> : content}
		</section>
	);
};
export default Section;
