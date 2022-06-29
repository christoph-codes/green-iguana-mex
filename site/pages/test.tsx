import type { NextPage } from 'next';
import Container from '../components/Container';
import Section from '../components/Section';
import Row from '../components/Row';
import MenuItem from '../components/MenuItem';
import PageTemplate from '../templates/Page';

const Test: NextPage = (): any => (
	<PageTemplate
		metaData={{
			title: 'Test Page',
			description: 'This is a test description',
		}}
	>
		<Container>
			<MenuItem
				category="NEW"
				title="Green Iguana Plato Especiales**"
				description="Charbroiled Chicken Breast | Green Sauce | Tortilla Strips | Mixed Cheese | Pico | 
				Guacomole | Sour Cream | Rice | Fresh Veggies."
				price="12.99"
			/>
			<MenuItem
				title="Green Iguana Plato Especiales**"
				description="Charbroiled Chicken Breast | Green Sauce | Tortilla Strips | Mixed Cheese | Pico | 
				Guacomole | Sour Cream | Rice | Fresh Veggies."
				price="12.99"
			/>
			<MenuItem
				title="Green Iguana Plato Especiales**"
				description="Charbroiled Chicken Breast | Green Sauce | Tortilla Strips | Mixed Cheese | Pico | 
				Guacomole | Sour Cream | Rice | Fresh Veggies."
				price="12.99"
			/>
		</Container>
		<Section bgColor="offwhite">
			<h3>Hello Bro!</h3>
			<h1 className="animate__animated animate__bounce">
				Welcome to Green Iguana
			</h1>
			<p>
				Get started by editing this block of code over and over but I
				have to make sure that everything is good before I approve of
				this font size. <code>pages/index.tsx</code>
				<a href="https://nextjs.org">
					Next.js! Longer title to see how it wraps
				</a>
			</p>
		</Section>
		<Section title="Hello Bro!" bgColor="offwhite" className="🔥pt-0">
			<Row align="center">
				<div className="🔥bg-primary">
					<p>Hello</p>
				</div>
				<div className="🔥bg-tertiary">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cum odit voluptatem nulla tempore? Praesentium vitae
						laborum rem eius. Repudiandae ipsum tenetur dolorum
						earum saepe vero recusandae excepturi consectetur fugit
						modi.
					</p>
				</div>
				<div className="🔥bg-secondary">
					<p>Hello</p>
				</div>
			</Row>
		</Section>
	</PageTemplate>
);

export default Test;
