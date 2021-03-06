const Ensaladas = {
	title: 'Ensaladas',
	description:
		'Dressings: Avocado Ranch l Balsamic l Blue Cheese l Ranch l Spicy Cilantro l Thousand Island',
	content: [
		{
			title: 'Fajita Taco Salad',
			description: (
				<>
					Choice Of Carne Asada or Charbroiled Chicken l Grilled
					Fajita Veggies l Lettuce l Pico l Guacamole l Mixed Cheese
					<br />
					<small>**add Shrimp $3.49</small>
				</>
			),
			price: 12.99,
		},
		{
			title: 'Iguana Taco Salad',
			description: (
				<>
					<p>
						Choose From Charbroiled Chicken l Ground Beef l Sweet
						Pork l Shredded Beef l Carnitas
					</p>
					<p>
						<strong>
							Includes Deep l Fried Tortilla l Rice l Beans l
							Romaine Lettuce l Olives l Tomatoes l Guacamole l
							Sour Cream l Cheese
						</strong>
					</p>
					<p className="🔥text-tertiary">
						<strong>Small $10.49</strong> |{' '}
						<strong>Large $12.49</strong>
					</p>
				</>
			),
		},
		{
			title: 'Southwestern Salad',
			description: (
				<>
					Charbroiled Chicken l Pico l Corn l Cheese l Black Beans l
					Guacamole l Sour Cream l Tortilla Strips
				</>
			),
			price: 11.99,
		},
		{
			title: 'Mexican Salad',
			description: (
				<>
					Choose From Charbroiled Chicken l Ground Beef l Sweet Pork l
					Shredded Beef l Carnitas
					<br />
					<small>
						Includes Avocado l Tortilla Strips l Pico l Peppers l
						Cotija Cheese
					</small>
				</>
			),
			price: 11.99,
		},
	],
};

export default Ensaladas;
