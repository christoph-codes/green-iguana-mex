import type { NextPage } from 'next';
import PageTemplate from '../../templates/Page';
import Section from '../../components/Section';
import Row from '../../components/Row';
import joblistings from '../../util/joblistings';
import styles from './Careers.module.scss';
import Button from '../../components/Button';

const Careers: NextPage = (): any => (
	<PageTemplate
		metaData={{
			title: 'Careers | Green Iguana Mexican Restaurant',
			description:
				'Green Iguana is looking to hire energetic Team Members to join our  #greeniguanafamily!',
		}}
		className={styles.Careers}
	>
		<Section
			title="Careers"
			description={`There is ${joblistings.length} available job${
				joblistings.length > 1 ? 's' : ''
			} at Green Iguana Mexican Restaurant.`}
		>
			{joblistings.map((job) => (
				<div className={styles.Careers__job} key={job.slug}>
					<Row columns={{ xs: [10, 2] }} justify="between">
						<div className={styles.Careers__job__content}>
							<h3>{job.title}</h3>
							<p>{job.shortDescription}</p>
						</div>
						<div className={styles.Careers__job__cta}>
							<Button
								href={`/careers/${job.slug}`}
								variant="tertiary"
							>
								View Position
							</Button>
						</div>
					</Row>
				</div>
			))}
			<p className="🔥pt-2 🔥text-center 🔥text-greylight">
				Be sure to constantly check back for more new current openings
				coming soon.
			</p>
		</Section>
	</PageTemplate>
);

export default Careers;
