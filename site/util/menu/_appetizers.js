const appetizers = {
	title: 'Appetizers',
	description:
	<>
		<p>
			Premium Meats Additional Charge Carne Asada l Charbroiled Chicken l Shrimp
		</p>
		<p>
			<strong>Meats:</strong> Bean & Cheese l Shredded Beef l Shredded
			Chicken l Ground Beef l Chile Verde l Carnitas l Sweet Pork
		</p>
		<p>
			<strong>Premium Meats:</strong> Carne Asada l Charbroiled
			Chicken l Shrimp. *Additional Charge
		</p>
	</>,
	content: [
		{
			title: 'Quesadilla',
			price: 7.99,
			description:
				'12” Flour tortilla l Mix Cheese l Pico l Sour Cream l Guacamole',
		},
		{
			title: 'Iguana Poppers (6)',
			price: 7.99,
			description: 'Jalapeños Stuffed With Cream Cheese l Ranch',
		},
		{
			title: 'Carne Asada Fries',
			price: 11.49,
			description:
				'Mix Cheese l Pico l Sour Cream l Jalapeños l Guacamole',
		},
		{
			title: 'Fresh Guacamole & Chips',
			price: 8.99,
			description: 'Fresh Tortilla Chips l Pico',
		},
		{
			title: 'Iguana Nachos',
			price: 10.99,
			description: (
				<>
					<p className="🔥mb-1">
						Fresh Tortilla Chips l Mix Cheese l Refried Beans l
						Tomatoes l Onions l Olives l Jalapeños l Sour Cream l
						Guacamole.{' '}
					</p>
					<small>
						<strong>Add Meat for $1.99</strong>
						<br />
						Shredded Beef l Shredded Chicken l Ground Beef l Chile
						Verde l Carnitas l Cheese l Sweet Pork
					</small>
				</>
			),
		},
		{
			title: 'Flautitas (8 Flour Tortillas Deep Fried )',
			price: 9.99,
			description: `Choose From Shredded Chicken l Shredded Beef l
		Sweet Pork l Carnitas l Includes Sour Cream l
		Guacamole`,
		},
	],
};

export default appetizers;
