import { FC } from 'react';
import Image from 'next/image';
import {
	FaCalendarAlt,
	FaChartLine,
	FaMoneyBillWave,
	FaTag,
	FaUmbrellaBeach,
} from 'react-icons/fa';
import { MdAttachEmail } from 'react-icons/md';
import { GiTacos } from 'react-icons/gi';
import Button from '../../components/Button';
import Row from '../../components/Row';
import Section from '../../components/Section';
import Page from '../Page';
import { PageProps } from '../Page/Page';
import gimInterior from '../../assets/images/gim-interior.jpg';
import styles from './JobListing.module.scss';
import { IJobListing } from '../../util/joblistings';

export type TJobListingProps = {
	className?: string;
	metaData: PageProps['metaData'];
	job: IJobListing;
};

const JobListing: FC<TJobListingProps> = ({ metaData, className, job }) => {
	const {
		title,
		shortDescription,
		qualifications,
		longDescription,
		location,
		pay,
	} = job;
	const perks = [
		// {
		// 	Icon: FaStethoscope,
		// 	label: 'Health Benefits',
		// },
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
		// {
		// 	Icon: FaPiggyBank,
		// 	label: '401k',
		// },
		{
			Icon: FaTag,
			label: 'Employee Discounts',
		},
		{
			Icon: FaChartLine,
			label: 'Growth Opportunities',
		},
	];
	const scrollToApply = () => {
		const element = document.getElementById('apply');
		element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
	return (
		<Page
			metaData={metaData}
			className={`${styles.JobListing} ${className}`}
		>
			<Section bgColor="primary" className="🔥text-center">
				<Button
					className={`${styles.JobListing__careers_btn} 🔥mb-2`}
					href="/careers"
					variant="light-outline"
				>
					‹ Back to Careers
				</Button>
				{title && <h1 className="🔥text-white">{title}</h1>}
				{location && <h3 className="🔥text-secondary">{location}</h3>}
				{pay && (
					<h4 className="🔥text-white 🔥mt-1">
						<strong>{pay}</strong>
					</h4>
				)}

				<Button
					className={styles.JobListing__apply_btn}
					onClick={scrollToApply}
					variant="secondary"
				>
					Apply Now
				</Button>
			</Section>
			<Section className="🔥pb-0">
				<h3>Job Details</h3>
				{shortDescription && <p>{shortDescription}</p>}
				{longDescription &&
					longDescription.map((qual, index) => (
						<p key={index}>{qual}</p>
					))}
				{qualifications && (
					<>
						<h3>Qualificatioins</h3>
						<ul>
							{qualifications.map((qual, index) => (
								<li key={index}>{qual}</li>
							))}
						</ul>
					</>
				)}
				<p>
					We offer a flexible schedule, competitive pay, and
					opportunities for growth and advancement within the company.
					Apply now and join our team in serving delicious Mexican
					cuisine to our customers!
				</p>
			</Section>
			<Section
				title="Serving Up Fresh Opportunities! "
				description="Green Iguana is looking to hire energetic Team Members to join our #greeniguanafamily."
			>
				<Row columns={{ xs: [12, 12], md: [6, 6] }} align="center">
					<div className="🔥py-1 🔥p-md-2">
						<Image
							src={gimInterior}
							alt="Green Iguana Mexican Restaurant interior"
						/>
					</div>
					<div className="🔥p-md-2 🔥py-0">
						<p>
							Stop in for an in-person interview from 2-4:30PM
							daily! Ask for the manager.
						</p>
						<ul>
							<li>Fun, fast-paced work environment</li>
							<li>Raises within your first year</li>
							<li>30+ hours per week</li>
							<li>Part-Time and Full-Time available</li>
							<li>FREE MEALS on shifts</li>
							<li>
								Growth opportunities/opportunities for
								advancement
							</li>
						</ul>
					</div>
				</Row>
			</Section>
			<Section
				bgColor="offwhite"
				title="Employee Perks"
				description="Perks as great as our burritos! We offer a variety of perks and benefits for every employee... even you part-timers! *Benefits may vary by career category."
			>
				<Row
					columns={{
						xs: [12, 12, 12, 12],
						md: [3, 3, 3, 3],
					}}
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
				className="🔥text-center"
				title="Piqued your interest? "
				description="We would love to meet you, so apply today!"
				id="apply"
			>
				<MdAttachEmail className="🔥text-secondary" size={60} />
				<h3 className="🔥text-center 🔥mb-2">
					Please email us your resume to be considered for this
					position and we will get back to you if you are a great fit
					for our team!
				</h3>
				<Button
					className={styles.JobListing__careers_btn}
					href="mailto:greeniguana16@gmail.com"
					variant="primary-outline"
				>
					Email greeniguana16@gmail.com
				</Button>
			</Section>
		</Page>
	);
};

export default JobListing;
