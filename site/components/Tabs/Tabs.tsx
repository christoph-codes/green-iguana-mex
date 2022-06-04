import { ReactElement, FC, useState } from 'react';
import MenuItem, { TMenuItemProps } from '../MenuItem';
import Section from '../Section';
import Row from '../Row';
import styles from './Tabs.module.scss';

export type TTabs = {
	data: {
		title: string;
		description?: string;
		content: ReactElement[];
	}[];
};

export type TMenuGroup = {
	title: string;
	description?: string;
	content: TMenuItemProps[];
};

const Tabs: FC<TTabs> = ({ data }) => {
	const [activeTab, setActiveTab] = useState(0);
	const lists = data.map((tab, index) => (
		<>
			<button
				type="button"
				className={`${styles.Tabs__item} ${
					index === activeTab ? styles[`Tabs__item--active`] : ''
				}`}
				onClick={() => setActiveTab(index)}
				key={index}
			>
				{tab.title}
			</button>
		</>
	));
	const options = data.map((tab, index) => (
		<>
			<option
				value={index}
				className={`${styles.Tabs__item} ${
					index === activeTab ? styles[`Tabs__item--active`] : ''
				}`}
				key={index}
			>
				{tab.title}
			</option>
		</>
	));
	return (
		<>
			<Row className={styles.Tabs} columns={{ xs: [12, 12], md: [3, 9] }}>
				<div>
					<ul className={styles.Tabs__tablist}>{lists}</ul>
					<label htmlFor="activeTab" className={styles.Tabs__select}>
						<select
							id="activeTab"
							value={activeTab}
							onChange={(e) =>
								setActiveTab(Number(e.target.value))
							}
						>
							{options}
						</select>
					</label>
				</div>
				<Section className={`${styles.Tabs__content}`}>
					{data[activeTab]?.title && (
						<h3
							className={`${styles.Tabs__content__title} 🔥text-center 🔥mb-1`}
						>
							{data[activeTab]?.title}
						</h3>
					)}
					{data[activeTab]?.description && (
						<div
							className={`${styles.Tabs__content__description} p 🔥text-center 🔥mb-2 🔥pb-2`}
						>
							{data[activeTab]?.description}
						</div>
					)}
					<div className={styles.Tabs__content__columns}>
						{data[activeTab]?.content?.map((foodCategory: any) => (
							<MenuItem
								className={
									styles.Tabs__content__columns__column
								}
								{...foodCategory}
							/>
						))}
					</div>
				</Section>
			</Row>
		</>
	);
};

export default Tabs;
