import { FC } from 'react';
import Row from '../Row';
import styles from './MenuItem.module.scss';

export type TMenuItemProps = {
	title: string;
	description: string;
	price: string;
	category?: string;
	className?: string;
	rest?: any[];
};

const MenuItem: FC<TMenuItemProps> = ({
	title,
	description,
	price,
	category,
	className,
	...rest
}) => (
	<article className={`${styles.MenuItem} ${className}`} {...rest}>
		<Row columns={{ xs: [8, 4] }}>
			<div className={styles.MenuItem__text}>
				<h4>
					{title} {category && <span>{category}</span>}
				</h4>
			</div>
			{price && (
				<h5 className={`${styles.MenuItem__price} h4 🔥text-tertiary`}>
					${price}
				</h5>
			)}
		</Row>
		<div className="p">{description}</div>
	</article>
);

export default MenuItem;
