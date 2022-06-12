import { useRouter } from 'next/router';
import JobListing from '../../templates/JobListing';
import jobListings from '../../util/joblistings';

const JobPage = () => {
	const router = useRouter();
	const { joblisting } = router.query;
	const job = jobListings.find((j) => j.slug === joblisting);
	if (job) {
		return (
			<JobListing
				metaData={{ title: job.title, description: job.description }}
				title={job.title}
				location={job.location}
				pay={job.pay}
				description={job.description}
			/>
		);
	}
	return null;
};

export default JobPage;
