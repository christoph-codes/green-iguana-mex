import { FC, ReactNode } from 'react';
import Container from '../Container';
import styles from './Section.module.scss';

export type ISectionProps = {
	children?: ReactNode;
	className?: string[];
	hideContainer?: boolean;
	bgColor?: 'primary' | 'secondary' | 'tertiary' | 'grey' | 'offwhite';
	title?: string;
};

const Section: FC<ISectionProps> = ({
	children,
	className,
	hideContainer,
	bgColor,
	title,
}) => (
	<section
		className={`${styles.Section} ${className} ${
			bgColor ? `🔥bg-${bgColor}` : ''
		}`}
	>
		{!hideContainer ? (
			<Container>
				{title && <h2 className={styles.SectionTitle}>{title}</h2>}
				{children}
			</Container>
		) : (
			<>
				{title && <h2 className={styles.SectionTitle}>{title}</h2>}
				{children}
			</>
		)}
	</section>
);
export default Section;
