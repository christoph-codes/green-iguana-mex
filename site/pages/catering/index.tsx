import type { NextPage } from 'next';
import PageTemplate from '../../templates/Page';
import Section from '../../components/Section';
import styles from './CateringPage.module.scss';
import Row from '../../components/Row';
import Card from '../../components/Card';
import catering from '../../util/catering';
import partyPacks from '../../util/catering/_partyPacks';
import MenuItem from '../../components/MenuItem';

export type TCateringContent = {
	size: string;
	qty?: string;
	price: string;
	description?: string;
};
export type TCatering = {
	title: string;
	description?: string;
	content: TCateringContent[];
};

const CateringPage: NextPage = (): any => (
	<PageTemplate
		metaData={{
			title: 'Catering | Green Iguana Mexican Restaurant',
			description:
				'Green Iguana Mexican Restaurant catering is like no other, offering authentic home cooked mexican food right to the venue of your choice!',
			image: '/image-url',
		}}
		className={styles.CateringPage}
	>
		<Section title="Catering Style Menu" description="(435)628-4863">
			{catering.map((category: TCatering, index) => (
				<Card
					key={index}
					title={category.title}
					description={category.description}
					className={styles.CateringPage__category}
				>
					<Row
						columns={{ xs: [3, 2, 2, 5] }}
						className={styles.CateringPage__category__row}
					>
						<p>
							<strong>Size:</strong>
						</p>
						<p>
							<strong>Qty:</strong>
						</p>
						<p>
							<strong>Price:</strong>
						</p>
						<p>
							<strong>Description:</strong>
						</p>
					</Row>
					{Object.values(category.content).map(
						(item: TCateringContent, idx) => (
							<Row
								columns={{ xs: [3, 2, 2, 5] }}
								className={styles.CateringPage__category__row}
								key={idx}
							>
								<p>{item.size}</p>
								<p>{item.qty}</p>
								<p>{item.price}</p>
								<p>{item.description}</p>
							</Row>
						)
					)}
				</Card>
			))}
		</Section>
		<Section title={partyPacks.title} description={partyPacks.description}>
			{partyPacks.content.map((item: any, index) => (
				<MenuItem
					key={index}
					title={item.title}
					price={item.price}
					description={item.description}
				/>
			))}
		</Section>
	</PageTemplate>
);

export default CateringPage;
