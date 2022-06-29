import { Fragment } from 'react';
import type { NextPage } from 'next';
import PageTemplate from '../../templates/Page';
import Section from '../../components/Section';
import Row from '../../components/Row';
import Card from '../../components/Card';
import catering from '../../util/catering';
import MenuItem from '../../components/MenuItem';
import Button from '../../components/Button';
import partyPacks from '../../util/catering/_partyPacks';
import styles from './CateringPage.module.scss';
import cateringImg from '../../assets/images/gim-catering.jpg';

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
		}}
		className={styles.CateringPage}
	>
		<Section bgImg={cateringImg} className={styles.CateringPage__hero} />
		<Section
			title="Catering Menu"
			description="Call to Order - (435)628-4863"
			className="🔥pb-0"
		>
			{catering.map((category: TCatering, index) => (
				<Fragment key={index}>
					<h3 className="🔥text-center 🔥mb-2">{category.title}</h3>
					<Row
						columns={{ xs: [12, 12, 12], md: [6, 6, 6] }}
						className={styles.CateringPage__category__row}
					>
						{Object.values(category.content).map(
							(item: TCateringContent, idx) => (
								<Card
									key={idx}
									title={item.size}
									description={`Qty: ${item.qty}`}
									price={item.price}
									className={`${styles.CateringPage__category} 🔥text-center`}
									shadow
								>
									<p>{item.description}</p>
								</Card>
							)
						)}
					</Row>
				</Fragment>
			))}
		</Section>
		<Section className="🔥pt-0 🔥pb-0">
			<Button
				className="🔥mx-auto"
				href="tel:4356284863"
				variant="secondary"
			>
				Call to Order!
				<br />
				(435)628-4863
			</Button>
		</Section>
		<Section
			title={partyPacks.title}
			description={partyPacks.description}
			className="🔥pb-0"
		>
			<Row columns={{ xs: [12, 12, 12], md: [4, 4, 4] }}>
				{partyPacks.content.map((item: any, index) => (
					<MenuItem
						key={index}
						title={item.title}
						description={item.description}
						price={item.price}
					>
						<p>{item.description}</p>
					</MenuItem>
				))}
			</Row>
		</Section>
		<Section className="🔥pt-0">
			<Button
				className="🔥mx-auto"
				href="tel:4356284863"
				variant="secondary"
			>
				Call to Order!
				<br />
				(435)628-4863
			</Button>
		</Section>
	</PageTemplate>
);

export default CateringPage;
