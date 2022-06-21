import { ReactElement, FC, useState } from 'react';
import { TMenuItemProps } from '../MenuItem';
import Row from '../Row';
import styles from './Tabs.module.scss';
import CategoryItem from '../CategoryItem/CategoryItem';

export type TTabs = {
	data: {
		title: string;
		description?: string;
		content: ReactElement[];
	}[];
	rest?: any[];
};

export type TMenuGroup = {
	title: string;
	description?: string | ReactElement;
	content: TMenuItemProps[];
};

const Tabs: FC<TTabs> = ({ data, ...rest }) => {
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
			<Row
				className={styles.Tabs}
				columns={{ xs: [12, 12], md: [3, 9] }}
				{...rest}
			>
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
				<CategoryItem category={data[activeTab]} />
			</Row>
		</>
	);
};

export default Tabs;
