import cashier from './_cashier';
import cook from './_cook';
// import kitchenMember from './_kitchenMember';
import linecook from './_linecook';
import manager from './_manager';
import togolinecook from './_togoline';

export interface IJobListing {
    slug: string;
	title: string;
	shortDescription: string;
	longDescription?: string[];
	qualifications?: string[];
	location: string;
	pay?: string;
    
}

const joblistings: IJobListing[] = [ manager, cashier, togolinecook, linecook, cook];

export default joblistings;
