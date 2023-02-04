import kitchenMember from './_kitchenMember';
import manager from './_manager';

export interface IJobListing {
    slug: string;
	title: string;
	shortDescription: string;
	longDescription?: string[];
	qualifications?: string[];
	location: string;
	pay?: string;
    
}

const joblistings: IJobListing[] = [kitchenMember, manager];

export default joblistings;

