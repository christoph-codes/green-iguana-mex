import { FC } from 'react';
import Row from '../Row';
import styles from './MenuItem.module.scss';

export type TMenuItemProps = {
	title: string;
	description: string;
	price: string;
	category?: string;
	className?: string;
};

const MenuItem: FC<TMenuItemProps> = ({
	title,
	description,
	price,
	category,
	className,
}) => (
	<article className={`${styles.MenuItem} ${className}`}>
		<Row columns={{ xs: [9, 2] }}>
			<div className={styles.MenuItem__text}>
				<h4>
					{title} {category && <span>{category}</span>}
				</h4>
				<p>{description}</p>
			</div>
			<h5 className={`${styles.MenuItem__price} h4 🔥text-tertiary`}>
				${price}
			</h5>
		</Row>
	</article>
);

export default MenuItem;
