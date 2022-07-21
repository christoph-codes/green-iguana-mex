import { FC } from 'react';
import Section from '../Section';
import MenuItem from '../MenuItem';
import styles from './CategoryItem.module.scss';
import { TMenuGroup } from '../Tabs/Tabs';

export type TCategoryItemProps = {
	category: TMenuGroup;
	className?: string;
	rest?: any[];
};

const CategoryItem: FC<TCategoryItemProps> = ({ category }) => (
	<Section className={`${styles.CategoryItem}`}>
		{category.title && (
			<h3
				className={`${styles.CategoryItem__title} 🔥text-center 🔥mb-1`}
			>
				{category.title}
			</h3>
		)}
		{category.description && (
			<div
				className={`${styles.CategoryItem__description} p 🔥text-center 🔥mb-2 🔥pb-2`}
			>
				{category.description}
			</div>
		)}
		<div className={styles.CategoryItem__columns}>
			{category.content?.map((foodCategory: any, index: number) => (
				<MenuItem
					key={index}
					className={styles.CategoryItem__columns__column}
					{...foodCategory}
				/>
			))}
		</div>
	</Section>
);

export default CategoryItem;
