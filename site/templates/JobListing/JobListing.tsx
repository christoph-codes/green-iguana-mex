import { ReactNode, FC } from 'react';
import {
	FaChartLine,
	FaStethoscope,
	FaCalendarAlt,
	FaMoneyBillWave,
	FaUmbrellaBeach,
	FaPiggyBank,
	FaTag,
} from 'react-icons/fa';
import { GiTacos } from 'react-icons/gi';
import Section from '../../components/Section';
import Row from '../../components/Row';
import Page from '../Page';
import { PageProps } from '../Page/Page';
import styles from './JobListing.module.scss';

export type TJobListingProps = {
	className?: string;
	children?: ReactNode;
	metaData: PageProps['metaData'];
	title: string;
	location: string;
	pay?: string;
};

const JobListing: FC<TJobListingProps> = ({
	children,
	metaData,
	className,
	title,
	location,
	pay,
}) => {
	const perks = [
		{
			Icon: FaStethoscope,
			label: 'Health Benefits',
		},
		{
			Icon: FaCalendarAlt,
			label: 'Flexible Schedule',
		},
		{
			Icon: FaMoneyBillWave,
			label: 'Perks & Bonuses',
		},
		{
			Icon: GiTacos,
			label: 'Discounted Meals',
		},
		{
			Icon: FaUmbrellaBeach,
			label: 'Paid Time Off',
		},
		{
			Icon: FaPiggyBank,
			label: '401k',
		},
		{
			Icon: FaTag,
			label: 'Employee Discounts',
		},
		{
			Icon: FaChartLine,
			label: 'Growth Opportunities',
		},
	];
	return (
		<Page
			metaData={metaData}
			className={`${styles.JobListing} ${className}`}
		>
			<Section bgColor="primary" className="🔥text-center">
				{title && <h1 className="🔥text-white">{title}</h1>}
				{location && <h3 className="🔥text-secondary">{location}</h3>}
				{pay && (
					<h4 className="🔥text-white 🔥mt-1">
						<strong>{pay}</strong>
					</h4>
				)}
			</Section>
			<Section>{children}</Section>
			<Section
				title="Serving Up Fresh Opportunities! "
				description="Green Iguana is looking to hire energetic Team Members to join our #greeniguanafamily."
			>
				<p>
					Stop in for an in-person interview from 2-4:30PM daily! Ask
					for the manager.
				</p>
				<ul>
					<li>Fun, fast-paced work environment</li>
					<li>Raises within your first year</li>
					<li>30+ hours per week</li>
					<li>Part-Time and Full-Time available</li>
					<li>FREE MEALS on shifts</li>
					<li>Growth opportunities/opportunities for advancement</li>
				</ul>
			</Section>
			<Section
				bgColor="offwhite"
				title="Employee Perks"
				description="Perks as great as our burritos! We offer a variety of perks and benefits for every employee... even you part-timers! *Benefits may vary by career category."
			>
				<Row
					columns={{ xs: [3, 3, 3, 3] }}
					className={styles.JobListing__perks}
				>
					{perks.map(({ Icon, label }, index) => (
						<div
							key={index}
							className={styles.JobListing__perks__perk}
						>
							<Icon color="#DD1B1B" size={64} />
							<h5>{label}</h5>
						</div>
					))}
				</Row>
			</Section>
			<Section
				title="Piqued your interest? "
				description="We would love to meet you, so apply today!"
			>
				** FORM WILL GO HERE! **
			</Section>
		</Page>
	);
};

export default JobListing;
