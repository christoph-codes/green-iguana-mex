import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import styles from './Card.module.scss';

export type TCardProps = {
	className?: string;
	children?: any;
	title?: string;
	description?: string;
	price?: string;
	image?: StaticImageData;
	shadow?: boolean;
	rest?: any[];
};

const Card: FC<TCardProps> = ({
	className,
	children,
	title,
	description,
	price,
	image,
	rest,
	shadow,
}) => (
	<div
		className={`${styles.Card} ${className} ${
			shadow ? styles.Card__shadow : ''
		}`}
		{...rest}
	>
		{image && (
			<Image className={styles.Card__image} src={image} alt={title} />
		)}
		<div className={styles.Card__content}>
			{title && <h3>{title}</h3>}
			{description && (
				<p className={styles.Card__description}>{description}</p>
			)}
			{price && <h4 className={styles.Card__price}>{price}</h4>}
			{children}
		</div>
	</div>
);

export default Card;
