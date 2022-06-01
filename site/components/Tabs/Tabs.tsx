import { ReactElement, FC, useState } from 'react';
import Section from '../Section';
import styles from './Tabs.module.scss';

export type TTabs = {
	data: {
		title: string;
		content: ReactElement | string;
	}[];
};

const Tabs: FC<TTabs> = ({ data }) => {
	const [activeTab, setActiveTab] = useState(-1);
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
	return (
		<>
			<ul className={styles.Tabs}>{lists}</ul>
			<Section
				className={`${styles.Tab__content} 🔥py-1`}
				title={data[activeTab]?.title}
			>
				{data[activeTab]?.content}
			</Section>
		</>
	);
};

export default Tabs;
