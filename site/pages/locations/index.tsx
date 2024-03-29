import type { NextPage } from 'next';
import Image from 'next/image';
import PageTemplate from '../../templates/Page';
import Section from '../../components/Section';
import styles from './LocationsPage.module.scss';
import greenIguanaBuilding from '../../assets/images/gim_new_building.jpg';
import Row from '../../components/Row';
import { address, hours } from '../../util/content';

const LocationsPage: NextPage = (): any => (
	<PageTemplate
		metaData={{
			title: 'Locations | Green Iguana Mexican Restaurant',
			description:
				'Find a Green Iguana Mexican Restaurant Location Near You!',
			image: greenIguanaBuilding,
		}}
		className={styles.Locations}
	>
		<Section
			title="Locations"
			description="View our primary location with more locations opening soon!"
		>
			<Row align="center" columns={{ xs: [12, 12], md: [9, 3] }}>
				<iframe
					title="Green Iguana Mexican Restaurant in St George Utah"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7108.177449767559!2d-113.59171151398186!3d37.09271962739878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ca452644ec86f9%3A0xbf44cc0e2fdbc192!2sGreen%20Iguana%20Mexican%20Restaurant!5e0!3m2!1sen!2sus!4v1654327431108!5m2!1sen!2sus"
					width="100%"
					height="600"
					style={{ border: 0 }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
				<article className={styles.Locations__details}>
					<div
						className={`${styles.Locations__details__card} 🔥text-center`}
					>
						<Image
							src={greenIguanaBuilding}
							alt="Green Iguana Exterior of the building"
							placeholder="blur"
							objectFit="contain"
						/>
						<h4 className="🔥mt-2">
							Green Iguana
							<br /> Mexican Restaurant
						</h4>
						<hr />
						<p>
							<strong>Address:</strong>
							<br />
							{address}
						</p>
						<p>
							<strong>Phone:</strong>
							<br />1 (435) 628-4863
						</p>
						<p>
							<strong>Hours:</strong>
							<br />
							{hours}
						</p>
					</div>
				</article>
			</Row>
		</Section>
		<Section bgColor="offwhite">
			<h1 className="🔥text-whitegrey 🔥text-center">
				More Locations Coming Soon!
			</h1>
		</Section>
	</PageTemplate>
);

export default LocationsPage;
