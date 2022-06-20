import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import styles from './Card.module.scss';

export type TCardProps = {
	className?: string;
	children?: any;
	title?: string;
	description?: string;
	image?: StaticImageData;
	rest?: any[];
};

const Card: FC<TCardProps> = ({
	className,
	children,
	title,
	description,
	image,
	rest,
}) => (
	<div className={`${styles.Card} ${className}`} {...rest}>
		{image && (
			<Image className={styles.Card__image} src={image} alt={title} />
		)}
		<div className={styles.Card__content}>
			{title && <h4>{title}</h4>}
			{description && <p>{description}</p>}
			{children}
		</div>
	</div>
);

export default Card;
